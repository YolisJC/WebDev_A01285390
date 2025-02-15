import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const correctEmail = 'prueba@mail.com';
    const correctPassword = '12345';

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === correctEmail && password === correctPassword) {
        this.loginMessage = 'Usuario y contraseña correctos';

        //home
        this.router.navigate(['/home']);
      } else {
        this.loginMessage = 'Correo o contraseña incorrectos';
      }
    } else {
      this.loginMessage = 'Formulario inválido';
    }
  }
}
