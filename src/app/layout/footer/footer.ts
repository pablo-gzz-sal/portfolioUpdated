import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SafeHtmlPipe } from '../../shared/pipes/safeHtml';

type Social = { label: string; href: string; svgPath: string };
type FooterLink = { label: string; href: string };

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, SafeHtmlPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  year = new Date().getFullYear();

  footerNav: FooterLink[] = [
    { label: 'Projects', href: '#projects' },
    { label: 'Systems',  href: '#systems'  },
    { label: 'Tech',     href: '#tech'     },
    { label: 'About',    href: '/about'    },
    { label: 'Contact',  href: '#contact'  },
  ];

  socials: Social[] = [
    {
      label: 'GitHub',
      href: 'https://github.com/pablo-gzz-sal',
      svgPath: `<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>`,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/?locale=en_US',
      svgPath: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,
    },
    {
      label: 'Email',
      href: 'mailto:pablo.gzz.sal@gmail.com',
      svgPath: `<path fill-rule="evenodd" d="M5.25 4.5A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25V6.75A2.25 2.25 0 0018.75 4.5H5.25zm0 1.5h13.5c.414 0 .75.336.75.75v.518l-7.5 4.615-7.5-4.615V6.75c0-.414.336-.75.75-.75zm-.75 3.677v6.573c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9.677l-6.927 4.26a.75.75 0 01-.786 0L4.5 9.677z" clip-rule="evenodd"/>`,
    },
  ];
}