import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HoverEffectDirective } from '../hover-effect.directive';

@Component({
  selector: 'app-technology',
  imports: [CommonModule, HoverEffectDirective],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  standalone: true,
})
export class TechnologyComponent {
  technologies = [
    { name: 'Java', icon: 'java.svg', url: 'https://www.oracle.com/java/' },
    {
      name: 'Spring Boot',
      icon: 'spring.svg',
      url: 'https://spring.io/projects/spring-boot',
    },
    { name: 'Angular', icon: 'angular.svg', url: 'https://angular.io/' },
    {
      name: 'PostgreSQL',
      icon: 'postgresql.svg',
      url: 'https://www.postgresql.org/',
    },
    { name: 'Docker', icon: 'docker.svg', url: 'https://www.docker.com/' },
    { name: 'Jenkins', icon: 'jenkins.svg', url: 'https://www.jenkins.io/' },
    { name: 'Elasticsearch', icon: 'elasticsearch.svg', url: 'https://www.elastic.co/elasticsearch' },
    { name: 'Git', icon: 'git.svg', url: 'https://git-scm.com/' },
    { name: 'Apache Kafka', icon: 'kafka.svg', url: 'https://kafka.apache.org/' },
    { name: 'RabbitMQ', icon: 'rabbitmq.svg', url: 'https://www.rabbitmq.com/' },
    { name: 'RobotFramework', icon: 'robotframework.svg', url: 'https://robotframework.org/' },
    { name: 'Linux', icon: 'linux.svg', url: 'https://ubuntu.com/' },
  ];
}
