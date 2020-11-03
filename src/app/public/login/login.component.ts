import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    userName: '',
    password: ''
  }

  constructor(
    private security: SecurityService,
    private router: Router) { }

  res;
  ngOnInit(): void {
  }

  async onLogin() {
    try {
      this.res = await this.security.login(this.user).toPromise();
      localStorage.setItem('token', this.res.token);
      this.router.navigate(['clientes']);
    } catch (error) {
      console.error('error');
    }
    console.log(this.res.message);
  }

}
