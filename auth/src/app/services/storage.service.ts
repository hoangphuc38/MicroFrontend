import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    constructor() { }

    clean(): void {
        window.sessionStorage.clear();
    }

    public saveUser(user: any, token: any, name: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.removeItem('name');
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        window.localStorage.setItem('Token', JSON.stringify(token));
        window.sessionStorage.setItem('name', JSON.stringify(name));
    }

    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }

        return {};
    }

    public isLoggedIn(): boolean {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return true;
        }

        return false;
    }
}