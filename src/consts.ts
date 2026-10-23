// The first role, at iQuantile, started in January 2018. The count is taken at build time,
// so it goes up on its own; Vercel rebuilds on every push.
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const yearsOfExperience = Math.floor((Date.now() - Date.UTC(2018, 0, 1)) / MS_PER_YEAR);

export const SITE = {
  name: 'Sajib Hawee',
  jobTitle: 'Senior Full-Stack Engineer',
  headline: 'I build fast, reliable web products, front end to back end.',
  yearsOfExperience,
  description: `Sajib Hawee is a senior full-stack software engineer with ${yearsOfExperience}+ years across React, TypeScript and Node.js, building reliable web apps with an AI-assisted workflow.`,
  locality: 'Dhaka',
  countryCode: 'BD',
  linkedIn: 'https://linkedin.com/in/sajib-hawee-2a818b154',
  medium: 'https://haweecodes.medium.com/',
  github: 'https://github.com/haweecodes',
  // Built from scripts/cv.html with `npm run cv`.
  cvPath: '/sajib-hawee-cv.pdf',
  alumniOf: 'American International University Bangladesh',
  knowsLanguage: ['English', 'Bangla', 'Hindi'],
  knowsAbout: [
    'Full-stack development',
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'NestJS',
    'Amazon Aurora',
    'Auth0',
    'AI-assisted development',
    'Claude Code',
    'Prompt engineering',
    'SaaS billing and quoting',
    'Next.js',
    'Nx',
    'Vite',
    'Webpack',
    'Jest',
    'Playwright',
    'AWS',
    'CI/CD',
    'Frontend architecture',
    'Web performance',
    'Web accessibility',
    'Design systems',
  ],
} as const;

/** Section anchors on the home page, used by the header nav. Keep them in page order. */
export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
] as const;
