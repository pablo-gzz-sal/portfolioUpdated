import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavLink = { label: string; href?: string; route?: string };

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

  // Fixed height used for the CSS max-height transition.
  // Tall enough to never clip; transition still feels snappy.
  readonly mobileMenuHeight = '360px';

  navLinks: NavLink[] = [
    { label: 'Projects', href: '#projects' },
    { label: 'Systems',  href: '#systems'  },
    { label: 'Tech',     href: '#tech'     },
    { label: 'About',    route: '/about'   },
    { label: 'Contact',  href: '#contact'  },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
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