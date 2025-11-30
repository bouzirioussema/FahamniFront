import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/AuthService';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  loginWithGoogle(): void {
    // Redirect to backend OAuth endpoint for Google
    window.location.href = 'http://localhost:8082/oauth2/authorization/google';
  }

  loginWithGithub(): void {
    // Redirect to backend OAuth endpoint for GitHub
    window.location.href = 'http://localhost:8082/oauth2/authorization/github';
  }

  register(): void {
    // Clear previous messages
    this.errorMessage = '';
    this.successMessage = '';

    // Client-side validation
    if (!this.username.trim()) {
      this.errorMessage = 'Username is required.';
      return;
    }

    if (this.username.trim().length < 3) {
      this.errorMessage = 'Username must be at least 3 characters long.';
      return;
    }

    // Note: Username can be duplicated - only email must be unique

    if (!this.email.trim()) {
      this.errorMessage = 'Email is required.';
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    if (!this.password) {
      this.errorMessage = 'Password is required.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.authService.register(this.username.trim(), this.email.trim(), this.password).subscribe({
      next: (response) => {
        if (response && response.success) {
          this.successMessage = response.message || 'Account created successfully! Please check your email for verification code.';
          this.errorMessage = '';
          // Rediriger vers la page de vérification après 2 secondes
          setTimeout(() => {
            this.router.navigate(['/email-verification'], { 
              queryParams: { email: this.email } 
            });
          }, 2000);
        } else {
          // This shouldn't happen due to AuthService check, but handle it just in case
          this.errorMessage = response?.message || 'Registration failed. Please try again.';
        }
      },
      error: (error) => {
        // Extract error message from error object
        // The error object from AuthService has the message at the top level
        let errorMsg = 'Registration failed. Please try again.';
        
        // Try multiple ways to extract the error message
        if (error?.message) {
          errorMsg = error.message;
        } else if (error?.error?.message) {
          errorMsg = error.error.message;
        } else if (typeof error?.error === 'string') {
          errorMsg = error.error;
        } else if (error?.error?.error?.message) {
          errorMsg = error.error.error.message;
        }
        
        this.errorMessage = errorMsg;
        this.successMessage = ''; // Clear success message if there was one
        console.error('Registration error:', error);
        console.log('Extracted error message:', errorMsg);
      }
    });
  }
}
