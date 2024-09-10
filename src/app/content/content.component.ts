import { Component, ElementRef, Renderer2 } from '@angular/core';
// import { NavComponent } from '../nav/nav.component';
import { SidenavService } from '../shared/toggle-sidebar.service';

import { MainNavComponent } from '../main-nav/main-nav.component';
import { CurrencyBalComponent } from '../currency-bal/currency-bal.component';
import { ExchPriceComponent } from '../exch-price/exch-price.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MainNavComponent, CurrencyBalComponent, ExchPriceComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  constructor(
    private sidenavService: SidenavService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    // Subscribe to sidenav state changes
    this.sidenavService.sidenavOpen$.subscribe((isOpen) => {
      const mainContent = this.el.nativeElement.querySelector('.main-content');

      if (isOpen) {
        // console.log('adding blur effect');
        this.renderer.addClass(mainContent, 'blur');
      } else {
        this.renderer.removeClass(mainContent, 'blur');
      }
    });
  }
}
