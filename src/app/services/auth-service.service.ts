import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_USUARIOS = "http://localhost:3000/login";
  private API_ROLES = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  // Método para realizar login
  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post(this.API_USUARIOS, user);
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return sessionStorage.getItem('login') === 'true';
  }

  // Método para obtener el rol del usuario autenticado desde sessionStorage
  getRole(): string | null {
    return sessionStorage.getItem('role');
  }

  // Método para obtener el rol desde la API de usuarios
  getUserRole(email: string): Observable<any> {
    return this.http.get(`${this.API_ROLES}?email=${email}`);
  }
}
