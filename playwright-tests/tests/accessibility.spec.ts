// =============================================================================
// accessibility.spec.ts
// Tanggung jawab: Memastikan website memenuhi standar aksesibilitas dan SEO dasar.
// =============================================================================

import { test, expect } from "@playwright/test";
import { SELECTORS } from "./base/selectors";
import { scrollToSection } from "./base/helpers";

const BASE_URL = "http://localhost:3000";

test.describe("Accessibility & SEO", () => {
  // --- AKSESIBILITAS ---

  test("WC-14: Semua gambar memiliki alt text", async ({ page }) => {
    await page.goto(BASE_URL);
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("WC-15: Form input memiliki label atau placeholder", async ({ page }) => {
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.contactSection);
    const inputs = [SELECTORS.nameInput, SELECTORS.emailInput];
    for (const selector of inputs) {
      const input = page.locator(selector).first();
      const id = await input.getAttribute("id");
      const placeholder = await input.getAttribute("placeholder");
      const hasLabel = id
        ? (await page.locator(`label[for="${id}"]`).count()) > 0
        : false;
      expect(hasLabel || !!placeholder).toBeTruthy();
    }
  });

  test("WC-16: Navigasi bisa dilakukan hanya dengan keyboard (Tab)", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    await page.keyboard.press("Tab");
    const focusedTag = await page.evaluate(
      () => document.activeElement?.tagName
    );
    expect(["A", "BUTTON", "INPUT"]).toContain(focusedTag);
  });

  test("WC-17: Kontras teks cukup — elemen teks terlihat di semua section", async ({
    page,
  }) => {
    await page.goto(BASE_URL);
    // Pastikan setiap section punya teks yang visible
    const textSelectors = [
      `${SELECTORS.aboutSection} p`,
      `${SELECTORS.workSection} p, ${SELECTORS.workSection} span`,
      `${SELECTORS.projectSection} p`,
    ];
    for (const sel of textSelectors) {
      const el = page.locator(sel).first();
      if ((await el.count()) > 0) {
        await expect(el).toBeVisible();
      }
    }
  });

  // --- SEO ---

  test("WC-18: Meta description ada dan tidak kosong", async ({ page }) => {
    await page.goto(BASE_URL);
    const metaDesc = page.locator(SELECTORS.metaDescription);
    await expect(metaDesc).toHaveCount(1);
    const content = await metaDesc.getAttribute("content");
    expect(content?.trim().length ?? 0).toBeGreaterThan(10);
  });

  test("WC-19: Open Graph tags ada untuk social sharing", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator(SELECTORS.ogTitle)).toHaveCount(1);
    await expect(page.locator(SELECTORS.ogImage)).toHaveCount(1);
  });

  test("WC-20: Halaman memiliki tag H1", async ({ page }) => {
    await page.goto(BASE_URL);
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });
});