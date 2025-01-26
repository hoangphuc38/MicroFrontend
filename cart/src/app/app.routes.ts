import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
    { path: '', component: CartComponent },
    { path: 'order', component: OrderComponent },
    { path: '**', component: EmptyRouteComponent }
];
