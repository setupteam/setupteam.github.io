import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[stdevAnimationLayer]'
})
export class AnimationLayerDirective {
  readonly elementRef = inject(ElementRef);
  id = input.required<string>({alias: 'layerId'});
}
