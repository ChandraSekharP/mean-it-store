import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

import User from './welcome/user.model';
import { WelcomeService } from './welcome/welcome.service';

@Injectable()
export class AuthenticationService {
  public token: string;

  usersList: User[];

  constructor(private http: HttpClient, private welcomeService: WelcomeService,) { }

  ngOnInit(): void {
    this.welcomeService.getUsers()
      .subscribe(users => {
        this.usersList = users
        console.log(users)
      })
  }

  login(loginName: string, password: string): Observable<boolean> {
    console.log(loginName);
    return this.http.post('http://localhost:3000/api/login/', JSON.stringify({loginName,password})).map((response: Response) => {
        let token = response.token;
        if (token) {
          this.token = token;
          return true;
        }
        else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
  }

  getUserLoggedIn() {
    if (this.token)
      return true;

    return false;
  }
}
