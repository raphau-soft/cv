import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
  standalone: true,
})
export class ContactMeComponent {
  private _snackBar = inject(MatSnackBar);
  private http = inject(HttpClient);
  private dialogRef = inject(MatDialogRef<ContactMeComponent>);
  private fb = inject(FormBuilder);

  private basinUrl = 'https://usebasin.com/f/29606d882d64';
  private formspreeUrl = 'https://formspree.io/f/xrbeweoo';
  contactForm: FormGroup;
  loading = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor() {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.loading) {
      this.loading = true;

      const formData = {
        email: this.contactForm.value.email,
        message: `Name: ${this.contactForm.value.name}\n\nMessage: ${this.contactForm.value.message}`,
      };

      this.http
        .post(this.basinUrl, formData, { responseType: 'text' })
        .subscribe({
          next: () => this.handleSuccess(),
          error: () => {
            this.sendToFormspree(formData);
          },
        });
    }
  }

  private sendToFormspree(formData: any) {
    this.http.post(this.formspreeUrl, formData).subscribe({
      next: () => this.handleSuccess(),
      error: () => this.handleError(),
    });
  }

  private handleSuccess() {
    this.loading = false;
    this.dialogRef.close();
    this._snackBar.open('Message sent successfully!', 'Close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  private handleError() {
    this.loading = false;
    this._snackBar.open('Failed to send message. Try again.', 'Close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
