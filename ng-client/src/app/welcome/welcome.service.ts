
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Response} from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import User from './user.model';

@Injectable()
export class WelcomeService {

  apiUrl = 'http://localhost:3000';
  registerUserUrl = `${this.apiUrl}/api/register`;
  getUsersUrl = `${this.apiUrl}/api/getUsers`;

  constructor(private http: HttpClient) { }

  //filter: Asset = new Asset();

  registerNewUser(user: User): Observable<any>{
    return this.http.post(`${this.registerUserUrl}`, user);
  }

  getUsers(): Observable<User[]>{
    return this.http.get(this.getUsersUrl)
    .map(res  => {
      return res["data"].docs as User[];
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
