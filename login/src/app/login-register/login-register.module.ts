import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    LoginRegisterRoutingModule,
    // FacebookModule
  ]
})
export class LoginRegisterModule { }
