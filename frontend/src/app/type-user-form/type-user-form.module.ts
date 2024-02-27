import { NgModule } from "@angular/core";
import { TypeUserFormComponent } from "./type-user-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [FormsModule],
    exports: [TypeUserFormComponent],
    declarations: [TypeUserFormComponent],
    providers: [],
 })
 
 export class TypeUserFormModule {
}