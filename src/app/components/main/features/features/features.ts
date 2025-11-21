import {Component, input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'features',
    imports: [
        MatCard,
        MatIcon
    ],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {

  language = input.required<String | null>();

  features = [
    {
      icon: '💿',
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
}
