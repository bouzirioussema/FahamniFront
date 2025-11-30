import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8082/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        // Check if response contains an error message
        if (response.message && !response.token) {
          throw new Error(response.message);
        }
        localStorage.setItem('jwtToken', response.token);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('role', response.role);
        localStorage.setItem('email', email);
        
        // Store username - use from response or extract from email
        if (response.username) {
          localStorage.setItem('username', response.username);
        } else {
          // Extract username from email (part before @)
          const usernameFromEmail = email.split('@')[0];
          // Capitalize first letter
          const formattedUsername = usernameFromEmail.charAt(0).toUpperCase() + usernameFromEmail.slice(1);
          localStorage.setItem('username', formattedUsername);
        }
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        // Extract error message from response
        let errorMessage = 'Login failed. Please try again.';
        if (error.error) {
          if (error.error.message) {
            errorMessage = error.error.message;
          } else if (typeof error.error === 'string') {
            errorMessage = error.error;
          }
        }
        return throwError(() => ({ message: errorMessage, status: error.status }));
      })
    );
  }

  register(username: string, email: string, password: string, role: string = 'STUDENT'): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, email, password, role }).pipe(
      map(response => {
        // Check if response indicates success
        if (response && response.success) {
          // Stocker l'email pour la vérification
          localStorage.setItem('pendingVerificationEmail', email);
          return response;
        } else {
          // If response exists but success is false, throw error
          throw new Error(response?.message || 'Registration failed. Please try again.');
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // Extract error message from response
        let errorMessage = 'Registration failed. Please try again.';
        
        if (error.error) {
          // Backend returns RegisterResponse with message field
          if (error.error.message) {
            errorMessage = error.error.message;
          } else if (typeof error.error === 'string') {
            errorMessage = error.error;
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        return throwError(() => ({ 
          message: errorMessage, 
          status: error.status,
          error: error.error 
        }));
      })
    );
  }

  verifyEmail(email: string, verificationCode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/verify-email`, { email, verificationCode }).pipe(
      map(response => {
        // Handle both string and object responses
        if (typeof response === 'string') {
          return { message: response, success: true };
        }
        // If response is an object with success field, return as is
        if (response && typeof response === 'object') {
          return response;
        }
        // Default success response
        return { message: 'Email verified successfully!', success: true };
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Verification failed. Please try again.';
        if (error.error) {
          if (typeof error.error === 'string') {
            errorMessage = error.error;
          } else if (error.error.message) {
            errorMessage = error.error.message;
          } else if (error.error instanceof Object && 'message' in error.error) {
            errorMessage = error.error.message;
          }
        }
        return throwError(() => ({ 
          message: errorMessage, 
          status: error.status,
          error: error.error 
        }));
      })
    );
  }

  resendVerificationCode(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/resend-verification`, { email }).pipe(
      map(response => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Failed to resend verification code. Please try again.';
        if (error.error) {
          if (typeof error.error === 'string') {
            errorMessage = error.error;
          } else if (error.error.message) {
            errorMessage = error.error.message;
          }
        }
        return throwError(() => ({ message: errorMessage, status: error.status }));
      })
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email }, { responseType: 'text' }).pipe(
      map(response => {
        // Backend returns plain text string
        return { message: response, success: true };
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Failed to send password reset code. Please try again.';
        if (error.error) {
          if (typeof error.error === 'string') {
            errorMessage = error.error;
          } else if (error.error.message) {
            errorMessage = error.error.message;
          }
        }
        return throwError(() => ({ message: errorMessage, status: error.status }));
      })
    );
  }

  resetPassword(email: string, code: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, { email, code, newPassword }, { responseType: 'text' }).pipe(
      map(response => {
        // Backend returns plain text string
        return { message: response, success: true };
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Failed to reset password. Please try again.';
        if (error.error) {
          if (typeof error.error === 'string') {
            errorMessage = error.error;
          } else if (error.error.message) {
            errorMessage = error.error.message;
          }
        }
        return throwError(() => ({ message: errorMessage, status: error.status }));
      })
    );
  }
  

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }
}
