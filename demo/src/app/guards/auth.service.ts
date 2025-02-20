import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const correctEmail = 'prueba@mail.com';
    const correctPassword = '12345';

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem('authToken', 'fake-token');  // Simulamos un token
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('authToken') !== null;
  }
}
