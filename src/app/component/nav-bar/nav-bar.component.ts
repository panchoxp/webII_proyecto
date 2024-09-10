import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { NgIf } from '@angular/common';
declare var bootstrap: any; // Para usar el modal de Bootstrap

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'] // Asegúrate de usar `styleUrls` en plural
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean = false;
  role: string | null = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.role = this.authService.getRole();
  }

  logout(): void {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('role');
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }
}
