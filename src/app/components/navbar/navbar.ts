import { Component } from '@angular/core';
import { AuthButtonComponent } from '../auth-button/auth-button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AuthButtonComponent, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true
})
export class Navbar {

  constructor(public router: Router) {}

  navItems = [
    { label: 'Home', link: '/' },
    { label: 'Menu', link: '/menus' },
    { label: 'Merchandise', link: '/merchandise' }
  ];
}
