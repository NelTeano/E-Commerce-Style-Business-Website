import { Injectable } from '@angular/core';
import { MockProductsData } from '../../data/MockData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {
  // Simulate fetch: Get all variants (Drinks, Foods, etc)
  getVariants(): Observable<string[]> {
    return of(MockProductsData.map(v => v.variant));
  }

  // Simulate fetch: Get all subVariants for a given variant
  getSubVariants(variant: string): Observable<string[]> {
    const found = MockProductsData.find(v => v.variant === variant);
    return of(found ? found.subVariants.map(sv => sv.name) : []);
  }

  // Simulate fetch: Get all categories for a given variant and subVariant
  getCategories(variant: string, subVariant: string): Observable<string[]> {
    const found = MockProductsData.find(v => v.variant === variant);
    const sub = found?.subVariants.find(sv => sv.name === subVariant);
    return of(sub ? sub.categories.map(cat => cat.name) : []);
  }

  // Simulate fetch: Get all items for a given variant, subVariant, and category
  getItems(variant: string, subVariant: string, category: string): Observable<any[]> {
    const found = MockProductsData.find(v => v.variant === variant);
    const sub = found?.subVariants.find(sv => sv.name === subVariant);
    const cat = sub?.categories.find(c => c.name === category);
    return of(cat ? cat.items : []);
  }

  // Simulate fetch: Get all categories with their items for a given variant and subVariant
  getCategoriesWithItems(variant: string, subVariant: string): Observable<{ name: string, items: any[] }[]> {
    const found = MockProductsData.find(v => v.variant === variant);
    const sub = found?.subVariants.find(sv => sv.name === subVariant);
    return of(sub ? sub.categories.map(cat => ({ name: cat.name, items: cat.items })) : []);
  }
  
}
