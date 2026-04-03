import { CommonModule, DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { animate, inView, stagger } from 'motion';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { CaseStudyProject } from '../../shared/models/study.model';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, RouterLink, DecimalPipe, Header, Footer],
  templateUrl: './case-study.html',
  styleUrl: './case-study.css',
})
export class CaseStudy implements OnInit, AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

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
      subtitle: 'NY Salon.',
      year: '2026',
      tags: ['Full-Stack', 'Case Study'],
      heroImage: '/assets/images/joseph.png',
      summary:
        'A high-performance digital ecosystem for a premier Manhattan hair salon, integrating seamless booking and real-time availability.',
      stack: ['Angular', 'PostgreSQL', 'Swagger', 'Node.js', 'TypeScript', 'AWS Cloud'],
      challenge:
        'The legacy system suffered from performance, leading to poor UX/UI and a disjointed user experience for the elite clientele.',
      solution:
        'Implemented a robust secure API in Nestjs and a reactive Angular front-end that provides instant feedback and connection to the API and shopify.',
      features: [
        {
          icon: 'DS',
          title: 'Dynamic Scheduling',
          description:
            'Real-time availability engine with timezone intelligence and stylist slot management.',
        },
        {
          icon: 'SV',
          title: 'Secure Vault',
          description:
            'PCI-compliant payment processing via Shopify with encrypted client profile storage.',
        },
        {
          icon: 'IE',
          title: 'Insight Engine',
          description:
            'Business analytics dashboard for salon management with revenue and booking forecasts.',
        },
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
      highlight: 'Architecture + UX',
      description: 'Beauty salon with Shopify integrated',
    },

    {
      id: 'referral',
      title: 'Lending Group',
      subtitle: 'Texas.',
      year: '2025',
      tags: ['Full-Stack', 'Case Study'],
      heroImage: '/assets/images/bclg.png',
      summary:
        'A dedicated lead-generation application for a Texas-based lending group, optimizing employment-seeker workflows end-to-end.',
      stack: ['Angular', 'Express', 'MongoDB', 'CI/CD', 'Node.js', 'Docker'],
      challenge:
        'Manual lead tracking across spreadsheets caused friction in follow-ups, missed opportunities, and inconsistent data quality for the sales team.',
      solution:
        'Built a full-stack Angular + Express application with a structured MongoDB pipeline, automated email triggers, and a CI/CD workflow ensuring zero-downtime deployments.',
      features: [
        {
          icon: 'LC',
          title: 'Lead Capture',
          description: 'Smart forms with validation and automatic CRM entry on submission.',
        },
        {
          icon: 'AF',
          title: 'Automated Follow-ups',
          description: 'Trigger-based email sequences keeping leads warm without manual effort.',
        },
        {
          icon: 'E',
          title: 'Exposure',
          description: 'SEO and AI visibility to improve brand reach.',
        },
      ],
      screenshots: [
        '/assets/images/bclg.png',
        '/assets/images/bclg2.png',
        '/assets/images/bclg3.png',
      ],
      links: [{ label: 'Website', href: 'https://bclg-uhe93.ondigitalocean.app/' }],
      highlight: 'Leads generation',
      description: 'Employment seeking dedicated app',
    },

    {
      id: 'video',
      title: 'Esencial360',
      subtitle: 'Yoga & Meditation.',
      year: '2025',
      tags: ['Content Platform', 'Case Study'],
      heroImage: '/assets/images/esencial.png',
      summary:
        'A configurable wellness platform with BunnyStream video delivery, subscription plans, and a full admin tooling suite.',
      stack: ['Angular', 'Express', 'MongoDB', 'BunnyStream', 'Stripe', 'Node.js'],
      challenge:
        'The client needed a platform that could gate premium content behind tiered subscriptions while delivering HD video without buffering, at scale.',
      solution:
        'Integrated BunnyStream for CDN-backed video delivery and Stripe for subscription billing. Built a custom admin UI for instructors to manage content, users, and analytics.',
      features: [
        {
          icon: 'VD',
          title: 'Video Delivery',
          description: 'BunnyStream CDN integration for sub-second video start times globally.',
        },
        {
          icon: 'SE',
          title: 'Subscription Engine',
          description: 'Stripe-powered tiered plans with automatic access gating and renewals.',
        },
        {
          icon: 'AT',
          title: 'Admin Tooling',
          description: 'Full content management, user administration, and analytics dashboard.',
        },
      ],
      screenshots: [
        '/assets/images/esencial.png',
        '/assets/images/esencial2.png',
        '/assets/images/esencial3.png',
      ],
      links: [{ label: 'Website', href: 'https://esencial360.com/' }],
      highlight: 'Content platform',
      description: 'Configurable plan + BunnyStream video retrieval + admin tooling.',
    },

    {
      id: 'travane',
      title: 'Travane',
      subtitle: 'Logística y Transporte.',
      year: '2026',
      tags: ['Frontend', 'Branding', 'Landing Page'],
      heroImage: '/assets/images/travane.png',

      summary:
        'A modern frontend experience built to showcase the Travane brand and provide a clear, direct channel for potential clients to get in contact.',

      stack: ['Angular', 'TypeScript', 'Tailwind CSS'],

      challenge:
        'Creating a clean and trustworthy digital presence for a logistics company, with a focus on brand identity, clarity, and user engagement.',

      solution:
        'Designed and developed a responsive frontend that highlights the brand, communicates services effectively, and guides users toward direct contact actions.',

      features: [
        {
          icon: 'BI',
          title: 'Brand Identity',
          description:
            'Strong visual design focused on conveying trust, reliability, and professionalism.',
        },
        {
          icon: 'UX',
          title: 'Clear User Flow',
          description:
            'Structured layout that guides users through services and encourages engagement.',
        },
        {
          icon: 'CT',
          title: 'Contact Integration',
          description:
            'Simple and direct ways for users to reach out and initiate business inquiries.',
        },
        {
          icon: 'RD',
          title: 'Responsive Design',
          description: 'Optimized experience across mobile, tablet, and desktop devices.',
        },
      ],

      screenshots: ['/assets/images/travane.png', '/assets/images/travane2.png', '/assets/images/travane3.png'],

       links: [{ label: 'Website', href: 'https://www.travane.com.mx/' }],

      highlight: 'Frontend Experience',

      description:
        'A frontend-focused project designed to present the Travane brand and facilitate client acquisition through a modern and intuitive interface.',
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

    // ── Hero content springs up ────────────────────────────────────
    const heroContent = root.querySelector<HTMLElement>('.cs-hero-content');
    if (heroContent) {
      animate(heroContent, { opacity: 0, y: 40 }, { duration: 0 });
      setTimeout(() => {
        animate(heroContent, { opacity: 1, y: 0 }, {
          duration: 0.85,
          easing: [0.22, 1, 0.36, 1],
        });
      }, 120);
    }

    // ── Body sections fade up on scroll ───────────────────────────
    const bodySections = root.querySelectorAll<HTMLElement>('.cs-body-section');
    bodySections.forEach((section) => {
      animate(section, { opacity: 0, y: 32 }, { duration: 0 });
      inView(section, () => {
        animate(section, { opacity: 1, y: 0 }, {
          duration: 0.7,
          easing: [0.22, 1, 0.36, 1],
        });
      }, { margin: '-40px 0px' });
    });

    // ── Feature cards stagger in ───────────────────────────────────
    const featureSection = root.querySelector<HTMLElement>('.cs-features');
    const featureCards   = root.querySelectorAll<HTMLElement>('.cs-feature-card');
    if (featureSection && featureCards.length) {
      animate(featureCards, { opacity: 0, y: 28 }, { duration: 0 });
      inView(featureSection, () => {
        animate(featureCards, { opacity: 1, y: 0 }, {
          delay: stagger(0.09, { start: 0.1 }),
          duration: 0.6,
          easing: [0.22, 1, 0.36, 1],
        });
      }, { margin: '-40px 0px' });
    }

    // ── Screenshots stagger in ─────────────────────────────────────
    const screenshotSection = root.querySelector<HTMLElement>('.cs-screenshots');
    const shots = root.querySelectorAll<HTMLElement>('.cs-screenshot');
    if (screenshotSection && shots.length) {
      animate(shots, { opacity: 0, scale: 0.96 }, { duration: 0 });
      inView(screenshotSection, () => {
        animate(shots, { opacity: 1, scale: 1 }, {
          delay: stagger(0.1, { start: 0.05 }),
          duration: 0.65,
          easing: [0.22, 1, 0.36, 1],
        });
      }, { margin: '-40px 0px' });
    }
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
