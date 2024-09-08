import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToggleSidebarService } from '../shared/toggle-sidebar.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-asidenav',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './asidenav.component.html',
  styleUrl: './asidenav.component.scss'
})
export class AsidenavComponent implements OnInit {

//   isOpen = false;

//   constructor(
//     private toggleSidebarService: ToggleSidebarService,
//     private renderer: Renderer2
//   ) {}

//   ngOnInit() {
//     this.toggleSidebarService.toggleSidebar$.subscribe((isOpen) => {
//       this.isOpen = isOpen;
//       if (this.isOpen) {
//         this.renderer.addClass(document.body, 'pen');
//       } else {
//         this.renderer.removeClass(document.body, 'pen');
//       }
//     });

// }







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
      this.renderer.addClass(sidebar, 'open');  // Add 'open' class to sidebar
      this.renderer.addClass(document.body, 'pen');  // Add 'pen' class to body if needed
    } else {
      this.renderer.removeClass(sidebar, 'open');  // Remove 'open' class from sidebar
      this.renderer.removeClass(document.body, 'pen');  // Remove 'pen' class from body
    }
  });
}

}
