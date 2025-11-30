import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  
  // UI State
  loading = false;
  error = '';
  success = '';
  searchTerm = '';
  selectedRole = '';
  showUserForm = false;
  showDeleteConfirm = false;
  editingUser: User | null = null;
  userToDelete: User | null = null;
  
  // Form data
  userForm = {
    username: '',
    email: '',
    password: '',
    role: ''
  };

  private apiUrl = 'http://localhost:8082/api';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // Try to load users, but don't block the page if it fails
    try {
      this.loadUsers();
    } catch (error) {
      console.error('Error loading users:', error);
      this.loading = false;
    }
  }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    
    // Get the JWT token (stored as 'jwtToken' by AuthService)
    const token = localStorage.getItem('jwtToken');
    
    if (!token) {
      this.loading = false;
      this.error = 'No authentication token found. Available storage: ' + Object.keys(localStorage).join(', ');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    this.http.get<User[]>(`${this.apiUrl}/admin/users`, { headers }).subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = users;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.error = 'Failed to load users. Please try again.';
        this.loading = false;
        
        if (error.status === 401 || error.status === 403) {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
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
    this.showUserForm = true;
    
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
        role: ''
      };
    }
  }

  closeUserForm(): void {
    this.showUserForm = false;
    this.editingUser = null;
    this.userForm = {
      username: '',
      email: '',
      password: '',
      role: ''
    };
  }

  saveUser(): void {
    this.loading = true;
    this.error = '';
    this.success = '';
    
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.error = 'No authentication token found. Please login again.';
      this.loading = false;
      return;
    }
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const userData = {
      username: this.userForm.username,
      email: this.userForm.email,
      role: this.userForm.role,
      ...(this.userForm.password && { password: this.userForm.password })
    };

    const request = this.editingUser
      ? this.http.put(`${this.apiUrl}/admin/users/${this.editingUser.id}`, userData, { headers })
      : this.http.post(`${this.apiUrl}/admin/users`, userData, { headers });

    request.subscribe({
      next: () => {
        this.success = this.editingUser ? 'User updated successfully!' : 'User created successfully!';
        this.closeUserForm();
        this.loadUsers();
        this.loading = false;
        
        setTimeout(() => {
          this.success = '';
        }, 3000);
      },
      error: (error) => {
        console.error('Error saving user:', error);
        this.error = error.error?.message || 'Failed to save user. Please try again.';
        this.loading = false;
      }
    });
  }

  toggleUserStatus(user: User): void {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.error = 'No authentication token found. Please login again.';
      return;
    }
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const newStatus = !user.emailVerified;
    
    this.http.put(`${this.apiUrl}/admin/users/${user.id}/status`, 
      { emailVerified: newStatus }, 
      { headers }
    ).subscribe({
      next: () => {
        user.emailVerified = newStatus;
        this.success = `User ${newStatus ? 'verified' : 'unverified'} successfully!`;
        
        setTimeout(() => {
          this.success = '';
        }, 3000);
      },
      error: (error) => {
        console.error('Error updating user status:', error);
        this.error = 'Failed to update user status. Please try again.';
      }
    });
  }

  deleteUser(user: User): void {
    this.userToDelete = user;
    this.showDeleteConfirm = true;
  }

  confirmDelete(): void {
    if (!this.userToDelete) return;

    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.error = 'No authentication token found. Please login again.';
      this.closeDeleteConfirm();
      return;
    }
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    this.http.delete(`${this.apiUrl}/admin/users/${this.userToDelete.id}`, { 
      headers, 
      observe: 'response',
      responseType: 'text'
    }).subscribe({
      next: (response) => {
        console.log('Delete response:', response);
        this.success = 'User deleted successfully!';
        this.loadUsers();
        this.closeDeleteConfirm();
        
        setTimeout(() => {
          this.success = '';
        }, 3000);
      },
      error: (error) => {
        console.error('Error deleting user:', error);
        // Check if it's actually a success but with different response format
        if (error.status === 200 || error.status === 204) {
          this.success = 'User deleted successfully!';
          this.loadUsers();
          this.closeDeleteConfirm();
          
          setTimeout(() => {
            this.success = '';
          }, 3000);
        } else {
          this.error = 'Failed to delete user. Please try again.';
          this.closeDeleteConfirm();
        }
      }
    });
  }

  closeDeleteConfirm(): void {
    this.showDeleteConfirm = false;
    this.userToDelete = null;
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
}
