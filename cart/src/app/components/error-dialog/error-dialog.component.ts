import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-error-dialog',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {
    @Input() message: string = '';

    closeDialog(): void {
        const dialog = document.querySelector('.error-dialog') as HTMLElement;
        dialog?.remove();
    }
}
