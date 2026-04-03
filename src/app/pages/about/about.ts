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
      desc: 'Angular + React. Component architecture built to be maintained.',
    },
    {
      icon: '◈',
      title: 'Backend structure',
      desc: 'REST APIs, auth, schemas. Clean contracts, clear separation.',
    },
    {
      icon: '◈',
      title: 'Product thinking',
      desc: 'Requirements → MVP → iteration. Build what ships value.',
    },
    {
      icon: '◈',
      title: 'Delivery',
      desc: 'Fast without slop. Documented, deployed, and production-ready.',
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

    // ── Hero — avatar + text cascade in parallel ──────────────────
    const badge      = root.querySelector<HTMLElement>('.about-hero-badge');
    const heroTitle  = root.querySelector<HTMLElement>('.about-hero-title');
    const heroBody   = root.querySelector<HTMLElement>('.about-hero-body');
    const heroCtas   = root.querySelector<HTMLElement>('.about-hero-ctas');
    const avatarCard = root.querySelector<HTMLElement>('.about-avatar-card');
    const avatarChip = root.querySelector<HTMLElement>('.about-avatar-chip');

    const textEls = [badge, heroTitle, heroBody, heroCtas].filter(Boolean) as HTMLElement[];
    if (textEls.length)  gsap.set(textEls,    { opacity: 0, y: 28 });
    if (avatarCard)      gsap.set(avatarCard,  { opacity: 0, scale: 0.92, y: 20 });
    if (avatarChip)      gsap.set(avatarChip,  { opacity: 0, y: 18 });

    const tl = gsap.timeline({ delay: 0.1 });
    if (avatarCard) tl.to(avatarCard, { opacity: 1, scale: 1, y: 0, duration: 0.9,  ease: 'power3.out' }, 0);
    if (badge)      tl.to(badge,      { opacity: 1, y: 0,          duration: 0.55, ease: 'power3.out' }, 0.14);
    if (heroTitle)  tl.to(heroTitle,  { opacity: 1, y: 0,          duration: 0.8,  ease: 'power3.out' }, 0.26);
    if (heroBody)   tl.to(heroBody,   { opacity: 1, y: 0,          duration: 0.7,  ease: 'power3.out' }, 0.42);
    if (heroCtas)   tl.to(heroCtas,   { opacity: 1, y: 0,          duration: 0.6,  ease: 'power3.out' }, 0.54);
    if (avatarChip) tl.to(avatarChip, { opacity: 1, y: 0,          duration: 0.55, ease: 'power3.out' }, 0.72);

    // ── Vision + Stack — slide in from opposite sides ─────────────
    const visionCard   = root.querySelector<HTMLElement>('.about-vision-card');
    const stackCard    = root.querySelector<HTMLElement>('.about-stack-card');
    const stackSection = root.querySelector<HTMLElement>('.stack-section');
    if (visionCard) gsap.set(visionCard, { opacity: 0, x: -36 });
    if (stackCard)  gsap.set(stackCard,  { opacity: 0, x: 36 });
    if (stackSection) {
      ScrollTrigger.create({
        trigger: stackSection,
        start: 'top 85%',
        onEnter: () => {
          if (visionCard) gsap.to(visionCard, { opacity: 1, x: 0, duration: 0.72, ease: 'power3.out' });
          if (stackCard)  gsap.to(stackCard,  { opacity: 1, x: 0, duration: 0.72, ease: 'power3.out', delay: 0.1 });
        },
      });
    }

    // ── Stack badges — spring pop after cards ─────────────────────
    const stackBadges = root.querySelectorAll<HTMLElement>('.stack-badge');
    if (stackBadges.length && stackSection) {
      gsap.set(stackBadges, { opacity: 0, scale: 0.82 });
      ScrollTrigger.create({
        trigger: stackSection,
        start: 'top 85%',
        onEnter: () => gsap.to(stackBadges, {
          opacity: 1, scale: 1, duration: 0.42, ease: 'back.out(1.7)', stagger: 0.04, delay: 0.28,
        }),
      });
    }

    // ── Strengths heading + cards ─────────────────────────────────
    const strengthsHeading = root.querySelector<HTMLElement>('.strengths-heading');
    const strengthCards    = root.querySelectorAll<HTMLElement>('.strength-card');
    const strengthsSection = root.querySelector<HTMLElement>('.strengths-section');
    if (strengthsHeading)    gsap.set(strengthsHeading, { opacity: 0, y: 20 });
    if (strengthCards.length) gsap.set(strengthCards,   { opacity: 0, y: 30 });
    if (strengthsSection) {
      ScrollTrigger.create({
        trigger: strengthsSection,
        start: 'top 85%',
        onEnter: () => {
          if (strengthsHeading) gsap.to(strengthsHeading, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
          if (strengthCards.length) gsap.to(strengthCards, {
            opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.1, delay: 0.18,
          });
        },
      });
    }

    // ── Timeline heading + items ──────────────────────────────────
    const timelineHeading = root.querySelector<HTMLElement>('.timeline-heading');
    const timelineItems   = root.querySelectorAll<HTMLElement>('.timeline-item');
    const timelineSection = root.querySelector<HTMLElement>('.timeline-section');
    if (timelineHeading)      gsap.set(timelineHeading, { opacity: 0, y: 20 });
    if (timelineItems.length)  gsap.set(timelineItems,  { opacity: 0, x: -32 });
    if (timelineSection) {
      ScrollTrigger.create({
        trigger: timelineSection,
        start: 'top 85%',
        onEnter: () => {
          if (timelineHeading) gsap.to(timelineHeading, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
          if (timelineItems.length) gsap.to(timelineItems, {
            opacity: 1, x: 0, duration: 0.72, ease: 'power3.out', stagger: 0.18, delay: 0.22,
          });
        },
      });
    }

    // ── Bottom CTA ────────────────────────────────────────────────
    const cta = root.querySelector<HTMLElement>('.about-cta');
    if (cta) {
      gsap.set(cta, { opacity: 0, y: 36 });
      ScrollTrigger.create({
        trigger: cta,
        start: 'top 90%',
        onEnter: () => gsap.to(cta, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }),
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
