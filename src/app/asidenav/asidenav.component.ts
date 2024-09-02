import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-asidenav',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './asidenav.component.html',
  styleUrl: './asidenav.component.scss'
})
export class AsidenavComponent {

}
