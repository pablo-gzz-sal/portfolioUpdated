import { Component } from '@angular/core';

@Component({
  selector: 'app-systems',
  standalone: true,
  imports: [],
  templateUrl: './systems.html',
  styleUrl: './systems.css',
})
export class Systems {
  steps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & scope',
    description: 'I clarify the problem, user flows, constraints, and success criteria. Then I define the smallest version that ships value fast.',
    badge: 'Clarity first',
    tags: ['Requirements → MVP', 'UX flows', 'Risks & constraints'],
    miniCards: null,
  },
  {
    id: 2,
    number: '02',
    title: 'Architecture & data design',
    description: 'I define API contracts, data models, auth, and service boundaries. Clear architecture prevents expensive rewrites later.',
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
    title: 'Build & iterate',
    description: 'I ship in thin vertical slices: UI → API → data → integration. Clean components, predictable state, and readable code.',
    badge: 'Ship slices',
    tags: ['Component system', 'Integrations (Stripe / APIs)', 'Performance hygiene'],
    miniCards: null,
  },
  {
    id: 4,
    number: '04',
    title: 'Testing, docs & QA',
    description: 'I document APIs, add guardrails, and validate edge cases before release. Stable releases build trust.',
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
    title: 'Deployment & hosting',
    description: 'I containerize services, define environments, and automate deployments. Then I monitor, iterate, and keep the system healthy.',
    badge: 'Ship to prod',
    tags: ['Dockerized services', 'CI/CD pipelines', 'Monitoring & logs'],
    miniCards: null,
  },
];
}
