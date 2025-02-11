import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from './services/session.service';

export const authGuard: CanActivateFn = (route, state) => {

    const sessionService = inject(SessionService);
    const router = inject(Router);

    if (sessionService.isLoggedIn()) {
        return true;
    }

    document.location.href = `/auth?returnUrl=/cart${state.url}`
    return false;
};