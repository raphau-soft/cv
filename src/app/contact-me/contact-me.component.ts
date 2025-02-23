import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule, CommonModule, MatInputModule, MatDialogModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
  standalone: true,
})
export class ContactMeComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContactMeComponent>
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.dialogRef.close();
    }
  }
}
