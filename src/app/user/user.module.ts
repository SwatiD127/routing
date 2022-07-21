import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

console.warn("User module")
@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
