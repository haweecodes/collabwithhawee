# sajib-hawee

Personal site for Sajib Hawee, Senior Frontend Engineer. Built with Astro as a static site: every page ships as plain HTML with no client-side JavaScript. Deployed on Vercel.

## Commands

| Command           | What it does                                               |
| ----------------- | ---------------------------------------------------------- |
| `npm run dev`     | Dev server at http://localhost:4321                        |
| `npm run build`   | Production build to `dist/`                                |
| `npm run preview` | Serve the production build                                 |
| `npm run check`   | Type-check with `astro check`                              |
| `npm run lint`    | ESLint, including accessibility rules for `.astro` files   |
| `npm run format`  | Format with Prettier                                       |
| `npm test`        | Build, then run the Playwright smoke and axe tests         |
| `npm run verify`  | Everything above, in order                                 |
| `npm run cv`      | Rebuild `public/sajib-hawee-cv.pdf` from `scripts/cv.html` |

The first time you run the tests, install the browser with `npx playwright install chromium`.

## Where things live

- Copy for the results, experience and projects sections is in `src/data/*.ts`.
- "Things I've written" lists the Medium articles in `src/data/medium.ts`. Add new ones there.
- Project screenshots are in `src/assets/projects/`, cropped to 16:10.
- The résumé PDF is built from `scripts/cv.html`. Edit it, then run `npm run cv`. Keep phone and email out: the PDF is public.
- Design tokens are in `src/styles/tokens.css`.
- SEO tags and JSON-LD come from `src/components/Seo.astro`. The OG image is generated at build time by `src/pages/og/home.png.ts`.

## TODO

- [ ] Domain: set `SITE_URL` or replace the placeholder in `astro.config.mjs`. On Vercel the production domain is used automatically.
- [ ] FlowWork screenshot: see `src/data/projects.ts`.
- [ ] Testimonial: `src/data/testimonial.ts`.
- [ ] Hero photo: `src/assets/sajib.jpg` is the existing portrait. The design asks for a portrait-mode photo in natural light with a real smile.
