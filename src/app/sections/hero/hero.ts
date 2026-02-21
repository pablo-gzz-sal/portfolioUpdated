import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  statCards = [
    { label: 'Focus', value: 'Angular, APIs, Backend, scalable systems' },
    { label: 'Style', value: 'Minimal, premium UI with motion' },
    { label: 'Strength', value: 'Shipping + iteration + maintainability' },
  ];
}
