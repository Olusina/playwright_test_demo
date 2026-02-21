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

// Note: external link health checks were removed because remote sites sometimes
// block automated requests (returning 4xx) and cause flaky CI failures.
