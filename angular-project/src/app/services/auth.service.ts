import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    return localStorage.getItem('loggedInWith') ? true : false;
  }

  public logout() {
    localStorage.clear();
  }
}
