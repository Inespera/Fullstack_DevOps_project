import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TypeUserListComponent } from './type-user-list/type-user-list.component';
import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { TypeUserFormComponent } from './type-user-form/type-user-form.component';

export const routes: Routes = [
    { path: 'user-list', component: UserListComponent },
  { path: 'type-user-list', component: TypeUserListComponent },
  { path: 'add-user',component: UserFormComponent},
  { path: 'add-type',component:TypeUserFormComponent},
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }