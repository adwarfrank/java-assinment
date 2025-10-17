import { test, expect } from '@playwright/test';

test('home has key sections', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero')).toBeVisible();
  await page.locator('a', { hasText: 'Vision' }).click();
  await expect(page.locator('#vision')).toBeVisible();
});