import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, takeWhile } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  componentActive: boolean = true;
  error: string = ''
  constructor(private LoginService: LoginService,
    private router: Router) { }
  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ngOnInit(): void {
  }
  login(username: string, password: string) {
    const body = { username, password }
    this.LoginService.login(body).pipe(
      takeWhile(() => this.componentActive),
      catchError((error) => {
        //TODO: show allert for wrong credentials
        this.error = error.error.message;
        return EMPTY;
      })
    ).subscribe({
      next: (user) => {
        //TODO: show allert for succecfully login

        // we use qurba-token for token key name in LS 
        //to Differentiates bewtween another app token key name
        this.LoginService.saveUserToken(user.token, 'qurba-token');
        this.error = '';
        this.router.navigate(['products']);
      }
    })
  }
  onSubmit(form: NgForm) {
    this.login(form.value['username'], form.value['password'])
  }

}
