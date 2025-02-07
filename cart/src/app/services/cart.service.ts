import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private apiUrl = 'http://localhost:5000/api/Cart/';

    constructor(private http: HttpClient) { }

    getAll(customerId: string): Observable<any> {
        return this.http.get(this.apiUrl + `get-cart-items/${customerId}`);
    }
}