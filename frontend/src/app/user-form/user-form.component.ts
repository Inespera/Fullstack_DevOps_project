// user-form.component.ts
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: any = { firstName: '', lastName: '', userType: '' };
  userTypes: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserTypes()
      .subscribe(userTypes => {
        this.userTypes = userTypes;
      });
  }

  onSubmit() {
    this.userService.addUser(this.user)
      .subscribe(response => {
        // Handle response as needed
        console.log('User added successfully:', response);
      }, error => {
        console.error('Error adding user:', error);
      });
  }
}
