export interface OrderDetail {
    OrderID: string;
    CreatedDate: string;
    TotalPrice: string;
    Products: {
        name: string;
        quantity: number;
        price: string;
        image: string;
    }[];
}