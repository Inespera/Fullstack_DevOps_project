// type-user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-type-user-list',
  templateUrl: './type-user-list.component.html',
  styleUrls: ['./type-user-list.component.css']
})
export class TypeUserListComponent implements OnInit {
  userTypes: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserTypes()
      .subscribe(userTypes => {
        this.userTypes = userTypes;
      });
  }

  deleteUserType(id: number) {
    this.userService.deleteUserType(id)
      .subscribe(() => {
        // Refresh userTypes after deletion
        this.userTypes = this.userTypes.filter(userType => userType.id !== id);
      }, error => {
        console.error('Error deleting user type:', error);
      });
  }

  editUserType(id: number) {
    // Implement edit functionality
  }
}

