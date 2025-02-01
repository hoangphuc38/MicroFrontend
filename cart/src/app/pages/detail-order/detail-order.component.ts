import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OrderDetail } from '../../models/order-detail';

@Component({
    selector: 'app-detail-order',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './detail-order.component.html',
    styleUrl: './detail-order.component.scss'
})
export class DetailOrderComponent implements OnInit {
    orderId: string | null = null;
    orderDetail: OrderDetail = {
        OrderID: '',
        CreatedDate: '11/11/2024',
        TotalPrice: '500,000 VND',
        Products: [
            {
                name: 'PSG Home 2021',
                quantity: 1,
                price: '500,000 VND',
                image: 'https://th.bing.com/th/id/OIP.44ufzzkk_MsDFsiyc-KxcwHaJ6?rs=1&pid=ImgDetMain'
            }
        ]
    };

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.orderId = this.route.snapshot.paramMap.get('id');
        // Ở đây bạn có thể gọi API để lấy chi tiết đơn hàng dựa vào orderId
        if (this.orderId) {
            // Cập nhật OrderID trong orderDetail
            this.orderDetail.OrderID = this.orderId;

            // Ở đây bạn có thể gọi API để lấy chi tiết đơn hàng
            // Ví dụ:
            // this.orderService.getOrderDetail(this.orderId).subscribe(
            //     (data) => {
            //         this.orderDetail = data;
            //     }
            // );
        }
    }
}