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
    // orders = [
    //     { OrderID: '001', CreatedDate: '2025-01-20T23:32:00', Total: 120.5, Status: 'Completed', Details: 'View Details' },
    //     { OrderID: '002', CreatedDate: '2025-01-21T23:31:00', Total: 250.0, Status: 'Pending', Details: 'View Details' },
    //     { OrderID: '003', CreatedDate: '2025-01-22T23:32:00', Total: 175.0, Status: 'Shipped', Details: 'View Details' },
    //     // Thêm các đơn hàng giả lập khác nếu cần
    // ];

    orders: Order[] = [];

    constructor(
        private datePipe: DatePipe,
        private orderService: OrderService,
        private sessionService: SessionService
    ) { }

    ngOnInit(): void {
        const customerId = this.sessionService.getUser();

        this.orderService.getAll(customerId).subscribe({
            next: data => {
                this.orders = data
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