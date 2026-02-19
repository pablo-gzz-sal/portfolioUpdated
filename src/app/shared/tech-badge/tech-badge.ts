import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-badge.html',
  styleUrl: './tech-badge.css',
})
export class TechBadge {
  @Input({ required: true }) label!: string;
}
