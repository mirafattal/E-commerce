import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isAuthenticatedUser()) {
    return true;
  } else {
    // Redirect to the login page if the user is not authenticated
    inject(Router).navigate(['/login']);
    return false;
  }
};