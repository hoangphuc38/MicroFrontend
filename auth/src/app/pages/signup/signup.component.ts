import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule, Location } from '@angular/common';
import { ErrorDialogComponent } from '../../components/dialog/error-dialog.component';
import { SuccessDialogComponent } from '../../components/success-dialog/success-dialog.component';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    standalone: true,
    imports: [FormsModule, RouterLink, CommonModule, ErrorDialogComponent, SuccessDialogComponent]
})
export class SignupComponent {
    name: string = '';
    address: string = '';
    email: string = '';
    password: string = '';

    showErrorDialog: boolean = false;
    errorMessage: string = '';
    showSuccessDialog: boolean = false;
    successMessage: string = '';

    constructor(
        private authService: AuthService,
        private location: Location,
    ) { }

    handleRegister(): void {
        this.authService.register(this.name, this.email, this.password, this.address).subscribe({
            next: data => {
                this.showSuccessDialog = true;
                this.successMessage = 'Register successfully';
                this.location.back();
            },
            error: err => {
                this.showErrorDialog = true;
                this.errorMessage = 'Email has existed. Please choose another email';
            }
        })
        console.log('Registration data:', {
            name: this.name,
            address: this.address,
            email: this.email,
            password: this.password
        });
    }

    closeDialog() {
        this.showErrorDialog = false;
    }
}