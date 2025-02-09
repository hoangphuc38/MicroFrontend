import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../constants/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {
    private apiUrl = baseURL + 'OrderDetail/';

    private headers = new HttpHeaders({
        'ngrok-skip-browser-warning': 'true'
    });

    constructor(private http: HttpClient) { }

    getDetail(customerID: string): Observable<any> {
        return this.http.get(this.apiUrl + `get-detail/${customerID}`, { headers: this.headers });
    }
}