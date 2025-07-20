import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-holder',
  imports: [DialogModule, CommonModule, Button],
  templateUrl: './product-holder.html',
  styleUrl: './product-holder.scss',
  standalone: true
})
export class ProductHolder {


  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
