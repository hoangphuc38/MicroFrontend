import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-payment',
    standalone: true,
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.scss'
})
export class PaymentComponent {
    selectedProducts: Product[] = [];

    receiverInfo = {
        name: '',
        address: '',
        phone: ''
    };

    deliveryMethod: 'normal' | 'express' = 'normal';

    constructor(
        private router: Router,
        private location: Location
    ) {
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
            this.selectedProducts = navigation.extras.state['products'] as Product[];
        }
    }

    calculateTotal(): number {
        return this.selectedProducts.reduce((total, product) =>
            total + (product.price * product.quantity), 0
        );
    }

    onNameChange(event: Event) {
        this.receiverInfo.name = (event.target as HTMLInputElement).value;
    }

    onAddressChange(event: Event) {
        this.receiverInfo.address = (event.target as HTMLInputElement).value;
    }

    onPhoneChange(event: Event) {
        this.receiverInfo.phone = (event.target as HTMLInputElement).value;
    }

    onDeliveryMethodChange(event: any) {
        this.deliveryMethod = event.target.value;
    }

    calculateDeliveryFee(): number {
        const deliveryFee = this.deliveryMethod === 'express' ? 10 : 5;
        return deliveryFee;
    }

    onBack() {
        this.location.back();
    }

    onConfirm() {
        this.router.navigate(['/order']);
    }
}