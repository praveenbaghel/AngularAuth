import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './users.service';
import { USERS } from './user-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string = '/home';
  userLogs = [];
  constructor(private router: Router, private userService: UserService) {}

  login(email: string, password: string): void {
    const user = this.userService.getUser(email);
  
    if (!user || user.password !== password) {
      return; // early exit if user not found or password doesn't match
    }
  
    this.isLoggedIn = true;
    localStorage.setItem('user', JSON.stringify(user));
  
    if (user.role !== 'admin') {
      const logs = JSON.parse(localStorage.getItem('userLogs') || '[]');
      const index = logs.findIndex((u: any) => u.email === email);
  
      if (index >= 0) {
        // update existing user log entry
        logs[index].loginLog++;
        logs[index].time = new Date().toLocaleTimeString();
      } else {
        // create new user log entry
        logs.push({ email, loginLog: 1, time: new Date().toLocaleTimeString() });
      }
  
      localStorage.setItem('userLogs', JSON.stringify(logs));
      this.userLogs = logs; 
    }
  
    this.router.navigate([this.redirectUrl]);
  }

}
