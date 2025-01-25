import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: '', component: CartComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', component: EmptyRouteComponent }
];
