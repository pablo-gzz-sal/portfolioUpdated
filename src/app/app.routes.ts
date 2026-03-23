import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { About } from './pages/about/about';
import { CaseStudy } from './pages/case-study/case-study';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'about', component: About },
  { path: 'projects/:id', component: CaseStudy },
  { path: '**', redirectTo: '' },
];
