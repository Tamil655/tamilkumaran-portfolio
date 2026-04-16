import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  points: string[];
}

interface EducationItem {
  title: string;
  place: string;
  duration: string;
  percentage: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,MatIconModule,FormsModule,MatInputModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class PortfolioComponent {
  developerName = 'TAMILKUMARAN M';
  role = 'Frontend Developer';

  email = 'tkumaran569@gmail.com';
  phone = '7010321262';
  location = ' Tenkasi, India';

  isMenuOpen = false;

  contactForm = {
  name: '',
  emailInput: '',
  phoneInput: '',
  message: ''
};

  about =
    'As a passionate and adaptable Frontend Developer with hands-on experience in Angular through a professional internship, I am seeking to contribute my skills and enthusiasm to a dynamic organization.';

  skills: string[] = [
    'HTML5',
    'CSS3',
    'TypeScript',
    'Bootstrap',
    'Angular',
    // 'Responsive Design',
    // 'Git',
    // 'GitHub',
    'Figma (Basic)',
    // 'Azure (Basic)',
    // 'Postman',
    // 'VS Code'
  ];

 projects: ProjectItem[] = [
  {
    title: 'Social Media Application UI',
    description:
      'Designed and developed user-friendly UI screens similar to a social media application, including Login, Feed, Profile, Post, and Notification screens with responsive design.',
    tech: ['Angular', 'HTML', 'CSS', 'Bootstrap', 'TypeScript'],
    link: '#'
  },
  {
    title: 'HRM Application',
    description:
      'Actively participated in building an HRM (Human Resource Management) application with responsive and dynamic UI components, employee management modules, and REST API integration.',
    tech: ['Angular', 'TypeScript', 'REST API', 'Bootstrap'],
    link: '#'
  },
  {
    title: 'Employee Management Module',
    description:
      'Worked on employee management related functionalities with dynamic forms, data handling, and smooth UI experience across mobile and desktop views.',
    tech: ['Angular', 'TypeScript', 'REST API', 'Responsive Design'],
    link: '#'
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Built a personal portfolio website using Angular to showcase my profile, skills, work experience, education, and projects with a responsive modern layout.',
    tech: ['Angular', 'HTML', 'CSS', 'TypeScript'],
    link: '#'
  }
];

  experience: ExperienceItem[] = [
    {
      title: 'Frontend Developer',
      company: 'Athia Technology',
      duration: 'Oct 2025 - Present',
      points: [
        'Designed user-friendly UI screens similar to a social media application (X/Twitter).',
        'Created responsive layouts for Login, Feed, Profile, Post, and Notification screens.',
        'Focused on clean design, proper alignment, and consistent color themes.',
        'Implemented mobile-first responsive design using HTML, CSS, Bootstrap, and Angular templates.',
        'Ensured smooth user experience across mobile and desktop views.'
      ]
    },
    {
      title: 'Frontend Angular Developer (Intern)',
      company: 'Infinity Codes Technology',
      duration: 'Feb 2025 - May 2025',
      points: [
        'Completed a 4-month internship as a Frontend Angular Developer.',
        'Actively participated in building an HRM (Human Resource Management) application.',
        'Built responsive and dynamic UI components using Angular.',
        'Integrated REST APIs to display and manage data.',
        'Worked on employee management modules and related functionalities.'
      ]
    }
  ];

  education: EducationItem[] = [
    {
      title: 'Diploma in Computer Engineering',
      place: 'Arulmigu Senthilandavar Polytechnic College, Tenkasi',
      duration: '2021 - 2024',
      percentage: '68.26%'
    },
    {
      title: 'Class XII',
      place: 'Government Higher Secondary School, Serndamangalam',
      duration: '2020 - 2021',
      percentage: '62.72%'
    }
  ];

  // tools: string[] = [
  //   'Visual Studio Code',
  //   'Angular CLI',
  //   'Git / GitHub',
  //   'Figma',
  //   'Microsoft Azure (Basic)',
  //   'Swagger',
  //   'Postman'
  // ];

  // languages: string[] = ['Tamil', 'English'];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  submitContactForm(): void {
  console.log('Contact Form Submitted:', this.contactForm);

  alert('Message submitted successfully!');

  this.contactForm = {
    name: '',
    emailInput: '',
    phoneInput: '',
    message: ''
  };
}
}