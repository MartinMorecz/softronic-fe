import {Component, input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {NgClass} from '@angular/common';
import {PricingItem} from '../../../../common/model/pricing';
import {TranslocoPipe} from '@jsverse/transloco';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'pricing',
  imports: [
    MatButton,
    MatCard,
    NgClass,
    TranslocoPipe,
    MatSlideToggle
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {

  language = input.required<String | null>();
  pricingAnually: boolean = true;
  pricingFree : PricingItem = {
    title: 'pricing.title.free',
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      'pricing.features.free.devices',
      'pricing.features.free.monitoring',
      'pricing.features.free.support'

    ],
    cta: '',
    featured: false,
    free: true
  }

  pricingPlus: PricingItem = {
    title: 'pricing.title.plus',
    priceMonthly: 2.5,
    priceYearly: 20,
    features: [
      'pricing.features.everything.free',
      'pricing.features.plus.devices',
      'pricing.features.plus.monitoring',
      'pricing.features.plus.support',
      'pricing.features.plus.alert',
    ],
    cta: 'pricing.cta',
    featured: true,
    free: false
  }

  pricingPro: PricingItem = {
    title: 'pricing.title.pro',
    priceMonthly: 5,
    priceYearly: 50,
    features: [
      'pricing.features.everything.plus',
      'pricing.features.pro.devices',
      'pricing.features.pro.monitoring',
      'pricing.features.pro.support',
      'pricing.features.pro.alert',
    ],
    cta: 'pricing.cta',
    featured: false,
    free: false
  }

  pricing: PricingItem[] = [
    this.pricingFree,
    this.pricingPlus,
    this.pricingPro
  ];
}
