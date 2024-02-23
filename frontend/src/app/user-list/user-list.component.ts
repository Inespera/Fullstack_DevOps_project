// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(() => {
        // Refresh users after deletion
        this.users = this.users.filter(user => user.id !== id);
      }, error => {
        console.error('Error deleting user:', error);
      });
  }

  editUser(id: number) {
    // Implement edit functionality
  }
}

