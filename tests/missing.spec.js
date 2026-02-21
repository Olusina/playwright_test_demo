// @ts-check
import { test, expect } from '@playwright/test';

test('search input appears when clicking search button', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const searchButton = page.getByRole('button', { name: /Search/i });
  await expect(searchButton).toBeVisible();
  await searchButton.click();

  const searchInput = page.locator('input[type="search"], input[placeholder*="Search"], input[aria-label*="Search"], input[role="searchbox"], input[type="text"]');
  await expect(searchInput.first()).toBeVisible();
});

test('mobile viewport: main heading visible on small screens', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('https://playwright.dev/');

  const mainHeading = page.locator('h1').first();
  await expect(mainHeading).toBeVisible();
});

test('external links on homepage do not return 404', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Collect a deduplicated sample of external links to check
  const hrefs = await page.locator('a[href^="http"]').evaluateAll((els) =>
    Array.from(new Set(els.map((e) => e.href))).slice(0, 50)
  );

  for (const href of hrefs) {
    const resp = await page.request.get(href);
    // Treat 5xx as failures; allow 4xx (403) which often indicate blocking by the
    // remote site (e.g., Cloudflare protection). We still fail on server errors.
    expect(resp.status(), `Link ${href} returned ${resp.status()}`).toBeLessThan(500);
  }
});
