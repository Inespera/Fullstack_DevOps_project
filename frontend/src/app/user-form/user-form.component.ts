import { Component } from '@angular/core';
import { User } from '../model/User/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = { id: 0, firstName: '', lastName: '', userType: '' };

  constructor(private userService: UserService) { }

  addUser(): void {
    if (this.user.firstName && this.user.lastName && this.user.userType) {
      this.userService.addUser(this.user);
      this.user = { id: 0, firstName: '', lastName: '', userType: '' };
    }
  }
}