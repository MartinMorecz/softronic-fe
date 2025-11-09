import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatToolbar
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
