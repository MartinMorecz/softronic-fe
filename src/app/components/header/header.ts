import {Component, input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {TranslocoPipe} from '@jsverse/transloco';
import {NgOptimizedImage} from '@angular/common';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatToolbar,
    TranslocoPipe,
    NgOptimizedImage,
    MatMenuTrigger,
    MatMenuItem,
    MatMenu
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  language = input.required<String | null>();

  languages= [
    {value: 'en', label: 'EN'},
    {value: 'de', label: 'DE'},
    {value: 'ro', label: 'RO'},
    {value: 'hu', label: 'HU'}
  ]
}
