import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private LoginService: LoginService,
    private router: Router) { }
  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ngOnInit(): void {
  }
  login() {
    const body = { username: 'kminchelle', password: '0lelplR' }
    this.LoginService.login(body).pipe(
      takeWhile(() => this.componentActive),
      catchError((err) => {
        //TODO: show allert for wrong credentials
        return EMPTY;
      })
    ).subscribe({
      next: (user) => {
        //TODO: show allert for succecfully login
        localStorage.setItem('qurba-token', user.token);
        this.router.navigate(['products']);
      }
    })
  }

}
