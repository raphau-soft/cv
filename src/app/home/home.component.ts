import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  isScrolled: boolean = false;

  constructor(private dialog: MatDialog) {}

  openContactDialog() {
    this.dialog.open(ContactMeComponent, {
      width: '600px',
    });
  }

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
