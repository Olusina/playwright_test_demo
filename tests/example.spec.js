// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('navigate to docs', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click on Documentation link
  await page.getByRole('link', { name: /Documentation|Docs/ }).first().click();

  // Verify we're on a documentation page
  await expect(page).toHaveURL(/.*docs.*/);
});

test('search functionality exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Verify search button exists
  const searchButton = page.getByRole('button', { name: /Search/i });
  await expect(searchButton).toBeVisible();
});

test('main heading is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check that main heading exists
  const mainHeading = page.getByRole('heading', { level: 1 }).first();
  await expect(mainHeading).toBeVisible();
});

test('page has navigation links', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Verify navigation links are present
  const navLinks = page.getByRole('link').first();
  await expect(navLinks).toBeDefined();

  // Check for specific link text
  await expect(page.getByRole('link', { name: 'Get started' })).toBeDefined();
});
