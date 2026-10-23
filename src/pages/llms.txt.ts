import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { experience } from '../data/experience';
import { faqs } from '../data/faq';
import { mediumArticles } from '../data/medium';
import { projects } from '../data/projects';

const monthYear = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

// A plain-text summary of the site for LLMs, following https://llmstxt.org.
// It's built from the same data as the home page, so the two never drift apart.
export const GET: APIRoute = ({ site }) => {
  const cv = new URL(SITE.cvPath, site).href;
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    `${SITE.name} is a ${SITE.jobTitle} in ${SITE.locality}, Bangladesh, working remotely and open to relocation.`,
    '',
    '## Experience',
    '',
    ...experience.flatMap((role) => [
      `### ${role.company}: ${role.title} (${role.period}, ${role.location})`,
      '',
      // Drop the **bold** markers the page uses for figures.
      ...role.highlights.map((highlight) => `- ${highlight.replaceAll('**', '')}`),
      '',
    ]),
    '## Projects',
    '',
    ...projects.map((project) => `- [${project.name}](${project.url}): ${project.description}`),
    '',
    '## Writing',
    '',
    ...mediumArticles.map(
      (article) =>
        `- [${article.title}](${article.url}): Medium, ${monthYear.format(article.published)}`,
    ),
    '',
    '## Frequently asked questions',
    '',
    ...faqs.flatMap((faq) => [`### ${faq.question}`, '', faq.answer, '']),
    '## Links',
    '',
    `- [Résumé (PDF)](${cv})`,
    `- [LinkedIn](${SITE.linkedIn})`,
    `- [GitHub](${SITE.github})`,
    `- [Medium](${SITE.medium})`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
