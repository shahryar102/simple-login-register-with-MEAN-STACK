import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: NavBarComponent},
  {
    path: 'register',
    loadChildren: './login-register/register/register.module#RegisterModule',
  },
  {
    path: 'login',
    loadChildren: './login-register/login-register.module#LoginRegisterModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
