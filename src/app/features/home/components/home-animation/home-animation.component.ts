import { afterNextRender, Component, ElementRef, inject, Injector, OnDestroy, output, viewChildren } from '@angular/core';
import { WINDOW } from '@setupteam/docs';
import { Animation, AnimationCreatorService, AnimationLayerDirective } from '../../animation';
import { ANIMATION_TIMESTEP, generateHomeAnimationDefinition } from './animation-definition';
import { AnimationScrollHandler } from '../../animation/plugins';

@Component({
  selector: 'stdev-home-animation',
  imports: [AnimationLayerDirective],
  templateUrl: './home-animation.component.html',
  styleUrl: './home-animation.component.scss',
  providers: [AnimationCreatorService],
})
export class HomeAnimationComponent implements OnDestroy{
  private readonly win = inject(WINDOW);
  private readonly animationCreatorS = inject(AnimationCreatorService);
  private readonly injector = inject(Injector);
  private readonly elementRef = inject(ElementRef);
  private animation?: Animation;

  readonly animationLayers = viewChildren(AnimationLayerDirective);

  readonly ready = output<boolean>();

  constructor(){
    this.initAnimation();
  }

  initAnimation(){
    afterNextRender({
      read: () => {
        this.animation = this.animationCreatorS
        .createAnimation(this.animationLayers(), {timestep: ANIMATION_TIMESTEP})
        .define(generateHomeAnimationDefinition())
        .addPlugin(new AnimationScrollHandler(this.elementRef, this.injector));
      },
    });
  }

  ngOnDestroy() {
    this.animation?.dispose();
  }

  play(){
    this.animation?.play();
  }
}
