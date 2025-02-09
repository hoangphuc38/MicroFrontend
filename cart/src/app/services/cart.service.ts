import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../constants/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private apiUrl = baseURL + 'Cart/';

    private headers = new HttpHeaders({
        'ngrok-skip-browser-warning': 'true'
    });

    constructor(private http: HttpClient) { }

    getAll(customerId: string): Observable<any> {
        return this.http.get(this.apiUrl + `get-cart-items/${customerId}`, { headers: this.headers });
    }
}