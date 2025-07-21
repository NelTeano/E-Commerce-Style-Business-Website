import { Component, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/product.interface';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-holder',
  imports: [
    DialogModule,
    CommonModule,
    Button,
    RouterModule
    ],
  templateUrl: './product-holder.html',
  styleUrl: './product-holder.scss',
  standalone: true
})
export class ProductHolder {

  constructor(private route: ActivatedRoute) {}


  @Input() ProductDetails!: Product;
  @Input() CategoryOnly: boolean = false;
  @Output() encodeURIComponent = new EventEmitter<string>();
  visible: boolean = false;

  encodeSubVariant(subVariant: string): string {
    const encoded = encodeURIComponent(subVariant);
    this.encodeURIComponent.emit(encoded);
    return encoded;
  }

  showDialog(): void {
    this.visible = true;
  }
}
