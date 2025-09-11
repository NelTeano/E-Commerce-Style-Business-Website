import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/Product/product';
import { Category } from '../../interface/product.interface';

// COMPONENTS
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-create-order',
  imports: [IconFieldModule, InputIconModule, CommonModule, DividerModule],
  templateUrl: './create-order.html',
  styleUrl: './create-order.scss'
})

export class CreateOrder implements OnInit {
  variants: string[] = [];
  subVariants: string[] = [];
  selectedVariant: string | null = null;
  selectedSubVariant: string | null = null;
  selectedCategory: string | null = null;
  categoriesWithItems: Category[] = [];
  selectedCategoryItems: any[] = [];

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.productService.getVariants().subscribe(data => {
      this.variants = data;
    });
  }

  onVariantSelect(variant: string): void {
    this.selectedVariant = variant;
    this.productService.getSubVariants(variant).subscribe(data => {
      this.subVariants = data;
    });
    this.selectedSubVariant = null;
    this.categoriesWithItems = [];
    this.selectedCategory = null;
    this.selectedCategoryItems = [];
  }

  onSubVariantSelect(subVariant: string): void {
    this.selectedSubVariant = subVariant;
    if (this.selectedVariant && this.selectedSubVariant) {
      this.productService.getCategoriesWithItems(this.selectedVariant, this.selectedSubVariant)
        .subscribe(data => {
          this.categoriesWithItems = data;
        });
    }
    this.selectedCategory = null;
    this.selectedCategoryItems = [];
  }

  onCategorySelect(categoryName: string): void {
    this.selectedCategory = categoryName;
    // Find the category in the already-fetched categoriesWithItems
    const found = this.categoriesWithItems.find(cat => cat.name === categoryName);
    this.selectedCategoryItems = found ? found.items : [];
    console.log(this.selectedCategoryItems)
  }

  onBackToVariants(): void {
    this.selectedVariant = null;
    this.subVariants = [];
    this.selectedSubVariant = null;
    this.categoriesWithItems = [];
    this.selectedCategory = null;
    this.selectedCategoryItems = [];
  }
}
