import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private apiUrl = 'http://localhost:5000/api/Order/';

    constructor(private http: HttpClient) { }

    getAll(customerID: string): Observable<any> {
        return this.http.get(this.apiUrl + `get-order-by-customer?customerID=${customerID}`);
    }
}