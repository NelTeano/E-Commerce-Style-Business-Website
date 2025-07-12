import { Component } from '@angular/core';
import { ProductCard } from '../components/product-card/product-card';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product.interface'; // Assuming you have a Product model defined

@Component({
  selector: 'app-home',
  imports: [ProductCard, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {


  productsData: Product[] = [
    {
      id: 1,
      name: 'Chocolate Cake',
      image: 'assets/images/Product1.png',
      price: 15.99
    },
    {
      id: 2,
      name: 'Vanilla Cupcake',
      image: 'assets/images/Product2.png',
      price: 3.99
    },
    {
      id: 3,
      name: 'Red Velvet Cake',
      image: 'assets/images/Product3.png',
      price: 18.99
    }
    ,
    {
      id: 4,
      name: 'Lemon Tart',
      image: 'assets/images/Product4.png',
      price: 5.99
    },
  ];
}
