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
      icon: '🔋',
      title: 'Real-Time Monitoring',
      description: 'Monitor your devices health status and predict when the battery is going to go out.',
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Get insights and trends from powerful visual dashboards of your devices. Which apps drain your battery and optimisation hints to autoclose apps when not used to increase your battery from hours to days!',
    },
    {
      icon: '📲',
      title: 'Custom Alerts',
      description: 'You can enable alerts for each device you have separately. Also you decide what type of alert it should be.',
    },
    {
      icon: '☁️',
      title: 'Cloud Sync',
      description: 'Your data is safe with us! We do not user 3rd party shitty servers like aws, microsoft, etc. Everything is hosted in Europe.',
    },
  ];

  stats = [
    { number: '500K+', label: 'Active Users' },
    { number: '2M+', label: 'Devices Monitored' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ];
}
