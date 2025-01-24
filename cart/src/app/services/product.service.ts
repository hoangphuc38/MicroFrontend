import { Injectable, DestroyRef, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    specs: {
        screen: string;
        chip: string;
        camera: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productSelectedSubject = new Subject<number>();
    productSelected$ = this.productSelectedSubject.asObservable();
    private destroyRef = inject(DestroyRef);

    constructor() {
        const messageHandler = (event: MessageEvent) => {
            if (event.data && event.data.type === '@react/PRODUCT_SELECTED') {
                console.log('Angular nhận message:', event.data);
                this.productSelectedSubject.next(event.data.productId);
            }
        };

        // Lắng nghe sự kiện 'message' từ window
        window.addEventListener('message', messageHandler);

        // Khi component hủy, hủy bỏ sự kiện để tránh rò rỉ bộ nhớ
        this.destroyRef.onDestroy(() => {
            window.removeEventListener('message', messageHandler);
            this.productSelectedSubject.complete();
        });
    }

    getProductDetails(id: number): Promise<Product | null> {
        console.log('Fetching product details for ID:', id);
        const products: { [key: number]: Product } = {
            1: { id: 1, name: 'Product 1', price: 100, description: 'Description 1', specs: { screen: '6 inch', chip: 'Snapdragon 888', camera: '12MP' } },
            2: { id: 2, name: 'Product 2', price: 200, description: 'Description 2', specs: { screen: '6.5 inch', chip: 'Snapdragon 865', camera: '16MP' } },
            // Add more mock data here
        };

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products[id] || null);
            }, 500);
        });
    }
}
