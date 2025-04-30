import { Injector, Renderer2, RendererFactory2, signal } from "@angular/core";
import { AnimationLayerDirective } from "./animation-layer.directive";
import { AnimationConfig, AnimationDefinition, AnimationRule, DynamicAnimationRule, ParsedStyles, Styles } from "./types";
import { CssPropertyValue, cssValueParser, stringifyParsedValue } from "./parser";
import { AnimationPlugin } from "./plugins";
import { calculateNextCssValue } from "./calculations";

const DEFAULT_CONFIG: AnimationConfig = {
    timestep: 100,
};

const MS = 1000;

const SEL_SEPARATOR = '>>';

const getStartTime = (r: AnimationRule<Styles | ParsedStyles>): number =>
    r.timeframe ? r.timeframe[0] : r.at;

const getEndTime = (r: AnimationRule<Styles | ParsedStyles>): number =>
    r.timeframe ? r.timeframe[1] : r.at;

const getEndStyles = (r: AnimationRule<ParsedStyles>): ParsedStyles =>
    r.timeframe ? r.to : r.styles;


export class Animation{
    private renderer: Renderer2;

    private rules: AnimationRule<ParsedStyles>[] = [];
    private config: AnimationConfig;
    private currentTime: number = 0;
    private allObjects = new Map<string, Element | Element[]>();
    private activeStyles = new Map<string, ParsedStyles>();
    private animationFrameId: number | null = null;
    private completed: boolean = false;
    private plugins: AnimationPlugin[] = [];
    private _duration: number = 0;
    private _isPlaying = signal<boolean>(false);
    private _progress = signal<number>(0);

    isPlaying = this._isPlaying.asReadonly();
    
    constructor(
        layers: readonly AnimationLayerDirective[],
        injector: Injector,
        config?: Partial<AnimationConfig>,
    ){
        this.renderer = injector.get(RendererFactory2).createRenderer(null,null);
        this.config = {...DEFAULT_CONFIG, ...(config || {})};
        this.allObjects = new Map(layers.map(f => [f.id(), f.elementRef.nativeElement]));
        this.allObjects.set("body", window.document.body);
    }

    get duration() {
        return this._duration;
    }

    get timestep(){
        return this.config.timestep;
    }

    define(definition: AnimationDefinition) {
        this.reset();
        this.extractObjectsAndValidateRules(definition);

        this.rules = definition
        .sort((a, b) => getStartTime(a) - getStartTime(b))
        .map(rule => {
          if(rule.timeframe){
            const from: ParsedStyles = {};
            const to: ParsedStyles = {};

            for(const [prop, val] of Object.entries(rule.from)){
                from[prop] = cssValueParser(val);
            }

            for(const [prop, val] of Object.entries(rule.to)){
                to[prop] = cssValueParser(val);
            }

            const msTimeframe = rule.timeframe.map(t => t * MS) as [number, number]
            
            return {...rule, from, to, timeframe: msTimeframe}
          } else {
            const styles: ParsedStyles = {};

            for (const [prop, val] of Object.entries(rule.styles)) {
                styles[prop] = cssValueParser(val);
            }
            

            const msAt = rule.at * MS;

            return {...rule, styles, at: msAt}
          }
        });

        this._duration = Math.max(...this.rules.map(r => getEndTime(r)));
        
        return this;
    }

    play(){
        if(this.animationFrameId !== null){
            return;
        }

        if(!this.rules.length){
            return;
        }

        if(this.completed){
            this.reset();
            this.completed = false;
        }

        this._isPlaying.set(true);
        this.animate(Date.now(), 0);
    }

    pause(){
        if(this.animationFrameId !== null){
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
            this._isPlaying.set(false);
        }
    }

    reset(){
        this.pause();
        this.currentTime = 0;
        this._progress.set(0);

        for(const [selector, styles] of this.activeStyles){
            for(const style of Object.keys(styles)){
                this.removeStyle(selector, style);
            }

            this.activeStyles.delete(selector);
        }
    }

    seek(progress: number){
        this.pause();

        if (!this.rules.length) {
            console.warn("Animation: Can't  without a definition");
            return;
        }

        progress = Math.max(0, Math.min(progress, 1));
        const time = Math.round(progress * this._duration);
        
        this.updateFrame(time);
        this.completed = progress === 1;
    }

    dispose(){
        for(const plugin of this.plugins){
            plugin.destroy();
        }

        this.reset();
        this.rules = [];
        this._duration = 0;
        this.plugins = [];
    }

    addPlugin(plugin:AnimationPlugin){
        plugin.init(this);
        this.plugins.push(plugin);

        return this;
    }

    private animate(then:number, elapased:number){
        this.animationFrameId = requestAnimationFrame(() => this.animate(then, elapased));

        const now = Date.now();
        elapased = now - then;

        if(elapased >= this.config.timestep){
            then = now - (elapased % this.config.timestep);

            const time = this.currentTime + elapased;

            if(time <= this._duration){
                this.updateFrame(time);
            } else {
                this.pause();
                this.completed = true;

                if(this.duration > this.currentTime){
                    requestAnimationFrame(() => this.updateFrame(this.duration));
                }
            }
        }
    }

    private updateFrame(time: number){
        const completedRules = this.rules.filter(r => time >= getEndTime(r));
        const inProgressDynamicRules = this.rules.filter(r => {
          const start = getStartTime(r);
          const end = getEndTime(r);

          return start < end && start <= time && time <= end;
        }) as DynamicAnimationRule<ParsedStyles>[];

        const stylesState = new Map<string, ParsedStyles>();

        for (const rule of completedRules) {
            let objectStyles = stylesState.get(rule.selector) || {};
            objectStyles = {...objectStyles, ...getEndStyles(rule)};
            stylesState.set(rule.selector, objectStyles);
        }

        const deltaTime = time - this.currentTime;

        for (const rule of inProgressDynamicRules) {
            let timespan: number;
            let targetStyles: ParsedStyles;
            let sourceStyles: ParsedStyles;
            let relativeDeltaT: number;
      
            if (deltaTime > 0) {
                const relativeTime = rule.timeframe[0];
                relativeDeltaT = time - relativeTime;
                timespan = getEndTime(rule) - relativeTime;
                targetStyles = rule.to;
                sourceStyles = rule.from;
            } else {
                const relativeTime = rule.timeframe[1];
                relativeDeltaT = time - relativeTime;
                timespan = relativeTime - getStartTime(rule);
                targetStyles = rule.from;
                sourceStyles = rule.to;
            }

            
            if(rule.classControl)
                this.manageClasses(rule, deltaTime < 0);
      
            const changeRate = Math.abs(relativeDeltaT / timespan);
            const styles = stylesState.get(rule.selector) || {};
      
            for (const [prop, target] of Object.entries(targetStyles)) {
              const source = sourceStyles[prop];
              styles[prop] = calculateNextCssValue(source, target, changeRate);
            }
      
            stylesState.set(rule.selector, styles);
          }
      
          for (const [selector, styles] of this.activeStyles) {
            const newStyles = stylesState.get(selector);
            
            for (const prop of Object.keys(styles)) {
              if (!newStyles || !newStyles[prop]) {
                this.removeStyle(selector, prop);
              }
            }
          }

          for (const [selector, styles] of stylesState) {
            for (const [prop, value] of Object.entries(styles)) {
              this.setStyle(selector, prop, value);
            }
          }
          //current second 
          //console.log(parseInt(time / 1550 + ""));
          
          this.currentTime = time;
          this._progress.set(time / this.duration);
    }

    manageClasses(rule: AnimationRule<ParsedStyles>, reverse:boolean) {
        const element = this.allObjects.get(rule.selector) as Element;
        
        if(rule.classControl?.remove){
            for(const className of rule.classControl.remove){
                if(reverse)
                    this.renderer.addClass(element, className)
                else
                    this.renderer.removeClass(element, className)
            }
        }

        if(rule.classControl?.add){
            for(const className of rule.classControl.add){
                if(reverse)
                    this.renderer.removeClass(element, className)
                else
                    this.renderer.addClass(element, className)
            }
        }
    }

    private validateRules(rule: AnimationRule<Styles>){
        if(!rule.timeframe)
            return;

        const duration = rule.timeframe[1] - rule.timeframe[0];

        if(duration < 0){
            throw new Error(
                `Animation: Incorrect time frame for selector '${rule.selector}' is zero,. Start time is greater than end time.`
            );
        }else if(duration === 0){
            throw new Error(
                `Animation: Duration for selector '${rule.selector}' is zero,. Use 'at' time selector instead.`
            );
        }

        const fromStyles = Object.keys(rule.from);
        const toStyles = Object.keys(rule.to);

        if(fromStyles.length !== toStyles.length){
            throw new Error(
                `Animation: There is a mismatch between the number of "from" and "to" styles for selector '${rule.selector}'`,
            );
        }

        for(const prop of toStyles){
            if(!rule.from[prop]){
                throw new Error(
                    `Animation: "from" style '${prop}' is missing for selector '${rule.selector}'`,
                );
            }
        }
    }

    private extractObjects(rule: AnimationRule<Styles>){
        let [layerId, objectSelector] = rule.selector.split(SEL_SEPARATOR);
        layerId = layerId.trim();
        objectSelector = (objectSelector ?? '').trim();

        const layer = this.allObjects.get(layerId) as Element;

        if(!layer){
            throw new Error(`Animation: Missing layer ID: ${layerId}`);
        }

        if(objectSelector && !this.allObjects.has(rule.selector)){
            const objects = layer.getElementsByClassName(objectSelector.replaceAll('.', ' ').trim());

            if(!objects.length){
                if (!objects.length) {
                    throw new Error(`Animation: Missing layer object(s): ${rule.selector}`);
                }
            }

            if(!this.allObjects.has(rule.selector)){
                this.allObjects.set(rule.selector, objects.length === 1 ? objects[0]: Array.from(objects));
            }
        }
    }

    private extractObjectsAndValidateRules(definition: AnimationDefinition){
        for(const rule of definition){
            this.validateRules(rule);
            this.extractObjects(rule);
        }
    }

    private setStyle(selector: string, property: string, value: CssPropertyValue) {
        const elements = this.allObjects.get(selector)!;
    
        const valueString = stringifyParsedValue(value);
    
        if (elements instanceof Element) {
          this.renderer.setStyle(elements, property, valueString);
        } else {
          for (const e of elements) {
            this.renderer.setStyle(e, property, valueString);
          }
        }
    
        const activeStyles = this.activeStyles.get(selector) || {};
        activeStyles[property] = value;
        this.activeStyles.set(selector, activeStyles);
    }

    private removeStyle(selector: string, property: string) {
        const elements = this.allObjects.get(selector)!;

        if(elements instanceof Element){
            this.renderer.removeStyle(elements, property);
        } else {
            for(const e of elements){
                this.renderer.removeStyle(e, property);
            }
        }
    }
}