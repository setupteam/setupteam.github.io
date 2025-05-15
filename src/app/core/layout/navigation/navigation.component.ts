import { Component, inject } from '@angular/core';
import { EventType, Router, RouterLink } from '@angular/router';
import { PagePrefix } from '../../enums/pages';

@Component({
  selector: 'div.stdev-nav',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss', './nav-item.scss']
})
export class NavigationComponent {
  private readonly router = inject(Router);
  readonly ESPORTS_ROUTE = PagePrefix.ESPORTS;

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if(e.type == EventType.NavigationSkipped 
        || (e.type == EventType.NavigationEnd && e.url == "/" && this.router.getCurrentNavigation()?.extractedUrl.fragment)){
          this.scrollToTop(1);
        }
    });
  }

  scrollToTop(duration:number) {
    const start = window.scrollY;
    const startTime = performance.now();

    const scrollStep = (currentTime:number)=> {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
}
