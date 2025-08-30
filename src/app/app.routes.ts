import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    // CUSTOMER ROUTES
    {
        path: 'customer',
        loadComponent: () => import('./customer-pages/home/home').then(c => c.Home)
    },
    {
        path: 'customer/shopping-cart',
        canActivate: [AuthGuard],
        loadComponent: () => import('./customer-pages/shopping-cart/shopping-cart').then(c => c.ShoppingCart)
    },
    {
        path: 'customer/menus',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./customer-pages/menu/menu').then(c => c.Menu)
            },
            {
                path: ':subVariant',
                loadComponent: () => import('./customer-pages/menu/menu').then(c => c.Menu)
            }
        ]
    },
    // POS ROUTES
    {
        path: 'admin/dashboard',
        canActivate: [AuthGuard],
        loadComponent: () => import('./dashboard-pages/dashboard/dashboard').then(c => c.Dashboard)
    },


];
