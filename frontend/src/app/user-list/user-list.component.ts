import { Component, OnInit } from '@angular/core';
import { User } from '../model/User/user';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = new Array;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }
  goToAddUser():void{
    this.router.navigate(['/add-user']);
  }
}

