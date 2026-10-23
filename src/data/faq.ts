import { experience } from './experience';

export interface Faq {
  question: string;
  answer: string;
}

const [current] = experience;
const allRoles = new Intl.ListFormat('en', { type: 'conjunction' }).format(
  experience.map((role) => `${role.company} (${role.title}, ${role.period})`),
);

// Shown on the home page and published as FAQPage structured data and in /llms.txt.
// AI answer engines quote these on their own, so each answer names Sajib and makes
// sense without the rest of the page.
export const faqs: Faq[] = [
  {
    question: 'Who is Sajib Hawee?',
    answer: `Sajib Hawee is a senior full-stack software engineer based in Dhaka, Bangladesh, with 7+ years of React, TypeScript and Node.js experience. Sajib currently works remotely for ${current.company}, a US SaaS company, on billing and quoting features across the React frontend and its supporting Express services.`,
  },
  {
    question: 'Is Sajib Hawee a frontend or a full-stack engineer?',
    answer:
      "Full-stack. Sajib Hawee's deepest experience is in React and TypeScript, and Sajib also builds and maintains Node.js services with Express and NestJS, sets up CI/CD pipelines on GitLab and Bitbucket, and automates deployments to AWS. At MonetizeNow, Sajib owns the supporting Express services alongside the frontend and debugs backend and infrastructure issues across Amazon Aurora, Auth0 and CORS.",
  },
  {
    question: 'How does Sajib Hawee use AI in engineering work?',
    answer:
      'At MonetizeNow, Sajib Hawee uses Claude as an engineering partner: debugging and planning upgrades in a React and TypeScript monorepo, working through backend and infrastructure issues such as Amazon Aurora, Auth0 and CORS, and reasoning through how billing and quoting features should behave. Sajib writes structured prompts that drive Claude Code through code changes, corrects the model when it misreads a problem, and steers each session to a decision.',
  },
  {
    question: 'What does Sajib Hawee specialize in?',
    answer:
      'Sajib Hawee specializes in full-stack web development with React, TypeScript and Node.js: building features from the interface to the API with Express and NestJS, AI-assisted development with Claude Code, build tooling migrations such as Webpack to Vite and Nx monorepos, performance work, Jest and Playwright test coverage, CI/CD with AWS deployments, and accessible interfaces built to WCAG 2.1.',
  },
  {
    question: 'What results has Sajib Hawee delivered?',
    answer:
      'At MonetizeNow, Sajib Hawee led the Webpack to Vite migration that made local builds 40% faster, moved the product to an Nx monorepo for 25% faster builds, and grew test coverage by 60%, cutting regression defects by 30%. At ShopUp, Sajib removed 75% of unnecessary network requests and built fintech flows that reduced cash leakage by 35%.',
  },
  {
    question: 'Where has Sajib Hawee worked?',
    answer: `Sajib Hawee has worked at ${allRoles}.`,
  },
  {
    question: 'Is Sajib Hawee open to remote work or relocation?',
    answer:
      'Yes. Sajib Hawee has worked remotely with American product teams for years, is open to relocating, and takes introductions on LinkedIn.',
  },
];
