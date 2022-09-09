import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../../models/auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedInEmiiter: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isloggedIn$: Observable<boolean> = this.isLoggedInEmiiter.asObservable();

  constructor(private http: HttpClient) { }

  // login user
  login(body: any): Observable<User> {
    return this.http.post<User>('https://dummyjson.com/auth/login', body).pipe(
      tap(() => {
        this.isLoggedInEmiiter.next(true);
      })
    )
  }

  saveUserToken(token: string, tokenKey: string) {
    localStorage.setItem(tokenKey, token);
  }
  //check if user Logged in or not 
  checkUserActiveToken() {
    // we use qurba-token for token key name in LS 
    //to Differentiates bewtween another app token key name
    const userActive = localStorage.getItem('qurba-token') ? true : false
    this.isLoggedInEmiiter.next(userActive)
  }
}
