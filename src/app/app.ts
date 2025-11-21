import {Component, computed, effect, inject, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {NgClass} from '@angular/common';
import {GeoService} from './services/geo-service';
import {Header} from './components/header/header';
import {Hero} from './components/main/hero/hero/hero';
import {Features} from './components/main/features/features/features';

@Component({
  selector: 'app-root',
  imports: [
    MatButton,
    MatCard,
    NgClass,
    Header,
    Hero,
    Features
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{

  protected readonly title = signal('Softronic');


  pricing = [
    {
      title: 'Starter',
      price: 'Free',
      features: ['Up to 3 devices', 'Basic monitoring', 'Email support'],
      cta: 'Get Started',
      featured: false,
    },
    {
      title: 'Professional',
      price: '$9.99/mo',
      features: [
        'Unlimited devices',
        'Advanced analytics',
        'Smart alerts',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      featured: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Pro',
        'API access',
        'Dedicated support',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  geoService = inject(GeoService);
  language = computed(() => this.geoService.country())

  constructor() {
    effect(() => {
      console.log(this.language())
    });
  }

  country = computed(() => this.geoService.getCountry());
}
