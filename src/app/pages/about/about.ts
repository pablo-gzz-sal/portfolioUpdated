import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

gsap.registerPlugin(ScrollTrigger);

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
export class About implements OnInit, AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

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
      desc: 'Angular and React applications built to be maintained. Component architecture, RxJS patterns, and interaction detail.',
    },
    {
      icon: '◈',
      title: 'Backend structure',
      desc: 'REST APIs, auth, database schemas, and third-party integrations. Clear contracts, clean separation.',
    },
    {
      icon: '◈',
      title: 'Product thinking',
      desc: 'I scope before I build. Requirements → MVP → iteration. Engineering decisions with product outcomes in mind.',
    },
    {
      icon: '◈',
      title: 'Delivery',
      desc: 'Fast iteration without slop. Readable code, documented APIs, and production deployments that stick.',
    },
  ];

  timeline: TimelineItem[] = [
    {
      period: '2022 — Present',
      title: 'Full-Stack Developer · Munich, Germany',
      description:
        'Consulting on large-scale web applications for enterprise clients. Delivered production systems for Airbus and Bosch — performance-critical frontends, backend API layers, and CI/CD pipelines.',
      tone: 'lavender',
      badge: 'Current',
    },
    {
      period: '2024 — Present',
      title: 'Independent / Freelance',
      description:
        'Building products end-to-end for clients across the US and Mexico. Salon booking platforms, lead generation apps, content subscription platforms, and logistics sites.',
      tone: 'primary',
    },
  ];

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;

    // ── Hero section (page load) ───────────────────────────────────
    const heroText = root.querySelector<HTMLElement>('.about-hero');
    const avatar   = root.querySelector<HTMLElement>('.about-avatar');
    if (heroText) gsap.set(heroText, { opacity: 0, y: 32 });
    if (avatar)   gsap.set(avatar,   { opacity: 0, scale: 0.9 });

    setTimeout(() => {
      if (heroText) gsap.to(heroText, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      if (avatar)   gsap.to(avatar,   { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.4)' });
    }, 80);

    // ── Stack badges ──────────────────────────────────────────────
    const stackBadges = root.querySelectorAll<HTMLElement>('.stack-badge');
    const stackSection = root.querySelector<HTMLElement>('.stack-section');
    if (stackBadges.length && stackSection) {
      gsap.set(stackBadges, { opacity: 0, scale: 0.85 });
      ScrollTrigger.create({
        trigger: stackSection,
        start: 'top 85%',
        onEnter: () => gsap.to(stackBadges, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.6)', stagger: 0.05, delay: 0.1 }),
      });
    }

    // ── Strength cards ────────────────────────────────────────────
    const strengthCards = root.querySelectorAll<HTMLElement>('.strength-card');
    const strengthsSection = root.querySelector<HTMLElement>('.strengths-section');
    if (strengthCards.length && strengthsSection) {
      gsap.set(strengthCards, { opacity: 0, y: 28 });
      ScrollTrigger.create({
        trigger: strengthsSection,
        start: 'top 85%',
        onEnter: () => gsap.to(strengthCards, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.1, delay: 0.08 }),
      });
    }

    // ── Timeline items ────────────────────────────────────────────
    const timelineItems = root.querySelectorAll<HTMLElement>('.timeline-item');
    const timelineSection = root.querySelector<HTMLElement>('.timeline-section');
    if (timelineItems.length && timelineSection) {
      gsap.set(timelineItems, { opacity: 0, x: -28 });
      ScrollTrigger.create({
        trigger: timelineSection,
        start: 'top 85%',
        onEnter: () => gsap.to(timelineItems, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15, delay: 0.08 }),
      });
    }
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
