import { test, expect } from '@playwright/test';

test('Home page', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  
  //Ensure the sign-in link is present
//  await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign In");
    await expect(page.getByTestId('nav-sign-in')).toBeVisible();
  
});
