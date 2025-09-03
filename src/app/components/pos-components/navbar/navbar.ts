import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html', 
  styleUrl: './navbar.scss'
})

export class Navbar {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, public router: Router) {}

  navItems = [
    { label: 'New Order', icon: 'pi pi-receipt', link: '/pos/create-order' },
    { label: 'Dashboard', icon: 'pi pi-chart-pie', link: '/pos/dashboard' },
    { label: 'Orders', icon: 'pi pi-list', link: '/pos/orders' },
    { label: 'Shift', icon: 'pi pi-user', link: '/pos/shift' },
    { label: 'Settings', icon: 'pi pi-cog', link: '/pos/settings' },
    { label: 'Log Out', icon: 'pi pi-sign-out', action: 'logout' }
  ];
  

  onLogout() {
    this.auth.logout({ logoutParams: { returnTo: this.document.location.origin } });
  }
  
  onNavItemClick(item: any) {
    if (item.action === 'logout') {
      this.onLogout();
    }else{
      this.router.navigate([item.link]);
    }
  }
}
