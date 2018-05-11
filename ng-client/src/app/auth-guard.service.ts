import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
//export class AuthGuardService implements CanActivate {
export class AuthGuardService {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  /* canActivate() {
    (!this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl('/');
        return false;
      }
      return true;
    }
  } */
}
