import { inject, Injectable, Injector } from '@angular/core';
import { AnimationLayerDirective } from './animation-layer.directive';
import { Animation } from './animation';
import { AnimationConfig } from './types';

@Injectable({
  providedIn: 'root'
})
export class AnimationCreatorService {
  private readonly injector = inject(Injector);

  createAnimation(
    layers: readonly AnimationLayerDirective[],
    config?:Partial<AnimationConfig>,
  ): Animation{
    return new Animation(layers, this.injector, config)
  }
}
