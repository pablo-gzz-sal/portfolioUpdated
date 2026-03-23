import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

type StackItem = {
  label: string;
  tone?: 'primary' | 'lavender' | 'neutral';
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
  tone: 'primary' | 'lavender' | 'neutral';
  badge?: string;
};

type Strength = {
  icon: string;
  title: string;
  desc: string;
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  stack: StackItem[] = [
    { label: 'Angular', tone: 'primary' },
    { label: 'React', tone: 'neutral' },
    { label: 'TypeScript', tone: 'lavender' },
    { label: 'Node.js', tone: 'primary' },
    { label: 'PostgreSQL', tone: 'lavender' },
    { label: 'Docker', tone: 'neutral' },
    { label: 'Tailwind CSS', tone: 'primary' },
    { label: 'AWS', tone: 'lavender' },
    { label: 'Swagger/OpenAPI', tone: 'neutral' },
  ];

  strengths: Strength[] = [
    {
      icon: '◈',
      title: 'Frontend systems',
      desc: 'Angular, React, scalable UI, reusable patterns, and polished interaction details.',
    },
    {
      icon: '◈',
      title: 'Backend structure',
      desc: 'APIs, auth, schemas, integrations, operational clarity, and long-term maintainability.',
    },
    {
      icon: '◈',
      title: 'Product thinking',
      desc: 'Translating real requirements into shippable scopes and user-centered decisions.',
    },
    {
      icon: '◈',
      title: 'Execution',
      desc: 'Fast iteration, readable code, and delivery without sacrificing visual quality.',
    },
  ];

  timeline: TimelineItem[] = [
    {
      period: '2022 — Present',
      title: 'Software Developer · Munich, Germany',
      description:
        'Working as a full-stack consultant delivering scalable web applications and digital solutions. Delivered high-impact solutions for enterprise clients including Airbus and Bosch , focusing on performance, architecture, and refined user experience.',
      tone: 'lavender',
      badge: 'Current',
    },
    {
      period: '2024 — Present',
      title: 'Freelance Developer',
      description:
        'Independently building and launching digital products and client solutions across web. Focused on high-quality UI/UX, scalable systems, and end-to-end product development.',
      tone: 'primary',
    },
  ];

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  toneClass(tone: StackItem['tone']): string {
    switch (tone) {
      case 'primary':
        return 'text-[color:var(--lavender)] ring-[var(--a1-ring)] bg-[var(--a1-soft)]';
      case 'lavender':
        return 'text-[color:var(--lavender)] ring-[rgba(180,140,255,0.2)] bg-[rgba(180,140,255,0.08)]';
      default:
        return 'text-[color:var(--muted)] ring-[var(--border)] bg-[var(--surface)]';
    }
  }

  dotClass(tone: TimelineItem['tone']): string {
    switch (tone) {
      case 'primary':
        return 'bg-[var(--a1)] shadow-[0_0_16px_var(--a1-glow)]';
      case 'lavender':
        return 'bg-[color:var(--lavender)] shadow-[0_0_16px_rgba(180,140,255,0.35)]';
      default:
        return 'bg-[rgba(255,255,255,0.3)] shadow-[0_0_12px_rgba(255,255,255,0.15)]';
    }
  }
}
