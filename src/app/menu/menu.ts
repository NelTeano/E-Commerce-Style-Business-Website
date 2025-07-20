import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Product } from '../interface/product.interface';
import { ProductHolder } from '../components/product-holder/product-holder';

@Component({
  selector: 'app-menu',
  imports: [InputTextModule, CommonModule, ProductHolder],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  menuVariants = [
    { 
      variant: 'Drinks',
      subVariants: [
        'Featured Drinks',
        'Brewed Coffee',
        'Espresso',
        'Blended Beverage',
        'Teavana Tea',
        'Starbucks Refreshers',
        'Chocolate & More',
        'Starbucks Reserve®',
        'Coffee Traveler'
      ]
    },
    { 
      variant: 'Food',
      subVariants: [
        'Featured Food',
        'All-day Bakery',
        'Sandwiches & Pastas',
        'Oatmeal & Fruits',
        'Desserts',
        'Ready-to-Eat & More'
      ]
    }
  ];

  Mockproducts: Product[] = [
    {
      id: 1,
      name: 'Caffè Americano',
      image: 'assets/images/ProductDrinkSample.png',
      price: 3.50,
      variant: 'Drinks',
      subVariant: 'Brewed Coffee',
      quantity: 0
    },
    {
      id: 2,
      name: 'Cappuccino',
      image: 'assets/images/ProductDrinkSample.png',
      price: 4.00,
      variant: 'Drinks',
      subVariant: 'Espresso',
      quantity: 0
    },
    {
      id: 3,
      name: 'Chocolate Croissant',
      image: 'assets/images/ProductDrinkSample.png',
      price: 2.50,
      variant: 'Food',
      subVariant: 'All-day Bakery',
      quantity: 0
    },
    {
      id: 4,
      name: 'Spinach & Feta Wrap',
      image: 'assets/images/ProductDrinkSample.png',
      price: 5.00,
      variant: 'Food',
      subVariant: 'Sandwiches & Pastas',
      quantity: 0
    }
  ];
}
