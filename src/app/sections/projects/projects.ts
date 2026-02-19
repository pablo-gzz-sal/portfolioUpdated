import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project, ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      id: 'josephbattisti',
      title: 'Joseph Battisti — Salon based in NY',
      description: 'Beauty salon with shopify integrated',
      tags: ['Angular', 'Next', 'PostgreSQL', 'Swagger'],
      links: [
        { label: 'Website', href: 'https://josephbattisti-q6dqe.ondigitalocean.app/' },
        { label: 'GitHub', href: 'https://github.com/pablo-gzz-sal/barber-frontend' },
      ],
      highlight: 'Architecture + UX',
    },
    {
      id: 'referral',
      title: 'Lending Group based in TX',
      description: 'Employment seeking dedicated app',
      tags: ['Angular', 'Express', 'MongoDB', 'CI/CD'],
      links: [{ label: 'Website', href: 'https://bclg-uhe93.ondigitalocean.app/' }],
      highlight: 'Leads generation',
    },
    {
      id: 'video',
      title: 'Esencial360 Yoga/Meditation',
      description: 'Configurable plan + BunnyStream video retrieval + admin tooling.',
      tags: ['Angular', 'Express', 'MongoDB', 'BunnyStream', 'Admin UI'],
      links: [{ label: 'Website', href: 'https://esencial360.com/' }],
      highlight: 'Content platform',
    },
        {
      id: 'xpln',
      title: 'Xpln — Social experiments platform',
      description: 'Multi-language platform for sharing and validating everyday experiments.',
      tags: ['Svelte', 'Python', 'PostgreSQL', 'Docker'],
      links: [
        { label: 'GitHub', href: 'https://github.com/pablo-gzz-sal/expln-frontend' },
      ],
      highlight: 'Architecture + UX',
    },
  ];
}
