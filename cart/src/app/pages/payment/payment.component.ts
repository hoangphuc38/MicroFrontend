import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { CartItem } from '../../models/cart';
import { NewOrder } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { SessionService } from '../../services/session.service';
import { SuccessDialogComponent } from '../../components/dialog/success-dialog.component';
import { ErrorDialogComponent } from '../../components/error-dialog/error-dialog.component';

@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [SuccessDialogComponent, ErrorDialogComponent, CommonModule],
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.scss'
})
export class PaymentComponent {
    selectedProducts: CartItem[] = [];

    newOrder: NewOrder = {
        customerID: '',
        totalPrice: 0,
        deliveryMethod: '',
        shippingCost: 0,
        note: '',
        name: '',
        phone: '',
        address: '',
        selectedItems: []
    }

    deliveryMethod: 'Normal' | 'Express' = 'Normal';

    showErrorDialog: boolean = false;
    errorMessage: string = '';
    showSuccessDialog: boolean = false;
    successMessage: string = '';

    constructor(
        private router: Router,
        private location: Location,
        private orderService: OrderService,
        private sessionService: SessionService
    ) {
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
            this.selectedProducts = navigation.extras.state['products'] as CartItem[];
        }
    }

    calculateTotal(): number {
        this.newOrder.totalPrice = this.selectedProducts.reduce((total, item) =>
            total + (item.product.price * item.quantity), 0
        );

        return this.newOrder.totalPrice;
    }

    onNameChange(event: Event) {
        this.newOrder.name = (event.target as HTMLInputElement).value;
    }

    onAddressChange(event: Event) {
        this.newOrder.address = (event.target as HTMLInputElement).value;
    }

    onPhoneChange(event: Event) {
        this.newOrder.phone = (event.target as HTMLInputElement).value;
    }

    onDeliveryMethodChange(event: any) {
        this.deliveryMethod = event.target.value;
    }

    calculateDeliveryFee(): number {
        const deliveryFee = this.deliveryMethod === 'Express' ? 10 : 5;
        this.newOrder.shippingCost = deliveryFee;
        return deliveryFee;
    }

    onBack() {
        this.location.back();
    }

    onConfirm() {
        const customerId = this.sessionService.getUser();
        const items = this.selectedProducts.map((item) => ({
            productID: item.productID,
            quantity: item.quantity,
        }))

        this.newOrder.customerID = customerId;
        this.newOrder.selectedItems = items;
        this.newOrder.deliveryMethod = this.deliveryMethod;

        this.orderService.newOrder(this.newOrder).subscribe({
            next: data => {
                this.showSuccessDialog = true;
                this.successMessage = 'Create order successfully';
                this.router.navigate(['/order']);
            },
            error: err => {
                this.showErrorDialog = true;
                this.errorMessage = 'Failed to create order';
                console.log("Err: ", err)
            }
        })
    }

    closeDialog() {
        this.showErrorDialog = false;
    }
}