import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlight?: string;
  links?: ProjectLink[];
};


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

   @Input({ required: true }) project!: Project;

}
