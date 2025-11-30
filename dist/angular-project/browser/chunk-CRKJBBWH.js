import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-COCQ7PWP.js";
import {
  CommonModule,
  HttpClient,
  HttpHeaders,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QEARECIC.js";

// src/app/backoffice/users/users.component.ts
function UsersComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading users...");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "i", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function UsersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "i", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.success, " ");
  }
}
function UsersComponent_div_26_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 26)(1, "td", 27)(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "td", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 33)(11, "span", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 35)(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 37)(17, "div", 38)(18, "button", 39);
    \u0275\u0275listener("click", function UsersComponent_div_26_tr_15_Template_button_click_18_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openUserForm(user_r3));
    });
    \u0275\u0275elementStart(19, "i", 5);
    \u0275\u0275text(20, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 40);
    \u0275\u0275listener("click", function UsersComponent_div_26_tr_15_Template_button_click_21_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleUserStatus(user_r3));
    });
    \u0275\u0275elementStart(22, "i", 5);
    \u0275\u0275text(23, "toggle_on");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 41);
    \u0275\u0275listener("click", function UsersComponent_div_26_tr_15_Template_button_click_24_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteUser(user_r3));
    });
    \u0275\u0275elementStart(25, "i", 5);
    \u0275\u0275text(26, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r0.getUserAvatarColor(user_r3.username));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(user_r3.username), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getRoleBadgeClass(user_r3.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.role, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r3.emailVerified ? "status-active" : "status-inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.emailVerified ? "Verified" : "Unverified", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("title", user_r3.emailVerified ? "Disable User" : "Enable User");
  }
}
function UsersComponent_div_26_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "i", 5);
    \u0275\u0275text(2, "people_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No users found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your search or filters");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, UsersComponent_div_26_tr_15_Template, 27, 10, "tr", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, UsersComponent_div_26_div_16_Template, 7, 0, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.filteredUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredUsers.length === 0);
  }
}
function UsersComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "h2");
    \u0275\u0275text(4, "Add New User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function UsersComponent_div_27_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUserForm());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 47);
    \u0275\u0275listener("ngSubmit", function UsersComponent_div_27_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveUser());
    });
    \u0275\u0275elementStart(8, "div", 48)(9, "label");
    \u0275\u0275text(10, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_27_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.userForm.username, $event) || (ctx_r0.userForm.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 48)(13, "label");
    \u0275\u0275text(14, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_27_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.userForm.email, $event) || (ctx_r0.userForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 48)(17, "label");
    \u0275\u0275text(18, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_27_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.userForm.password, $event) || (ctx_r0.userForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 48)(21, "label");
    \u0275\u0275text(22, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_27_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.userForm.role, $event) || (ctx_r0.userForm.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 8);
    \u0275\u0275text(25, "Select Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 9);
    \u0275\u0275text(27, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 10);
    \u0275\u0275text(29, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 11);
    \u0275\u0275text(31, "Student");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 53)(33, "button", 54);
    \u0275\u0275listener("click", function UsersComponent_div_27_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUserForm());
    });
    \u0275\u0275text(34, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 55);
    \u0275\u0275text(36, "Create User");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.userForm.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.userForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.userForm.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.userForm.role);
  }
}
var UsersComponent = class _UsersComponent {
  router;
  http;
  users = [];
  filteredUsers = [];
  // UI State
  loading = false;
  error = "";
  success = "";
  searchTerm = "";
  selectedRole = "";
  showUserForm = false;
  editingUser = null;
  // Form data
  userForm = {
    username: "",
    email: "",
    password: "",
    role: ""
  };
  apiUrl = "http://localhost:8082/api";
  constructor(router, http) {
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    try {
      this.loadUsers();
    } catch (error) {
      console.error("Error loading users:", error);
      this.loading = false;
    }
  }
  loadUsers() {
    this.loading = true;
    this.error = "";
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      this.loading = false;
      this.error = "No authentication token found. Available storage: " + Object.keys(localStorage).join(", ");
      return;
    }
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    this.http.get(`${this.apiUrl}/admin/users`, { headers }).subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = users;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading users:", error);
        this.error = "Failed to load users. Please try again.";
        this.loading = false;
        if (error.status === 401 || error.status === 403) {
          localStorage.clear();
          this.router.navigate(["/login"]);
        }
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
    this.showUserForm = true;
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
        role: ""
      };
    }
  }
  closeUserForm() {
    this.showUserForm = false;
    this.editingUser = null;
    this.userForm = {
      username: "",
      email: "",
      password: "",
      role: ""
    };
  }
  saveUser() {
    this.loading = true;
    this.error = "";
    this.success = "";
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    const userData = __spreadValues({
      username: this.userForm.username,
      email: this.userForm.email,
      role: this.userForm.role
    }, this.userForm.password && { password: this.userForm.password });
    const request = this.editingUser ? this.http.put(`${this.apiUrl}/admin/users/${this.editingUser.id}`, userData, { headers }) : this.http.post(`${this.apiUrl}/admin/users`, userData, { headers });
    request.subscribe({
      next: () => {
        this.success = this.editingUser ? "User updated successfully!" : "User created successfully!";
        this.closeUserForm();
        this.loadUsers();
        this.loading = false;
        setTimeout(() => {
          this.success = "";
        }, 3e3);
      },
      error: (error) => {
        console.error("Error saving user:", error);
        this.error = error.error?.message || "Failed to save user. Please try again.";
        this.loading = false;
      }
    });
  }
  toggleUserStatus(user) {
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    const newStatus = !user.emailVerified;
    this.http.put(`${this.apiUrl}/admin/users/${user.id}/status`, { emailVerified: newStatus }, { headers }).subscribe({
      next: () => {
        user.emailVerified = newStatus;
        this.success = `User ${newStatus ? "verified" : "unverified"} successfully!`;
        setTimeout(() => {
          this.success = "";
        }, 3e3);
      },
      error: (error) => {
        console.error("Error updating user status:", error);
        this.error = "Failed to update user status. Please try again.";
      }
    });
  }
  deleteUser(user) {
    if (!confirm(`Are you sure you want to delete user "${user.username}"?`)) {
      return;
    }
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    this.http.delete(`${this.apiUrl}/admin/users/${user.id}`, { headers }).subscribe({
      next: () => {
        this.success = "User deleted successfully!";
        this.loadUsers();
        setTimeout(() => {
          this.success = "";
        }, 3e3);
      },
      error: (error) => {
        console.error("Error deleting user:", error);
        this.error = "Failed to delete user. Please try again.";
      }
    });
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
  static \u0275fac = function UsersComponent_Factory(t) {
    return new (t || _UsersComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 7, consts: [[1, "users-section"], [1, "section-header"], [1, "header-left-section"], [1, "filters-inline"], [1, "search-box"], [1, "material-icons"], ["type", "text", "placeholder", "Search users...", 3, "ngModelChange", "input", "ngModel"], [1, "role-filter", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "ADMIN"], ["value", "TEACHER"], ["value", "STUDENT"], [1, "btn", "btn-primary", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "users-table-container", 4, "ngIf"], ["class", "modal-backdrop", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "users-table-container"], [1, "users-table"], ["class", "user-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "user-row"], [1, "user-cell"], [1, "user-info-cell"], [1, "user-avatar-small"], [1, "user-text"], [1, "user-name"], [1, "email-cell"], [1, "role-cell"], [1, "role-badge", 3, "ngClass"], [1, "status-cell"], [1, "status-badge", 3, "ngClass"], [1, "actions-cell"], [1, "action-buttons"], ["title", "Edit User", 1, "btn-action", "btn-edit", 3, "click"], [1, "btn-action", "btn-toggle", 3, "click", "title"], ["title", "Delete User", 1, "btn-action", "btn-delete", 3, "click"], [1, "empty-state"], [1, "modal-backdrop"], [1, "modal-container"], [1, "modal-header"], [1, "close-button", 3, "click"], [1, "user-form", 3, "ngSubmit"], [1, "form-field"], ["type", "text", "name", "username", "placeholder", "Enter username", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Enter email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "Enter password", "required", "", 3, "ngModelChange", "ngModel"], ["name", "role", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-buttons"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "submit", 1, "submit-btn"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "i", 5);
      \u0275\u0275text(8, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function UsersComponent_Template_input_input_9_listener() {
        return ctx.filterUsers();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedRole, $event) || (ctx.selectedRole = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UsersComponent_Template_select_change_10_listener() {
        return ctx.filterUsers();
      });
      \u0275\u0275elementStart(11, "option", 8);
      \u0275\u0275text(12, "All Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 9);
      \u0275\u0275text(14, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 10);
      \u0275\u0275text(16, "Teacher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 11);
      \u0275\u0275text(18, "Student");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_19_listener() {
        return ctx.openUserForm();
      });
      \u0275\u0275elementStart(20, "i", 5);
      \u0275\u0275text(21, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Add New User ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, UsersComponent_div_23_Template, 4, 0, "div", 13)(24, UsersComponent_div_24_Template, 4, 1, "div", 14)(25, UsersComponent_div_25_Template, 4, 1, "div", 15)(26, UsersComponent_div_26_Template, 17, 2, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, UsersComponent_div_27_Template, 37, 4, "div", 17);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedRole);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showUserForm);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.users-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e5e7eb;\n  margin: 1.5rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n}\n.header-left-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex: 1;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  white-space: nowrap;\n}\n.filters-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem 0.5rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  color: #6b7280;\n  z-index: 1;\n}\n.role-filter[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  background: white;\n  color: #374151;\n  cursor: pointer;\n  width: 200px;\n}\n.role-filter[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #e5e7eb;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3), .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4), .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: center;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.8rem;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.user-info-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.user-info-cell[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  font-size: 0.7rem;\n}\n.user-avatar-small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 500;\n  font-size: 0.7rem;\n  flex-shrink: 0;\n}\n.user-details-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-details-cell[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n}\n.user-details-cell[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.role-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n}\n.role-badge.admin[_ngcontent-%COMP%], .badge-admin[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  background: #fef2f2;\n  color: #dc2626;\n}\n.role-badge.teacher[_ngcontent-%COMP%], .badge-teacher[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  background: #eff6ff;\n  color: #2563eb;\n}\n.role-badge.student[_ngcontent-%COMP%], .badge-student[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  background: #f0fdf4;\n  color: #059669;\n}\n.badge-default[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  display: inline-block;\n}\n.status-active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #059669;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.btn-toggle[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.btn-toggle[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n  color: white;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n  font-weight: 600;\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  box-shadow: none;\n  transform: none;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #6b7280;\n  border: 2px solid #e5e7eb;\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #374151;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #6b7280;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n  display: block;\n  opacity: 0.4;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #374151;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #059669;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 0;\n  width: 90%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f8fafc;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: "\\1f464";\n  font-size: 1.2rem;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 0.5rem;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n.user-form[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(1)   label[_ngcontent-%COMP%]::before {\n  content: "\\1f464";\n}\n.form-group[_ngcontent-%COMP%]:nth-child(2)   label[_ngcontent-%COMP%]::before {\n  content: "\\1f4e7";\n}\n.form-group[_ngcontent-%COMP%]:nth-child(3)   label[_ngcontent-%COMP%]::before {\n  content: "\\1f512";\n}\n.form-group[_ngcontent-%COMP%]:nth-child(4)   label[_ngcontent-%COMP%]::before {\n  content: "\\1f3f7\\fe0f";\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  background: #f9fafb;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);\n  background: white;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f8fafc;\n  margin: 0 -2rem -2rem -2rem;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-family: "Material Icons";\n  font-weight: normal;\n  font-style: normal;\n  font-size: inherit;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-feature-settings: "liga";\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n  vertical-align: middle;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 0.4rem;\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 0.4rem;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n  display: block;\n  opacity: 0.4;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 0;\n  width: 85%;\n  max-width: 350px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #eee;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #333;\n}\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #666;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.user-form[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.4rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 0.85rem;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  box-sizing: border-box;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.form-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 1rem;\n}\n.cancel-btn[_ngcontent-%COMP%], .submit-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n@media (max-width: 768px) {\n  .users-section[_ngcontent-%COMP%] {\n    margin: 1rem;\n    padding: 1rem;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .header-left-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .filters-inline[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .role-filter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    width: calc(100% - 1rem);\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=users.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\backoffice\\users\\users.component.ts", lineNumber: 24 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-CRKJBBWH.js.map
