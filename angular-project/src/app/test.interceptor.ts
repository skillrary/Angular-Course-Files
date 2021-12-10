import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercept calls.");

    let headers = request.headers
    .set('Authorization', localStorage.getItem('loggedInWith') || '');

    const cloneReq = request.clone({ headers });

    return next.handle(cloneReq);
  }
}
