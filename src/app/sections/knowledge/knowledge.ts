import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TechBadge } from '../../shared/tech-badge/tech-badge';

type TechGroup = { title: string; items: string[] };

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule, TechBadge],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.css',
})
export class Knowledge {
  groups: TechGroup[] = [
    { title: 'Frontend', items: ['Angular', 'React', 'Vue', 'TypeScript', 'Tailwind', 'RxJS'] },
    { title: 'Mobile', items: ['React Native', 'Ionic', 'Expo', 'Android Studio'] },
    { title: 'Backend', items: ['Node.js', 'Express', "Nestjs", '.NET', 'Python', 'REST APIs', 'Auth0'] },
    { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MariaDB'] },
    { title: 'Infra / Tooling', items: ['Docker', 'Swagger/OpenAPI', 'Stripe', 'CI/CD', 'Azure'] },
    { title: 'Cybersecurity', items: ['Kali', 'PortSwigger', 'Red/Blue Team', 'Pentesting',] },
  ];
}
