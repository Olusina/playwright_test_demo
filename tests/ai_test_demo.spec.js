const { test, expect } = require('@playwright/test');

test('Open site and get page title', async ({ page }) => {
  // Navigate to the URL
  await page.goto('http://qaautomationlabs.com');

  // Get the page title
  const title = await page.title();
  console.log('Page title is:', title);

  // Optional assertion
  expect(title).toBeTruthy();
});


test('Login to SauceDemo with standard user', async ({ page }) => {
  // Navigate to SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // Enter username
  await page.fill('#user-name', 'standard_user');

  // Enter password
  await page.fill('#password', 'secret_sauce');

  // Click login button
  await page.click('#login-button');

  // Optional assertion: verify successful login
  await expect(page).toHaveURL(/inventory.html/);
});
