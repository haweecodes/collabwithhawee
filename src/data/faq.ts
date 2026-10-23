export interface Faq {
  question: string;
  answer: string;
}

// Shown on the home page and published as FAQPage structured data and in /llms.txt.
// AI answer engines quote an answer next to its question, so each one should make sense
// on its own. Add context the rest of the page doesn't give, rather than repeating it.
export const faqs: Faq[] = [
  {
    question: 'Who is Sajib Hawee?',
    answer:
      'Sajib Hawee is a senior full-stack engineer based in Dhaka, Bangladesh, who has worked with React and TypeScript since 2018. The current role is at MonetizeNow, a US SaaS company, building billing and quoting features across the React frontend and the Express services behind it.',
  },
  {
    question: 'What products has Sajib Hawee built?',
    answer:
      "At work: billing and quoting features at MonetizeNow, internal fintech tools for ShopUp's operational and financial workflows, a cross-team design system and an e-signature flow at SELISE, and dashboards and offline-capable point-of-sale systems at iQuantile. On the side: Guiddance, which walks new users through a product step by step; FlowWork, a real-time app where any chat message can become a task on a Kanban board; and a typing speed test.",
  },
  {
    question: "What is Sajib Hawee's experience with React and TypeScript?",
    answer:
      'Since 2018, across four quite different products: point-of-sale dashboards, a shared design system, fintech tools and a US SaaS platform. The recent work has been at the scale of the whole codebase: moving a product into an Nx monorepo, replacing Webpack with Vite, and keeping a large React and TypeScript codebase easy for a team to change. Next.js, Redux and accessible UI built to WCAG 2.1 are part of the toolkit too.',
  },
  {
    question: 'How does Sajib Hawee approach performance and testing?',
    answer:
      'Performance means two things: how fast the product feels and how fast the team can ship it. At ShopUp, reworking how components called the API removed 75% of unnecessary network requests. At MonetizeNow, replacing Webpack with Vite made local builds 40% faster. Testing keeps that pace safe: growing Jest and Playwright coverage by 60% cut regression defects by 30%.',
  },
  {
    question: 'How does Sajib Hawee use AI in software engineering?',
    answer:
      'As an engineering partner rather than an autopilot. At MonetizeNow, Claude is part of debugging, planning upgrades across the monorepo, working through backend issues with Amazon Aurora, Auth0 and CORS, and reasoning about how billing and quoting features should behave. Code changes go through Claude Code, driven by structured prompts Sajib writes. The approach is to start from the real situation, correct the model when it misreads, and steer toward a decision.',
  },
  {
    question: 'Is Sajib Hawee available for remote work or relocation?',
    answer:
      'Both. Sajib has worked remotely with American teams for years, including in the current role, and is open to relocating. LinkedIn is the best place to start a conversation.',
  },
];
