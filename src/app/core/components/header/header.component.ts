import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../authentication/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.loginService.isloggedIn$
  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

}
