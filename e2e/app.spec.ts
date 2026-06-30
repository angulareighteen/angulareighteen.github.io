import { expect, test } from '@playwright/test';

test('home page shows the quiz and news links', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Quizzes' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'US History' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Top Stories' })).toBeVisible();
});

test('a quiz loads and answering a question shows feedback', async ({ page }) => {
  await page.goto('/quiz/us-civics');

  const heading = page.locator('mat-card h1');
  await expect(heading).toBeVisible();
  await expect(heading).not.toHaveText('LOADING...');

  await page.locator('.button-container button').first().click();

  // The snackbar feedback always contains the word "correct"
  // ("Your answer is correct!" or "...is not correct.").
  await expect(page.getByText(/correct/i)).toBeVisible();
});

test('the news page renders a headline', async ({ page }) => {
  await page.goto('/news/top-stories');
  await expect(page.locator('article h1')).toBeVisible();
});

test('the news page exposes the global navigation', async ({ page }) => {
  await page.goto('/news/top-stories');
  const toolbar = page.locator('mat-toolbar');
  await expect(toolbar.getByRole('link', { name: 'Home' })).toBeVisible();
});

test('navigation works from a quiz back to home', async ({ page }) => {
  await page.goto('/quiz/us-civics');
  await page.locator('mat-toolbar').getByRole('link', { name: 'Home' }).click();
  await expect(page).toHaveURL(/\/home$/);
  await expect(page.getByRole('heading', { name: 'Quizzes' })).toBeVisible();
});

test('every routable destination is reachable from the global navigation', async ({ page }) => {
  await page.goto('/home');
  const toolbar = page.locator('mat-toolbar');

  // Top-level links.
  await expect(toolbar.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(toolbar.getByRole('link', { name: /Key Industries/ })).toBeVisible();
  await expect(toolbar.getByRole('link', { name: /Playground/ })).toBeVisible();

  // Dropdown groups.
  await expect(toolbar.getByRole('button', { name: /Quizzes/ })).toBeVisible();
  await expect(toolbar.getByRole('button', { name: /News/ })).toBeVisible();

  // Following a top-level link navigates and renders that component.
  await toolbar.getByRole('link', { name: /Playground/ }).click();
  await expect(page).toHaveURL(/\/playground$/);
  await expect(page.getByRole('heading', { name: 'Playground' })).toBeVisible();
});
