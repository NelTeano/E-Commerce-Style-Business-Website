import { Component } from '@angular/core';
import { Product } from '../interface/product.interface';
import { CommonModule } from '@angular/common';
import { ItemsHolder } from '../components/items-holder/items-holder';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, ItemsHolder],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {

  MockProducts: Product[] = [
    {
      id: 1,
      name: 'Chocolate Cake',
      image: 'assets/images/Product1.png',
      price: 15.99,
      quantity: 1
    },
    {
      id: 2,
      name: 'Vanilla Cupcake',
      image: 'assets/images/Product2.png',
      price: 3.99,
      quantity: 1
    },
    {
      id: 3,
      name: 'Red Velvet Cake',
      image: 'assets/images/Product3.png',
      price: 18.99,
      quantity: 1
    },
    {
      id: 4,
      name: 'Lemon Tart',
      image: 'assets/images/Product4.png',
      price: 5.99,
      quantity: 1
    },
    {
      id: 5,
      name: 'Lemon Tart',
      image: 'assets/images/Product5.png',
      price: 5.99,
      quantity: 1
    },
    {
      id: 6,
      name: 'Lemon Tart',
      image: 'assets/images/Product6.png',
      price: 5.99,
      quantity: 1
    },
  ];  

  get totalPrice(): number {
    return this.MockProducts.reduce((sum, product) => sum + (product.price ?? 0) * (product.quantity ?? 0), 0);
  }


  removeFromCart(productId: number): void {
    this.MockProducts = this.MockProducts.filter(p => p.id !== productId);
  }
}
