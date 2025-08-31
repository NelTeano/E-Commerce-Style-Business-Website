import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    // CUSTOMER ROUTES
    {
        path: '',
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
    // ADMIN ROUTES
    {
        path: 'admin/dashboard',
        canActivate: [AuthGuard],
        loadComponent: () => import('./dashboard-pages/dashboard/dashboard').then(c => c.Dashboard)
    },
    // POS ROUTES
    {
        path: 'pos/dashboard',
        canActivate: [AuthGuard],
        loadComponent: () => import('./pos-pages/dashboard/dashboard').then(c => c.Dashboard)
    },
    {
        path: 'pos/orders',
        canActivate: [AuthGuard],
        loadComponent: () => import('./pos-pages/orders/orders').then(c => c.Orders)
    },
    {
        path: 'pos/checkout',
        canActivate: [AuthGuard],
        loadComponent: () => import('./pos-pages/checkout/checkout').then(c => c.Checkout)
    },
    {
        path: 'pos/shift',
        canActivate: [AuthGuard],
        loadComponent: () => import('./pos-pages/shift/shift').then(c => c.Shift)
    },
];
