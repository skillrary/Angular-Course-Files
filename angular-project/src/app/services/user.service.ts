import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {
      emailAddress: 'john@example.com',
      password: 'john@123'
    }, {
      emailAddress: 'spiderman@example.com',
      password: 'spiderman'
    }
  ];
  constructor() { }

  checkUser(emailAddress: string, password: string): boolean {
    const user = this.users.find(u => u.emailAddress === emailAddress && u.password === password);
    
    if (user) {
      localStorage.setItem('loggedInWith', user.emailAddress);
      return true;
    } else {
      return false;
    }
  }
}
