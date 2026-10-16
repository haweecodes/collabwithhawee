export const SITE = {
  name: 'Sajib Hawee',
  jobTitle: 'Senior Frontend Engineer',
  headline: 'I make big React codebases fast, reliable and easy to ship.',
  description:
    'Sajib Hawee is a senior frontend engineer with 7+ years of React and TypeScript, leading migrations, performance work and testing for product teams.',
  locality: 'Dhaka',
  countryCode: 'BD',
  linkedIn: 'https://linkedin.com/in/sajib-hawee-2a818b154',
  medium: 'https://haweecodes.medium.com/',
  // Built from scripts/cv.html with `npm run cv`.
  cvPath: '/sajib-hawee-cv.pdf',
  knowsAbout: ['React', 'TypeScript', 'Nx', 'Vite', 'Playwright', 'Frontend architecture'],
} as const;

/** Section anchors on the home page, used by the header nav. */
export const NAV_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'about', label: 'About' },
] as const;
