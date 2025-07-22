import { Product } from "../interface/product.interface";

// MOCK DATAS
export const menuVariants = [
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
  
export const Mockproducts: Product[] = [
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