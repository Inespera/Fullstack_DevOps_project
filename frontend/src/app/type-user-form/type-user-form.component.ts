import { Component } from '@angular/core';
import { UsertypeService } from '../Services/usertype.service';

@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html',
  styleUrls: ['./type-user-form.component.css']
})
export class TypeUserFormComponent {
  userType: string = '';

  constructor(private userTypeService: UsertypeService) {}

  onSubmit():void {
    if(this.userType){
      this.userTypeService.addType(this.userType);
      this.userType = '';
    }
  }
}
