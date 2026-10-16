import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const LINKEDIN = 'https://linkedin.com/in/sajib-hawee-2a818b154';

async function expectNoAxeViolations(page: Page) {
  const { violations } = await new AxeBuilder({ page }).analyze();
  const summary = violations.map(
    (v) => `${v.id} (${v.impact}): ${v.nodes.map((node) => node.target.join(' ')).join(', ')}`,
  );
  expect(summary).toEqual([]);
}

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows the headline and the LinkedIn call to action', async ({ page }) => {
    await expect(page).toHaveTitle('Sajib Hawee · Senior Frontend Engineer');
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'I make big React codebases fast, reliable and easy to ship.',
    );
    await expect(page.getByRole('link', { name: 'Connect on LinkedIn' })).toHaveAttribute(
      'href',
      LINKEDIN,
    );
  });

  test('links to the writing on Medium', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'More on Medium' })).toHaveAttribute(
      'href',
      'https://haweecodes.medium.com/',
    );
  });

  test('links to the résumé PDF', async ({ page, request }) => {
    const href = await page.getByRole('link', { name: 'Résumé (PDF)' }).getAttribute('href');
    const response = await request.get(href!);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/pdf');
  });

  test('has no email or phone links', async ({ page }) => {
    await expect(page.locator('a[href^="mailto:"], a[href^="tel:"]')).toHaveCount(0);
  });

  test('has no accessibility violations', async ({ page }) => {
    await expectNoAxeViolations(page);
  });

  test('keeps the header in view, clear of the section it jumps to', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Main' });
    await nav.getByRole('link', { name: 'Experience' }).click();
    await expect(page).toHaveURL(/#experience$/);

    const header = await page.getByRole('banner').boundingBox();
    const heading = await page
      .getByRole('heading', { name: "Where I've made a difference" })
      .boundingBox();
    expect(header?.y).toBe(0);
    expect(heading!.y).toBeGreaterThanOrEqual(header!.y + header!.height);
    await expect(nav).toBeInViewport();
  });
});

test('unknown URLs get the 404 page', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
  await expectNoAxeViolations(page);
});
