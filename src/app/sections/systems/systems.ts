import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { animate, inView, stagger } from 'motion';

@Component({
  selector: 'app-systems',
  standalone: true,
  imports: [],
  templateUrl: './systems.html',
  styleUrl: './systems.css',
})
export class Systems implements AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

  steps = [
    {
      id: 1,
      number: '01',
      icon: '◎',
      title: 'Discovery & scope',
      description:
        'I define the problem, user flows, and success criteria — then the smallest version that ships value.',
      badge: 'Clarity first',
      tags: ['Requirements → MVP', 'UX flows', 'Risks & constraints'],
      miniCards: null,
    },
    {
      id: 2,
      number: '02',
      icon: '◫',
      title: 'Architecture & data design',
      description:
        'API contracts, data models, auth, and service boundaries defined before a line of implementation is written.',
      badge: 'Plan the system',
      tags: null,
      miniCards: [
        { label: 'Backend', value: 'REST + Swagger/OpenAPI • modular services' },
        { label: 'Database', value: 'Schema + indexes • migrations • audit fields' },
      ],
    },
    {
      id: 3,
      number: '03',
      icon: '✦',
      title: 'Build & iterate',
      description:
        'Thin vertical slices from UI to API to data. Clean components, predictable state, readable code.',
      badge: 'Ship slices',
      tags: ['Component system', 'Integrations (Stripe / APIs)', 'Performance hygiene'],
      miniCards: null,
    },
    {
      id: 4,
      number: '04',
      icon: '✓',
      title: 'Testing, docs & QA',
      description:
        'Swagger docs, edge case coverage, and validation before every release. Stable code builds trust.',
      badge: 'Reduce risk',
      tags: null,
      miniCards: [
        { label: 'Docs', value: 'Swagger/OpenAPI • README • runbooks' },
        { label: 'Quality', value: 'Validation • logging • error handling' },
      ],
    },
    {
      id: 5,
      number: '05',
      icon: '↗',
      title: 'Deployment & hosting',
      description:
        'Containerized services, automated deployments, monitoring. The system stays healthy after launch.',
      badge: 'Ship to prod',
      tags: ['Dockerized services', 'CI/CD pipelines', 'Monitoring & logs'],
      miniCards: null,
    },
  ];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const header = root.querySelector<HTMLElement>('.systems-header');
    const cards  = root.querySelectorAll<HTMLElement>('article');

    if (header) animate(header, { opacity: 0, y: 24 }, { duration: 0 });
    if (cards.length) animate(cards, { opacity: 0, x: -32 }, { duration: 0 });

    inView(root, () => {
      if (header) {
        animate(header, { opacity: 1, y: 0 }, {
          duration: 0.6,
          easing: [0.22, 1, 0.36, 1],
        });
      }
      if (cards.length) {
        animate(cards, { opacity: 1, x: 0 }, {
          delay: stagger(0.10, { start: 0.12 }),
          duration: 0.65,
          easing: [0.22, 1, 0.36, 1],
        });
      }
    }, { margin: '-60px 0px' });
  }
}
