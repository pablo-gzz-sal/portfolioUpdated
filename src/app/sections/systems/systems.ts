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
    { id: 1, number: '01', title: 'systems.step1.title', description: 'systems.step1.desc', badge: 'systems.step1.badge' },
    { id: 2, number: '02', title: 'systems.step2.title', description: 'systems.step2.desc', badge: 'systems.step2.badge' },
    { id: 3, number: '03', title: 'systems.step3.title', description: 'systems.step3.desc', badge: 'systems.step3.badge' },
    { id: 4, number: '04', title: 'systems.step4.title', description: 'systems.step4.desc', badge: 'systems.step4.badge' },
    { id: 5, number: '05', title: 'systems.step5.title', description: 'systems.step5.desc', badge: 'systems.step5.badge' },
  ];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const header = root.querySelector<HTMLElement>('.systems-header');
    const cards = root.querySelectorAll<HTMLElement>('article');

    if (header) gsap.set(header, { opacity: 0, y: 24 });
    if (cards.length) gsap.set(cards, { opacity: 0, y: 28 });

    ScrollTrigger.create({
      trigger: root,
      start: 'top 82%',
      onEnter: () => {
        if (header) gsap.to(header, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
        if (cards.length) {
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.62, ease: 'power3.out', stagger: 0.08, delay: 0.12 });
        }
      },
    });
  }
}
