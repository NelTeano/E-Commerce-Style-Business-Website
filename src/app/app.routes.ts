import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'shopping-cart',
        canActivate: [AuthGuard],
        loadComponent: () => import('./shopping-cart/shopping-cart').then(m => m.ShoppingCart)
    }
];
