import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../login/AuthService";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  userId: string | null = null;
  username: string = 'Teacher Name';
  email: string = 'teacher@email.com';
  role: string = 'Teacher';
  initials: string = 'TN';
  profileImageUrl: string | null = null;
  // State for image cropping
  showCropper: boolean = false;
  imageChangedEvent: any = '';
  croppedFile: File | null = null;

  private apiUrl = 'http://localhost:8082/api';

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = this.authService.getUserId(); // Retrieve userId from AuthService
    
    // Get user info from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedRole = localStorage.getItem('role');
    
    if (storedUsername) {
      this.username = storedUsername;
      this.initials = this.getInitials(storedUsername);
    }
    
    if (storedEmail) {
      this.email = storedEmail;
    }
    
    if (storedRole) {
      // Remove ROLE_ prefix if present and format
      let roleText = storedRole.replace('ROLE_', '');
      // Capitalize first letter and make rest lowercase
      this.role = roleText.charAt(0).toUpperCase() + roleText.slice(1).toLowerCase();
    }

    if (this.userId) {
      this.setProfileImageUrl();
    }
  }
  
  getInitials(name: string): string {
    const names = name.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  createCourse(): void {
    if (this.userId) {
      this.router.navigate([`/teacher/${this.userId}/create_course`]); // Navigate with userId
    } else {
      console.error('User ID is not available.'); // Handle scenario where userId is not available
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    const headersConfig: any = {};
    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }
    return new HttpHeaders(headersConfig);
  }

  private setProfileImageUrl(): void {
    if (!this.userId) {
      return;
    }
    this.profileImageUrl = `${this.apiUrl}/users/${this.userId}/profile-image?t=${Date.now()}`;
  }

  triggerFileInput(event: Event): void {
    event.preventDefault();
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0 || !this.userId) {
      return;
    }
    // Open cropper with selected image instead of uploading directly
    this.imageChangedEvent = event;
    this.showCropper = true;
  }

  imageCropped(event: any): void {
    if (!event || !event.blob) {
      this.croppedFile = null;
      return;
    }

    const blob: Blob = event.blob;
    this.croppedFile = new File([blob], 'profile-image.png', { type: blob.type || 'image/png' });
  }

  saveCroppedImage(): void {
    if (!this.croppedFile || !this.userId) {
      this.showCropper = false;
      return;
    }

    const formData = new FormData();
    formData.append('file', this.croppedFile);

    this.http.post(`${this.apiUrl}/users/${this.userId}/profile-image`, formData, {
      headers: this.getAuthHeaders()
    }).subscribe({
      next: () => {
        this.setProfileImageUrl();
        this.showCropper = false;
        this.imageChangedEvent = '';
        this.croppedFile = null;
      },
      error: (error: any) => {
        console.error('Failed to upload profile image', error);
        this.showCropper = false;
      }
    });
  }

  cancelCrop(): void {
    this.showCropper = false;
    this.imageChangedEvent = '';
    this.croppedFile = null;
  }

  resetCropper(): void {
    this.imageChangedEvent = null;
    this.croppedFile = null;
  }

  viewMyCourses(): void {
    if (this.userId) {
      this.router.navigate([`/teacher/${this.userId}/courses`]);
    }
  }

  isCoursesPage(): boolean {
    return this.router.url.includes('/courses');
  }
}
