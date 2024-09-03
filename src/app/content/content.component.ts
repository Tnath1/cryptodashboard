import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { CurrencyBalComponent } from '../currency-bal/currency-bal.component';
import { ExchPriceComponent } from '../exch-price/exch-price.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MainNavComponent, CurrencyBalComponent,ExchPriceComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
