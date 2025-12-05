import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  emailVerified: boolean;
  enabled: boolean;
  createdAt?: string;
}

interface UserStats {
  totalUsers: number;
  adminCount: number;
  teacherCount: number;
  studentCount: number;
  verifiedCount: number;
}

interface SubscriptionStats {
  totalPayments: number;
  oneMonthCount: number;
  sixMonthsCount: number;
  oneYearCount: number;
  mostPopularPlan: string;
}

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

interface CourseStats {
  totalCourses: number;
  totalVideos: number;
  byDomain: { [category: string]: number };
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  stats: UserStats = {
    totalUsers: 0,
    adminCount: 0,
    teacherCount: 0,
    studentCount: 0,
    verifiedCount: 0
  };
  subscriptionStats: SubscriptionStats = {
    totalPayments: 0,
    oneMonthCount: 0,
    sixMonthsCount: 0,
    oneYearCount: 0,
    mostPopularPlan: ''
  };

  courseStats: CourseStats = {
    totalCourses: 0,
    totalVideos: 0,
    byDomain: {}
  };
  courses: Course[] = [];
  
  // UI State
  loading = false;
  error = '';
  success = '';
  searchTerm = '';
  selectedRole = '';
  showUserForm = false;
  editingUser: User | null = null;
  
  // Form Data
  userForm = {
    username: '',
    email: '',
    password: '',
    role: 'STUDENT'
  };
  
  // Current admin user info
  currentUser = {
    username: '',
    email: '',
    role: ''
  };

  private apiUrl = 'http://localhost:8082/api';
  private coursesApiUrl = 'http://localhost:8082/teacher/courses';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCurrentUserInfo();
    this.loadUsers();
    this.loadStats();
    this.loadSubscriptionStats();
    this.loadCourseStats();
  }

  loadCurrentUserInfo(): void {
    this.currentUser.username = localStorage.getItem('username') || 'Admin';
    this.currentUser.email = localStorage.getItem('email') || '';
    this.currentUser.role = localStorage.getItem('role') || 'ROLE_ADMIN';
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    
    this.http.get<User[]>(`${this.apiUrl}/admin/users`, { headers: this.getAuthHeaders() })
      .subscribe({
        next: (users: User[]) => {
          this.users = users;
          this.filteredUsers = users;
          this.loading = false;
          this.filterUsers();
        },
        error: (error: any) => {
          this.error = 'Failed to load users: ' + (error.message || 'Unknown error');
          this.loading = false;
        }
      });
  }

  loadCourseStats(): void {
    this.http.get<Course[]>(this.coursesApiUrl).subscribe({
      next: (courses: Course[]) => {
        this.courses = courses;
        this.computeCourseStats();
      },
      error: (error: any) => {
        console.error('Failed to load course stats:', error);
      }
    });
  }

  computeCourseStats(): void {
    const stats: CourseStats = {
      totalCourses: this.courses.length,
      totalVideos: 0,
      byDomain: {}
    };

    this.courses.forEach(c => {
      const videoCount = (c.videos && c.videos.length)
        ? c.videos.length
        : (c.videoUrl ? 1 : 0);

      stats.totalVideos += videoCount;

      const cat = c.category || 'Other';
      stats.byDomain[cat] = (stats.byDomain[cat] || 0) + 1;
    });

    this.courseStats = stats;
  }

  loadStats(): void {
    this.http.get<UserStats>(`${this.apiUrl}/admin/stats`, { headers: this.getAuthHeaders() })
      .subscribe({
        next: (stats: UserStats) => {
          this.stats = stats;
        },
        error: (error: any) => {
          console.error('Failed to load stats:', error);
        }
      });
  }

  loadSubscriptionStats(): void {
    this.http.get<SubscriptionStats>(`${this.apiUrl}/admin/subscription-stats`, { headers: this.getAuthHeaders() })
      .subscribe({
        next: (stats: SubscriptionStats) => {
          this.subscriptionStats = stats;
        },
        error: (error: any) => {
          console.error('Failed to load subscription stats:', error);
        }
      });
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = !this.searchTerm || 
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      
      return matchesSearch && matchesRole;
    });
  }

  openUserForm(user?: User): void {
    this.editingUser = user || null;
    if (user) {
      this.userForm = {
        username: user.username,
        email: user.email,
        password: '',
        role: user.role
      };
    } else {
      this.userForm = {
        username: '',
        email: '',
        password: '',
        role: 'STUDENT'
      };
    }
    this.showUserForm = true;
    this.error = '';
    this.success = '';
  }

  closeUserForm(): void {
    this.showUserForm = false;
    this.editingUser = null;
    this.userForm = {
      username: '',
      email: '',
      password: '',
      role: 'STUDENT'
    };
  }

  saveUser(): void {
    if (!this.userForm.username || !this.userForm.email || (!this.editingUser && !this.userForm.password)) {
      this.error = 'Please fill in all required fields';
      return;
    }

    this.loading = true;
    this.error = '';

    const userData = {
      username: this.userForm.username,
      email: this.userForm.email,
      role: this.userForm.role,
      ...(this.userForm.password && { password: this.userForm.password })
    };

    const operation = this.editingUser
      ? this.http.put(`${this.apiUrl}/admin/users/${this.editingUser.id}`, userData, { headers: this.getAuthHeaders() })
      : this.http.post(`${this.apiUrl}/admin/users`, userData, { headers: this.getAuthHeaders() });

    operation.subscribe({
      next: () => {
        this.success = this.editingUser ? 'User updated successfully' : 'User created successfully';
        this.loading = false;
        this.loadUsers();
        this.loadStats();
        setTimeout(() => this.closeUserForm(), 1500);
      },
      error: (error: any) => {
        this.error = 'Failed to save user: ' + (error.message || 'Unknown error');
        this.loading = false;
      }
    });
  }

  deleteUser(user: User): void {
    if (confirm(`Are you sure you want to delete user "${user.username}"?`)) {
      this.loading = true;
      
      this.http.delete(`${this.apiUrl}/admin/users/${user.id}`, { headers: this.getAuthHeaders() })
        .subscribe({
          next: () => {
            this.success = 'User deleted successfully';
            this.loadUsers();
            this.loadStats();
            setTimeout(() => this.success = '', 3000);
          },
          error: (error: any) => {
            this.error = 'Failed to delete user: ' + (error.message || 'Unknown error');
            this.loading = false;
          }
        });
    }
  }

  toggleUserStatus(user: User): void {
    this.http.patch(`${this.apiUrl}/admin/users/${user.id}/toggle-status`, {}, { headers: this.getAuthHeaders() })
      .subscribe({
        next: () => {
          this.success = 'User status updated successfully';
          this.loadUsers();
          setTimeout(() => this.success = '', 3000);
        },
        error: (error: any) => {
          this.error = 'Failed to update user status: ' + (error.message || 'Unknown error');
        }
      });
  }

  getRoleColor(role: string): string {
    switch (role) {
      case 'ADMIN': return '#dc2626';
      case 'TEACHER': return '#2563eb';
      case 'STUDENT': return '#059669';
      default: return '#6b7280';
    }
  }

  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'ADMIN': return 'badge-admin';
      case 'TEACHER': return 'badge-teacher';
      case 'STUDENT': return 'badge-student';
      default: return 'badge-default';
    }
  }

  getInitials(username: string): string {
    if (!username) return '';
    return username.charAt(0).toUpperCase();
  }

  getUserAvatarColor(username: string): string {
    const colors = [
      '#3b82f6', // blue
      '#ef4444', // red
      '#10b981', // green
      '#f59e0b', // yellow
      '#8b5cf6', // purple
      '#06b6d4', // cyan
      '#f97316', // orange
      '#84cc16', // lime
      '#ec4899', // pink
      '#6366f1'  // indigo
    ];
    
    // Generate a consistent color based on username
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
