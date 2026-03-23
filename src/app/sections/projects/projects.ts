import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project, ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      id: 'josephbattisti',
      title: 'Joseph Battisti — Salon based in NY',
      description: 'Full-stack booking platform with Shopify integration and real-time scheduling.',
      tags: ['Angular', 'Next', 'PostgreSQL', 'Swagger'],
      links: [
        { label: 'Live Site', href: 'https://josephbattisti-q6dqe.ondigitalocean.app/' },
      ],
      highlight: 'Architecture + UX',
      previewImage: '/assets/images/joseph.png',
    },
    {
      id: 'referral',
      title: 'Lending Group based in TX',
      description:
        'Lead-generation app for an employment and lending firm.',
      tags: ['Angular', 'Express', 'MongoDB', 'CI/CD'],
      links: [{ label: 'Live Site', href: 'https://bclg-uhe93.ondigitalocean.app/' }],
      highlight: 'Leads generation',
      previewImage: '/assets/images/bclg.png',
    },
    {
      id: 'video',
      title: 'Esencial360 Yoga/Meditation',
      description: 'Configurable subscription plan, BunnyStream video delivery, and admin tooling.',
      tags: ['Angular', 'Express', 'MongoDB', 'BunnyStream', 'Admin UI'],
      links: [{ label: 'Live Site', href: 'https://www.esencial360.com/' }],
      highlight: 'Content platform',
      previewImage: '/assets/images/esencial.png',
    },
    {
      id: 'travane',
      title: 'TVN',
      description:
        'Modern travel platform focused on high-performance frontend architecture.',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      links: [
        { label: 'Live Site', href: 'https://www.travane.com.mx' },
        // optionally:
        // { label: 'GitHub', href: 'https://github.com/your-repo' }
      ],
      highlight: 'UI/UX + Performance',
      previewImage: '/assets/images/travane.png',
    },
  ];
}
