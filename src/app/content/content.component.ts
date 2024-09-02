import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MainNavComponent } from '../main-nav/main-nav.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MainNavComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
