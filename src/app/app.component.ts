import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, TechnologyComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'home-page';
}
