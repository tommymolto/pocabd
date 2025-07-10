import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    imports: [CommonModule, ReactiveFormsModule],

  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      login: [''],
      password: ['']
    });
  }

  onSubmit() {
    const { login, password } = this.loginForm.value;
    // Handle login logic here
    if (login == 'abc' && password == 'nps') {
      this.router.navigate(['/home']);
    }
    console.log('Login:', login, 'Password:', password);
  }
}