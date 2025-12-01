import {Component, computed, effect, inject, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {GeoService} from './services/geo-service';
import {Header} from './components/header/header';
import {Hero} from './components/main/hero/hero/hero';
import {Features} from './components/main/features/features/features';
import {Pricing} from './components/main/pricing/pricing/pricing';

@Component({
  selector: 'app-root',
  imports: [
    MatButton,
    Header,
    Hero,
    Features,
    Pricing
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{

  protected readonly title = signal('Softronic');

  geoService = inject(GeoService);
  language = computed(() => this.geoService.country())

  constructor() {
    effect(() => {
      console.log(this.language())
    });
  }

  country = computed(() => this.geoService.getCountry());
}
