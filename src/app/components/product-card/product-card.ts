import { Component, Input } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <h2>{{ product.name }}</h2>
      <h2>{{ product.price }}</h2>
      <img [src]="product.image" alt="{{ product.image }}" />
    </div>
  `,
  styleUrl: './product-card.scss',
  standalone: true
})

export class ProductCard {
  @Input() product!: Product;
}

