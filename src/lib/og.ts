import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// Satori can't read woff2 or variable fonts, so the OG images use the static
// Manrope files. The site itself uses the variable font.
const fontFile = (weight: number) =>
  readFile(resolve(`node_modules/@fontsource/manrope/files/manrope-latin-${weight}-normal.woff`));

let fonts: Promise<{ name: string; data: Buffer; weight: 600 | 800; style: 'normal' }[]>;

function loadFonts() {
  fonts ??= Promise.all([fontFile(600), fontFile(800)]).then(([semibold, extrabold]) => [
    { name: 'Manrope', data: semibold, weight: 600, style: 'normal' },
    { name: 'Manrope', data: extrabold, weight: 800, style: 'normal' },
  ]);
  return fonts;
}

type Node = { type: string; props: Record<string, unknown> };

const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export interface OgImageOptions {
  headline: string;
  footer: string;
}

/** Renders a 1200×630 PNG in the site's colors: name, headline and a short footer line. */
export async function renderOgImage({
  headline,
  footer,
}: OgImageOptions): Promise<Uint8Array<ArrayBuffer>> {
  // Satori adds padding on top of a fixed height, so the padding lives on a flex child
  // that fills whatever space the petrol band leaves.
  const content = h(
    'div',
    {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px 80px',
    },
    [
      h('div', { display: 'flex', fontSize: 40, fontWeight: 800, color: '#0B3C5D' }, [
        'Sajib Hawee',
        h('span', { color: '#B45309' }, '.'),
      ]),
      h(
        'div',
        {
          display: 'flex',
          fontSize: headline.length > 60 ? 60 : 68,
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: '#0B3C5D',
          maxWidth: 1000,
        },
        headline,
      ),
      h('div', { display: 'flex', fontSize: 30, fontWeight: 600, color: '#4A4F57' }, footer),
    ],
  );

  const tree = h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#FFFFFF',
      fontFamily: 'Manrope',
    },
    [content, h('div', { display: 'flex', height: 20, background: '#0B3C5D' })],
  );

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: await loadFonts(),
  });

  return new Uint8Array(await sharp(Buffer.from(svg)).png().toBuffer());
}
