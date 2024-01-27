import { CanActivateFn, Router } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).isAuthenticatedUser()){
    return true;
  } else{
    //Redirect to the login page if the user is not authenticated
  inject(Router).navigate(['dashboard']);
  return false;
  }
};
