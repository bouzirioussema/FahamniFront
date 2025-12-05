import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../login/AuthService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Course } from '../course/course';
import { CourseService } from '../course/CourseService';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  description: string;
  image: string;
  linkedin: string;
  email: string;
  twitter?: string;
  facebook?: string;
  rating?: number;
}

interface CoursePreview {
  id: number;
  title: string;
  category: string;
  level: string;
  durationInHours: number;
  imageUrl: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  standalone: true,
  imports: [CommonModule, ImageCropperComponent, RouterLink]
})
export class StudentComponent implements OnInit, AfterViewInit {
  userId!: string;
  username: string = 'Student Name';
  email: string = 'student@email.com';
  role: string = 'Student';
  initials: string = 'SN';
  profileImageUrl: string | null = null;
  // State for image cropping
  showCropper: boolean = false;
  imageChangedEvent: any = '';
  croppedFile: File | null = null;
  
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  
  teachers: Teacher[] = [
    {
      id: 1,
      name: 'Jenny Wilson',
      subject: 'Marketing Manager',
      description: 'Senior Instructor, 10+ years',
      image: 'https://randomuser.me/api/portraits/women/21.jpg',
      linkedin: 'https://linkedin.com/in/jenny-wilson',
      email: 'jenny.wilson@fahamni.com',
      twitter: 'https://twitter.com/jennywilson',
      facebook: 'https://facebook.com/jennywilson',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Floyd Miles',
      subject: 'Software Developer',
      description: 'Full-Stack Developer, React Expert',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      linkedin: 'https://linkedin.com/in/floyd-miles',
      email: 'floyd.miles@fahamni.com',
      twitter: 'https://twitter.com/floydmiles',
      facebook: 'https://facebook.com/floydmiles',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Darrell Steward',
      subject: 'Graphic Designer',
      description: 'Creative Director, UI/UX Specialist',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      linkedin: 'https://linkedin.com/in/darrell-steward',
      email: 'darrell.steward@fahamni.com',
      twitter: 'https://twitter.com/darrellsteward',
      facebook: 'https://facebook.com/darrellsteward',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Annette Black',
      subject: 'Data Analyst',
      description: 'PhD in Statistics, Research Expert',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      linkedin: 'https://linkedin.com/in/annette-black',
      email: 'annette.black@fahamni.com',
      twitter: 'https://twitter.com/annetteblack',
      facebook: 'https://facebook.com/annetteblack',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Kristin Watson',
      subject: 'Operations Manager',
      description: 'Operations Lead, Process Optimization',
      image: 'https://randomuser.me/api/portraits/women/67.jpg',
      linkedin: 'https://linkedin.com/in/kristin-watson',
      email: 'kristin.watson@fahamni.com',
      twitter: 'https://twitter.com/kristinwatson',
      facebook: 'https://facebook.com/kristinwatson',
      rating: 4.5
    },
    {
      id: 6,
      name: 'Courtney Henry',
      subject: 'Social Media Manager',
      description: 'Digital Marketing Expert, Content Creator',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      linkedin: 'https://linkedin.com/in/courtney-henry',
      email: 'courtney.henry@fahamni.com',
      twitter: 'https://twitter.com/courtneyhenry',
      facebook: 'https://facebook.com/courtneyhenry',
      rating: 4.4
    }
  ];

  courses: Course[] = [];
  previewCourses: CoursePreview[] = [];

  private apiUrl = 'http://localhost:8082/api';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];
    });
    
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
      const roleText = storedRole.replace('ROLE_', '');
      // Capitalize first letter and make rest lowercase
      this.role = roleText.charAt(0).toUpperCase() + roleText.slice(1).toLowerCase();
    }

    if (this.userId) {
      this.setProfileImageUrl();
    }

    // Charger les cours publiés pour alimenter la section de prévisualisation (6 max)
    this.loadPreviewCourses();
  }
  
  getInitials(name: string): string {
    const names = name.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onTeacherClick(teacher: Teacher): void {
    console.log('Teacher clicked:', teacher);
    // TODO: Navigate to teacher detail page or show modal
  }

  ngAfterViewInit(): void {
    // Add arrow button functionality with timeout to ensure DOM is ready
    setTimeout(() => {
      const leftArrow = document.getElementById('teacher-arrow-left');
      const rightArrow = document.getElementById('teacher-arrow-right');
      const container = document.querySelector('.teachers-container') as HTMLElement;

      if (leftArrow && rightArrow && container) {
        leftArrow.addEventListener('click', () => {
          container.scrollBy({ left: -280, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
          container.scrollBy({ left: 280, behavior: 'smooth' });
        });
      }
    }, 100);
  }

  // Alternative method - you can call these directly from template
  scrollLeft(): void {
    const container = document.querySelector('.teachers-container') as HTMLElement;
    if (container) {
      container.scrollBy({ left: -280, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    const container = document.querySelector('.teachers-container') as HTMLElement;
    if (container) {
      container.scrollBy({ left: 280, behavior: 'smooth' });
    }
  }

  getCardBackground(index: number): string {
    const backgrounds = [
      'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)', // Pink
      'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', // Blue  
      'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', // Green
      'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)', // Yellow
      'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)', // Purple
      'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)'  // Cyan
    ];
    return backgrounds[index % backgrounds.length];
  }

  getStarArray(_rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  private loadPreviewCourses(): void {
    this.courseService.getAllCourses().subscribe({
      next: (allCourses: Course[]) => {
        const published = allCourses.filter(course => course.published);
        this.courses = published;
        const topSix = published.slice(0, 6);
        this.previewCourses = topSix.map(course => ({
          id: course.id,
          title: course.title,
          category: course.category,
          level: course.level,
          durationInHours: course.durationInHours,
          imageUrl: course.imageUrl
        }));
      },
      error: (err) => {
        console.error('Error loading preview courses:', err);
      }
    });
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
    this.profileImageUrl = `${this.apiUrl}/users/${this.userId}/profile-image?t=${Date.now()}`;
  }

  onProfileImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0 || !this.userId) {
      return;
    }
    // Open cropper with selected image instead of uploading directly
    this.imageChangedEvent = event;
    this.showCropper = true;
  }

  // Alias for onProfileImageSelected to match template
  onFileSelected(event: Event): void {
    this.onProfileImageSelected(event);
  }

  triggerFileInput(event: Event): void {
    event.preventDefault();
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  // Called by ngx-image-cropper when the image is cropped
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

  connectWithTeacher(teacher: Teacher): void {
    console.log('Connecting with teacher:', teacher.name);
    // TODO: Implement connection logic (API call, notification, etc.)
    // For now, just show a success message
    alert(`Connection request sent to ${teacher.name}!`);
  }

  navigateToPricing(): void {
    // TODO: Navigate to pricing page when it's created
    alert('Pricing page coming soon!');
  }

}
