import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./home/home').then(c => c.Home)
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadComponent: () => import('./dashboard/dashboard').then(c => c.Dashboard)
    },
    {
        path: 'shopping-cart',
        canActivate: [AuthGuard],
        loadComponent: () => import('./shopping-cart/shopping-cart').then(c => c.ShoppingCart)
    },
    {
        path: 'menus',
        canActivate: [AuthGuard],
        loadComponent: () => import('./menu/menu').then(c => c.Menu)
    }
];
