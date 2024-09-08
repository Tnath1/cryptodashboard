import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ToggleSidebarService } from '../app/shared/toggle-sidebar.service';
import { AsidenavComponent } from './asidenav/asidenav.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, AsidenavComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cryptodashboard';

  isOpen = false;

constructor(
  private toggleSidebarService: ToggleSidebarService,
  private renderer: Renderer2
) {}

ngOnInit() {
  this.toggleSidebarService.toggleSidebar$.subscribe((isOpen) => {
    this.isOpen = isOpen;

    const sidebar = document.querySelector('div.sidebar'); // Select the sidebar

    if (this.isOpen) {
      this.renderer.addClass(sidebar, 'open'); // Add 'open' class
    } else {
      this.renderer.removeClass(sidebar, 'open'); // Remove 'open' class
    }
  });
}

}
