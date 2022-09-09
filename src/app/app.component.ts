import { Component, OnInit } from '@angular/core';
import { LoginService } from './core/authentication/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "products";
  constructor(private loginservice: LoginService) { }
  ngOnInit(): void {
    this.loginservice.checkUserActiveToken();
  }

}
