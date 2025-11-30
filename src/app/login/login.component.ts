import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  showPassword: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Redirect to the respective page if the user is already logged in
    const role = this.authService.getRole();
    const userId = this.authService.getUserId();
    if (role && userId) {
      if (role === 'ROLE_ADMIN') {
        this.router.navigate(['/admin', userId]);
      } else if (role === 'ROLE_STUDENT') {
        this.router.navigate(['/student', userId]);
      } else if (role === 'ROLE_TEACHER') {
        this.router.navigate(['/teacher', userId]);
      }
    }
  }

  ngOnInit(): void {
    // Check if user was redirected from email verification
    this.route.queryParams.subscribe(params => {
      if (params['verified'] === 'true') {
        this.successMessage = 'Email verified successfully! Please log in to continue.';
        // Clear the query parameter from URL
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {},
          replaceUrl: true
        });
        
        // Auto-populate email if provided
        if (params['email']) {
          this.email = params['email'];
        }
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      }
    });
  }

  navigateToForgetPassword(): void {
    this.router.navigate(['/forgetpassword']); // Adjust the route as per your application's routing setup
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  loginWithGoogle(): void {
    // Redirect to backend OAuth endpoint for Google
    window.location.href = 'http://localhost:8082/oauth2/authorization/google';
  }

  loginWithGithub(): void {
    // Redirect to backend OAuth endpoint for GitHub
    window.location.href = 'http://localhost:8082/oauth2/authorization/github';
  }

  login(): void {
    this.errorMessage = ''; // Clear previous error
    
    if (!this.email.trim()) {
      this.errorMessage = 'Email is required.';
      return;
    }

    if (!this.password) {
      this.errorMessage = 'Password is required.';
      return;
    }

    this.authService.login(this.email.trim(), this.password).subscribe(
      () => {
        const userId = this.authService.getUserId();
        if (!userId) {
          this.errorMessage = 'Login failed: User ID is undefined.';
          console.error('Login failed: User ID is undefined.');
          return;
        }

        const role = this.authService.getRole();
        if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/backoffice/dashboard']);
        } else if (role === 'ROLE_STUDENT') {
          this.router.navigate(['/student', userId]);
        } else if (role === 'ROLE_TEACHER') {
          this.router.navigate(['/teacher', userId]);
        } else {
          this.errorMessage = 'Login failed: Unknown role.';
          console.error('Login failed: Unknown role:', role);
        }
      },
      error => {
        // Extract error message from error object
        this.errorMessage = error?.message || error?.error?.message || 
          (error.status === 401 ? 'Invalid email or password. Please try again.' : 
           'An unexpected error occurred. Please try again later.');
        console.error('Login error:', error);
      }
    );
  }
}
