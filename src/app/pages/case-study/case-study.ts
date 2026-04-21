import { CommonModule, DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { CaseStudyProject } from '../../shared/models/study.model';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, RouterLink, DecimalPipe, Header, Footer, TranslatePipe],
  templateUrl: './case-study.html',
  styleUrl: './case-study.css',
})
export class CaseStudy implements OnInit, AfterViewInit {

  project: CaseStudyProject | undefined;
  showAllScreenshots = false;
  selectedImage: string | null = null;

  get visibleScreenshots(): string[] {
    if (this.showAllScreenshots) return this.project?.screenshots ?? [];
    return (this.project?.screenshots ?? []).slice(0, 4);
  }

  // ── All project data ────────────────────────────────────────────
  private readonly projects: CaseStudyProject[] = [
    {
      id: 'josephbattisti',
      title: 'Joseph Battisti',
      subtitle: 'project.josephbattisti.subtitle',
      year: '2026',
      tags: ['Full-Stack', 'Case Study'],
      heroImage: '/assets/images/joseph.png',
      summary: 'project.josephbattisti.summary',
      stack: ['Angular', 'PostgreSQL', 'Swagger', 'Node.js', 'TypeScript', 'AWS Cloud'],
      challenge: 'project.josephbattisti.challenge',
      solution: 'project.josephbattisti.solution',
      features: [
        { icon: 'DS', title: 'project.josephbattisti.feat.ds.title', description: 'project.josephbattisti.feat.ds.desc' },
        { icon: 'SV', title: 'project.josephbattisti.feat.sv.title', description: 'project.josephbattisti.feat.sv.desc' },
        { icon: 'IE', title: 'project.josephbattisti.feat.ie.title', description: 'project.josephbattisti.feat.ie.desc' },
      ],
      screenshots: [
        '/assets/images/joseph.png',
        '/assets/images/joseph2.png',
        '/assets/images/joseph3.png',
      ],
      links: [
        { label: 'Website', href: 'https://josephbattisti-q6dqe.ondigitalocean.app/' },
        { label: 'GitHub', href: 'https://github.com/pablo-gzz-sal/barber-frontend' },
      ],
      highlight: 'project.josephbattisti.highlight',
      description: 'project.josephbattisti.description',
    },

    {
      id: 'referral',
      title: 'Lending Group',
      subtitle: 'project.referral.subtitle',
      year: '2025',
      tags: ['Full-Stack', 'Case Study'],
      heroImage: '/assets/images/bclg.png',
      summary: 'project.referral.summary',
      stack: ['Angular', 'Express', 'MongoDB', 'CI/CD', 'Node.js', 'Docker'],
      challenge: 'project.referral.challenge',
      solution: 'project.referral.solution',
      features: [
        { icon: 'LC', title: 'project.referral.feat.lc.title', description: 'project.referral.feat.lc.desc' },
        { icon: 'AF', title: 'project.referral.feat.af.title', description: 'project.referral.feat.af.desc' },
        { icon: 'E',  title: 'project.referral.feat.e.title',  description: 'project.referral.feat.e.desc'  },
      ],
      screenshots: [
        '/assets/images/bclg.png',
        '/assets/images/bclg2.png',
        '/assets/images/bclg3.png',
      ],
      links: [{ label: 'Website', href: 'https://bclg-uhe93.ondigitalocean.app/' }],
      highlight: 'project.referral.highlight',
      description: 'project.referral.description',
    },

    {
      id: 'video',
      title: 'Esencial360',
      subtitle: 'project.video.subtitle',
      year: '2025',
      tags: ['Content Platform', 'Case Study'],
      heroImage: '/assets/images/esencial.png',
      summary: 'project.video.summary',
      stack: ['Angular', 'Express', 'MongoDB', 'BunnyStream', 'Stripe', 'Node.js'],
      challenge: 'project.video.challenge',
      solution: 'project.video.solution',
      features: [
        { icon: 'VD', title: 'project.video.feat.vd.title', description: 'project.video.feat.vd.desc' },
        { icon: 'SE', title: 'project.video.feat.se.title', description: 'project.video.feat.se.desc' },
        { icon: 'AT', title: 'project.video.feat.at.title', description: 'project.video.feat.at.desc' },
      ],
      screenshots: [
        '/assets/images/esencial.png',
        '/assets/images/esencial2.png',
        '/assets/images/esencial3.png',
      ],
      links: [{ label: 'Website', href: 'https://esencial360.com/' }],
      highlight: 'project.video.highlight',
      description: 'project.video.description',
    },

    {
      id: 'travane',
      title: 'Travane',
      subtitle: 'project.travane.subtitle',
      year: '2026',
      tags: ['Frontend', 'Branding', 'Landing Page'],
      heroImage: '/assets/images/travane.png',
      summary: 'project.travane.summary',
      stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
      challenge: 'project.travane.challenge',
      solution: 'project.travane.solution',
      features: [
        { icon: 'BI', title: 'project.travane.feat.bi.title', description: 'project.travane.feat.bi.desc' },
        { icon: 'UX', title: 'project.travane.feat.ux.title', description: 'project.travane.feat.ux.desc' },
        { icon: 'CT', title: 'project.travane.feat.ct.title', description: 'project.travane.feat.ct.desc' },
        { icon: 'RD', title: 'project.travane.feat.rd.title', description: 'project.travane.feat.rd.desc' },
      ],
      screenshots: ['/assets/images/travane.png', '/assets/images/travane2.png', '/assets/images/travane3.png'],
      links: [{ label: 'Website', href: 'https://www.travane.com.mx/' }],
      highlight: 'project.travane.highlight',
      description: 'project.travane.description',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private _host: ElementRef<HTMLElement>,
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find((p) => p.id === id);
  }

  ngAfterViewInit(): void {
    const root = this._host.nativeElement;

    // ── Hero — cinematic line-by-line reveal ──────────────────────
    const heroBack    = root.querySelector<HTMLElement>('.cs-hero-back');
    const heroMeta    = root.querySelector<HTMLElement>('.cs-hero-meta');
    const heroTitle   = root.querySelector<HTMLElement>('.cs-hero-title');
    const heroSub     = root.querySelector<HTMLElement>('.cs-hero-subtitle');
    const heroSum     = root.querySelector<HTMLElement>('.cs-hero-summary');
    const heroDivider = root.querySelector<HTMLElement>('.cs-hero-divider');

    if (heroBack)    gsap.set(heroBack,    { opacity: 0, y: -10 });
    if (heroMeta)    gsap.set(heroMeta,    { opacity: 0, y: 16 });
    if (heroTitle)   gsap.set(heroTitle,   { opacity: 0, y: 44 });
    if (heroSub)     gsap.set(heroSub,     { opacity: 0, y: 32 });
    if (heroSum)     gsap.set(heroSum,     { opacity: 0, y: 20 });
    if (heroDivider) gsap.set(heroDivider, { opacity: 0, scaleX: 0, transformOrigin: 'left center' });

    const heroTl = gsap.timeline({ delay: 0.18 });
    if (heroBack)    heroTl.to(heroBack,    { opacity: 1, y: 0,      duration: 0.5,  ease: 'power2.out' }, 0);
    if (heroMeta)    heroTl.to(heroMeta,    { opacity: 1, y: 0,      duration: 0.65, ease: 'power3.out' }, 0.12);
    if (heroTitle)   heroTl.to(heroTitle,   { opacity: 1, y: 0,      duration: 1.0,  ease: 'power3.out' }, 0.26);
    if (heroSub)     heroTl.to(heroSub,     { opacity: 1, y: 0,      duration: 0.75, ease: 'power3.out' }, 0.42);
    if (heroSum)     heroTl.to(heroSum,     { opacity: 1, y: 0,      duration: 0.65, ease: 'power3.out' }, 0.56);
    if (heroDivider) heroTl.to(heroDivider, { opacity: 1, scaleX: 1, duration: 0.85, ease: 'power3.out' }, 0.68);

    // ── Stack section — fade up on scroll ────────────────────────
    const bodySections = root.querySelectorAll<HTMLElement>('.cs-body-section');
    bodySections.forEach((section) => {
      gsap.set(section, { opacity: 0, y: 32 });
      ScrollTrigger.create({
        trigger: section,
        start: 'top 88%',
        onEnter: () => gsap.to(section, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
      });
    });

    // ── Challenge + Solution — from opposite sides ────────────────
    const challenge               = root.querySelector<HTMLElement>('.cs-challenge');
    const solution                = root.querySelector<HTMLElement>('.cs-solution');
    const challengeSolutionSection = root.querySelector<HTMLElement>('.cs-challenge-solution');
    if (challenge) gsap.set(challenge, { opacity: 0, x: -44 });
    if (solution)  gsap.set(solution,  { opacity: 0, x: 44 });
    if (challengeSolutionSection) {
      ScrollTrigger.create({
        trigger: challengeSolutionSection,
        start: 'top 86%',
        onEnter: () => {
          if (challenge) gsap.to(challenge, { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out' });
          if (solution)  gsap.to(solution,  { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', delay: 0.1 });
        },
      });
    }

    // ── Feature cards stagger in ──────────────────────────────────
    const featureSection = root.querySelector<HTMLElement>('.cs-features');
    const featureCards   = root.querySelectorAll<HTMLElement>('.cs-feature-card');
    if (featureSection && featureCards.length) {
      gsap.set(featureCards, { opacity: 0, y: 28 });
      ScrollTrigger.create({
        trigger: featureSection,
        start: 'top 85%',
        onEnter: () => gsap.to(featureCards, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.09, delay: 0.1 }),
      });
    }

    // ── Screenshots stagger in ────────────────────────────────────
    const screenshotSection = root.querySelector<HTMLElement>('.cs-screenshots');
    const shots             = root.querySelectorAll<HTMLElement>('.cs-screenshot');
    if (screenshotSection && shots.length) {
      gsap.set(shots, { opacity: 0, scale: 0.96 });
      ScrollTrigger.create({
        trigger: screenshotSection,
        start: 'top 85%',
        onEnter: () => gsap.to(shots, { opacity: 1, scale: 1, duration: 0.65, ease: 'power3.out', stagger: 0.1, delay: 0.05 }),
      });
    }

    // ── CTA section — fade up ─────────────────────────────────────
    const cta = root.querySelector<HTMLElement>('.cs-cta');
    if (cta) {
      gsap.set(cta, { opacity: 0, y: 36 });
      ScrollTrigger.create({
        trigger: cta,
        start: 'top 90%',
        onEnter: () => gsap.to(cta, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }),
      });
    }
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
