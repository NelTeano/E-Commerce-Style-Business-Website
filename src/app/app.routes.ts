import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    // CUSTOMER ROUTES
    {
        path: '',
        loadComponent: () =>
        import('./customer-pages/home/home').then((c) => c.Home),
    },

    // CUSTOMER ROUTES
    {
        path: 'customer',
        loadComponent: () =>
        import(
            './customer-pages/layout/layout'
        ).then((c) => c.Layout),
        children: [
        {
            path: 'shopping-cart',
            canActivate: [AuthGuard],
            loadComponent: () =>
            import('./customer-pages/shopping-cart/shopping-cart').then(
                (c) => c.ShoppingCart
            ),
        },
        {
            path: 'menus',
            canActivate: [AuthGuard],
            children: [
            {
                path: '',
                loadComponent: () =>
                import('./customer-pages/menu/menu').then((c) => c.Menu),
            },
            {
                path: ':subVariant',
                loadComponent: () =>
                import('./customer-pages/menu/menu').then((c) => c.Menu),
            },
            ],
        },
        { path: '', redirectTo: 'menus', pathMatch: 'full' },
        ],
    },
    // ADMIN ROUTES
    {
        path: 'admin/dashboard',
        canActivate: [AuthGuard],
        loadComponent: () => import('./dashboard-pages/dashboard/dashboard').then(c => c.Dashboard)
    },
    // POS ROUTES
    {
    path: 'pos',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pos-pages/layout/layout').then((c) => c.Layout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pos-pages/dashboard/dashboard').then((c) => c.Dashboard),
      },
      {
        path: 'create-order',
        loadComponent: () =>
          import('./pos-pages/create-order/create-order').then((c) => c.CreateOrder),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pos-pages/orders/orders').then((c) => c.Orders),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pos-pages/settings/settings').then((c) => c.Settings),
      },
      {
        path: 'shift',
        loadComponent: () =>
          import('./pos-pages/shift/shift').then((c) => c.Shift),
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pos-pages/checkout/checkout').then((c) => c.Checkout),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
