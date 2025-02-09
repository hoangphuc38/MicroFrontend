import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { SessionService } from '../../services/session.service';
import { CartItem } from '../../models/cart';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [RouterModule, FormsModule, CommonModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
    products: CartItem[] = []

    loading: boolean = true;

    constructor(
        private router: Router,
        private cartService: CartService,
        private sessionService: SessionService
    ) { }

    ngOnInit(): void {
        const customerId = this.sessionService.getUser();

        this.cartService.getAll(customerId).subscribe({
            next: data => {
                this.products = data;
                this.loading = false;
            },
            error: err => {
                console.log("Err: ", err)
            }
        })
    }

    areAllSelected(): boolean {
        return this.products.every(item => item.product.isDeleted);
    }

    toggleSelectAll(): void {
        const newValue = !this.areAllSelected();
        this.products.forEach(item => item.product.isDeleted = newValue);
    }

    increaseQuantity(item: CartItem): void {
        item.quantity++;
    }

    decreaseQuantity(item: CartItem): void {
        if (item.quantity > 1) {
            item.quantity--;
        }
    }

    calculateTotal(): number {
        return this.products
            .filter(item => item.product.isDeleted)
            .reduce((total, product) => total + (product.product.price * product.quantity), 0);
    }

    hasSelectedProducts(): boolean {
        return this.products.some(item => item.product.isDeleted);
    }

    checkout(): void {
        const selectedProducts = this.products.filter(item => item.product.isDeleted);

        this.router.navigate(['/checkout'], {
            state: { products: selectedProducts }
        });
    }
}