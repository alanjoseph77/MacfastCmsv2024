import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthdashboardComponent } from './authdashboard/authdashboard.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    NotfoundComponent,
    AuthdashboardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
