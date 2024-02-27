import { NgModule } from "@angular/core";
import { UserFormComponent } from './user-form.component'
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [FormsModule],
    exports: [UserFormComponent],
    declarations: [UserFormComponent],
    providers: [],
 })
 
 export class UserFormModule {
 }