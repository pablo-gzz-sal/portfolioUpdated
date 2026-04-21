import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project, ProjectCard } from '../../shared/project-card/project-card';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard, RouterLink, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

  projects: Project[] = [
    {
      id: 'josephbattisti',
      title: 'project.josephbattisti.title',
      description: 'project.josephbattisti.description',
      tags: ['Angular', 'PostgreSQL', 'Swagger', 'Node.js'],
      links: [{ label: 'Live Site', href: 'https://josephbattisti-q6dqe.ondigitalocean.app/' }],
      highlight: 'project.josephbattisti.highlight',
      previewImage: '/assets/images/joseph.png',
    },
    {
      id: 'referral',
      title: 'project.referral.title',
      description: 'project.referral.description',
      tags: ['Angular', 'Express', 'MongoDB', 'CI/CD'],
      links: [{ label: 'Live Site', href: 'https://bclg-uhe93.ondigitalocean.app/' }],
      highlight: 'project.referral.highlight',
      previewImage: '/assets/images/bclg.png',
    },
    {
      id: 'video',
      title: 'project.video.title',
      description: 'project.video.description',
      tags: ['Angular', 'Express', 'MongoDB', 'BunnyStream', 'Stripe'],
      links: [{ label: 'Live Site', href: 'https://www.esencial360.com/' }],
      highlight: 'project.video.highlight',
      previewImage: '/assets/images/esencial.png',
    },
    {
      id: 'travane',
      title: 'project.travane.title',
      description: 'project.travane.description',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS'],
      links: [{ label: 'Live Site', href: 'https://www.travane.com.mx' }],
      highlight: 'project.travane.highlight',
      previewImage: '/assets/images/travane.png',
    },
  ];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const header = root.querySelector<HTMLElement>('.projects-header');
    const cards  = root.querySelectorAll<HTMLElement>('app-project-card');

    if (header) gsap.set(header, { opacity: 0, y: 28 });
    if (cards.length) gsap.set(cards, { opacity: 0, y: 44 });

    ScrollTrigger.create({
      trigger: root,
      start: 'top 82%',
      onEnter: () => {
        if (header) gsap.to(header, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
        if (cards.length) gsap.to(cards, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.14, delay: 0.18 });
      },
    });
  }
}
