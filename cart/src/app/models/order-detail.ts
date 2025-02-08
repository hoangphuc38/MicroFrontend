import { Product } from "./product";

export interface OrderDetail {
    order: OrderInfo;
    products: {
        product: Product
        quantity: number;
    }[];
}

interface OrderInfo {
    orderID: string;
    timeCreated: string;
    totalPrice: number;
    deliveryMethod: string;
    shippingCost: number;
    name: string;
    phone: string;
    address: string;
}