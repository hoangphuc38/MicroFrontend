import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewOrder } from '../models/order';
import { baseURL } from '../constants/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private apiUrl = baseURL + 'Order/';

    private headers = new HttpHeaders({
        'ngrok-skip-browser-warning': 'true'
    });

    constructor(private http: HttpClient) { }

    getAll(customerID: string): Observable<any> {
        return this.http.get(this.apiUrl + `get-order-by-customer?customerID=${customerID}`, { headers: this.headers });
    }

    newOrder(order: NewOrder): Observable<any> {
        return this.http.post(this.apiUrl + `new-order?paymentType=1`, { order }, { headers: this.headers });
    }
}