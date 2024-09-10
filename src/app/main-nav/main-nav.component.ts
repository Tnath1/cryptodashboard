import { Component, Renderer2 } from '@angular/core';
import { SidenavService } from '../shared/toggle-sidebar.service';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
  isDarkTheme: boolean = true;
  isThumbOnRight: boolean = true;
  isMenuOpen = false;

  constructor(
    private renderer: Renderer2,
    private sidenavService: SidenavService
  ) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.isThumbOnRight = !this.isThumbOnRight;

    if (this.isDarkTheme) {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
    }
  }

  onHamburgerClick() {
    this.sidenavService.toggleSidenav();
    // console.log('Hamburger clicked, toggling sidenav');
  }
}
