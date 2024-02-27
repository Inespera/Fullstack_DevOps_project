import { NgModule } from "@angular/core";
import { UserListComponent } from './user-list.component'
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    exports: [UserListComponent],
    declarations: [UserListComponent],
    providers: [],
 })
 
 export class UserListModule {
 }