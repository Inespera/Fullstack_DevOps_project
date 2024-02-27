import { Injectable } from '@angular/core';
import { User } from '../model/User/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, firstName: 'André', lastName: 'Ferreira', userType: 'Admin' },
    { id: 2, firstName: 'Carlota', lastName: 'Santos', userType: 'User' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    user.id = this.getLastUser()+1
    this.users.push(user);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  getLastUser():number{
    return this.users[this.users.length-1].id
  }
}