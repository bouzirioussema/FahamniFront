import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../course/CourseService';
import { Course } from '../../course/course';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadPublicCourses();
  }

  loadPublicCourses(): void {
    this.courseService.getAllCourses().subscribe({
      next: (allCourses) => {
        this.courses = allCourses.filter(course => course.published);
      },
      error: (err) => {
        console.error('Error loading public courses:', err);
      }
    });
  }
}
