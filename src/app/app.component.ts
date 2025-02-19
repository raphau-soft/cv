import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    TechnologyComponent,
    ExperienceComponent,
    ContactMeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  @ViewChild('home', { read: ElementRef }) homeElement!: ElementRef;
  @ViewChild('tech', { read: ElementRef }) techElement!: ElementRef;
  @ViewChild('exp', { read: ElementRef }) expElement!: ElementRef;
  @ViewChild('contact', { read: ElementRef }) contactElement!: ElementRef;

  scroll(element: ElementRef) {
    const yOffset = -100;
    const y =
      element.nativeElement.getBoundingClientRect().top +
      window.scrollY +
      yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
