import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Knowledge } from '../../sections/knowledge/knowledge';
import { Projects } from '../../sections/projects/projects';
import { Hero } from '../../sections/hero/hero';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Header, Footer, Hero, Projects, Knowledge],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
