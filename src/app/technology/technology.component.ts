import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HoverEffectDirective } from '../hover-effect.directive';

@Component({
  selector: 'app-technology',
  imports: [CommonModule, HoverEffectDirective],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  technologies = [
    { name: 'Java', icon: '/java.svg' },
    { name: 'Spring Boot', icon: '/spring.svg' },
    { name: 'Angular', icon: '/angular.svg' },
    { name: 'PostgreSQL', icon: '/postgresql.svg' },
    { name: 'Docker', icon: '/docker.svg' },
    { name: 'Jenkins', icon: '/jenkins.svg' }
  ];
}
