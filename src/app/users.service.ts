import { Injectable } from '@angular/core';
import { USERS } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = USERS;
  

  constructor() { }

  getUser(email: string) {
    return this.users.find(user => user.email === email);
  }
  
}
