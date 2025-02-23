import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  booksRead = [
    {
      title: 'Web Application Security (Bezpieczeństwo aplikacji webowych)',
      author: 'Sekurak',
      year: 1999,
    },
    {
      title: 'Microservices Patterns: With Examples in Java',
      author: 'Chris Richardson',
      year: 2018,
    },
    {
      title:
        'TDD, Clean Code, and Refactoring (JAVA, C#, Object-Oriented Languages)',
      author: 'Piotr Walczak',
      year: 2022,
    },
  ];
}
