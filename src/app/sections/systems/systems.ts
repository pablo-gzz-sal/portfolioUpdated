import { AfterViewInit, Component, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-systems',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './systems.html',
  styleUrl: './systems.css',
})
export class Systems implements AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

  steps = [
    {
      id: 1,
      number: '01',
      icon: '◎',
      title: 'systems.step1.title',
      description: 'systems.step1.desc',
      badge: 'systems.step1.badge',
      tags: ['systems.step1.tag1', 'systems.step1.tag2', 'systems.step1.tag3'],
      miniCards: null,
    },
    {
      id: 2,
      number: '02',
      icon: '◫',
      title: 'systems.step2.title',
      description: 'systems.step2.desc',
      badge: 'systems.step2.badge',
      tags: null,
      miniCards: [
        { label: 'systems.step2.mc1Label', value: 'systems.step2.mc1Value' },
        { label: 'systems.step2.mc2Label', value: 'systems.step2.mc2Value' },
      ],
    },
    {
      id: 3,
      number: '03',
      icon: '✦',
      title: 'systems.step3.title',
      description: 'systems.step3.desc',
      badge: 'systems.step3.badge',
      tags: ['systems.step3.tag1', 'systems.step3.tag2', 'systems.step3.tag3'],
      miniCards: null,
    },
    {
      id: 4,
      number: '04',
      icon: '✓',
      title: 'systems.step4.title',
      description: 'systems.step4.desc',
      badge: 'systems.step4.badge',
      tags: null,
      miniCards: [
        { label: 'systems.step4.mc1Label', value: 'systems.step4.mc1Value' },
        { label: 'systems.step4.mc2Label', value: 'systems.step4.mc2Value' },
      ],
    },
    {
      id: 5,
      number: '05',
      icon: '↗',
      title: 'systems.step5.title',
      description: 'systems.step5.desc',
      badge: 'systems.step5.badge',
      tags: ['systems.step5.tag1', 'systems.step5.tag2', 'systems.step5.tag3'],
      miniCards: null,
    },
  ];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const header = root.querySelector<HTMLElement>('.systems-header');
    const cards  = root.querySelectorAll<HTMLElement>('article');

    if (header) gsap.set(header, { opacity: 0, y: 24 });
    if (cards.length) gsap.set(cards, { opacity: 0, x: -32 });

    ScrollTrigger.create({
      trigger: root,
      start: 'top 80%',
      onEnter: () => {
        if (header) gsap.to(header, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
        if (cards.length) gsap.to(cards, { opacity: 1, x: 0, duration: 0.65, ease: 'power3.out', stagger: 0.10, delay: 0.12 });
      },
    });
  }
}
