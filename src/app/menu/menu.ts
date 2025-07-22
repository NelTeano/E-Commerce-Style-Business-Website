import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Product } from '../interface/product.interface';
import { ProductHolder } from '../components/product-holder/product-holder';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';


// MOCK DATAS
import { Mockproducts, menuVariants } from '../data/MockData';

@Component({
  selector: 'app-menu',
  imports: [InputTextModule, CommonModule, ProductHolder, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})

export class Menu {
  constructor(private route: ActivatedRoute,) {}

  menuVariants: { variant: string, subVariants: Array<string>}[] = menuVariants;
  Mockproducts: Product[] = Mockproducts;
  selectedVariant: string | null = null; 
  selectedSubVariant: string | null = null;
  filteredProductVariants: Product[] = [];
  subVariantsWithImagesGrouped: { 
    variant: string; 
    subVariants: { name: string; image: string }[] 
  }[] = [];
  @ViewChild('searchSection') private myScrollContainer!: ElementRef;

  scrollToSearch() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  productChoices = (subVariant: string): Product[] => {
    return this.Mockproducts.filter(product => product.subVariant === subVariant);
  }

  
  encodeSubVariant(subVariant: string): string {
    return encodeURIComponent(subVariant);
  }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const encodedVariant = params.get('subVariant');
      if (encodedVariant) {
        this.selectedSubVariant = decodeURIComponent(encodedVariant);
        this.filteredProductVariants = this.productChoices(this.selectedSubVariant);
        
        if (this.filteredProductVariants && this.filteredProductVariants.length > 0) {
          this.selectedVariant = this.filteredProductVariants[0]?.variant ?? null;
        }

        console.group('%c[SubVariant Debug]', 'color: blue; font-weight: bold');
        console.log('Selected subvariant from route:', this.selectedSubVariant);
        console.log('Products for selected subvariant:', this.filteredProductVariants);
        console.groupEnd();


        setTimeout(() => {
          this.myScrollContainer?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }

      
    });

    // Build grouped subVariants with image by their variant
    const variantMap = new Map<string, Map<string, string>>();

    this.Mockproducts.forEach(product => {
      if (!product.subVariant || !product.image) return;

      if (!variantMap.has(product.variant || '')) {
        variantMap.set(product.variant || '', new Map<string, string>());
      }

      const subMap = variantMap.get(product.variant  || '')!;

      // Add only if the subVariant hasn't been added yet
      if (!subMap.has(product.subVariant)) {
        subMap.set(product.subVariant, product.image);
      }
    });

    this.subVariantsWithImagesGrouped = Array.from(variantMap.entries()).map(([variant, subMap]) => ({
      variant,
      subVariants: Array.from(subMap.entries()).map(([name, image]) => ({ name, image }))
    }));

    console.group('%c[Grouped SubVariants]', 'color: green; font-weight: bold');
    console.log(this.subVariantsWithImagesGrouped);
    console.groupEnd();
  }




}
