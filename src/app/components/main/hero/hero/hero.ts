import {Component, inject, input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {TranslocoPipe} from '@jsverse/transloco';
import {MatFormField, MatHint, MatInput, MatSuffix} from '@angular/material/input';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'hero',
  imports: [
    MatButton,
    TranslocoPipe,
    MatInput,
    MatFormField,
    MatHint,
    ReactiveFormsModule,
    MatSuffix
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  language = input.required<String | null>();
  private snackBar = inject(MatSnackBar);

  fb = inject(FormBuilder);
  ctaForm = this.fb.group({
    email: this.fb.nonNullable.control<string | undefined>(undefined, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(10)]))
  })

  notifyUser() {
    if(!this.email.invalid){
      this.snackBar.open('Your email ' + this.email.value + ' was submitted for notification!','Close', {duration: 2500});
    } else {
      this.snackBar.open('Enter a valid email address!', 'Close', {duration: 2500});
    }
  }

  get email(): FormControl<string | undefined> {
    return this.ctaForm.controls.email;
  }

}
