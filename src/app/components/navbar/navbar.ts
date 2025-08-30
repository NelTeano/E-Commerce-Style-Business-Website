import { Component } from '@angular/core';
import { AuthButtonComponent } from '../auth-button/auth-button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';


@Component({
  selector: 'app-navbar',
  imports: [
    AuthButtonComponent, 
    RouterModule, 
    CommonModule, 
    DrawerModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true
})
export class Navbar {

  constructor(public router: Router) {}

  showCartDrawer : boolean = false;
  showProfileDrawer : boolean = false;

  closeCartDrawer() {
    this.showCartDrawer = false;
  }

  closeProfileDrawer() {
    this.showProfileDrawer = false;
  }

  openCartDrawer() {
    this.showCartDrawer = true;
  }

  openProfileDrawer() {
    this.showProfileDrawer = true;
  }

  navItems = [
    { label: 'Home', link: '/customer' },
    { label: 'Menu', link: '/customer/menus' },
    { label: 'Merchandise', link: '/customer/merchandise' }
  ];
}
