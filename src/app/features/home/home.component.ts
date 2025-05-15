import { AfterViewInit, Component, signal } from '@angular/core';
import { HomeAnimationComponent } from './components/home-animation/home-animation.component';
import { HomeMembersComponent } from './components/home-members/home-members.component';

@Component({
  selector: 'stdev-home',
  imports: [
    HomeAnimationComponent, 
    HomeMembersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  animationReady = signal<boolean>(false);

  onAnimationReady(ready:boolean){
    this.animationReady.set(ready);
  }

  ngAfterViewInit(): void {
    window.document.body.classList.add("bg-shiny")
  }
}
