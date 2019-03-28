import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
      name: [''],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.minLength(5),
        Validators.required,
      ]]
  })
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private registerService: RegisterService
    ) { }

  ngOnInit() {
  }
  register() {
    this.registerService.register(this.registerForm.value)
        .subscribe((data) => {
          // console.log(typeof data);
          if (typeof data !== 'string') {
              this.route.navigate(['login']);
          }
        });
  }
}
