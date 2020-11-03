import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from './security.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private security: SecurityService) { }
  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    const tokenReq = req.clone({
      setHeaders:{
        acces_token : 'Bearer ' + this.security.getToken()
      }
  });
    return next.handle(tokenReq);
  }
}
