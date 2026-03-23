import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef<HTMLElement>;
  @ViewChild('heroPill', { static: true }) heroPill!: ElementRef<HTMLElement>;
  @ViewChild('heroTitle', { static: true }) heroTitle!: ElementRef<HTMLElement>;
  @ViewChild('heroText', { static: true }) heroText!: ElementRef<HTMLElement>;
  @ViewChild('heroCtas', { static: true }) heroCtas!: ElementRef<HTMLElement>;
  @ViewChild('blobOne', { static: true }) blobOne!: ElementRef<SVGElement>;
  @ViewChild('blobTwo', { static: true }) blobTwo!: ElementRef<SVGElement>;
 @ViewChildren('statCard') statCardEls!: QueryList<ElementRef<HTMLElement>>;
    statCards = [
    { label: 'Focus', value: 'Angular, APIs, Backend, scalable systems' },
    { label: 'Style', value: 'Minimal, premium UI with motion' },
    { label: 'Strength', value: 'Shipping + iteration + maintainability' },
  ];

  ngAfterViewInit(): void {
    this.animateHero();
    this.animateBlobs();
    this.bindBlobParallax();
  }

  private animateHero(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set(
      [
        this.heroPill.nativeElement,
        this.heroTitle.nativeElement,
        this.heroText.nativeElement,
        this.heroCtas.nativeElement,
        ...this.statCardEls.map((c) => c.nativeElement),
      ],
      {
        opacity: 0,
        y: 24,
      },
    );

    gsap.set([this.blobOne.nativeElement, this.blobTwo.nativeElement], {
      opacity: 0,
      scale: 0.9,
    });

    tl.to([this.blobOne.nativeElement, this.blobTwo.nativeElement], {
      opacity: (i) => (i === 0 ? 0.5 : 0.25),
      scale: 1,
      duration: 1.4,
      stagger: 0.15,
      ease: 'power2.out',
    })
      .to(
        this.heroPill.nativeElement,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        '-=1',
      )
      .to(
        this.heroTitle.nativeElement,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
        },
        '-=0.4',
      )
      .to(
        this.heroText.nativeElement,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        '-=0.5',
      )
      .to(
        this.heroCtas.nativeElement,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        '-=0.45',
      )
      .to(
        this.statCardEls.map((c) => c.nativeElement),
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
        },
        '-=0.35',
      );
  }

  private animateBlobs(): void {
    gsap.to(this.blobOne.nativeElement, {
      x: 18,
      y: -12,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(this.blobTwo.nativeElement, {
      x: -14,
      y: 16,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  private bindBlobParallax(): void {
    const section = this.heroSection.nativeElement;

    section.addEventListener('mousemove', (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(this.blobOne.nativeElement, {
        x: x * 30,
        y: y * 20,
        duration: 1.2,
        overwrite: 'auto',
        ease: 'power3.out',
      });

      gsap.to(this.blobTwo.nativeElement, {
        x: x * -24,
        y: y * -18,
        duration: 1.4,
        overwrite: 'auto',
        ease: 'power3.out',
      });
    });

    section.addEventListener('mouseleave', () => {
      gsap.to(this.blobOne.nativeElement, {
        x: 0,
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
      });

      gsap.to(this.blobTwo.nativeElement, {
        x: 0,
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
      });
    });
  }
}
