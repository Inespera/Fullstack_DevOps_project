import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html',
  styleUrls: ['./type-user-form.component.css']
})
export class TypeUserFormComponent {
  userType: string = '';

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.addUserType(this.userType)
      .subscribe(response => {
        // Handle response as needed
        console.log('User type added successfully:', response);
      }, error => {
        console.error('Error adding user type:', error);
      });
  }
}