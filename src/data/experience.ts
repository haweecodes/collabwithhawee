export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  /** Wrap a figure in **double asterisks** to show it in bold. */
  highlights: string[];
}

export const experience: Role[] = [
  {
    company: 'MonetizeNow',
    title: 'Senior Frontend Engineer',
    period: 'Apr 2024 to now',
    location: 'Remote, USA',
    highlights: [
      'Led the Webpack to Vite migration: local builds **40% faster** and a simpler CI/CD pipeline.',
      'Moved the product to an Nx monorepo: builds **25% faster**, releases **30% more efficient**.',
      'Owned the supporting Express services, improving API reliability, and debugged backend and infrastructure issues across Amazon Aurora, Auth0 and CORS.',
      'Made Claude an everyday engineering partner: debugging, planning upgrades and working through billing and quoting logic, with structured prompts that drive Claude Code.',
      'Grew Jest and Playwright coverage by **60%**, cutting regression defects by **30%**.',
      'Improved app performance by **10%** through modular architecture and rendering work. Mentored junior engineers.',
    ],
  },
  {
    company: 'ShopUp',
    title: 'Frontend Engineer',
    period: 'Dec 2021 to Apr 2024',
    location: 'Dhaka',
    highlights: [
      'Built internal fintech apps for operational and financial workflows at scale.',
      'Designed validation-heavy flows that reduced cash leakage by **35%**.',
      'Raised internal productivity by **60%** and cut processing time by **25%**.',
      'Refactored API interaction patterns, removing **75%** of unnecessary network requests.',
    ],
  },
  {
    company: 'SELISE Digital Platforms',
    title: 'Frontend Engineer',
    period: 'Sep 2020 to Nov 2021',
    location: 'Dhaka',
    highlights: [
      'Built shared components for a cross-team design system, speeding up development by **25%**.',
      'Cut code duplication by **50%** with a modular frontend architecture.',
      'Reworked an e-signature flow: **30%** fewer user errors, **40%** higher satisfaction.',
    ],
  },
  {
    company: 'iQuantile Intelligent Technology',
    title: 'Frontend Engineer',
    period: 'Jan 2018 to Aug 2020',
    location: 'Dhaka',
    highlights: [
      'Built dashboards and offline-capable POS systems, making data entry **50%** more efficient.',
      'Halved desktop app load time through performance work.',
      'Improved accessibility with ARIA roles and full keyboard navigation.',
    ],
  },
];
