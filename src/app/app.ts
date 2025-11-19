import {Component, computed, effect, inject, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {GeoService} from './services/geo-service';
import {Header} from './components/header/header';
import {Hero} from './components/main/hero/hero/hero';

@Component({
  selector: 'app-root',
  imports: [
    MatButton,
    MatCard,
    NgClass,
    MatIcon,
    Header,
    Hero
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{

  protected readonly title = signal('Softronic');

  features = [
    {
      icon: 'bolt',
      title: 'Real-Time Monitoring',
      description: 'Track battery health, temperature, and voltage live.',
    },
    {
      icon: 'show_chart',
      title: 'Advanced Analytics',
      description: 'Get insights and trends from powerful visual dashboards.',
    },
    {
      icon: 'notifications_active',
      title: 'Smart Alerts',
      description: 'Receive alerts when performance drops or issues appear.',
    },
    {
      icon: 'cloud_sync',
      title: 'Cloud Sync',
      description: 'Access your data from anywhere, securely.',
    },
  ];

  stats = [
    { number: '500K+', label: 'Active Users' },
    { number: '2M+', label: 'Devices Monitored' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ];

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
