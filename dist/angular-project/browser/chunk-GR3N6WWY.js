import {
  FormsModule
} from "./chunk-COCQ7PWP.js";
import {
  CommonModule,
  HttpClient,
  HttpHeaders,
  Router,
  RouterModule,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QEARECIC.js";

// src/app/backoffice/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  router;
  http;
  users = [];
  filteredUsers = [];
  stats = {
    totalUsers: 0,
    adminCount: 0,
    teacherCount: 0,
    studentCount: 0,
    verifiedCount: 0
  };
  // UI State
  loading = false;
  error = "";
  success = "";
  searchTerm = "";
  selectedRole = "";
  showUserForm = false;
  editingUser = null;
  // Form Data
  userForm = {
    username: "",
    email: "",
    password: "",
    role: "STUDENT"
  };
  // Current admin user info
  currentUser = {
    username: "",
    email: "",
    role: ""
  };
  apiUrl = "http://localhost:8082/api";
  constructor(router, http) {
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    this.loadCurrentUserInfo();
    this.loadUsers();
    this.loadStats();
  }
  loadCurrentUserInfo() {
    this.currentUser.username = localStorage.getItem("username") || "Admin";
    this.currentUser.email = localStorage.getItem("email") || "";
    this.currentUser.role = localStorage.getItem("role") || "ROLE_ADMIN";
  }
  getAuthHeaders() {
    const token = localStorage.getItem("jwtToken");
    return new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
  }
  loadUsers() {
    this.loading = true;
    this.error = "";
    this.http.get(`${this.apiUrl}/admin/users`, { headers: this.getAuthHeaders() }).subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = users;
        this.loading = false;
        this.filterUsers();
      },
      error: (error) => {
        this.error = "Failed to load users: " + (error.message || "Unknown error");
        this.loading = false;
      }
    });
  }
  loadStats() {
    this.http.get(`${this.apiUrl}/admin/stats`, { headers: this.getAuthHeaders() }).subscribe({
      next: (stats) => {
        this.stats = stats;
      },
      error: (error) => {
        console.error("Failed to load stats:", error);
      }
    });
  }
  filterUsers() {
    this.filteredUsers = this.users.filter((user) => {
      const matchesSearch = !this.searchTerm || user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      return matchesSearch && matchesRole;
    });
  }
  openUserForm(user) {
    this.editingUser = user || null;
    if (user) {
      this.userForm = {
        username: user.username,
        email: user.email,
        password: "",
        role: user.role
      };
    } else {
      this.userForm = {
        username: "",
        email: "",
        password: "",
        role: "STUDENT"
      };
    }
    this.showUserForm = true;
    this.error = "";
    this.success = "";
  }
  closeUserForm() {
    this.showUserForm = false;
    this.editingUser = null;
    this.userForm = {
      username: "",
      email: "",
      password: "",
      role: "STUDENT"
    };
  }
  saveUser() {
    if (!this.userForm.username || !this.userForm.email || !this.editingUser && !this.userForm.password) {
      this.error = "Please fill in all required fields";
      return;
    }
    this.loading = true;
    this.error = "";
    const userData = __spreadValues({
      username: this.userForm.username,
      email: this.userForm.email,
      role: this.userForm.role
    }, this.userForm.password && { password: this.userForm.password });
    const operation = this.editingUser ? this.http.put(`${this.apiUrl}/admin/users/${this.editingUser.id}`, userData, { headers: this.getAuthHeaders() }) : this.http.post(`${this.apiUrl}/admin/users`, userData, { headers: this.getAuthHeaders() });
    operation.subscribe({
      next: () => {
        this.success = this.editingUser ? "User updated successfully" : "User created successfully";
        this.loading = false;
        this.loadUsers();
        this.loadStats();
        setTimeout(() => this.closeUserForm(), 1500);
      },
      error: (error) => {
        this.error = "Failed to save user: " + (error.message || "Unknown error");
        this.loading = false;
      }
    });
  }
  deleteUser(user) {
    if (confirm(`Are you sure you want to delete user "${user.username}"?`)) {
      this.loading = true;
      this.http.delete(`${this.apiUrl}/admin/users/${user.id}`, { headers: this.getAuthHeaders() }).subscribe({
        next: () => {
          this.success = "User deleted successfully";
          this.loadUsers();
          this.loadStats();
          setTimeout(() => this.success = "", 3e3);
        },
        error: (error) => {
          this.error = "Failed to delete user: " + (error.message || "Unknown error");
          this.loading = false;
        }
      });
    }
  }
  toggleUserStatus(user) {
    this.http.patch(`${this.apiUrl}/admin/users/${user.id}/toggle-status`, {}, { headers: this.getAuthHeaders() }).subscribe({
      next: () => {
        this.success = "User status updated successfully";
        this.loadUsers();
        setTimeout(() => this.success = "", 3e3);
      },
      error: (error) => {
        this.error = "Failed to update user status: " + (error.message || "Unknown error");
      }
    });
  }
  getRoleColor(role) {
    switch (role) {
      case "ADMIN":
        return "#dc2626";
      case "TEACHER":
        return "#2563eb";
      case "STUDENT":
        return "#059669";
      default:
        return "#6b7280";
    }
  }
  getRoleBadgeClass(role) {
    switch (role) {
      case "ADMIN":
        return "badge-admin";
      case "TEACHER":
        return "badge-teacher";
      case "STUDENT":
        return "badge-student";
      default:
        return "badge-default";
    }
  }
  getInitials(username) {
    if (!username)
      return "";
    return username.charAt(0).toUpperCase();
  }
  getUserAvatarColor(username) {
    const colors = [
      "#3b82f6",
      // blue
      "#ef4444",
      // red
      "#10b981",
      // green
      "#f59e0b",
      // yellow
      "#8b5cf6",
      // purple
      "#06b6d4",
      // cyan
      "#f97316",
      // orange
      "#84cc16",
      // lime
      "#ec4899",
      // pink
      "#6366f1"
      // indigo
    ];
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  }
  isActiveRoute(route) {
    return this.router.url === route;
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function DashboardComponent_Factory(t) {
    return new (t || _DashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 4, consts: [[1, "stats-section"], [1, "stats-grid"], [1, "stat-card", "total"], [1, "stat-icon"], [1, "material-icons"], [1, "stat-content"], [1, "stat-card", "admin"], [1, "stat-card", "teacher"], [1, "stat-card", "student"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "i", 4);
      \u0275\u0275text(5, "people");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "h3");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Total Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 3)(13, "i", 4);
      \u0275\u0275text(14, "admin_panel_settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "h3");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Administrators");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 7)(21, "div", 3)(22, "i", 4);
      \u0275\u0275text(23, "school");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 5)(25, "h3");
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Teachers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 8)(30, "div", 3)(31, "i", 4);
      \u0275\u0275text(32, "menu_book");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 5)(34, "h3");
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "Students");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.totalUsers);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.stats.adminCount);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.stats.teacherCount);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.stats.studentCount);
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  display: flex;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: white;\n  border-right: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  z-index: 100;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #3b82f6;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem 0;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  color: #6b7280;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  margin: 0 0.5rem;\n  border-radius: 6px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.main-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 240px;\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 0.75rem 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.header-left[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.dashboard-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.8rem;\n  margin: 0.25rem 0 0 0;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n  font-size: 0.9rem;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 0.4rem 0.8rem;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  transition: background 0.2s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.dashboard-main[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem;\n}\n.stats-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border: 1px solid #e5e7eb;\n  transition: box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.stat-card.total[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.stat-card.admin[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.stat-card.teacher[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #06b6d4;\n  color: white;\n}\n.stat-card.student[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 1rem 0 0 0;\n  color: #1f2937;\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin: 0.125rem 0 0 0;\n}\n.users-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e5e7eb;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n}\n.header-left-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex: 1;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  white-space: nowrap;\n}\n.filters-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #374151;\n}\n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #e5e7eb;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3), .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4), .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: center;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.8rem;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.user-info-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.user-info-cell[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  font-size: 0.7rem;\n}\n.user-avatar-small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 500;\n  font-size: 0.7rem;\n  flex-shrink: 0;\n}\n.user-details-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-details-cell[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n}\n.user-details-cell[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.role-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n}\n.role-badge.admin[_ngcontent-%COMP%], .badge-admin[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  background: #fef2f2;\n  color: #dc2626;\n}\n.role-badge.teacher[_ngcontent-%COMP%], .badge-teacher[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  background: #eff6ff;\n  color: #2563eb;\n}\n.role-badge.student[_ngcontent-%COMP%], .badge-student[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  background: #f0fdf4;\n  color: #059669;\n}\n.badge-default[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  display: inline-block;\n}\n.status-active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #059669;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n}\n.status-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: background 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.8rem;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #374151;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-family: "Material Icons";\n  font-weight: normal;\n  font-style: normal;\n  font-size: inherit;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-feature-settings: "liga";\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n  vertical-align: middle;\n}\n.dashboard-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-right: 0.4rem;\n}\n.stat-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 0.4rem;\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 0.4rem;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n  display: block;\n  opacity: 0.4;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #059669;\n}\n.error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n}\n.success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #059669;\n  padding: 1rem;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem 0.5rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  color: #6b7280;\n  z-index: 1;\n}\n.role-filter[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  background: white;\n  color: #374151;\n  cursor: pointer;\n  min-width: 120px;\n}\n.role-filter[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.btn-toggle[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.btn-toggle[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #6b7280;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #374151;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n  }\n  .main-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .dashboard-main[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    align-items: flex-start;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .header-left-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .filters-inline[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .role-filter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .users-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    width: calc(100% - 1rem);\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\backoffice\\dashboard\\dashboard.component.ts", lineNumber: 32 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-GR3N6WWY.js.map
