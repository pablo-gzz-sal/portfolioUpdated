import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { animate, inView, stagger } from 'motion';

type TechGroup = { title: string; icon: string; items: string[] };

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.css',
})
export class Knowledge implements AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

  groups: TechGroup[] = [
    {
      title: 'Frontend',
      icon: '⬡',
      items: ['Angular', 'React', 'Vue', 'TypeScript', 'Tailwind', 'RxJS'],
    },
    {
      title: 'Mobile',
      icon: '◻',
      items: ['React Native', 'Ionic', 'Expo', 'Android Studio'],
    },
    {
      title: 'Backend',
      icon: '◈',
      items: ['Node.js', 'Express', 'NestJS', '.NET', 'Python', 'REST APIs', 'Auth0'],
    },
    {
      title: 'Databases',
      icon: '◉',
      items: ['PostgreSQL', 'MongoDB', 'MariaDB'],
    },
    {
      title: 'Infra / Tooling',
      icon: '⊕',
      items: ['Docker', 'Swagger/OpenAPI', 'Stripe', 'CI/CD', 'Azure'],
    },
    {
      title: 'Security & Pentesting',
      icon: '◎',
      items: ['Kali', 'PortSwigger', 'Red/Blue Team', 'Pentesting'],
    },
  ];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const header = root.querySelector<HTMLElement>('.knowledge-header');
    const cards  = root.querySelectorAll<HTMLElement>('.tech-card');

    if (header) animate(header, { opacity: 0, y: 24 }, { duration: 0 });
    if (cards.length) animate(cards, { opacity: 0, scale: 0.92, y: 20 }, { duration: 0 });

    inView(root, () => {
      if (header) {
        animate(header, { opacity: 1, y: 0 }, {
          duration: 0.6,
          easing: [0.22, 1, 0.36, 1],
        });
      }
      if (cards.length) {
        animate(cards, { opacity: 1, scale: 1, y: 0 }, {
          delay: stagger(0.08, { start: 0.14 }),
          duration: 0.6,
          easing: [0.22, 1, 0.36, 1],
        });
      }
    }, { margin: '-60px 0px' });
  }
}
