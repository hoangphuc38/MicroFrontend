import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-order',
    standalone: true,
    imports: [CommonModule, RouterLink],
    providers: [DatePipe],
    templateUrl: './order.component.html',
    styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
    orders: Order[] = [];

    loading: boolean = true;

    constructor(
        private datePipe: DatePipe,
        private orderService: OrderService,
        private sessionService: SessionService
    ) { }

    ngOnInit(): void {
        const customerId = this.sessionService.getUser();

        this.orderService.getAll(customerId).subscribe({
            next: data => {
                this.orders = data;
                this.loading = false;
            },
            error: err => {
                console.log("Err: ", err)
            }
        })
    }

    formatDate(date: string): string {
        return this.datePipe.transform(date, 'dd-MM-yyyy HH:mm:ss') || date;
    }
}