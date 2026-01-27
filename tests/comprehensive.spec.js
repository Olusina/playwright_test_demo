// @ts-check
import { test, expect } from '@playwright/test';

// Feature Section Tests - "Any browser • Any platform • One API"
test('feature section: browser support text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const browserText = page.getByText(/Cross-browser.*Chromium.*WebKit.*Firefox/);
  await expect(browserText).toBeVisible();
});

test('feature section: cross-platform text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const platformText = page.getByText(/Cross-platform.*Windows.*Linux.*macOS/);
  await expect(platformText).toBeVisible();
});

test('feature section: cross-language links exist', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Verify language links
  await expect(page.getByRole('link', { name: 'TypeScript' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'JavaScript' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Python' })).toBeVisible();
  await expect(page.getByRole('link', { name: '.NET' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Java' }).first()).toBeVisible();
});

test('feature section: mobile testing text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const mobileText = page.getByText(/Test Mobile Web.*mobile emulation/);
  await expect(mobileText).toBeVisible();
});

// "Resilient • No flaky tests" Section Tests
test('resilient section: auto-wait feature text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const autoWaitText = page.getByText(/Auto-wait.*Playwright waits for elements/);
  await expect(autoWaitText).toBeVisible();
});

test('resilient section: web-first assertions text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const assertionsText = page.getByText(/Web-first assertions.*dynamic web/);
  await expect(assertionsText).toBeVisible();
});

test('resilient section: tracing feature text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const tracingText = page.getByText(/Tracing.*test retry strategy/);
  await expect(tracingText).toBeVisible();
});

// "No trade-offs • No limits" Section Tests
test('capabilities section: out-of-process text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const outOfProcessText = page.getByText(/out-of-process/);
  await expect(outOfProcessText).toBeVisible();
});

test('capabilities section: multiple tabs text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const multipleText = page.getByText(/Multiple everything/);
  await expect(multipleText).toBeVisible();
});

test('capabilities section: shadow DOM text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const shadowDomText = page.getByText(/Shadow DOM/);
  await expect(shadowDomText).toBeVisible();
});

// "Full isolation • Fast execution" Section Tests
test('isolation section: browser context text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const contextText = page.getByText(/Browser contexts.*brand new browser profile/);
  await expect(contextText).toBeVisible();
});

test('isolation section: authentication state text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const authText = page.getByText(/Log in once.*authentication state/);
  await expect(authText).toBeVisible();
});

// "Powerful Tooling" Section Tests
test('tooling section: codegen link exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const codegenLink = page.getByRole('link', { name: /Codegen/ });
  await expect(codegenLink).toBeVisible();
});

test('tooling section: codegen link navigates correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const codegenLink = page.getByRole('link', { name: /Codegen/ });
  await codegenLink.click();
  
  await expect(page).toHaveURL(/.*codegen/);
});

test('tooling section: inspector link exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const inspectorLink = page.getByRole('link', { name: /Playwright inspector/ });
  await expect(inspectorLink).toBeVisible();
});

test('tooling section: trace viewer link exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const traceLink = page.getByRole('link', { name: /Trace Viewer/ });
  await expect(traceLink).toBeVisible();
});

test('tooling section: trace viewer link navigates correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const traceLink = page.getByRole('link', { name: /Trace Viewer/ });
  await traceLink.click();
  
  await expect(page).toHaveURL(/.*trace-viewer/);
});

// Companies/Projects Section Tests
test('companies section: heading visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const companiesHeading = page.getByRole('heading', { name: /Chosen by companies/ });
  await expect(companiesHeading).toBeVisible();
});

test('companies section: VS Code logo present', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const vsCodeLink = page.getByRole('link', { name: /VS Code/ }).first();
  await expect(vsCodeLink).toBeVisible();
});

test('companies section: multiple company logos present', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  await expect(page.getByRole('link', { name: /Bing/ }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Outlook/ }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Disney/ }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Adobe/ }).first()).toBeVisible();
});

// Footer Navigation Tests
test('footer: learn section links visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Scroll to footer
  await page.locator('footer').scrollIntoViewIfNeeded();
  
  await expect(page.getByRole('link', { name: /Getting started/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Playwright Training/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Learn Videos/ })).toBeVisible();
});

test('footer: community links visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Scroll to footer
  await page.locator('footer').scrollIntoViewIfNeeded();
  
  await expect(page.getByRole('link', { name: /Stack Overflow/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord' }).last()).toBeVisible();
  await expect(page.getByRole('link', { name: /Twitter/ })).toBeVisible();
});

test('footer: additional links visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Scroll to footer
  await page.locator('footer').scrollIntoViewIfNeeded();
  
  await expect(page.getByRole('link', { name: /GitHub/ }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /YouTube/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Blog/ })).toBeVisible();
});

test('footer: copyright text present', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Scroll to footer
  await page.locator('footer').scrollIntoViewIfNeeded();
  
  const copyrightText = page.getByText(/Copyright.*2026.*Microsoft/);
  await expect(copyrightText).toBeVisible();
});

// Navigation Header Tests
test('header: Docs link navigates correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const docsLink = page.getByRole('link', { name: /Docs/ }).first();
  await docsLink.click();
  
  await expect(page).toHaveURL(/.*docs\/intro/);
});

test('header: API link navigates correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const apiLink = page.getByRole('link', { name: /API/ }).first();
  await apiLink.click();
  
  await expect(page).toHaveURL(/.*docs\/api/);
});

test('header: Community link navigates correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const communityLink = page.getByRole('link', { name: /Community/ }).first();
  await communityLink.click();
  
  await expect(page).toHaveURL(/.*community/);
});

test('header: Playwright logo is clickable', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const logo = page.getByRole('link', { name: /Playwright logo Playwright/ }).first();
  await expect(logo).toBeVisible();
});

// Dark/Light mode and theme tests
test('header: theme toggle button exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const themeButton = page.getByRole('button', { name: /Switch between dark and light mode/ });
  await expect(themeButton).toBeVisible();
});

test('header: GitHub repository link visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const githubLink = page.getByRole('link', { name: /GitHub repository/ });
  await expect(githubLink).toBeVisible();
});

test('header: Discord server link visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const discordLink = page.getByRole('link', { name: /Discord server/ });
  await expect(discordLink).toBeVisible();
});

// Language selection tests
test('header: language selector button exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const languageButton = page.getByRole('button', { name: /Node.js/ });
  await expect(languageButton).toBeVisible();
});

// Star/GitHub CTA Tests
test('hero section: star on github link exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const starLink = page.getByRole('link', { name: /Star microsoft\/playwright on GitHub/ });
  await expect(starLink).toBeVisible();
});

test('hero section: stargazer count text visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Check for the star count link
  const stargazersLink = page.getByRole('link', { name: /stargazers/ });
  await expect(stargazersLink).toBeVisible();
});

// Feature Images Test
test('hero section: browser logos image visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const browserImage = page.locator('img[alt="Browsers (Chromium, Firefox, WebKit)"]');
  await expect(browserImage).toBeVisible();
});

// Main section heading level tests
test('feature headings: have correct heading levels', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Main heading should be h1
  const h1s = page.locator('h1');
  await expect(h1s.first()).toBeVisible();
  
  // Feature sections should be h3
  const h3s = page.locator('h3');
  const count = await h3s.count();
  expect(count).toBeGreaterThan(0);
});

// Responsive design tests
test('page: all text content is accessible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const bodyText = page.locator('body');
  await expect(bodyText).toContainText(/Playwright/);
});

test('page: has proper meta viewport for mobile', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  const viewport = page.locator('meta[name="viewport"]');
  await expect(viewport).toHaveAttribute('content', /width=device-width/);
});
