import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/AuthService';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';
  message: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  handlePasswordReset() {
    // Clear previous messages
    this.message = '';
    this.errorMessage = '';

    // Validate email
    if (!this.email.trim()) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.isLoading = true;

    // Call the AuthService to send password reset request
    this.authService.forgotPassword(this.email.trim()).subscribe({
      next: (response) => {
        this.isLoading = false;
        const userEmail = this.email.trim(); // Save email before clearing
        this.message = response.message || 'Password reset code has been sent to your email. Please check your inbox.';
        this.errorMessage = '';
        
        // Redirect to reset password page after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/reset-password'], { 
            queryParams: { email: userEmail } 
          });
        }, 3000);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to send password reset code. Please try again.';
        this.message = '';
        console.error('Forgot password error:', error);
      }
    });
  }
}
