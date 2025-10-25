import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
})
export class ExperienceComponent {
  experienceList = [
    {
      position: 'Backend Specialist',
      company: 'Totalizator Sportowy',
      period: '2025 - now',
      tasks: [
        'Developing and maintaining backend services using Spring Boot, following clean architecture and best coding practices.',
        'Designing and implementing RESTful APIs for internal and external integrations.',
        'Optimizing application performance and ensuring reliability in production environments.',
        'Participating in code reviews and contributing to continuous improvement of development processes.'
      ],
    },
    {
      position: 'Java Developer',
      company: 'Comarch Telecommunications',
      period: '2021 - 2025',
      tasks: [
        'Developed a full-stack application using Angular and Spring Boot.',
        'Integrated applications with external systems via REST/SOAP APIs.',
        'Migrated both backend and frontend applications to Docker, streamlining deployment and improving scalability.',
        'Implemented CI/CD pipelines in Jenkins, automating build, test, and deployment processes.',
        'Enhanced application security by implementing Content Security Policy (CSP), HTTP security headers, secure cookie flags.',
        'Contribute to maintaining high code quality through code reviews, refactoring, and best practices.',
      ],
    },
    {
      position: 'Internship, Frontend Developer',
      company: 'SoftSystem Sp. z o.o.',
      period: '2019',
      tasks: [
        'Focused on learning web application development with Angular.',
        'Developed a company management system integrated with an API built using Spring Boot.',
      ],
    },
  ];
}
