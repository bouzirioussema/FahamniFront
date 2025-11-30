import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  // Current admin user info
  currentUser = {
    username: '',
    email: '',
    role: ''
  };

  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadCurrentUserInfo();
  }

  loadCurrentUserInfo(): void {
    // Get user info from localStorage (stored by AuthService)
    const username = localStorage.getItem('username') || 'Admin';
    const email = localStorage.getItem('email') || 'admin@example.com';
    const role = localStorage.getItem('role') || 'ADMIN';
    
    // Convert ROLE_ADMIN to Admin for display
    const displayRole = role.replace('ROLE_', '');
    
    this.currentUser = {
      username: username,
      email: email,
      role: displayRole
    };
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

  navigateTo(route: string): void {
    this.router.navigate([route], { relativeTo: this.route });
  }

  navigateToAbsolute(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
