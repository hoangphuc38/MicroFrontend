export interface Product {
    productID: string;
    productName: string;
    price: number;
    images: Image[];
    quantity: number;
    isDeleted: boolean;
}

interface Image {
    id: number;
    productId: string;
    imageURL: string;
}