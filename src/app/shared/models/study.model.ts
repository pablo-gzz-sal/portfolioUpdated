export interface CaseStudyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudyProject {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  heroImage?: string;
  summary: string;
  role: string;
  outcome: string;
  scope: string;
  stack: string[];
  challenge: string;
  solution: string;
  features: CaseStudyFeature[];
  screenshots: string[];
  links: { label: string; href: string }[];
  highlight: string;
  description: string;
}
