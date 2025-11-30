import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../login/AuthService";

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

  constructor(private authService: AuthService, private router: Router) { }

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
}
