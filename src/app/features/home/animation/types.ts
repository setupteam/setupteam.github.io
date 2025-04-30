import { CssPropertyValue } from "./parser";

export type AnimationConfig = { timestep: number };
export type Styles = {[key: string]: string};
export type ParsedStyles = {[key: string]: CssPropertyValue};

interface AnimationRuleBase {
  selector: string;
  classControl?: {add?:string[], remove?:string[]}
}

export interface DynamicAnimationRule<T extends Styles | ParsedStyles> extends AnimationRuleBase {
    at?: never;
    timeframe: [number, number];
    from: T;
    to: T;
  }

export interface StaticAnimationRule<T extends Styles | ParsedStyles> extends AnimationRuleBase {
    timeframe?: never;
    at: number;
    styles: T;
  }

export type AnimationRule<T extends Styles | ParsedStyles> =
    | DynamicAnimationRule<T> 
    | StaticAnimationRule<T>;

export type AnimationDefinition = AnimationRule<Styles>[];