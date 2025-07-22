import { Product, Variant } from "../interface/product.interface";

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



export const MockProductsData: Variant[] = [
  {
    variant: 'Drinks',
    subVariants: [
      {
        name: 'Featured Drinks',
        categories: [
          {
            name: 'Seasonal Favorites',
            items: [
              {
                id: 1,
                name: 'Pumpkin Spice Latte',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.85 },
                  { size: 'Grande', price: 5.35 },
                  { size: 'Venti', price: 5.85 }
                ]
              },
              {
                id: 2,
                name: 'Iced Toasted Vanilla Oatmilk Shaken Espresso',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Blonde espresso and notes of caramelized vanilla, shaken with oatmilk.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.95 },
                  { size: 'Grande', price: 5.45 },
                  { size: 'Venti', price: 5.95 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Brewed Coffee',
        categories: [
          {
            name: 'Hot Coffee',
            items: [
              {
                id: 3,
                name: 'Pike Place Roast',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'A smooth, well-rounded blend of Latin American coffees with subtle notes of cocoa and rich praline.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 2.85 },
                  { size: 'Grande', price: 3.35 },
                  { size: 'Venti', price: 3.75 }
                ]
              },
              {
                id: 4,
                name: 'Caffè Misto',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 3.15 },
                  { size: 'Grande', price: 3.65 },
                  { size: 'Venti', price: 4.15 }
                ]
              }
            ]
          },
          {
            name: 'Cold Coffee',
            items: [
              {
                id: 5,
                name: 'Iced Coffee',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Freshly brewed Starbucks Iced Coffee Blend served chilled and sweetened with classic syrup.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 2.95 },
                  { size: 'Grande', price: 3.45 },
                  { size: 'Venti', price: 3.95 }
                ]
              },
              {
                id: 6,
                name: 'Cold Brew Coffee',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Handcrafted in small batches daily, slow-steeped in cool water for 20 hours.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 3.25 },
                  { size: 'Grande', price: 3.75 },
                  { size: 'Venti', price: 4.25 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Espresso',
        categories: [
          {
            name: 'Hot Espresso',
            items: [
              {
                id: 7,
                name: 'Caffè Latte',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Our dark, rich espresso balanced with steamed milk and a light layer of foam.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.45 },
                  { size: 'Grande', price: 4.95 },
                  { size: 'Venti', price: 5.45 }
                ]
              },
              {
                id: 8,
                name: 'Cappuccino',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 3.95 },
                  { size: 'Grande', price: 4.45 },
                  { size: 'Venti', price: 4.95 }
                ]
              },
              {
                id: 9,
                name: 'Caramel Macchiato',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.75 },
                  { size: 'Grande', price: 5.25 },
                  { size: 'Venti', price: 5.75 }
                ]
              }
            ]
          },
          {
            name: 'Iced Espresso',
            items: [
              {
                id: 10,
                name: 'Iced Caffè Latte',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Our dark, rich espresso combined with milk and served over ice.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.45 },
                  { size: 'Grande', price: 4.95 },
                  { size: 'Venti', price: 5.45 }
                ]
              },
              {
                id: 11,
                name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Blonde espresso, brown sugar syrup and cinnamon all shaken together with oatmilk and ice.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.95 },
                  { size: 'Grande', price: 5.45 },
                  { size: 'Venti', price: 5.95 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Blended Beverage',
        categories: [
          {
            name: 'Frappuccino® Blended Beverages',
            items: [
              {
                id: 12,
                name: 'Caramel Frappuccino®',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Buttery caramel syrup blended with coffee, milk and ice, then topped with a layer of dark caramel sauce.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.95 },
                  { size: 'Grande', price: 5.65 },
                  { size: 'Venti', price: 6.15 }
                ]
              },
              {
                id: 13,
                name: 'Java Chip Frappuccino®',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Frappuccino® roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 5.25 },
                  { size: 'Grande', price: 5.95 },
                  { size: 'Venti', price: 6.45 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Teavana Tea',
        categories: [
          {
            name: 'Hot Teas',
            items: [
              {
                id: 14,
                name: 'Chai Tea Latte',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Black tea infused with cinnamon, clove, and other warming spices is combined with steamed milk.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.45 },
                  { size: 'Grande', price: 4.95 },
                  { size: 'Venti', price: 5.45 }
                ]
              },
              {
                id: 15,
                name: 'Green Tea Latte',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Smooth and creamy matcha sweetened just right and served with steamed milk.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.75 },
                  { size: 'Grande', price: 5.25 },
                  { size: 'Venti', price: 5.75 }
                ]
              }
            ]
          },
          {
            name: 'Iced Teas',
            items: [
              {
                id: 16,
                name: 'Iced Green Tea',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Green tea blended with mint, lemongrass and lemon verbena, and given a good shake with ice.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 2.65 },
                  { size: 'Grande', price: 3.15 },
                  { size: 'Venti', price: 3.65 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Starbucks Refreshers',
        categories: [
          {
            name: 'Refreshers',
            items: [
              {
                id: 17,
                name: 'Mango Dragonfruit Refresher',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'A tropical blend of juicy mango, dragonfruit flavors and shaken with ice.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.45 },
                  { size: 'Grande', price: 4.95 },
                  { size: 'Venti', price: 5.45 }
                ]
              },
              {
                id: 18,
                name: 'Pink Drink',
                image: 'assets/images/ProductDrinkSample.png',
                description: 'Strawberry Açaí Refreshers beverage with coconutmilk over ice.',
                quantity: 0,
                sizes: [
                  { size: 'Tall', price: 4.65 },
                  { size: 'Grande', price: 5.15 },
                  { size: 'Venti', price: 5.65 }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    variant: 'Food',
    subVariants: [
      {
        name: 'Featured Food',
        categories: [
          {
            name: 'Seasonal Specials',
            items: [
              {
                id: 19,
                name: 'Pumpkin Cream Cheese Muffin',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Moist pumpkin muffin with a sweet cream cheese center and pepita seeds.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 3.45 }
                ]
              },
              {
                id: 20,
                name: 'Apple Crisp Oatmeal',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Steel-cut oats with apple, cinnamon, and brown sugar topped with oat crumble.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 4.45 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'All-day Bakery',
        categories: [
          {
            name: 'Croissants & Pastries',
            items: [
              {
                id: 21,
                name: 'Butter Croissant',
                image: 'assets/images/ProductFoodSample.png',
                description: 'A classic French pastry with a golden, flaky crust and buttery layers inside.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 3.25 }
                ]
              },
              {
                id: 22,
                name: 'Almond Croissant',
                image: 'assets/images/ProductFoodSample.png',
                description: 'A buttery croissant filled with almond cream and topped with sliced almonds.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 3.75 }
                ]
              },
              {
                id: 23,
                name: 'Chocolate Croissant',
                image: 'assets/images/ProductFoodSample.png',
                description: 'A classic French pastry with chocolate batons wrapped in buttery, flaky layers.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 3.45 }
                ]
              }
            ]
          },
          {
            name: 'Muffins & Scones',
            items: [
              {
                id: 24,
                name: 'Blueberry Muffin',
                image: 'assets/images/ProductFoodSample.png',
                description: 'A moist muffin studded with sweet, juicy blueberries.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 2.95 }
                ]
              },
              {
                id: 25,
                name: 'Double Chocolate Chunk Muffin',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Rich chocolate muffin with chocolate chunks throughout.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 3.25 }
                ]
              },
              {
                id: 26,
                name: 'Blueberry Scone',
                image: 'assets/images/ProductFoodSample.png',
                description: 'A tender, flaky scone with dried blueberries and lemon.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 2.95 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Sandwiches & Pastas',
        categories: [
          {
            name: 'Breakfast Sandwiches',
            items: [
              {
                id: 27,
                name: 'Bacon, Gouda & Egg Sandwich',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Applewood-smoked bacon, aged Gouda and egg on an artisan roll.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 4.95 }
                ]
              },
              {
                id: 28,
                name: 'Sausage, Cheddar & Egg Sandwich',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Savory sausage patty with cheddar cheese and egg on an English muffin.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 4.75 }
                ]
              },
              {
                id: 29,
                name: 'Impossible™ Breakfast Sandwich',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Plant-based sausage, cage-free egg and aged cheddar cheese on a ciabatta roll.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 5.25 }
                ]
              }
            ]
          },
          {
            name: 'Lunch Items',
            items: [
              {
                id: 30,
                name: 'Turkey Bacon and White Cheddar Panini',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Thick-cut turkey bacon and white cheddar cheese on sourdough bread.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 7.45 }
                ]
              },
              {
                id: 31,
                name: 'Grilled Chicken & Hummus Protein Box',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Grilled chicken, hummus, cucumber, tomatoes, and multigrain muesli bread.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 7.75 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Oatmeal & Fruits',
        categories: [
          {
            name: 'Oatmeal',
            items: [
              {
                id: 32,
                name: 'Classic Oatmeal',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Wholesome steel-cut oats with your choice of toppings.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 3.75 }
                ]
              }
            ]
          },
          {
            name: 'Fresh Fruit',
            items: [
              {
                id: 33,
                name: 'Seasonal Fruit Blend',
                image: 'assets/images/ProductFoodSample.png',
                description: 'A mix of fresh seasonal fruits including strawberries, blueberries, and grapes.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 3.95 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Desserts',
        categories: [
          {
            name: 'Cakes & Cookies',
            items: [
              {
                id: 34,
                name: 'Double Chocolate Brownie',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Rich, fudgy brownie made with premium chocolate.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 2.95 }
                ]
              },
              {
                id: 35,
                name: 'Classic Coffee Cake',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Moist coffee cake with cinnamon streusel topping.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 3.45 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Ready-to-Eat & More',
        categories: [
          {
            name: 'Protein Boxes',
            items: [
              {
                id: 36,
                name: 'Cheese & Fruit Protein Box',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Beecher\'s flagship cheese with apples, grapes, and multigrain muesli bread.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 6.45 }
                ]
              },
              {
                id: 37,
                name: 'PB&J Protein Box',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Natural peanut butter, grape jam, multigrain muesli bread, and apple slices.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 5.95 }
                ]
              }
            ]
          },
          {
            name: 'Snacks',
            items: [
              {
                id: 38,
                name: 'Classic Oatmeal Cookie',
                image: 'assets/images/ProductFoodSample.png',
                description: 'A chewy oatmeal cookie with hints of cinnamon and brown sugar.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 2.25 }
                ]
              },
              {
                id: 39,
                name: 'Everything Bagel',
                image: 'assets/images/ProductFoodSample.png',
                description: 'Fresh-baked bagel topped with everything seasoning.',
                quantity: 0,
                sizes: [
                  { size: 'Regular', price: 1.95 }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];