import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../login/AuthService';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  verificationCode: string = '';
  email: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérer l'email depuis les paramètres de route ou le localStorage
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || localStorage.getItem('pendingVerificationEmail') || '';
    });
  }

  verifyEmail(): void {
    // Clear previous messages
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email.trim()) {
      this.errorMessage = 'Email address is required.';
      return;
    }

    if (!this.verificationCode.trim()) {
      this.errorMessage = 'Please enter the verification code.';
      return;
    }

    // Validate code format (6 digits)
    if (!/^\d{6}$/.test(this.verificationCode.trim())) {
      this.errorMessage = 'Verification code must be exactly 6 digits.';
      return;
    }

    this.isLoading = true;

    this.authService.verifyEmail(this.email.trim(), this.verificationCode.trim()).subscribe({
      next: (response) => {
        // Check if response indicates success
        if (response && (response.success === true || response.success === undefined)) {
          this.successMessage = response.message || 'Email verified successfully! Redirecting to login page...';
          this.errorMessage = '';
          this.isLoading = false;
          
          // Clear localStorage (including any potential auth tokens)
          localStorage.removeItem('pendingVerificationEmail');
          localStorage.removeItem('jwtToken');
          localStorage.removeItem('userId');
          localStorage.removeItem('role');
          
          // Redirect to login page with success parameter after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/login'], { 
              queryParams: { verified: 'true', email: this.email.trim() } 
            });
          }, 2000);
        } else {
          // Response indicates failure
          this.isLoading = false;
          this.errorMessage = response?.message || 'Verification failed. Please try again.';
          this.successMessage = '';
        }
      },
      error: (error) => {
        this.isLoading = false;
        let errorMsg = 'Invalid or expired verification code. Please try again.';
        
        // Extract error message from various possible formats
        if (error?.message) {
          errorMsg = error.message;
        } else if (error?.error) {
          if (typeof error.error === 'string') {
            errorMsg = error.error;
          } else if (error.error.message) {
            errorMsg = error.error.message;
          } else if (error.error instanceof Object && 'message' in error.error) {
            errorMsg = error.error.message;
          }
        }
        
        this.errorMessage = errorMsg;
        this.successMessage = '';
        console.error('Verification error:', error);
      }
    });
  }

  resendCode(): void {
    // Clear previous messages
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email.trim()) {
      this.errorMessage = 'Email address is not available to resend the code.';
      return;
    }

    this.isLoading = true;

    this.authService.resendVerificationCode(this.email.trim()).subscribe({
      next: (_response) => {
        this.successMessage = 'A new verification code has been sent to your email address.';
        this.errorMessage = '';
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        const errorMsg = error?.message || error?.error?.message || 
          (typeof error?.error === 'string' ? error.error : 'Failed to resend verification code. Please try again.');
        this.errorMessage = errorMsg;
        console.error('Resend code error:', error);
      }
    });
  }
}
