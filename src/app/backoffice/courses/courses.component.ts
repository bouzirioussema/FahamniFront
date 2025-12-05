import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  durationInHours: number;
  level: string;
  imageUrl: string;
  published: boolean;
  teacherId: string;
  videoUrl?: string;
  videos?: any[];
}

interface AdminUser {
  id: number;
  username: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-admin-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  loading = false;
  error = '';

  // Filters & search
  searchTerm = '';
  selectedDomain = 'ALL';
  selectedStatus = 'ALL';
  domains: string[] = [];

  // Teacher names map (id -> username)
  teacherNameMap: { [id: string]: string } = {};

  // Selected course for detail panel
  selectedCourse: Course | null = null;

  private coursesApiUrl = 'http://localhost:8082/teacher/courses';
  private apiUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTeachers();
    this.loadCourses();
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  loadCourses(): void {
    this.loading = true;
    this.error = '';
    this.http.get<Course[]>(this.coursesApiUrl).subscribe({
      next: (courses: Course[]) => {
        this.courses = courses;
        this.computeDomains();
        this.applyFilters();
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Failed to load courses: ' + (error.message || 'Unknown error');
        this.loading = false;
      }
    });
  }

  loadTeachers(): void {
    this.http.get<AdminUser[]>(`${this.apiUrl}/admin/users`, { headers: this.getAuthHeaders() })
      .subscribe({
        next: (users: AdminUser[]) => {
          users
            .filter(u => u.role === 'TEACHER')
            .forEach(u => {
              this.teacherNameMap[u.id.toString()] = u.username;
            });
        },
        error: (error: any) => {
          console.error('Failed to load teachers for courses page:', error);
        }
      });
  }

  computeDomains(): void {
    const set = new Set<string>();
    this.courses.forEach(c => {
      if (c.category) {
        set.add(c.category);
      }
    });
    this.domains = Array.from(set);
  }

  applyFilters(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = this.courses.filter(course => {
      const matchesSearch = !term ||
        course.title.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term);

      const matchesDomain = this.selectedDomain === 'ALL' || course.category === this.selectedDomain;

      const matchesStatus =
        this.selectedStatus === 'ALL' ||
        (this.selectedStatus === 'PUBLIC' && course.published) ||
        (this.selectedStatus === 'PRIVATE' && !course.published);

      return matchesSearch && matchesDomain && matchesStatus;
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  getTeacherName(teacherId: string): string {
    return this.teacherNameMap[teacherId] || `Teacher #${teacherId}`;
  }

  selectCourse(course: Course): void {
    this.selectedCourse = course;
  }

  closeDetails(): void {
    this.selectedCourse = null;
  }

  deleteCourse(course: Course): void {
    if (!confirm(`Are you sure you want to delete course "${course.title}" (ID ${course.id})?`)) {
      return;
    }

    this.loading = true;
    this.http.delete(`${this.coursesApiUrl}/${course.id}`).subscribe({
      next: () => {
        // Remove from local arrays and re-apply filters
        this.courses = this.courses.filter(c => c.id !== course.id);
        this.applyFilters();
        this.selectedCourse = null;
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Failed to delete course: ' + (error.message || 'Unknown error');
        this.loading = false;
      }
    });
  }

  toggleCourseStatus(course: Course): void {
    const updated: Course = {
      ...course,
      published: !course.published
    };

    this.loading = true;
    this.http.put<Course>(`${this.coursesApiUrl}/${course.id}`, updated).subscribe({
      next: (saved: Course) => {
        // Mettre à jour la liste complète
        this.courses = this.courses.map(c => c.id === saved.id ? saved : c);
        this.applyFilters();
        // Mettre à jour le cours sélectionné si besoin
        if (this.selectedCourse && this.selectedCourse.id === saved.id) {
          this.selectedCourse = saved;
        }
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Failed to update course status: ' + (error.message || 'Unknown error');
        this.loading = false;
      }
    });
  }
}
