import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef<HTMLElement>;
  @ViewChild('heroPill', { static: true }) heroPill!: ElementRef<HTMLElement>;
  @ViewChild('heroTitle', { static: true }) heroTitle!: ElementRef<HTMLElement>;
  @ViewChild('heroText', { static: true }) heroText!: ElementRef<HTMLElement>;
  @ViewChild('heroCtas', { static: true }) heroCtas!: ElementRef<HTMLElement>;
  @ViewChild('blobOne', { static: true }) blobOne!: ElementRef<HTMLElement>;
  @ViewChild('blobTwo', { static: true }) blobTwo!: ElementRef<HTMLElement>;
  @ViewChildren('statCard') statCardEls!: QueryList<ElementRef<HTMLElement>>;

  statCards = [
    { label: 'hero.stat.clients.label', value: 'hero.stat.clients.value' },
    { label: 'hero.stat.stack.label', value: 'hero.stat.stack.value' },
    { label: 'hero.stat.basedIn.label', value: 'hero.stat.basedIn.value' },
  ];

  ngAfterViewInit(): void {
    this.animateHero();
    this.animateOrnaments();
    this.bindParallax();
  }

  private animateHero(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const revealEls = [
      this.heroPill.nativeElement,
      this.heroTitle.nativeElement,
      this.heroText.nativeElement,
      this.heroCtas.nativeElement,
      ...this.statCardEls.map((card) => card.nativeElement),
    ];

    gsap.set(revealEls, { opacity: 0, y: 28 });
    gsap.set([this.blobOne.nativeElement, this.blobTwo.nativeElement], { opacity: 0, scale: 0.92 });

    tl.to([this.blobOne.nativeElement, this.blobTwo.nativeElement], {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.12,
      ease: 'power2.out',
    })
      .to(this.heroPill.nativeElement, { opacity: 1, y: 0, duration: 0.65 }, '-=0.75')
      .to(this.heroTitle.nativeElement, { opacity: 1, y: 0, duration: 0.9 }, '-=0.42')
      .to(this.heroText.nativeElement, { opacity: 1, y: 0, duration: 0.72 }, '-=0.5')
      .to(this.heroCtas.nativeElement, { opacity: 1, y: 0, duration: 0.62 }, '-=0.44')
      .to(
        this.statCardEls.map((card) => card.nativeElement),
        { opacity: 1, y: 0, duration: 0.62, stagger: 0.1 },
        '-=0.28',
      );
  }

  private animateOrnaments(): void {
    gsap.to(this.blobOne.nativeElement, {
      x: 10,
      y: -8,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to(this.blobTwo.nativeElement, {
      x: -8,
      y: 12,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  private bindParallax(): void {
    const section = this.heroSection.nativeElement;

    section.addEventListener('mousemove', (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(this.blobOne.nativeElement, {
        x: x * 18,
        y: y * 12,
        duration: 1.2,
        overwrite: 'auto',
        ease: 'power3.out',
      });
      gsap.to(this.blobTwo.nativeElement, {
        x: x * -14,
        y: y * -10,
        duration: 1.4,
        overwrite: 'auto',
        ease: 'power3.out',
      });
    });

    section.addEventListener('mouseleave', () => {
      gsap.to(this.blobOne.nativeElement, { x: 0, y: 0, duration: 1.2, ease: 'power3.out' });
      gsap.to(this.blobTwo.nativeElement, { x: 0, y: 0, duration: 1.2, ease: 'power3.out' });
    });
  }
}
