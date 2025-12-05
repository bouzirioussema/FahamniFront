import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from './CourseService';
import { AuthService } from '../login/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  courseForm: FormGroup;
  isEditMode = false;
  currentCourseId: number | null = null;
  userId: string | null = null;
  createThumbnailFile: File | null = null;
  createVideoFile: File | null = null;
  listMode = false;
  editingCourseId: number | null = null; // track which course is being edited in the list
  // Inline edit form model
  inlineEditForm: FormGroup;
  createSuccessMessage: string | null = null;

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      durationInHours: [1, [Validators.required, Validators.min(0.5)]],
      level: ['Beginner', Validators.required],
      published: [false],
      teacherId: ['', Validators.required]
    });
    // Inline edit form (same fields, no teacherId needed)
    this.inlineEditForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      durationInHours: [1, [Validators.required, Validators.min(0.5)]],
      level: ['Beginner', Validators.required],
      published: [false]
    });
  }

  ngOnInit(): void {
    this.userId = this.authService.getUserId() || '1'; // fallback for testing
    console.log('userId in ngOnInit:', this.userId);
    this.courseForm.patchValue({ teacherId: this.userId });

    // listMode is true only on /teacher/:userId/courses
    const url = this.router.url.split('?')[0]; // ignore query params
    this.listMode = url.endsWith('/courses') && !url.includes('/create_course');
    console.log('listMode:', this.listMode, 'url:', url);

    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses(this.userId || undefined).subscribe(
      courses => {
        this.courses = courses;
      },
      error => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  createCourse(): void {
    console.log('createCourse called');
    console.log('userId:', this.userId);
    console.log('form valid:', this.courseForm.valid);
    console.log('form errors:', this.courseForm.errors);
    console.log('form value:', this.courseForm.value);

    if (this.courseForm.valid && this.userId) {
      const formData = this.courseForm.value;
      const newCourse: Course = new Course(
        0,
        formData.title,
        formData.description,
        formData.category,
        formData.durationInHours,
        formData.level,
        '', // imageUrl will be set via upload later
        formData.published,
        this.userId
      );

      this.courseService.createCourse(this.userId, newCourse).subscribe(
        created => {
          console.log('Course created successfully:', created);
          const courseId = created.id;

          // Upload thumbnail if selected
          if (this.createThumbnailFile) {
            this.courseService.uploadCourseThumbnail(courseId, this.createThumbnailFile).subscribe({
              next: () => console.log('Thumbnail uploaded'),
              error: err => console.error('Error uploading thumbnail', err)
            });
          }

          // Upload video if selected
          if (this.createVideoFile) {
            this.courseService.uploadCourseVideo(courseId, this.createVideoFile).subscribe({
              next: () => console.log('Video uploaded'),
              error: err => console.error('Error uploading video', err)
            });
          }

          // Afficher le popup de succès
          this.createSuccessMessage = 'Cours créé avec succès.';
        },
        error => {
          console.error('Error creating course', error);
        }
      );
    } else {
      if (!this.userId) {
        console.error('User ID is null. Make sure you are logged in.');
      }
      if (!this.courseForm.valid) {
        console.error('Form is invalid. Check all required fields.');
      }
    }
  }

  onCreateSuccessOk(): void {
    if (!this.userId) {
      this.createSuccessMessage = null;
      return;
    }
    const targetUrl = ['/teacher', this.userId, 'courses'];
    this.createSuccessMessage = null;
    this.router.navigate(targetUrl);
  }

  editCourse(course: Course): void {
    this.isEditMode = true;
    this.currentCourseId = course.id;
    this.listMode = false; // switch to form view
    this.courseForm.patchValue({
      title: course.title,
      description: course.description,
      category: course.category || '',
      durationInHours: course.durationInHours || 1,
      level: course.level || 'Beginner',
      published: course.published ?? false,
      teacherId: this.userId
    });
  }

  updateCourse(): void {
    if (this.courseForm.valid && this.currentCourseId !== null && this.userId) {
      const formData = this.courseForm.value;
      const updatedCourse: Course = new Course(
        this.currentCourseId,
        formData.title,
        formData.description,
        formData.category,
        formData.durationInHours,
        formData.level,
        '', // imageUrl will be set via upload later
        formData.published,
        this.userId
      );

      this.courseService.updateCourse(this.currentCourseId, updatedCourse).subscribe(
        course => {
          console.log('Course updated successfully:', course);
          this.clearForm();
          this.getAllCourses();
          this.isEditMode = false;
          this.currentCourseId = null;
        },
        error => {
          console.error('Error updating course:', error);
        }
      );
    } else {
      console.error('Course form is invalid, currentCourseId is null, or userId is null.');
    }
  }

  deleteCourse(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(
        () => {
          console.log('Course deleted successfully');
          this.getAllCourses();
        },
        error => {
          console.error('Error deleting course:', error);
        }
      );
    }
  }

  clearForm(): void {
    this.courseForm.reset({
      title: '',
      description: '',
      category: '',
      durationInHours: 1,
      level: 'Beginner',
      published: false,
      teacherId: this.userId
    });
    this.isEditMode = false;
    this.currentCourseId = null;
    this.createThumbnailFile = null;
    this.createVideoFile = null;
    this.listMode = true; // return to list view
  }

  onVideoFileSelected(courseId: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.courseService.uploadCourseVideo(courseId, file).subscribe({
      next: () => {
        this.getAllCourses();
        input.value = '';
      },
      error: err => {
        console.error('Error uploading video', err);
        input.value = '';
      }
    });
  }

  onThumbnailFileSelected(courseId: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.courseService.uploadCourseThumbnail(courseId, file).subscribe({
      next: () => {
        this.getAllCourses();
        input.value = '';
      },
      error: err => {
        console.error('Error uploading thumbnail', err);
        input.value = '';
      }
    });
  }

  onCreateThumbnailSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.createThumbnailFile = null;
      return;
    }
    this.createThumbnailFile = input.files[0];
  }

  onCreateVideoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.createVideoFile = null;
      return;
    }
    this.createVideoFile = input.files[0];
  }

  // Toggle inline edit for a course in the list
  toggleInlineEdit(courseId: number): void {
    if (this.editingCourseId === courseId) {
      // Save changes
      this.saveInlineEdit(courseId);
    } else {
      // Start editing: populate form with course data
      const course = this.courses.find(c => c.id === courseId);
      if (course) {
        this.inlineEditForm.patchValue({
          title: course.title,
          description: course.description,
          category: course.category || '',
          durationInHours: course.durationInHours || 1,
          level: course.level || 'Beginner',
          published: course.published ?? false
        });
      }
      this.editingCourseId = courseId;
    }
  }

  // Save inline edits
  saveInlineEdit(courseId: number): void {
    if (this.inlineEditForm.valid && this.userId) {
      const formData = this.inlineEditForm.value;
      const existingCourse = this.courses.find(c => c.id === courseId);
      const updatedCourse: Course = new Course(
        courseId,
        formData.title,
        formData.description,
        formData.category,
        formData.durationInHours,
        formData.level,
        existingCourse?.imageUrl || '', // keep existing imageUrl
        formData.published,
        this.userId,
        existingCourse?.videoUrl, // keep existing videoUrl
        existingCourse?.videos // keep existing videos
      );

      this.courseService.updateCourse(courseId, updatedCourse).subscribe(
        course => {
          console.log('Course updated inline:', course);
          this.getAllCourses();
          this.editingCourseId = null;
        },
        error => {
          console.error('Error updating course inline:', error);
        }
      );
    } else {
      console.error('Inline edit form is invalid or userId is null.');
    }
  }

  // Helper to check if a course is being edited inline
  isEditingInline(courseId: number): boolean {
    return this.editingCourseId === courseId;
  }

  // Toggle course status (Public/Private)
  toggleCourseStatus(course: Course): void {
    if (!this.userId) return;
    const updatedCourse = new Course(
      course.id,
      course.title,
      course.description,
      course.category,
      course.durationInHours,
      course.level,
      course.imageUrl,
      !course.published, // toggle published
      this.userId,
      course.videoUrl,
      course.videos
    );
    this.courseService.updateCourse(course.id, updatedCourse).subscribe(
      updated => {
        console.log('Course status toggled:', updated);
        this.getAllCourses(); // refresh list
      },
      error => {
        console.error('Error toggling course status:', error);
      }
    );
  }
}
