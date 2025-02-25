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
      type: 'book',
      link: 'https://sklep.securitum.pl/ksiazka-bezpieczenstwo-aplikacji-webowych',
    },
    {
      title: 'Microservices Patterns: With Examples in Java',
      author: 'Chris Richardson',
      year: 2018,
      type: 'book',
      link: 'https://microservices.io/book',
    },
    {
      title:
        'TDD, Clean Code, and Refactoring (JAVA, C#, Object-Oriented Languages)',
      author: 'Piotr Walczak',
      year: 2022,
      type: 'course',
      link: 'tdd_clean_code_and_refactoring_certificate.pdf',
    },
  ];

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
