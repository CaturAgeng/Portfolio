// =============================================================================
// responsive.spec.ts
// Tanggung jawab: Memastikan halaman tampil dengan baik di berbagai ukuran layar
// dan memenuhi standar performa minimum.
// =============================================================================

import { test, expect } from "@playwright/test";
import { SELECTORS } from "./base/selectors";
import { getLoadTime, hasHorizontalScroll } from "./base/helpers";

const BASE_URL = "http://localhost:3000";

test.describe("Responsive & Performance", () => {
  // --- BEST CASE ---

  test("BC-20: Halaman responsif di tablet (768px)", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL);
    await expect(page.locator(SELECTORS.aboutSection)).toBeVisible();
    expect(await hasHorizontalScroll(page)).toBeFalsy();
  });

  test("BC-21: Halaman load dalam waktu < 3 detik", async ({ page }) => {
    const loadTime = await getLoadTime(page, BASE_URL);
    expect(loadTime).toBeLessThan(3000);
  });

  test("BC-22: Smooth scroll ke section About berfungsi", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator(SELECTORS.navAbout).click();
    await page.waitForTimeout(800);
    await expect(page.locator(SELECTORS.aboutSection)).toBeInViewport();
  });

  test("BC-23: Smooth scroll ke section Contact berfungsi", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    await page.locator(SELECTORS.navContact).click();
    await page.waitForTimeout(800);
    await expect(page.locator(SELECTORS.contactSection)).toBeInViewport();
  });

  // --- WORST CASE ---

  test("WC-10: Tidak ada horizontal scroll di mobile (375px)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    expect(await hasHorizontalScroll(page)).toBeFalsy();
  });

  test("WC-11: Tidak rusak di layar sangat kecil (320px)", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto(BASE_URL);
    await expect(page.locator("body")).toBeVisible();
    expect(await hasHorizontalScroll(page)).toBeFalsy();
  });

  test("WC-12: Layout normal di layar sangat lebar (2560px)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto(BASE_URL);
    await expect(page.locator(SELECTORS.aboutSection)).toBeVisible();
  });

  test("WC-13: Layout normal di orientasi landscape mobile (812x375)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 812, height: 375 });
    await page.goto(BASE_URL);
    await expect(page.locator(SELECTORS.navbar)).toBeVisible();
  });
});