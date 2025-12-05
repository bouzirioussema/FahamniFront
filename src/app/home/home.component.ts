import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../login/AuthService.js'; // Import AuthService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Check if user is already authenticated
    const token = localStorage.getItem('jwtToken');
    const userRole = this.authService.getRole();
    const userId = localStorage.getItem('userId');

    if (token && userRole && userId) {
      // Redirect authenticated users to their appropriate page based on role
      switch (userRole) {
        case 'ROLE_STUDENT':
          this.router.navigate(['/student/' + userId]);
          break;
        case 'ROLE_TEACHER':
          this.router.navigate(['/teacher/' + userId]);
          break;
        case 'ROLE_ADMIN':
          this.router.navigate(['/backoffice']);
          break;
        default:
          this.router.navigate(['/login']);
      }
    }
    // If not authenticated, stay on home page
  }

  // Method to navigate to the login page
  navigateToLogin() {
    this.router.navigate(['/login']); // Navigate to /login route
  }
}
