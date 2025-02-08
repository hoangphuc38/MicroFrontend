import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OrderDetail } from '../../models/order-detail';
import { OrderDetailService } from '../../services/order-detail.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-detail-order',
    standalone: true,
    imports: [RouterModule],
    providers: [DatePipe],
    templateUrl: './detail-order.component.html',
    styleUrl: './detail-order.component.scss'
})
export class DetailOrderComponent implements OnInit {
    orderDetail: OrderDetail = {
        order: {
            orderID: '',
            timeCreated: '',
            totalPrice: 0,
            deliveryMethod: '',
            shippingCost: 0,
            name: '',
            phone: '',
            address: ''
        },
        products: []
    }

    constructor(
        private route: ActivatedRoute,
        private datePipe: DatePipe,
        private orderDetailService: OrderDetailService,
    ) { }

    ngOnInit() {
        const orderId = this.route.snapshot.paramMap.get('id');
        if (orderId) {
            this.orderDetailService.getDetail(orderId).subscribe({
                next: data => {
                    this.orderDetail = data;
                    console.log("check: ", data);
                },
                error: err => {
                    console.log("Err: ", err)
                }
            })
        }
    }

    formatDate(date: string): string {
        return this.datePipe.transform(date, 'dd-MM-yyyy HH:mm:ss') || date;
    }
}