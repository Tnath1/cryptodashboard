import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { SidenavService } from '../shared/toggle-sidebar.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-asidenav',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './asidenav.component.html',
  styleUrl: './asidenav.component.scss',
})
export class AsidenavComponent implements OnInit {
  isOpen: boolean = true;

  constructor(
    private sidenavService: SidenavService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.sidenavService.sidenavOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
      // console.log('Sidenav state changed:', isOpen);

      if (this.isOpen) {
        // console.log('yes, it is open');
        this.renderer.addClass(this.el.nativeElement, 'open');
      } else {
        // console.log('yes, it is closed');
        this.renderer.removeClass(this.el.nativeElement, 'open');
      }
    });
  }
}
