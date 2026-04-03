import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { animate, inView, stagger } from 'motion';
import { Project, ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

  projects: Project[] = [
    {
      id: 'josephbattisti',
      title: 'Joseph Battisti — Salon based in NY',
      description: 'Full-stack booking platform with Shopify integration and real-time scheduling.',
      tags: ['Angular', 'Next', 'PostgreSQL', 'Swagger'],
      links: [{ label: 'Live Site', href: 'https://josephbattisti-q6dqe.ondigitalocean.app/' }],
      highlight: 'Architecture + UX',
      previewImage: '/assets/images/joseph.png',
    },
    {
      id: 'referral',
      title: 'Lending Group based in TX',
      description: 'Lead-generation app for an employment and lending firm.',
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
      description: 'Modern travel platform focused on high-performance frontend architecture.',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      links: [{ label: 'Live Site', href: 'https://www.travane.com.mx' }],
      highlight: 'UI/UX + Performance',
      previewImage: '/assets/images/travane.png',
    },
  ];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const header = root.querySelector<HTMLElement>('.projects-header');
    const cards  = root.querySelectorAll<HTMLElement>('app-project-card');

    // Set invisible initial state (instant)
    if (header) animate(header, { opacity: 0, y: 28 }, { duration: 0 });
    if (cards.length) animate(cards, { opacity: 0, y: 44 }, { duration: 0 });

    inView(root, () => {
      if (header) {
        animate(header, { opacity: 1, y: 0 }, {
          duration: 0.7,
          easing: [0.22, 1, 0.36, 1],
        });
      }
      if (cards.length) {
        animate(cards, { opacity: 1, y: 0 }, {
          delay: stagger(0.14, { start: 0.18 }),
          duration: 0.75,
          easing: [0.22, 1, 0.36, 1],
        });
      }
    }, { margin: '-60px 0px' });
  }
}
