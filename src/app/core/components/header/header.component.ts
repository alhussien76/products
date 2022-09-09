import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { LoginService } from '../../authentication/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.loginService.isloggedIn$.pipe(
    shareReplay()
  )
  constructor(private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
  // clear user token from local storage - emit false to change navigation header  
  // navigate to login page
  ToLoginPage() {
    this.loginService.removeUserToken('qurba-token');
    this.loginService.isLoggedInEmiiter.next(false);
    this.router.navigate(['/auth']);

  }
}
