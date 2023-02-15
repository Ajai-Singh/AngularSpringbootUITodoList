import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService : HardcodedAuthService, private router : Router) {

  }

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    if(this.authService.isUserLoggedIn()) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    } 
  }
}
