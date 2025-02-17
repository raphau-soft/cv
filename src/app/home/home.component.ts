import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight / 2) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
