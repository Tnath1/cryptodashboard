import { Component, OnInit } from '@angular/core';

// Define the interface for currency information
interface CurrencyInfo {
  label: string;
  amount: number;
  formatted: string;
  coin: string;
  coinAmount: number;
}

@Component({
  selector: 'app-currency-bal',
  standalone: true,
  templateUrl: './currency-bal.component.html',
  styleUrls: ['./currency-bal.component.scss'], // Ensure the path is correct
})
export class CurrencyBalComponent implements OnInit {
  // Define the currencyData array to hold the currency information
  currencyData: CurrencyInfo[] = [];  

  // Define individual properties if needed
  totalBalance: CurrencyInfo | undefined;
  crypto: CurrencyInfo | undefined;
  fiat: CurrencyInfo | undefined;
  usdCoin: CurrencyInfo | undefined;

  // Initialize the component
  ngOnInit(): void {
    // Initialize the currency data
    this.currencyData = this.initializeCurrencyData();

    // Assign each property based on the array elements
    this.totalBalance = this.currencyData[0];
    this.crypto = this.currencyData[1];
    this.fiat = this.currencyData[2];
    this.usdCoin = this.currencyData[3];
  }

  // Method to initialize currency data
  private initializeCurrencyData(): CurrencyInfo[] {
    const fiatAmount = 100000.72;
    const cryptoAmount = 76676.72;

    // Calculate the total amount
    const totalAmount = fiatAmount + cryptoAmount;

    // Return an array of currency data objects
    return [
      {
        label: 'Total Balance',
        amount: totalAmount,
        formatted: this.formatCurrency(totalAmount, 'USD'),
        coin: 'Bitcoin',
        coinAmount: 50156.01,
      },
      {
        label: 'Crypto',
        amount: cryptoAmount,
        formatted: this.formatCurrency(cryptoAmount, 'USD'),
        coin: 'Ethereum',
        coinAmount: 38903.45,
      },
      {
        label: 'Fiat',
        amount: fiatAmount,
        formatted: this.formatCurrency(fiatAmount, 'USD'),
        coin: 'Binance Coin',
        coinAmount: 26101.01,
      },
      {
        label: 'USD Coin',
        amount: cryptoAmount,
        formatted: this.formatCurrency(cryptoAmount, 'USD'),
        coin: 'USD Coin',
        coinAmount: 14247.60,
      }
    ];
  }

  // Method to format currency amounts
  private formatCurrency(amount: number, currencyCode: string): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  }
}
