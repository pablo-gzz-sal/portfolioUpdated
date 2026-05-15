import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Header } from './layout/header/header';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  private scrollFrame = 0;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        this.queueScrollStateUpdate();
      });
  }

  protected readonly title = signal('portfolio');

  ngAfterViewInit(): void {
    this.queueScrollStateUpdate();
  }

  ngOnDestroy(): void {
    if (this.scrollFrame) {
      cancelAnimationFrame(this.scrollFrame);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    document.documentElement.style.setProperty('--pointer-x', `${x * 28}px`);
    document.documentElement.style.setProperty('--pointer-y', `${y * 28}px`);
    document.documentElement.style.setProperty('--pointer-x-soft', `${x * -18}px`);
    document.documentElement.style.setProperty('--pointer-y-soft', `${y * -18}px`);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.queueScrollStateUpdate();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.queueScrollStateUpdate();
  }

  private queueScrollStateUpdate(): void {
    if (this.scrollFrame) {
      return;
    }

    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = 0;
      this.updateScrollState();
    });
  }

  private updateScrollState(): void {
    const root = document.documentElement;
    const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    const depth = Math.min(window.scrollY / 1200, 1);
    const scrollShift = progress * 120;

    root.style.setProperty('--scroll-progress', progress.toFixed(4));
    root.style.setProperty('--scroll-percent', `${(progress * 100).toFixed(2)}%`);
    root.style.setProperty('--scroll-depth', depth.toFixed(4));
    root.style.setProperty('--scroll-shift', `${scrollShift.toFixed(2)}px`);
    root.style.setProperty('--scroll-shift-soft', `${(scrollShift * 0.18).toFixed(2)}px`);
    root.style.setProperty('--scroll-shift-strong', `${(scrollShift * 0.42).toFixed(2)}px`);
    root.style.setProperty('--scroll-shift-reverse', `${(scrollShift * -0.22).toFixed(2)}px`);
    root.style.setProperty('--scroll-texture-opacity', (0.72 - depth * 0.16).toFixed(3));
    root.style.setProperty('--scroll-instrument-opacity', (0.46 + depth * 0.34).toFixed(3));
  }
}
