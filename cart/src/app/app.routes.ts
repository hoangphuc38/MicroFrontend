import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { DetailOrderComponent } from './pages/detail-order/detail-order.component';

export const routes: Routes = [
    { path: '', component: CartComponent },
    {
        path: 'order',
        children: [
            { path: '', component: OrderComponent },
            { path: ':id', component: DetailOrderComponent }
        ]
    },
    { path: '**', component: EmptyRouteComponent }
];
