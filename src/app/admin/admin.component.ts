import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login/AuthService';
import { AdminService } from './admin.service';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  emailVerified: boolean;
  createdAt?: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  loading = false;
  error = '';
  success = '';
  
  // Search and filter
  searchTerm = '';
  selectedRole = '';
  
  // User form
  showUserForm = false;
  editingUser: User | null = null;
  userForm = {
    username: '',
    email: '',
    password: '',
    role: 'STUDENT'
  };
  
  // Admin info
  adminUsername = '';
  adminEmail = '';
  adminInitials = '';

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAdminInfo();
    this.loadUsers();
  }

  loadAdminInfo(): void {
    const username = localStorage.getItem('username') || 'Admin';
    const email = localStorage.getItem('email') || 'admin@example.com';
    
    this.adminUsername = username;
    this.adminEmail = email;
    this.adminInitials = this.getInitials(username);
  }

  getInitials(name: string): string {
    const names = name.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    
    this.adminService.getAllUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
        this.filteredUsers = users;
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Failed to load users: ' + (error.message || 'Unknown error');
        this.loading = false;
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

  onSearchChange(): void {
    this.filterUsers();
  }

  onRoleFilterChange(): void {
    this.filterUsers();
  }

  openUserForm(user?: User): void {
    this.showUserForm = true;
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
  }

  closeUserForm(): void {
    this.showUserForm = false;
    this.editingUser = null;
    this.error = '';
    this.success = '';
  }

  saveUser(): void {
    if (!this.userForm.username || !this.userForm.email) {
      this.error = 'Username and email are required';
      return;
    }

    if (!this.editingUser && !this.userForm.password) {
      this.error = 'Password is required for new users';
      return;
    }

    this.loading = true;
    this.error = '';

    const operation = this.editingUser 
      ? this.adminService.updateUser(this.editingUser.id, {
          username: this.userForm.username,
          email: this.userForm.email,
          role: this.userForm.role,
          ...(this.userForm.password && { password: this.userForm.password })
        })
      : this.adminService.createUser({
          username: this.userForm.username,
          email: this.userForm.email,
          role: this.userForm.role,
          password: this.userForm.password
        });

    operation.subscribe({
      next: () => {
        this.success = this.editingUser ? 'User updated successfully' : 'User created successfully';
        this.loading = false;
        this.loadUsers();
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
      
      this.adminService.deleteUser(user.id).subscribe({
        next: () => {
          this.success = 'User deleted successfully';
          this.loadUsers();
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
    // Toggle email verification status
    this.adminService.toggleUserStatus(user.id).subscribe({
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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
