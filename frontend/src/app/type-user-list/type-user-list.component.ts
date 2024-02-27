import { Component, OnInit } from '@angular/core';
import { UsertypeService } from '../Services/usertype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-user-list',
  templateUrl: './type-user-list.component.html',
  styleUrls: ['./type-user-list.component.css']
})
export class TypeUserListComponent implements OnInit {
  userTypes: any[] = [];

  constructor(private userTypeService : UsertypeService,private router: Router) {}

  ngOnInit() {
    this.userTypes = this.userTypeService.getUserTypes()
  }

  deleteUserType(id: number) {
    this.userTypeService.removeType(id);
    this.userTypes = this.userTypeService.getUserTypes()
  }

  editUserType(id: number) {
  }

  goToAddUserType(){
    this.router.navigate(['/add-type']);
  }
}