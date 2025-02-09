import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../constants/baseUrl';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = baseURL + 'Account/';

    private headers = new HttpHeaders({
        'ngrok-skip-browser-warning': 'true'
    });

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {
        return this.http.post(this.apiUrl + 'login', { email, password }, { headers: this.headers });
    }

    register(userName: string, email: string, password: string, phone: string): Observable<any> {
        return this.http.post(this.apiUrl + 'register?role=Customer', { userName, email, password, phone }, { headers: this.headers });
    }
}
