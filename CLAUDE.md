# Pablo Gonzalez — Portfolio

Angular 20 portfolio site. Full-stack developer showcase with GSAP animations, Tailwind CSS 4.2, and a dark glassmorphic design system.

## Tech Stack

- **Framework**: Angular 20 (standalone components, no NgModules)
- **Styling**: Tailwind CSS 4.2 with `@import 'tailwindcss'` — no tailwind.config.js
- **Animations**: GSAP (hero entrance, blob parallax on mouse move)
- **Router**: Angular Router with three routes: `/`, `/about`, `/projects/:id`
- **Build**: Angular CLI / esbuild

## Project Structure

```
src/
  styles.css              — Global CSS, all CSS custom properties (design tokens)
  index.html              — Font imports (Geist + Geist Mono), meta tags
  app/
    pages/
      landing/            — Home page (assembles sections)
      about/              — About page (self-contained)
      case-study/         — Project detail page (data driven from local array)
    sections/
      hero/               — Hero with GSAP animation and blob parallax
      projects/           — Project grid
      systems/            — Process/methodology section
      knowledge/          — Tech stack grid
    layout/
      header/             — Sticky nav with scroll detection
      footer/             — Footer with social links
    shared/
      project-card/       — Reusable card component
      models/study.model  — CaseStudyProject interface
      pipes/safeHtml      — DomSanitizer pipe for SVG paths
```

## Design System

All design tokens live in `src/styles.css` as CSS custom properties. Never hardcode colors.

### Key Tokens

**Backgrounds (elevation hierarchy):**
- `--bg` — page base (`#060609`)
- `--bg-alt` — cards, panels (`#0c0b12`)
- `--bg-raised` — nested mini-cards (`#100f18`)

**Surfaces (glassmorphic layers):**
- `--surface`, `--surface2`, `--surface3` — increasing opacity whites

**Borders:**
- `--border`, `--border2`, `--border3` — increasing strength

**Text hierarchy:**
- `--text` — primary headings (`#e8e4ff` soft lilac-white)
- `--text-dim` — secondary headings
- `--muted` — body copy paragraphs
- `--muted2` — metadata, labels
- `--muted3` — disabled, placeholders

**Violet accent scale:**
- `--a0` deep → `--a1` base → `--a2` mid → `--a3` light → `--a4` pale
- `--a1-soft`, `--a1-ring`, `--a1-glow` — functional aliases

**Lavender (decorative):**
- `--lavender`, `--lavender-dim`, `--lavender-line`

**Typography:**
- `--font-sans: 'Geist'` — all UI text
- `--font-mono: 'Geist Mono'` — tech badges, code-adjacent labels

### Text Hierarchy Rule

| Token | Use |
|-------|-----|
| `--text` | Primary headings, interactive elements |
| `--text-dim` | Secondary headings |
| `--muted` | Body copy |
| `--muted2` | Metadata, supporting labels |
| `--muted3` | Disabled, placeholders |

## Component Conventions

- All components are **standalone** (no `NgModule`)
- Templates use `@for`, `@if` (Angular 17+ control flow — never `*ngFor`/`*ngIf`)
- CSS classes are Tailwind utilities; component `.css` files are mostly empty
- GSAP animations live in TypeScript files only, targeting `@ViewChild` refs
- No external icon library — geometric Unicode symbols used as icons (`◈`, `◉`, `◎`, `◫`, `◆`)

## Hardcoded Data Locations

| Data | File |
|------|------|
| Project cards (landing grid) | `sections/projects/` component |
| Case study full data | Array in `pages/case-study/case-study.ts` |
| Timeline / strengths | `pages/about/about.ts` |
| Process steps | `sections/systems/systems.ts` |
| Tech groups | `sections/knowledge/knowledge.ts` |
| Footer nav + socials | `layout/footer/footer.ts` |

## Naming Conventions

- Components: `PascalCase` class, `kebab-case` selector (`app-hero`)
- Files: `kebab-case` (`project-card.html`, `case-study.ts`)
- CSS tokens: double-dash kebab (`--bg-alt`, `--a1-ring`)
- Tailwind color values: always use `text-[color:var(--token)]` syntax (not `text-[var(--token)]`) to avoid Tailwind parsing ambiguity

## Common Patterns

**Card with animated hover border:**
```html
<article class="group relative overflow-hidden rounded-2xl p-px bg-[var(--surface)]">
  <!-- conic gradient border overlay -->
  <div class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-500
              group-hover:opacity-100
              bg-[conic-gradient(from_180deg_at_50%_50%,var(--a1-ring),rgba(255,255,255,0.04),var(--a1-ring))]">
  </div>
  <!-- inner panel -->
  <div class="relative rounded-xl bg-[var(--bg-alt)] p-5">...</div>
</article>
```

**Section header pattern:**
```html
<p class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--muted2)]">
  <span class="h-px w-4 bg-[color:var(--lavender)]/40"></span>
  Eyebrow label
</p>
<h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Section headline.</h2>
```

**GSAP entry animation:**
```typescript
gsap.set(elements, { opacity: 0, y: 24 });
gsap.to(elements, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 });
```

**Tech/mono badge:**
```html
<span class="font-[family-name:var(--font-mono)] text-[10.5px] text-[color:var(--muted2)]
             bg-[var(--surface)] ring-1 ring-[var(--border)] rounded-md px-2.5 py-1">
  Angular
</span>
```

## What NOT To Do

- Do not add `NgModule` — project uses standalone components throughout
- Do not use `*ngIf` / `*ngFor` — use `@if` / `@for` control flow
- Do not hardcode color hex values — always use CSS custom properties
- Do not import heavy UI libraries (no Angular Material, no PrimeNG)
- Do not use `any` type in TypeScript
- GSAP import: always `import gsap from 'gsap'` (default import, not named)
- Do not add `backdrop-blur-xl` to frequently rendered elements — use `backdrop-blur-md` max to avoid GPU overhead
