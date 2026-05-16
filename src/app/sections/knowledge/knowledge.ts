import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

gsap.registerPlugin(ScrollTrigger);

type TechGroup = { title: string; items: string[] };

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.css',
})
export class Knowledge implements AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

  groups: TechGroup[] = [
    { title: 'knowledge.frontend', items: ['Angular', 'React', 'Vue', 'TypeScript', 'Tailwind', 'RxJS'] },
    { title: 'knowledge.mobile', items: ['React Native', 'Ionic', 'Expo', 'Android Studio'] },
    { title: 'knowledge.backend', items: ['Node.js', 'Express', 'NestJS', '.NET', 'Python', 'REST APIs', 'Auth0'] },
    { title: 'knowledge.databases', items: ['PostgreSQL', 'MongoDB', 'MariaDB'] },
    { title: 'knowledge.infra', items: ['Docker', 'Swagger/OpenAPI', 'Stripe', 'CI/CD', 'Azure'] },
    { title: 'knowledge.security', items: ['Kali', 'PortSwigger', 'Red/Blue Team', 'Pentesting'] },
  ];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const header = root.querySelector<HTMLElement>('.knowledge-header');
    const cards = root.querySelectorAll<HTMLElement>('.tech-card');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    if (header) gsap.set(header, { opacity: 0, y: 24 });
    if (cards.length) gsap.set(cards, { opacity: 0, y: 26 });

    ScrollTrigger.create({
      trigger: root,
      start: 'top 82%',
      onEnter: () => {
        if (header) gsap.to(header, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
        if (cards.length) {
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.58, ease: 'power3.out', stagger: 0.07, delay: 0.12 });
        }
      },
    });
  }
}
