import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './../public/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

login(user){
  return this.httpClient.post<any>(this.URL + 'login', user);

}
logout(){
  localStorage.removeItem('token');
}
loginIn(){
  return !!localStorage.getItem('token');
}
getToken(){
  return localStorage.getItem('token');
}
}
