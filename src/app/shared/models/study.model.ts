export interface CaseStudyFeature {
  icon: string;        // emoji or SVG string
  title: string;
  description: string;
}

export interface CaseStudyProject {
  id: string;
  title: string;
  subtitle: string;           // e.g. "NY Salon"
  year: string;               // e.g. "2024"
  tags: string[];             // card tags (Case Study, Full-Stack…)
  heroImage?: string;         // path to hero bg image, optional
  summary: string;            // one-liner under hero
  stack: string[];            // tech used
  challenge: string;
  solution: string;
  features: CaseStudyFeature[];
  screenshots: string[];      // image paths
  links: { label: string; href: string }[];
  highlight: string;          // badge text on listing card
  description: string;        // short card description
}