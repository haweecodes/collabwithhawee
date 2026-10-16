// Renders scripts/cv.html to public/sajib-hawee-cv.pdf with Chromium: real text (so
// applicant tracking systems can read it), clickable links and the site's Manrope font.
// Run with `npm run cv` after editing scripts/cv.html.
/* global document -- used inside page.evaluate, which runs in the browser */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

const root = new URL('../', import.meta.url);
const OUTPUT = fileURLToPath(new URL('public/sajib-hawee-cv.pdf', root));

// Static weights rather than the variable font, which Chromium's PDF output handles less well.
const WEIGHTS = [400, 600, 700, 800];
const fontFaces = await Promise.all(
  WEIGHTS.map(async (weight) => {
    const file = new URL(
      `node_modules/@fontsource/manrope/files/manrope-latin-${weight}-normal.woff2`,
      root,
    );
    const data = (await readFile(file)).toString('base64');
    return `@font-face { font-family: Manrope; font-weight: ${weight}; src: url(data:font/woff2;base64,${data}) format('woff2'); }`;
  }),
);

const html = await readFile(new URL('scripts/cv.html', root), 'utf8');

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.addStyleTag({ content: fontFaces.join('\n') });
  await page.evaluate(() => Promise.all([...document.fonts].map((font) => font.load())));
  await page.pdf({ path: OUTPUT, preferCSSPageSize: true, printBackground: true });
  console.log(`Wrote ${OUTPUT}`);
} finally {
  await browser.close();
}
