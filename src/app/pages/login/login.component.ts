import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { response } from 'express';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  authService = inject(AuthService);
  router = inject(Router);

  // Método de login
  login(form: NgForm) {
    this.authService.login(form.value).subscribe(response => {
      if (response.accessToken) {
        sessionStorage.setItem("login", "true");

        // Obtener el rol del usuario desde la API
        this.authService.getUserRole(form.value.email).subscribe(user => {
          const role = user[0]?.role; // Obtener el rol del primer usuario encontrado
          if (role) {
            sessionStorage.setItem("role", role); // Almacena el rol en sessionStorage          
            window.location.reload();       
          }
        });
        this.router.navigate(['/home']);// Redirige a la página principal  
      }
    });
  }
}

