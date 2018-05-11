import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import User from './user.model';
import { WelcomeService } from './welcome.service';
import { AuthenticationService } from '../authentication.service';
import { CustomValidators } from '../is-same-validator';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  /* signup = { username:'', loginname:'', password:'', retypePassword:'' };
  message = ''; */

  //private newUser: User;
  public newUser: User = new User();
  usersList: User[];
  registerForm: FormGroup;
  loginForm: FormGroup;

  loginName: string;
  password: string;

  signin = { loginName:'', password:'' };
  message = '';
  data: any;

  constructor(
    private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router, private welcomeService: WelcomeService,
    private auhenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.welcomeService.getUsers()
      .subscribe(users => {
        this.usersList = users
        console.log(users)
      })

      // Use the formbuilder to build the Form model
      this.registerForm  = this.formBuilder.group({
  			username: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), Validators.pattern('^[a-zA-Z ]+$')]],
        loginName: ['', [Validators.required, Validators.pattern('^[a-z0-9-]+$')]],
		    password: ['', [Validators.required, Validators.minLength(1)]],
			  passwordRetype: ['', [Validators.required, Validators.minLength(1)]]
  		}, { validator: CustomValidators.Match('password', 'passwordRetype') })

      this.loginForm  = this.formBuilder.group({
        loginName: ['', [Validators.required, Validators.pattern('^[a-z0-9-]+$')]],
		    password: ['', [Validators.required, Validators.minLength(1)]]
  		})
  }

  get username() { return this.registerForm.get('username'); }
  get loginNameRegister() { return this.registerForm.get('loginName'); }
  get passwordRegister() { return this.registerForm.get('password'); }
  get passwordRetype() { return this.registerForm.get('passwordRetype'); }

  get loginNameLogin() { return this.loginForm.get('loginName'); }
  get passwordLogin() { return this.loginForm.get('password'); }

  register() {
    if(this.registerForm.valid) {
			this.newUser = this.registerForm.value;
      this.welcomeService.registerNewUser(this.newUser)
        .subscribe((res) => {
          console.log(res.data);
          this.usersList.push(res.data)
          this.newUser = new User()
          //this.showSuccessMessage();
        }, err => {
          //this.showErrorMessage();
          this.message = err.error.msg;
        })
			  //console.log(this.usersList);
		}
  }

  loginUser() {
      this.auhenticationService.login(this.loginName, this.password)
        .subscribe(result => {
          if (result === true) {
            this.router.navigate(['Assets']);
          }
        });
    }

      /*this.http.post('http://localhost:3000/api/login',this.signin).subscribe(resp => {
        this.data = resp;
        localStorage.setItem('jwtToken', this.data.token);
        this.router.navigate(['Assets']);
      }, err => {
        this.message = err.error.msg;
      });
    }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
