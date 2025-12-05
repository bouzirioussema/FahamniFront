import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8082/teacher/courses';

  constructor(private http: HttpClient) {}

  getAllCourses(userId?: string): Observable<Course[]> {
    if (userId) {
      // ✅ utilise la nouvelle route backend
      return this.http.get<Course[]>(`${this.apiUrl}/teacher/${userId}`);
    }
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  createCourse(userId: string, course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/${userId}`, course);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadCourseVideo(courseId: number, file: File): Observable<Course> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Course>(`${this.apiUrl}/${courseId}/video`, formData);
  }

  uploadCourseThumbnail(courseId: number, file: File): Observable<Course> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Course>(`${this.apiUrl}/${courseId}/thumbnail`, formData);
  }
}