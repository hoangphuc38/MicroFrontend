import { Product } from "./product";

export interface CartItem {
    productID: string;
    quantity: number;
    product: Product;
}