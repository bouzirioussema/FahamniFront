import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QEARECIC.js";

// src/app/backoffice/layout/layout.component.ts
var LayoutComponent = class _LayoutComponent {
  router;
  route;
  // Current admin user info
  currentUser = {
    username: "",
    email: "",
    role: ""
  };
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.loadCurrentUserInfo();
  }
  loadCurrentUserInfo() {
    const username = localStorage.getItem("username") || "Admin";
    const email = localStorage.getItem("email") || "admin@example.com";
    const role = localStorage.getItem("role") || "ADMIN";
    const displayRole = role.replace("ROLE_", "");
    this.currentUser = {
      username,
      email,
      role: displayRole
    };
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
  navigateTo(route) {
    this.router.navigate([route], { relativeTo: this.route });
  }
  navigateToAbsolute(route) {
    this.router.navigate([route]);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function LayoutComponent_Factory(t) {
    return new (t || _LayoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 9, consts: [[1, "dashboard-container"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "material-icons"], [1, "sidebar-nav"], [1, "nav-menu"], [1, "nav-item"], ["routerLink", "/backoffice/dashboard", 1, "nav-link", 3, "click"], ["routerLink", "/backoffice/users", 1, "nav-link", 3, "click"], ["href", "#", 1, "nav-link"], [1, "sidebar-footer"], [1, "sidebar-logout-btn", 3, "click"], [1, "main-wrapper"], [1, "dashboard-header"], [1, "header-content"], [1, "header-left"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "header-right"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-role"], [1, "dashboard-main"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "i", 4);
      \u0275\u0275text(5, "school");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "EduStage");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "nav", 5)(9, "ul", 6)(10, "li", 7)(11, "a", 8);
      \u0275\u0275listener("click", function LayoutComponent_Template_a_click_11_listener() {
        return ctx.navigateToAbsolute("/backoffice/dashboard");
      });
      \u0275\u0275elementStart(12, "i", 4);
      \u0275\u0275text(13, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "li", 7)(17, "a", 9);
      \u0275\u0275listener("click", function LayoutComponent_Template_a_click_17_listener($event) {
        ctx.navigateToAbsolute("/backoffice/users");
        return $event.preventDefault();
      });
      \u0275\u0275elementStart(18, "i", 4);
      \u0275\u0275text(19, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "li", 7)(23, "a", 10)(24, "i", 4);
      \u0275\u0275text(25, "school");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "Courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "li", 7)(29, "a", 10)(30, "i", 4);
      \u0275\u0275text(31, "event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "Reservations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "li", 7)(35, "a", 10)(36, "i", 4);
      \u0275\u0275text(37, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Settings");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 11)(41, "button", 12);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_41_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(42, "i", 4);
      \u0275\u0275text(43, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 13)(47, "header", 14)(48, "div", 15)(49, "div", 16)(50, "h1", 17)(51, "i", 4);
      \u0275\u0275text(52, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " Admin Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p", 18);
      \u0275\u0275text(55, "User Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 19)(57, "div", 20)(58, "div", 21);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 22)(61, "span", 23);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 24);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(65, "main", 25);
      \u0275\u0275element(66, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.isActiveRoute("/backoffice/dashboard"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.isActiveRoute("/backoffice/users"));
      \u0275\u0275advance(42);
      \u0275\u0275styleProp("background-color", ctx.getUserAvatarColor(ctx.currentUser.username));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getInitials(ctx.currentUser.username), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentUser.username);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentUser.role);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  display: flex;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: white;\n  border-right: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  z-index: 100;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #3b82f6;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem 0;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  color: #6b7280;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  margin: 0 0.5rem;\n  border-radius: 6px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid #e5e7eb;\n  margin-top: auto;\n}\n.sidebar-logout-btn[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.sidebar-logout-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.sidebar-logout-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.main-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 240px;\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 0.75rem 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.header-left[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.dashboard-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.8rem;\n  margin: 0.25rem 0 0 0;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  line-height: 1.2;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n  font-size: 0.85rem;\n  margin: 0;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #666;\n  margin: 0;\n  margin-top: 1px;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 0.4rem 0.8rem;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  transition: background 0.2s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.dashboard-main[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem;\n  width: 100%;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-family: "Material Icons";\n  font-weight: normal;\n  font-style: normal;\n  font-size: inherit;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-feature-settings: "liga";\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n  vertical-align: middle;\n}\n.dashboard-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-right: 0.4rem;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 0.4rem;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n  }\n  .main-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .dashboard-main[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\backoffice\\layout\\layout.component.ts", lineNumber: 12 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=chunk-3F6QO7JS.js.map
