// =============================================================================
// contact.spec.ts
// Tanggung jawab: Memastikan form kontak dan social links berfungsi dengan benar.
// =============================================================================

import { test, expect } from "@playwright/test";
import { SELECTORS } from "./base/selectors";
import {
  scrollToSection,
  fillContactForm,
  interceptApiAndSubmit,
} from "./base/helpers";

const BASE_URL = "http://localhost:3000";

const VALID_DATA = {
  name: "John Doe",
  email: "john.doe@example.com",
  message: "Halo! Saya tertarik untuk berkolaborasi dengan kamu.",
};

test.describe("Contact Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.contactSection);
  });

  // --- BEST CASE ---

  test("BC-17: Form kontak tampil dengan semua field", async ({ page }) => {
    await expect(page.locator(SELECTORS.nameInput)).toBeVisible();
    await expect(page.locator(SELECTORS.emailInput)).toBeVisible();
    await expect(page.locator(SELECTORS.messageInput)).toBeVisible();
    await expect(page.locator(SELECTORS.submitButton)).toBeVisible();
  });

  test("BC-18: Form berhasil disubmit dengan data valid", async ({ page }) => {
    await fillContactForm(page, SELECTORS, VALID_DATA);
    const callCount = await interceptApiAndSubmit(
      page,
      "**/api/contact",
      SELECTORS.submitButton
    );
    await expect(page.locator(SELECTORS.successMessage)).toBeVisible({
      timeout: 5000,
    });
    expect(callCount).toBe(1);
  });

  test("BC-19: Social media links ada dan memiliki URL valid", async ({
    page,
  }) => {
    const socialLinks = page.locator(SELECTORS.socialLinks);
    await expect(socialLinks.first()).toBeVisible();
    const href = await socialLinks.first().getAttribute("href");
    expect(href).toMatch(/^https?:\/\//);
  });

  // --- WORST CASE ---

  test("WC-05: Submit form kosong menampilkan validasi error", async ({
    page,
  }) => {
    await page.locator(SELECTORS.submitButton).click();
    const nameInput = page.locator(SELECTORS.nameInput);
    const validationMessage = await nameInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    expect(validationMessage).not.toBe("");
  });

  test("WC-06: Email dengan format tidak valid ditolak", async ({ page }) => {
    await fillContactForm(page, SELECTORS, {
      ...VALID_DATA,
      email: "bukan-email-valid",
    });
    await page.locator(SELECTORS.submitButton).click();
    const isValid = await page
      .locator(SELECTORS.emailInput)
      .evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(isValid).toBeFalsy();
  });

  test("WC-07: Input XSS tidak mengeksekusi script", async ({ page }) => {
    const xssPayload = '<script>alert("XSS")</script>';
    let alertTriggered = false;
    page.on("dialog", async (dialog) => {
      alertTriggered = true;
      await dialog.dismiss();
    });
    await fillContactForm(page, SELECTORS, {
      name: xssPayload,
      email: "test@example.com",
      message: xssPayload,
    });
    await page.locator(SELECTORS.submitButton).click();
    await page.waitForTimeout(1000);
    expect(alertTriggered).toBeFalsy();
  });

  test("WC-08: Pesan sangat panjang (10.000 karakter) tidak crash form", async ({
    page,
  }) => {
    await fillContactForm(page, SELECTORS, {
      ...VALID_DATA,
      message: "A".repeat(10000),
    });
    await expect(page.locator(SELECTORS.contactSection)).toBeVisible();
  });

  test("WC-09: Double click submit tidak mengirim form dua kali", async ({
    page,
  }) => {
    await fillContactForm(page, SELECTORS, VALID_DATA);
    let submitCount = 0;
    await page.route("**/api/contact", (route) => {
      submitCount++;
      route.fulfill({ status: 200, body: "{}" });
    });
    await page.locator(SELECTORS.submitButton).dblclick();
    await page.waitForTimeout(1000);
    expect(submitCount).toBeLessThanOrEqual(1);
  });
});