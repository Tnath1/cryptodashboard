import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
  isDarkTheme: boolean = false;

  isThumbOnRight: boolean = false;

  toggleThumbPosition() {
    this.isThumbOnRight = !this.isThumbOnRight;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
