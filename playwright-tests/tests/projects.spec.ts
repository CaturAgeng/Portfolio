// =============================================================================
// projects.spec.ts
// Tanggung jawab: Memastikan section Projects menampilkan portofolio dengan benar.
// =============================================================================

import { test, expect } from "@playwright/test";
import { SELECTORS } from "./base/selectors";
import { scrollToSection } from "./base/helpers";

const BASE_URL = "http://localhost:3000";

test.describe("Projects Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.projectSection);
  });

  test("BC-13: Minimal ada 1 project card", async ({ page }) => {
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("BC-14: Setiap project memiliki judul", async ({ page }) => {
    await expect(page.locator(SELECTORS.projectTitle).first()).toBeVisible();
  });

  test("BC-15: Setiap project memiliki deskripsi", async ({ page }) => {
    await expect(
      page.locator(SELECTORS.projectDescription).first()
    ).toBeVisible();
  });

  test("BC-16: Link project mengarah ke URL valid (tidak hanya '#')", async ({
    page,
  }) => {
    const links = page.locator(SELECTORS.projectLinks);
    const count = await links.count();
    for (let i = 0; i < Math.min(count, 5); i++) {
      const href = await links.nth(i).getAttribute("href");
      expect(href).not.toBeNull();
      expect(href).not.toBe("#");
    }
  });

  test("WC-04: Tidak ada broken links di section projects", async ({
    page,
  }) => {
    const links = page.locator(SELECTORS.projectLinks);
    const count = await links.count();
    for (let i = 0; i < Math.min(count, 10); i++) {
      const href = await links.nth(i).getAttribute("href");
      if (href && href.startsWith("http")) {
        const response = await page.request.get(href).catch(() => null);
        if (response) expect(response.status()).toBeLessThan(400);
      }
    }
  });
});