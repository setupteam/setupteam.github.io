import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/layout/navigation/navigation.component';

@Component({
  selector: 'stdev-root',
  imports: [
    NavigationComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Setup Team';
}
