import { Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { DetailOrderComponent } from './detail-order/detail-order.component';

export const routes: Routes = [
    {
        path: 'detail-product',
        component: DetailProductComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'detail-order',
        component: DetailOrderComponent
    }
];
