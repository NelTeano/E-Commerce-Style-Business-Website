import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Product } from '../interface/product.interface';
import { ProductHolder } from '../components/product-holder/product-holder';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [InputTextModule, CommonModule, ProductHolder, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  selectedSubVariant: string | null = null;
  filteredProductVariants: Product[] = [];
  subVariantsWithImagesGrouped: { 
    variant: string; 
    subVariants: { name: string; image: string }[] 
  }[] = [];
  constructor(private route: ActivatedRoute) {}

  menuVariants = [
    { 
      variant: 'Drinks',
      subVariants: [
        'Featured Drinks',
        'Brewed Coffee',
        'Espresso',
        'Blended Beverage',
        'Teavana Tea',
        'Starbucks Refreshers',
        'Chocolate & More',
        'Starbucks Reserve®',
        'Coffee Traveler'
      ]
    },
    { 
      variant: 'Food',
      subVariants: [
        'Featured Food',
        'All-day Bakery',
        'Sandwiches & Pastas',
        'Oatmeal & Fruits',
        'Desserts',
        'Ready-to-Eat & More'
      ]
    }
  ];

  Mockproducts: Product[] = [
    {
      id: 1,
      name: 'Caffè Americano',
      image: 'assets/images/ProductDrinkSample.png',
      price: 3.50,
      variant: 'Drinks',
      subVariant: 'Brewed Coffee',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 2,
      name: 'Cappuccino',
      image: 'assets/images/ProductDrinkSample.png',
      price: 4.00,
      variant: 'Drinks',
      subVariant: 'Espresso',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 3,
      name: 'Caramel Macchiato',
      image: 'assets/images/ProductDrinkSample.png',
      price: 4.75,
      variant: 'Drinks',
      subVariant: 'Espresso',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 4,
      name: 'Vanilla Sweet Cream Cold Brew',
      image: 'assets/images/ProductDrinkSample.png',
      price: 4.25,
      variant: 'Drinks',
      subVariant: 'Brewed Coffee',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 5,
      name: 'Strawberry Açaí Refresher',
      image: 'assets/images/ProductDrinkSample.png',
      price: 4.50,
      variant: 'Drinks',
      subVariant: 'Starbucks Refreshers',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 6,
      name: 'Teavana Shaken Iced Black Tea',
      image: 'assets/images/ProductDrinkSample.png',
      price: 3.25,
      variant: 'Drinks',
      subVariant: 'Starbucks Refreshers',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    },
    {
      id: 7,
      name: 'Chocolate Croissant',
      image: 'assets/images/ProductFoodSample.png',
      price: 2.50,
      variant: 'Food',
      subVariant: 'All-day Bakery',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    },
    {
      id: 8,
      name: 'Spinach & Feta Wrap',
      image: 'assets/images/ProductFoodSample.png',
      price: 5.00,
      variant: 'Food',
      subVariant: 'Sandwiches & Pastas',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    },
    {
      id: 9,
      name: 'Classic Oatmeal',
      image: 'assets/images/ProductFoodSample.png',
      price: 3.00,
      variant: 'Food',
      subVariant: 'Oatmeal & Fruits',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    },
    {
      id: 10,
      name: 'New York Cheesecake',
      image: 'assets/images/ProductFoodSample.png',
      price: 4.50,
      variant: 'Food',
      subVariant: 'Desserts',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    },
    {
      id: 11,
      name: 'Iced Americano',
      image: 'assets/images/ProductDrinkSample.png',
      price: 3.75,
      variant: 'Drinks',
      subVariant: 'Brewed Coffee',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 12,
      name: 'Flat White',
      image: 'assets/images/ProductDrinkSample.png',
      price: 4.20,
      variant: 'Drinks',
      subVariant: 'Espresso',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 13,
      name: 'Mocha Frappuccino',
      image: 'assets/images/ProductDrinkSample.png',
      price: 4.80,
      variant: 'Drinks',
      subVariant: 'Blended Beverage',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 14,
      name: 'Matcha Lemonade',
      image: 'assets/images/ProductDrinkSample.png',
      price: 4.10,
      variant: 'Drinks',
      subVariant: 'Teavana Tea',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 15,
      name: 'Reserve Nitro Cold Brew',
      image: 'assets/images/ProductDrinkSample.png',
      price: 5.00,
      variant: 'Drinks',
      subVariant: 'Starbucks Reserve®',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 16,
      name: 'Coffee Traveler Box',
      image: 'assets/images/ProductDrinkSample.png',
      price: 18.00,
      variant: 'Drinks',
      subVariant: 'Coffee Traveler',
      description: 'Take your tastebuds on a fruity ride with this refreshingly tart and sweet drink that pairs the tropical tang of kiwi and passionfruit with zesty lemonade. Topped with real kiwi pieces and fun Glitter Pops—passionfruit pearls that burst with tangy juice and tender fruit bits—this iced refresher delivers a playful, shimmering sip that’s as exciting as it is refreshing.',
      quantity: 0
    },
    {
      id: 17,
      name: 'Almond Croissant',
      image: 'assets/images/ProductFoodSample.png',
      price: 2.75,
      variant: 'Food',
      subVariant: 'All-day Bakery',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    },
    {
      id: 18,
      name: 'Turkey & Cheese Sandwich',
      image: 'assets/images/ProductFoodSample.png',
      price: 5.50,
      variant: 'Food',
      subVariant: 'Sandwiches & Pastas',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    },
    {
      id: 19,
      name: 'Fruit Parfait',
      image: 'assets/images/ProductFoodSample.png',
      price: 3.75,
      variant: 'Food',
      subVariant: 'Oatmeal & Fruits',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    },
    {
      id: 20,
      name: 'Chocolate Cake Slice',
      image: 'assets/images/ProductFoodSample.png',
      price: 4.75,
      variant: 'Food',
      subVariant: 'Desserts',
      description: 'Berry-lovers will fall in love with the perfectly fruity and tangy fusion of Frozen Strawberry Acai Lemonade Starbucks Refreshers™ Beverage and Frozen Pink Drink with Strawberry Acai Starbucks Refreshers™ Beverage (made with coconutmilk) that delivers the ultimate icy experience reminiscent of a frozen treat. This berry-licious beverage swirls strawberry and açai flavors together for a charming sweetness that dances on the tastebuds. Blending ice into the juice delivers a chilled, cooling sensation that conquers any sweltering summer day. Freeze-dried strawberry pieces sprinkled at the top add the perfect finishing touch to this ultimate summer berry experience. For a refreshing or indulgent twist, a choice of lemonade or coconut milk base is available.',
      quantity: 0
    }
  ];
  
  // // chosing variants
  // subVariantsWithImages: { name: string; image: string }[] = Array.from(
  //   this.Mockproducts.reduce((map, product) => {
  //     if (product.subVariant && product.image && !map.has(product.subVariant)) {
  //       map.set(product.subVariant, product.image);
  //     }
  //     return map;
  //   }, new Map<string, string>())
  // ).map(([subVariant, image]) => ({ name: subVariant, image }));
  
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

        console.group('%c[SubVariant Debug]', 'color: blue; font-weight: bold');
        console.log('Selected subvariant from route:', this.selectedSubVariant);
        console.log('Products for selected subvariant:', this.filteredProductVariants);
        console.groupEnd();

        // Optional: Scroll to it
        //document.getElementById(this.selectedSubVariant)?.scrollIntoView({ behavior: 'smooth' });
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
