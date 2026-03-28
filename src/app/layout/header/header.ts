import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

type NavLink = { label: string; fragment?: string; route?: string };

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef<HTMLElement>;

  scrolled  = false;
  menuOpen  = false;

  readonly mobileMenuHeight = '360px';

  navLinks: NavLink[] = [
    { label: 'Projects', fragment: 'projects' },
    { label: 'Systems',  fragment: 'systems'  },
    { label: 'Tech',     fragment: 'tech'     },
    { label: 'About',    route: '/about'      },
    { label: 'Contact',  fragment: 'contact'  },
  ];

  constructor(private router: Router) {}

  navigateToSection(fragment: string): void {
    const onHome = this.router.url === '/' || this.router.url.startsWith('/#') || this.router.url.startsWith('/?');
    if (onHome) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 8;
    // Close menu on scroll
    if (this.menuOpen) this.menuOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen = false;
  }
}