import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {
    private apiUrl = 'http://localhost:5000/api/OrderDetail/';

    constructor(private http: HttpClient) { }

    getDetail(customerID: string): Observable<any> {
        return this.http.get(this.apiUrl + `get-detail/${customerID}`);
    }
}