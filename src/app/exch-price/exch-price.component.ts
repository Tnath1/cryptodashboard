import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-exch-price',
  standalone: true,
  imports: [CommonModule, CardSliderComponent, TableComponent],
  templateUrl: './exch-price.component.html',
  styleUrl: './exch-price.component.scss',
})
export class ExchPriceComponent {


  isDropdownOpen: boolean = false;
  selectedOption: string | null = null;
  options = ['Buy', 'Sell'];
  isRotated: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isRotated = !this.isRotated; 
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.isRotated = false; 
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownElement = document.querySelector('.dropdown') as HTMLElement;
    if (dropdownElement && !dropdownElement.contains(target)) {
      this.isDropdownOpen = false;
      this.isRotated = false; 
    }
  }
}
