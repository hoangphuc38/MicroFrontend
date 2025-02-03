import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [RouterModule, FormsModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent {
    products: Product[] = [
        {
            id: 1,
            name: 'PSG Home 2021',
            price: 100,
            image: 'https://th.bing.com/th/id/OIP.44ufzzkk_MsDFsiyc-KxcwHaJ6?rs=1&pid=ImgDetMain',
            quantity: 1,
            selected: false
        },
        {
            id: 2,
            name: 'Cricket NewJersey Blue Brush',
            price: 120,
            image: 'https://th.bing.com/th/id/OIP.ErU9U0s0aBza54cCX5HaUQHaHa?rs=1&pid=ImgDetMain',
            quantity: 1,
            selected: false
        }
    ];

    constructor(
        private router: Router
    ) { }

    areAllSelected(): boolean {
        return this.products.every(product => product.selected);
    }

    toggleSelectAll(): void {
        const newValue = !this.areAllSelected();
        this.products.forEach(product => product.selected = newValue);
    }

    increaseQuantity(product: Product): void {
        product.quantity++;
    }

    decreaseQuantity(product: Product): void {
        if (product.quantity > 1) {
            product.quantity--;
        }
    }

    calculateTotal(): number {
        return this.products
            .filter(product => product.selected)
            .reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    hasSelectedProducts(): boolean {
        return this.products.some(product => product.selected);
    }

    checkout(): void {
        const selectedProducts = this.products.filter(product => product.selected);

        this.router.navigate(['/checkout'], {
            state: { products: selectedProducts }
        });
    }
}