import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-exch-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exch-price.component.html',
  styleUrl: './exch-price.component.scss',
})
export class ExchPriceComponent {
  // isDropdownOpen: boolean = false;

  // // toggleDropdown() {
  // //   this.isDropdownOpen = !this.isDropdownOpen;
  // // }
  // selectedOption: string | null = null;
  // options = ['Buy', 'Sell'];

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // selectOption(option: string) {
  //   this.selectedOption = option;
  //   this.isDropdownOpen = false;
  // }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   const dropdownElement = document.querySelector('.dropdown') as HTMLElement;
  //   if (dropdownElement && !dropdownElement.contains(target)) {
  //     this.isDropdownOpen = false;
  //   }
  // }

  isDropdownOpen: boolean = false;
  selectedOption: string | null = null;
  options = ['Buy', 'Sell'];
  isRotated: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isRotated = !this.isRotated; // Toggle rotation state
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.isRotated = false; // Reset rotation state on selection
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownElement = document.querySelector('.dropdown') as HTMLElement;
    if (dropdownElement && !dropdownElement.contains(target)) {
      this.isDropdownOpen = false;
      this.isRotated = false; // Reset rotation state if clicking outside
    }
  }
}
