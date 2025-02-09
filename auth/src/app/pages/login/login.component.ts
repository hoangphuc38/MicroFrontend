import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from '../../components/dialog/error-dialog.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterLink, CommonModule, ErrorDialogComponent],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    loading: boolean = false;
    showErrorDialog: boolean = false;
    errorMessage: string = '';

    constructor(
        private authService: AuthService,
        private storageService: StorageService,
        private route: ActivatedRoute,
    ) { }

    handleLogin(): void {
        this.loading = true;
        this.authService.login(this.email, this.password).subscribe({
            next: data => {
                this.storageService.saveUser(data.data.customer.id, data.data.access_token);
                this.redirectToReturnUrl();
            },
            error: err => {
                console.log('Cannot login');
                console.log('Email: ', this.email);
                console.log('password: ', this.password)
                this.loading = false;

                this.showErrorDialog = true;
                this.errorMessage = 'Login Error! Please check your email and password';
            }
        });
    }

    redirectToReturnUrl() {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '';
        console.log(returnUrl);
        if (!returnUrl) {
            returnUrl = '/product';
        }

        setTimeout(() => {
            window.location.href = returnUrl;
        }, 500);
    }

    closeDialog() {
        this.showErrorDialog = false;
    }
}
