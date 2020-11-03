import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'security-app';

  constructor(
    private router: Router,
    private security: SecurityService){

  }
  logedIn(){
    return this.security.loginIn();
  }
  onLogedOut(){
    this.security.logout();
    this.router.navigate(['login']);
  }
}
