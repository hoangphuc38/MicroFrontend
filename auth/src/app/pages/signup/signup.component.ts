import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    standalone: true,
    imports: [FormsModule, RouterLink]
})
export class SignupComponent {
    name: string = '';
    address: string = '';
    email: string = '';
    password: string = '';

    handleRegister(): void {
        // Add registration logic here
        console.log('Registration data:', {
            name: this.name,
            address: this.address,
            email: this.email,
            password: this.password
        });
    }
}