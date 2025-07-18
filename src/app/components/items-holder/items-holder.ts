import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-holder.html',
  styleUrl: './items-holder.scss'
})
export class ItemsHolder {
  @Input() product!: Product;
  @Output() removeProduct = new EventEmitter<number>();

  increaseQuantity(): void {
    if (this.product && typeof this.product.quantity === 'number') {
      this.product.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.product && typeof this.product.quantity === 'number') {
      if (this.product.quantity > 1) {
        this.product.quantity--;
      } else {
        this.product.quantity = 0;
        this.removeProduct.emit(this.product.id);
      }
    }
  }

  removeProductFromCart(): void {
    this.removeProduct.emit(this.product.id);
  }
}
