import {computed, inject, Injectable, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class GeoService implements OnInit{

   country  = signal<String | null>(null);
  http = inject(HttpClient);

  constructor() {
    this.http.get('https://ipapi.co/json/').pipe().subscribe( (value: any) => {
      if (value.languages != undefined ) {
        this.country.set(value.languages.substring(0, 2));
      }
    })
  }

  ngOnInit() {

  }

  getCountry () {
    console.log(this.country())
    return this.country();
  }
}
