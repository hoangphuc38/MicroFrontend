import { Injectable, DestroyRef, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedData } from '../models/shared-data.model';

@Injectable({
    providedIn: 'root'
})
export class EventListenerService {
    private sharedDataSubject = new Subject<SharedData>();
    sharedData$ = this.sharedDataSubject.asObservable();
    private destroyRef = inject(DestroyRef);

    constructor() {
        // Fix: Thêm type casting cho event handler
        const eventHandler = (event: Event) => {
            const customEvent = event as CustomEvent<SharedData>;
            try {
                const data: SharedData = customEvent.detail;
                this.sharedDataSubject.next(data);
            } catch (error) {
                console.error('Error handling React event:', error);
            }
        };

        // Đăng ký event listener
        window.addEventListener('react-shared-data', eventHandler);

        // Cleanup khi service bị destroy
        this.destroyRef.onDestroy(() => {
            window.removeEventListener('react-shared-data', eventHandler);
            this.sharedDataSubject.complete();
        });
    }
}