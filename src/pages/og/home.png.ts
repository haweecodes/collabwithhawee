import type { APIRoute } from 'astro';
import { SITE } from '../../consts';
import { renderOgImage } from '../../lib/og';

export const GET: APIRoute = async () => {
  const png = await renderOgImage({
    headline: SITE.headline,
    footer: `${SITE.jobTitle} · Dhaka, Bangladesh`,
  });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
