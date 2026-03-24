import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TechGroup = { title: string; icon: string; items: string[] };

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.css',
})
export class Knowledge {
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
      title: 'Cybersecurity',
      icon: '◎',
      items: ['Kali', 'PortSwigger', 'Red/Blue Team', 'Pentesting'],
    },
  ];
}