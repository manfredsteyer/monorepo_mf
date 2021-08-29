import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'demo-auth',
  templateUrl: './auth.component.html',
  // styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService) { }

  userName: string;
  password: string;

  loggedInAs = this.authService.userName;

  login(): void {
    this.authService.login(this.userName, this.password);
    this.loggedInAs = this.userName;
  }

  logout(): void {
    this.authService.logout();
    this.loggedInAs = null;
  }

}
