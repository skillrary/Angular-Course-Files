import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {
      userId: 1,
      emailAddress: 'john@example.com',
      password: 'john@123'
    }, {
      userId: 2,
      emailAddress: 'spiderman@example.com',
      password: 'spiderman'
    }
  ];
  constructor() { }

  checkUser(emailAddress: string, password: string): boolean {
    const user = this.users.find(u => u.emailAddress === emailAddress && u.password === password);
    
    if (user) {
      localStorage.setItem('loggedInWith', user.emailAddress);
      localStorage.setItem('userId', user.userId.toString());
      return true;
    } else {
      return false;
    }
  }
}
