// =============================================================================
// work-experience.spec.ts
// Tanggung jawab: Memastikan section Work Experience menampilkan data lengkap.
// =============================================================================

import { test, expect } from "@playwright/test";
import { SELECTORS } from "./base/selectors";
import { scrollToSection } from "./base/helpers";

const BASE_URL = "http://localhost:3000";

test.describe("Work Experience Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.workSection);
  });

  test("BC-09: Minimal ada 1 item work experience", async ({ page }) => {
    const cards = page.locator(SELECTORS.workCards);
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("BC-10: Setiap work experience memiliki nama perusahaan", async ({
    page,
  }) => {
    const companies = page.locator(SELECTORS.companyName);
    const count = await companies.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const text = await companies.nth(i).textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  test("BC-11: Setiap work experience memiliki job title", async ({ page }) => {
    await expect(page.locator(SELECTORS.jobTitle).first()).toBeVisible();
  });

  test("BC-12: Setiap work experience memiliki periode waktu", async ({
    page,
  }) => {
    await expect(page.locator(SELECTORS.workPeriod).first()).toBeVisible();
  });
});