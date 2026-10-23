import type { ImageMetadata } from 'astro';
import guiddanceShot from '../assets/projects/guiddance.png';
import typingShot from '../assets/projects/typing-speed-checker.png';

export interface Project {
  name: string;
  description: string;
  url: string;
  /** Import the image from src/assets and describe what it shows. */
  screenshot?: { src: ImageMetadata; alt: string };
  /** Shown in the frame until a screenshot is added. */
  screenshotTodo: string;
}

// TODO(Sajib): add a screenshot for FlowWork, like the others.
// Screenshots are shown at 16:10, so crop them to that shape with the content centered.
export const projects: Project[] = [
  {
    name: 'Guiddance',
    description:
      'A digital adoption platform that guides users visually through a product, step by step, so new users get going faster.',
    url: 'https://guiddance.vercel.app/',
    screenshot: {
      src: guiddanceShot,
      alt: 'The Guiddance landing page, headed “Onboard Users in Minutes, Not Hours”, with Get Started Now and See Demo buttons.',
    },
    screenshotTodo: '[Guiddance screenshot]',
  },
  {
    name: 'FlowWork',
    description:
      'A full-stack app for team chat and tasks, where any message can become a task on a Kanban board. React frontend, Express API and real-time updates with Socket.IO, in an Nx monorepo.',
    url: 'https://haweecodes-work.vercel.app/',
    screenshotTodo: '[FlowWork screenshot]',
  },
  {
    name: 'Typing Speed Checker',
    description: 'A typing speed test that measures how fast and accurately you type.',
    url: 'https://typer-app-omega.vercel.app/',
    screenshot: {
      src: typingShot,
      alt: 'The typing test on a dark background: a sentence to copy above an empty text box, with a restart icon.',
    },
    screenshotTodo: '[Typing app screenshot]',
  },
];
