import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
  // isDarkTheme: boolean = true;

  // isThumbOnRight: boolean = true;

  // toggleThumbPosition() {
  //   this.isThumbOnRight = !this.isThumbOnRight;
  // }

  // toggleTheme() {
  //   this.isDarkTheme = !this.isDarkTheme;
  // }

  isDarkTheme: boolean = true;
  isThumbOnRight: boolean = true;

  constructor(private renderer: Renderer2) {}

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


}
