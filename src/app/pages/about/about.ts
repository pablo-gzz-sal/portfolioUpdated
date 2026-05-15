import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Footer } from '../../layout/footer/footer';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

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
  imports: [CommonModule, Footer, TranslatePipe],
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
    { icon: '01', title: 'about.strengths.frontend.title', desc: 'about.strengths.frontend.desc' },
    { icon: '02', title: 'about.strengths.backend.title', desc: 'about.strengths.backend.desc' },
    { icon: '03', title: 'about.strengths.product.title', desc: 'about.strengths.product.desc' },
    { icon: '04', title: 'about.strengths.delivery.title', desc: 'about.strengths.delivery.desc' },
  ];

  timeline: TimelineItem[] = [
    {
      period: 'about.timeline.item1.period',
      title: 'about.timeline.item1.title',
      description: 'about.timeline.item1.desc',
      tone: 'lavender',
      badge: 'about.timeline.item1.badge',
    },
    {
      period: 'about.timeline.item2.period',
      title: 'about.timeline.item2.title',
      description: 'about.timeline.item2.desc',
      tone: 'primary',
    },
  ];

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const intro = root.querySelectorAll<HTMLElement>('.about-hero-badge, .about-hero-title, .about-hero-body, .about-hero-ctas');
    const avatarCard = root.querySelector<HTMLElement>('.about-avatar-card');
    const avatarChip = root.querySelector<HTMLElement>('.about-avatar-chip');

    if (intro.length) gsap.set(intro, { opacity: 0, y: 28 });
    if (avatarCard) gsap.set(avatarCard, { opacity: 0, y: 24, scale: 0.96 });
    if (avatarChip) gsap.set(avatarChip, { opacity: 0, y: 18 });

    const tl = gsap.timeline({ delay: 0.08 });
    if (avatarCard) tl.to(avatarCard, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' }, 0);
    if (intro.length) tl.to(intro, { opacity: 1, y: 0, duration: 0.68, ease: 'power3.out', stagger: 0.09 }, 0.12);
    if (avatarChip) tl.to(avatarChip, { opacity: 1, y: 0, duration: 0.58, ease: 'power3.out' }, 0.58);

    this.revealOnScroll('.stack-section', '.about-vision-card, .about-stack-card', { y: 28 });
    this.revealOnScroll('.strengths-section', '.strengths-heading, .strength-card', { y: 28 });
    this.revealOnScroll('.timeline-section', '.timeline-heading, .timeline-item', { y: 28 });
    this.revealOnScroll('.about-cta', '.about-cta', { y: 32 });

    const stackBadges = root.querySelectorAll<HTMLElement>('.stack-badge');
    const stackSection = root.querySelector<HTMLElement>('.stack-section');
    if (stackBadges.length && stackSection) {
      gsap.set(stackBadges, { opacity: 0, y: 10 });
      ScrollTrigger.create({
        trigger: stackSection,
        start: 'top 82%',
        onEnter: () => {
          gsap.to(stackBadges, { opacity: 1, y: 0, duration: 0.36, ease: 'power3.out', stagger: 0.035, delay: 0.24 });
        },
      });
    }
  }

  toneClass(tone: StackItem['tone']): string {
    switch (tone) {
      case 'primary':
        return 'border-[var(--line-warm)] text-[color:var(--accent-2)] bg-[var(--accent-soft)]';
      case 'lavender':
        return 'border-[var(--line-strong)] text-[color:var(--text-soft)] bg-[var(--surface)]';
      default:
        return 'border-[var(--line)] text-[color:var(--muted)] bg-[rgba(239,234,222,0.035)]';
    }
  }

  dotClass(tone: TimelineItem['tone']): string {
    switch (tone) {
      case 'primary':
        return 'bg-[var(--accent)]';
      case 'lavender':
        return 'bg-[var(--text-soft)]';
      default:
        return 'bg-[var(--muted)]';
    }
  }

  private revealOnScroll(triggerSelector: string, itemSelector: string, from: gsap.TweenVars): void {
    const root = this.host.nativeElement;
    const trigger = root.querySelector<HTMLElement>(triggerSelector);
    const items = root.querySelectorAll<HTMLElement>(itemSelector);

    if (!trigger || !items.length) return;

    gsap.set(items, { opacity: 0, ...from });
    ScrollTrigger.create({
      trigger,
      start: 'top 84%',
      onEnter: () => {
        gsap.to(items, { opacity: 1, y: 0, x: 0, duration: 0.66, ease: 'power3.out', stagger: 0.08 });
      },
    });
  }
}
