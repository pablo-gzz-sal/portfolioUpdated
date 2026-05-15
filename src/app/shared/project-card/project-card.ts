import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlight?: string;
  role?: string;
  outcome?: string;
  links?: ProjectLink[];
  previewImage?: string;
};

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
}
