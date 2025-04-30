import { Component, signal } from '@angular/core';
import { HomeAnimationComponent } from './components/home-animation/home-animation.component';

@Component({
  selector: 'stdev-home',
  imports: [HomeAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  animationReady = signal<boolean>(false);

  onAnimationReady(ready:boolean){
    this.animationReady.set(ready);
  }
}
