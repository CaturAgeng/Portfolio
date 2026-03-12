// =============================================================================
// page-load.spec.ts
// Tanggung jawab: Memastikan halaman berhasil dimuat dan struktur dasar ada.
// =============================================================================

import { test, expect } from "@playwright/test";
import { SELECTORS } from "./base/selectors";
import { collectConsoleErrors } from "./base/helpers";

const BASE_URL = "http://localhost:3000";

test.describe("Page Load & Structure", () => {
  test("BC-01: Halaman berhasil dimuat dengan status 200", async ({ page }) => {
    const response = await page.goto(BASE_URL);
    expect(response?.status()).toBe(200);
  });

  test("BC-02: Title halaman tidak kosong dan relevan", async ({ page }) => {
    await page.goto(BASE_URL);
    const title = await page.title();
    expect(title).not.toBe("");
    expect(title.length).toBeGreaterThan(3);
  });

  test("BC-03: Semua 4 section utama ada di halaman", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator(SELECTORS.aboutSection)).toBeVisible();
    await expect(page.locator(SELECTORS.workSection)).toBeVisible();
    await expect(page.locator(SELECTORS.projectSection)).toBeVisible();
    await expect(page.locator(SELECTORS.contactSection)).toBeVisible();
  });

  test("BC-04: Navbar muncul dan berisi link navigasi", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator(SELECTORS.navbar)).toBeVisible();
    await expect(page.locator(SELECTORS.navLinks)).toHaveCount(4);
  });

  test("BC-05: Tidak ada console error saat halaman dimuat", async ({
    page,
  }) => {
    const errors = await collectConsoleErrors(page, BASE_URL);
    expect(errors).toHaveLength(0);
  });

  test("WC-01: Halaman tetap bisa digunakan saat network lambat (3G)", async ({
    page,
  }) => {
    await page.route("**/*", async (route) => {
      await new Promise((r) => setTimeout(r, 200));
      await route.continue();
    });
    await page.goto(BASE_URL, { timeout: 30000 });
    await expect(page.locator(SELECTORS.aboutSection)).toBeVisible({
      timeout: 15000,
    });
  });

  test("WC-02: Website tetap bisa diakses tanpa JavaScript", async ({
    browser,
  }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(BASE_URL);
    await expect(page.locator("body")).toBeVisible();
    await context.close();
  });
});