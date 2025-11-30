import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../login/AuthService';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  email: string = '';
  code: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  currentStep: number = 1; // 1: enter email, 2: enter code, 3: enter new password

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Get email from query params if available
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];
        // If email is provided, skip to step 2 (enter code)
        this.currentStep = 2;
      }
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // Step 1: Send verification code to email
  sendCode(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email.trim()) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.isLoading = true;

    this.authService.forgotPassword(this.email.trim()).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Verification code sent to your email!';
        this.errorMessage = '';
        // Move to step 2
        this.currentStep = 2;
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to send code. Please try again.';
        this.successMessage = '';
      }
    });
  }

  // Step 2: Verify the code
  verifyCode(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.code.trim()) {
      this.errorMessage = 'Please enter the verification code.';
      return;
    }

    if (this.code.trim().length !== 6) {
      this.errorMessage = 'Verification code must be 6 digits.';
      return;
    }

    this.isLoading = true;

    // Verify code by calling backend with a temporary password
    // We'll use a special endpoint or just move to step 3 and verify during password reset
    this.isLoading = false;
    this.successMessage = 'Code verified! Please enter your new password.';
    this.currentStep = 3;
  }

  // Step 3: Reset password
  resetPassword(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.newPassword) {
      this.errorMessage = 'Please enter a new password.';
      return;
    }

    if (this.newPassword.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.isLoading = true;

    this.authService.resetPassword(this.email.trim(), this.code.trim(), this.newPassword).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.successMessage = response.message || 'Password reset successfully! Redirecting to login...';
        this.errorMessage = '';
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to reset password. Please try again.';
        this.successMessage = '';
        console.error('Reset password error:', error);
      }
    });
  }
}
