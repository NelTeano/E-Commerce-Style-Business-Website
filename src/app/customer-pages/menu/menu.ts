import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, SubVariant, Variant, Category } from '../../interface/product.interface';
import { ProductHolder } from '../../components/product-holder/product-holder';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

// COMPONENTS
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

// MOCK DATAS
import { 
  Mockproducts,
  menuVariants,
  MockProductsData
} from '../../data/MockData';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    RouterModule,
    ProductHolder,
    DividerModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {
  constructor(private route: ActivatedRoute) {}

  menuVariants = menuVariants;
  Mockproducts: Product[] = Mockproducts;

  VariantSelections: {
    drinks: { variant: string; subVariants: { name: string; image: string }[] }[],
    foods: { variant: string; subVariants: { name: string; image: string }[] }[]
  } = { drinks: [], foods: [] };

  selectedSubVariant: string | null = null;

  categoriesWithItems: {
    variant: string;
    subVariants: {
      subVariant: string;
      categories: Category[];
    }[];
  }[] = [];

  filteredCategories: {
    variant: string;
    subVariant: string;
    categories: Category[];
  }[] = [];

  encodeSubVariant(subVariant: string): string {
    return encodeURIComponent(subVariant);
  }

  ngOnInit(): void {
    this.prepareData();
    this.route.paramMap.subscribe(params => {
      this.updateFilteredCategories(params);
    });
  }

  private prepareData() {
    const getSubVariantWithImage = (data: Variant) => ({
      variant: data.variant,
      subVariants: data.subVariants.map((sub: SubVariant) => ({
        name: sub.name,
        image: sub.categories[0]?.items[0]?.image || ''
      }))
    });

    const getCategoriesWithItems = (data: Variant) => ({
      variant: data.variant,
      subVariants: data.subVariants.map((sub: SubVariant) => ({
        subVariant: sub.name,
        categories: sub.categories.filter(category => category.items && category.items.length > 0)
      }))
    });

    const subVariantsWithImage = MockProductsData.map(getSubVariantWithImage);
    this.categoriesWithItems = MockProductsData.map(getCategoriesWithItems);

    this.VariantSelections = {
      drinks: subVariantsWithImage.filter(variant => variant.variant === "Drinks"),
      foods: subVariantsWithImage.filter(variant => variant.variant === "Foods")
    };
  }

  private updateFilteredCategories(params: ParamMap) {
    const encodedVariant = params.get('subVariant');
    if (!encodedVariant) return;

    this.selectedSubVariant = decodeURIComponent(encodedVariant);

    this.filteredCategories = this.categoriesWithItems
      .map((variant) => {
        const matched = variant.subVariants.find(
          (sub) => sub.subVariant === this.selectedSubVariant
        );

        return matched
          ? {
              variant: variant.variant,
              subVariant: matched.subVariant,
              categories: matched.categories
            }
          : null;
      })
      .filter(Boolean) as {
        variant: string;
        subVariant: string;
        categories: Category[];
      }[];

    // Logging for debug
    console.group('%c[Route Update]', 'color: green; font-weight: bold');
    console.log("Updated SubVariant:", this.selectedSubVariant);
    console.log("Filtered Categories:", this.filteredCategories);
    console.groupEnd();
  }
}
