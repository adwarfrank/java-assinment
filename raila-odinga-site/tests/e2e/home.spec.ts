import { test, expect } from '@playwright/test';

test('homepage sections and nav anchors work', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Unity\. Service\. Progress\./ })).toBeVisible();
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.locator('#about')).toBeVisible();
  await page.getByRole('link', { name: 'Timeline' }).click();
  await expect(page.locator('#timeline')).toBeVisible();
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.locator('#contact')).toBeVisible();
});
