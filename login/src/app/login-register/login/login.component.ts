import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
// import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

       loginForm = this.fb.group({
          email: ['', [
            Validators.required,
            Validators.email
          ]],
          password: ['', [
            Validators.minLength(5),
            Validators.required,
          ]]
      });

      constructor(private route: Router,
        private fb: FormBuilder,
        private loginService: LoginService,
        ) {}


        ngOnInit() {

    }

    onSubmit() {
      // TODO: Use EventEmitter with form value
      // console.warn(this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe(data => {
        console.log(data);
        if (typeof data !== 'string') {
          this.route.navigate(['home']);
        }
      });
    }
    register() {
      this.route.navigate(['register']);
    }



}
