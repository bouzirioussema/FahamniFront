import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './AuthService.js';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const userRole = this.authService.getRole();

    // Check if user is authenticated (has token)
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // If no specific roles are required (like for home page), allow any authenticated user
    const allowedRoles = next.data.roles as Array<string>;
    if (!allowedRoles || allowedRoles.length === 0) {
      return true; // Allow any authenticated user
    }

    // Check if user has required role
    if (userRole && allowedRoles.includes(userRole)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
