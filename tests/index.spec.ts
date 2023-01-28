import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/')
})

test.describe('Index page', () => {
  test('meta is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/.*index/i)
  })
})

test.describe('Header', () => {
  test('blog link', async ({ page }) => {
    await page.getByRole('link', { name: /blog/i }).click()
    await expect(page).toHaveTitle(/.*blog/)
    await expect(page).toHaveURL(/.*blog/)
  })

  test('projects link', async ({ page }) => {
    await page.getByRole('link', { name: /projects/i }).click()
    await expect(page).toHaveTitle(/.*projects/)
    await expect(page).toHaveURL(/.*projects/)
  })

  test('now link', async ({ page }) => {
    await page.getByRole('link', { name: /now/i }).click()
    // await expect(page).toHaveTitle(/.*now/)
    await expect(page).toHaveURL(/.*now/)
  })
})
