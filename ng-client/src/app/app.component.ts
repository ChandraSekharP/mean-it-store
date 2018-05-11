
import { Component, OnInit } from '@angular/core';

import User from './welcome/user.model';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  title = 'IT Store Management Application';
  /* private user$: Observable<Account | boolean>;
  private loggedIn$: Observable<boolean>;
  private login: boolean;
  private register: boolean */

  usersList: User[];

  ngOnInit() {
    //this.login = true;
    //this.register = false;
    /* this.authenticationService.getUser()
      .subscribe(users => {
        this.usersList = users
        console.log(users)
      }) */
  }


  /* showLogin() {
    this.login = !(this.register = false);
  }

  showRegister() {
    this.register = !(this.login = false);
  }

  logout() {
    this.stormpath.logout();
  } */

}
