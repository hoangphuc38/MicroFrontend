import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-success-dialog',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './success-dialog.component.html',
    styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent {
    @Input() message: string = '';

    closeDialog(): void {
        const dialog = document.querySelector('.error-dialog') as HTMLElement;
        dialog?.remove();
    }
}