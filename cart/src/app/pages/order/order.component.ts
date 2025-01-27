import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-order',
    standalone: true,
    imports: [CommonModule],
    providers: [DatePipe],
    templateUrl: './order.component.html',
    styleUrl: './order.component.scss'
})
export class OrderComponent {
    orders = [
        { OrderID: '001', CreatedDate: '2025-01-20T23:32:00', Total: 120.5, Status: 'Completed', Details: 'View Details' },
        { OrderID: '002', CreatedDate: '2025-01-21T23:31:00', Total: 250.0, Status: 'Pending', Details: 'View Details' },
        { OrderID: '003', CreatedDate: '2025-01-22T23:32:00', Total: 175.0, Status: 'Shipped', Details: 'View Details' },
        // Thêm các đơn hàng giả lập khác nếu cần
    ];

    constructor(private datePipe: DatePipe) { }

    formatDate(date: string): string {
        return this.datePipe.transform(date, 'dd-MM-yyyy HH:mm:ss') || date;
    }
}