import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { AuthGuard } from "./login/AuthGuard";
import { RegisterComponent } from './register/register.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { HomeComponent } from "./home/home.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home page
  { path: 'home', component: HomeComponent }, // Home route - public page for non-authenticated users only
  { path: 'login', component: LoginComponent },
  { path: 'student/:userId', loadComponent: () => import('./student/student.component').then(m => m.StudentComponent), canActivate: [AuthGuard], data: { roles: ['ROLE_STUDENT'] } },
  { path: 'student/:userId/courses', loadComponent: () => import('./components/student-courses/student-courses.component').then(m => m.StudentCoursesComponent), canActivate: [AuthGuard], data: { roles: ['ROLE_STUDENT'] } },
  { path: 'teacher/:userId', component: TeacherComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TEACHER'] } },
  { path: 'teacher/:userId/create_course', component: CourseComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TEACHER'] } },
  { path: 'teacher/:userId/courses', component: CourseComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TEACHER'] } },
  { 
    path: 'backoffice', 
    loadComponent: () => import('./backoffice/layout/layout.component').then(m => m.LayoutComponent),
    canActivate: [AuthGuard], 
    data: { roles: ['ROLE_ADMIN'] },
    children: [
      { path: 'dashboard', loadComponent: () => import('./backoffice/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'users', loadComponent: () => import('./backoffice/users/users.component').then(m => m.UsersComponent) },
      { path: 'subscriptions', loadComponent: () => import('./backoffice/subscriptions/subscriptions.component').then(m => m.SubscriptionsComponent) },
      { path: 'courses', loadComponent: () => import('./backoffice/courses/courses.component').then(m => m.CoursesComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'admin/:userId', redirectTo: 'backoffice/dashboard', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'pricing', loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent) },
  { path: 'payment/:plan', loadComponent: () => import('./payment-form/payment-form.component').then(m => m.PaymentFormComponent) },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
