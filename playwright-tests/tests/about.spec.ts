// =============================================================================
// about.spec.ts
// Tanggung jawab: Memastikan section About Me tampil dengan konten yang benar.
// =============================================================================

import { test, expect } from "@playwright/test";
import { SELECTORS } from "./base/selectors";
import { scrollToSection, checkImageLoaded } from "./base/helpers";

const BASE_URL = "http://localhost:3000";

test.describe("About Me Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.aboutSection);
  });

  test("BC-06: Foto profil tampil dan tidak broken", async ({ page }) => {
    const isLoaded = await checkImageLoaded(page, SELECTORS.profileImage);
    expect(isLoaded).toBeTruthy();
  });

  test("BC-07: Heading dan bio text ada di section About", async ({ page }) => {
    await expect(page.locator(SELECTORS.aboutHeading).first()).toBeVisible();
    await expect(page.locator(SELECTORS.bioText).first()).toBeVisible();
  });

  test("BC-08: Teks bio tidak terlalu pendek (min 50 karakter)", async ({
    page,
  }) => {
    const bioText = await page
      .locator(SELECTORS.bioText)
      .first()
      .textContent();
    expect(bioText?.trim().length ?? 0).toBeGreaterThan(50);
  });

  test("WC-03: Gambar broken tetap menampilkan alt text", async ({ page }) => {
    await page.route("**/*.{png,jpg,jpeg,webp}", (route) => route.abort());
    await page.goto(BASE_URL);
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });
});