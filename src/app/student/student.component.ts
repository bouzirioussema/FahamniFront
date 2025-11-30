import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from "../login/AuthService";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  description: string;
  image: string;
  linkedin: string;
  email: string;
  twitter?: string;
  facebook?: string;
  rating?: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {
  userId!: string;
  username: string = 'Student Name';
  email: string = 'student@email.com';
  role: string = 'Student';
  initials: string = 'SN';
  
  teachers: Teacher[] = [
    {
      id: 1,
      name: 'Jenny Wilson',
      subject: 'Marketing Manager',
      description: 'Senior Instructor, 10+ years',
      image: 'https://randomuser.me/api/portraits/women/21.jpg',
      linkedin: 'https://linkedin.com/in/jenny-wilson',
      email: 'jenny.wilson@fahamni.com',
      twitter: 'https://twitter.com/jennywilson',
      facebook: 'https://facebook.com/jennywilson',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Floyd Miles',
      subject: 'Software Developer',
      description: 'Full-Stack Developer, React Expert',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      linkedin: 'https://linkedin.com/in/floyd-miles',
      email: 'floyd.miles@fahamni.com',
      twitter: 'https://twitter.com/floydmiles',
      facebook: 'https://facebook.com/floydmiles',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Darrell Steward',
      subject: 'Graphic Designer',
      description: 'Creative Director, UI/UX Specialist',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      linkedin: 'https://linkedin.com/in/darrell-steward',
      email: 'darrell.steward@fahamni.com',
      twitter: 'https://twitter.com/darrellsteward',
      facebook: 'https://facebook.com/darrellsteward',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Annette Black',
      subject: 'Data Analyst',
      description: 'PhD in Statistics, Research Expert',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      linkedin: 'https://linkedin.com/in/annette-black',
      email: 'annette.black@fahamni.com',
      twitter: 'https://twitter.com/annetteblack',
      facebook: 'https://facebook.com/annetteblack',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Kristin Watson',
      subject: 'Operations Manager',
      description: 'Operations Lead, Process Optimization',
      image: 'https://randomuser.me/api/portraits/women/67.jpg',
      linkedin: 'https://linkedin.com/in/kristin-watson',
      email: 'kristin.watson@fahamni.com',
      twitter: 'https://twitter.com/kristinwatson',
      facebook: 'https://facebook.com/kristinwatson',
      rating: 4.5
    },
    {
      id: 6,
      name: 'Courtney Henry',
      subject: 'Social Media Manager',
      description: 'Digital Marketing Expert, Content Creator',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      linkedin: 'https://linkedin.com/in/courtney-henry',
      email: 'courtney.henry@fahamni.com',
      twitter: 'https://twitter.com/courtneyhenry',
      facebook: 'https://facebook.com/courtneyhenry',
      rating: 4.4
    }
  ];


  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['user_id'];
    });
    
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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onTeacherClick(teacher: Teacher): void {
    console.log('Teacher clicked:', teacher);
    // TODO: Navigate to teacher detail page or show modal
  }

  ngAfterViewInit(): void {
    // Add arrow button functionality with timeout to ensure DOM is ready
    setTimeout(() => {
      const leftArrow = document.getElementById('teacher-arrow-left');
      const rightArrow = document.getElementById('teacher-arrow-right');
      const container = document.querySelector('.teachers-container') as HTMLElement;

      if (leftArrow && rightArrow && container) {
        leftArrow.addEventListener('click', () => {
          container.scrollBy({ left: -280, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
          container.scrollBy({ left: 280, behavior: 'smooth' });
        });
      }
    }, 100);
  }

  // Alternative method - you can call these directly from template
  scrollLeft(): void {
    const container = document.querySelector('.teachers-container') as HTMLElement;
    if (container) {
      container.scrollBy({ left: -280, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    const container = document.querySelector('.teachers-container') as HTMLElement;
    if (container) {
      container.scrollBy({ left: 280, behavior: 'smooth' });
    }
  }

  getCardBackground(index: number): string {
    const backgrounds = [
      'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)', // Pink
      'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', // Blue  
      'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', // Green
      'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)', // Yellow
      'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)', // Purple
      'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)'  // Cyan
    ];
    return backgrounds[index % backgrounds.length];
  }

  getStarArray(_rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
}
