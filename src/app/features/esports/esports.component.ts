import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'stdev-esports',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './esports.component.html',
  styleUrl: './esports.component.scss'
})
export class ESportsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    window.document.body.classList.remove("bg-shiny")
  }
}
