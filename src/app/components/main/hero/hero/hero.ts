import {Component, input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'hero',
  imports: [
    MatButton,
    MatIcon,
    TranslocoPipe
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  language = input.required<String | null>();
}
