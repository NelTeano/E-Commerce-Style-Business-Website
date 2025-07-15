import { Component, Input } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ButtonModule, TooltipModule],
  template: `
    <div class="product-card">
      <div class="product-image-container">
        <img class="product-image" [src]="product.image" alt="{{ product.image }}" />
      </div>
      <section>
        <h2>{{ product.price }}</h2>
        <i 
          class="pi pi-info-circle"
          style="font-size: 2rem; cursor: pointer;" 
          [pTooltip]="product.name"
          showDelay="300" 
          hideDelay="300" 
          label="Save"
          tooltipPosition="top"
        >
        </i>
      </section> 
      <section>
        <h2>{{ product.name }}</h2>
        <button class="product-btn">Add</button>
      </section>
    </div>
  `,
  styleUrl: './product-card.scss',
  standalone: true
})

export class ProductCard {
  @Input() product!: Product;
}

