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
      position: 'Java Developer',
      company: 'Comarch Telecommunications',
      period: '2021 - Present',
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
