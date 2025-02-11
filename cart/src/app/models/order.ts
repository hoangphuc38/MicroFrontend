export interface Order {
    orderID: string;
    totalPrice: number;
    timeOrder: string;
}

export interface NewOrder {
    customerID: string;
    totalPrice: number;
    deliveryMethod: string;
    shippingCost: number;
    note: string;
    name: string;
    phone: string;
    address: string;
    voucherID: string;
    selectedItems: {
        productID: string;
        quantity: number;
    }[];
}