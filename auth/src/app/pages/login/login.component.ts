import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    loading: boolean = false;

    handleLogin(): void {
        this.loading = true;
        // Add your login logic here
        window.location.href = '/product';
    }
}