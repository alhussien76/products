import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { User } from '../../models/auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  // login user
  login(body: any): Observable<User> {
    return this.http.post<User>('https://dummyjson.com/auth/login', body)
  }

  //check if user Logged in or not 
  isLoggedIn() {
    // we use qurba-token for token key name in LS 
    //to Differentiates bewtween another app token key name
    const userActive = localStorage.getItem('qurba-token') ? true : false
    return of(userActive)
  }
}
