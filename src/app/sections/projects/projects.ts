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
      id: 'xpln',
      title: 'Xpln — Social experiments platform',
      description: 'Spanish-language platform for sharing and validating everyday experiments.',
      tags: ['Angular/React', '.NET', 'PostgreSQL', 'Docker'],
      links: [
        { label: 'Case study', href: '#' },
        { label: 'GitHub', href: '#' },
      ],
      highlight: 'Architecture + UX',
    },
    {
      id: 'referral',
      title: 'Referral & commission system',
      description: 'QR-code referrals, tracked conversions, and automated Stripe payouts.',
      tags: ['Angular', 'Express', 'MongoDB', 'Stripe'],
      links: [{ label: 'Overview', href: '#' }],
      highlight: 'Payments + tracking',
    },
    {
      id: 'pdfs',
      title: 'Formal PDF generation (DE)',
      description: 'Dynamic multi-page documents with strict layout control and print-friendly styling.',
      tags: ['Angular', 'pdfMake', 'Templates'],
      links: [{ label: 'Details', href: '#' }],
      highlight: 'Docs + formatting',
    },
    {
      id: 'video',
      title: 'Yoga/Meditation weekly plan',
      description: 'Configurable plan + BunnyStream video retrieval + admin tooling.',
      tags: ['Express', 'MongoDB', 'BunnyStream', 'Admin UI'],
      links: [{ label: 'Flow', href: '#' }],
      highlight: 'Content platform',
    },
  ];

}
