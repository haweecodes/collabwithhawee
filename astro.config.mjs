// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// On Vercel the project's production domain is used automatically. This is the
// fallback for local builds, so canonical and Open Graph URLs match production.
const PLACEHOLDER_SITE = 'https://sajibhawee.dev';

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
  // Vercel builds on every push, so the build date is when the content last changed.
  integrations: [sitemap({ lastmod: new Date() })],
});
