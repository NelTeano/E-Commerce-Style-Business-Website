import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.scss'
})
export class Orders {
  orders = [
    {
      id: 1045,
      time: "11:10 AM",
      type: "Takeout",
      customer: "Jonel",
      items: [
        { qty: 1, name: "Caramel Macchiato (Grande)", price: "$4.95", addons: "+ Almond Milk, - Sugar" },
        { qty: 2, name: "Blueberry Muffin", price: "$6.00", addons: "Warmed" },
        { qty: 1, name: "Green Tea Latte (Tall)", price: "$3.50" }
      ],
      total: "$14.45"
    },
    {
      id: 1046,
      time: "11:20 AM",
      type: "Dine-in",
      customer: "Maria",
      items: [
        { qty: 1, name: "Espresso", price: "$2.95" },
        { qty: 1, name: "Croissant", price: "$3.00", addons: "Buttered" }
      ],
      total: "$5.95"
    },
    {
      id: 1047,
      time: "11:35 AM",
      type: "Takeout",
      customer: "Alex",
      items: [
        { qty: 1, name: "Latte (Tall)", price: "$3.95" },
        { qty: 1, name: "Chocolate Cake Slice", price: "$4.50" }
      ],
      total: "$8.45"
    },
    {
      id: 1048,
      time: "11:40 AM",
      type: "Dine-in",
      customer: "Sophia",
      items: [
        { qty: 2, name: "Cappuccino", price: "$7.00" },
        { qty: 1, name: "Banana Bread", price: "$3.25" }
      ],
      total: "$10.25"
    },
    {
      id: 1049,
      time: "11:45 AM",
      type: "Takeout",
      customer: "Daniel",
      items: [
        { qty: 5, name: "Americano", price: "$12.50" },
        { qty: 1, name: "Bagel", price: "$2.75", addons: "With Cream Cheese" }
      ],
      total: "$15.25"
    },
    {
      id: 1050,
      time: "11:55 AM",
      type: "Takeout",
      customer: "Ella",
      items: [
        { qty: 1, name: "Chai Tea Latte", price: "$3.95" },
        { qty: 2, name: "Cinnamon Roll", price: "$6.50" }
      ],
      total: "$10.45"
    },
    {
      id: 1051,
      time: "12:05 PM",
      type: "Dine-in",
      customer: "Liam",
      items: [
        { qty: 1, name: "Flat White", price: "$3.75" },
        { qty: 1, name: "Brownie", price: "$2.95" }
      ],
      total: "$6.70"
    },
    {
      id: 1052,
      time: "12:10 PM",
      type: "Takeout",
      customer: "Maya",
      items: [
        { qty: 1, name: "Iced Latte", price: "$4.25", addons: "+ Oat Milk" },
        { qty: 1, name: "Cheesecake Slice", price: "$4.95" }
      ],
      total: "$9.20"
    },
    {
      id: 1053,
      time: "12:15 PM",
      type: "Dine-in",
      customer: "Chris",
      items: [
        { qty: 1, name: "Mocha (Grande)", price: "$4.75", addons: "+ Extra Shot" },
        { qty: 2, name: "Blueberry Scone", price: "$5.50" }
      ],
      total: "$10.25"
    },
    {
      id: 1054,
      time: "12:25 PM",
      type: "Dine-in",
      customer: "Hannah",
      items: [
        { qty: 1, name: "Matcha Latte (Grande)", price: "$4.50" },
        { qty: 1, name: "Avocado Toast", price: "$5.95", addons: "Extra Avocado" }
      ],
      total: "$10.45"
    },
    {
      id: 1055,
      time: "12:40 PM",
      type: "Takeout",
      customer: "Ethan",
      items: [
        { qty: 1, name: "Cold Brew Coffee", price: "$3.95" },
        { qty: 1, name: "Chocolate Chip Cookie", price: "$2.25" },
        { qty: 1, name: "Granola Bar", price: "$1.75" }
      ],
      total: "$7.95"
    },
    {
      id: 1056,
      time: "12:50 PM",
      type: "Dine-in",
      customer: "Olivia",
      items: [
        { qty: 1, name: "Pumpkin Spice Latte (Grande)", price: "$5.25" },
        { qty: 1, name: "Lemon Tart", price: "$3.95" }
      ],
      total: "$9.20"
    },
    {
      id: 1057,
      time: "01:05 PM",
      type: "Takeout",
      customer: "Noah",
      items: [
        { qty: 1, name: "Iced Americano", price: "$3.25" },
        { qty: 1, name: "Turkey Sandwich", price: "$6.50", addons: "No Tomato" }
      ],
      total: "$9.75"
    }
  ];
}
