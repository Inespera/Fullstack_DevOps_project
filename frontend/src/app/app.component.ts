import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserFormModule } from './user-form/user-form.module';
import { UserListModule } from './user-list/user-list.module';
import { HeaderComponent } from './header/header.component';
import { TypeUserFormModule } from './type-user-form/type-user-form.module';
import { TypeUserListModule } from './type-user-list/type-user-list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserFormModule,UserListModule,HeaderComponent,TypeUserFormModule,TypeUserListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
