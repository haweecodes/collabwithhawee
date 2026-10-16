// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: the domain isn't decided yet. Set SITE_URL, or replace this placeholder.
// On Vercel the project's production domain is used automatically, so canonical
// and Open Graph URLs are right on deployed builds even before this is updated.
const PLACEHOLDER_SITE = 'https://sajibhawee.com';

const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL ?? (vercelDomain ? `https://${vercelDomain}` : PLACEHOLDER_SITE);

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  // Keep classic whitespace collapsing so inline text and links keep their spaces.
  compressHTML: true,
  build: {
    format: 'directory',
    // The CSS is small, so inlining it removes the only render-blocking request.
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});
