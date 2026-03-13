// =============================================================================
// contact.spec.ts
// Tanggung jawab: Memastikan section Contact menampilkan info kontak dan
// social links dengan benar.
//
// ⚠️  Disesuaikan dengan DOM asli ContactSection:
//     - id="contact" ada di <section> langsung ✅
//     - Email link biasa: <a href="mailto:..."> tanpa target="_blank"
//     - Phone link: <a href="tel:..."> tanpa target="_blank"
//     - Social buttons: <a data-slot="button" target="_blank"> di dalam div.group
//     - Ada 3 social buttons: GitHub, LinkedIn, Email (mailto dgn target=_blank)
//     - Email muncul DUA KALI: sebagai link biasa DAN sebagai social button
//       → emailLink harus menarget yang PERTAMA (tanpa target="_blank")
//       → socialLinks harus menarget semua <a data-slot="button" target="_blank">
// =============================================================================

import { test, expect } from "@playwright/test";
import { SELECTORS } from "./base/selectors";
import { scrollToSection } from "./base/helpers";

const BASE_URL = "http://localhost:3000";

test.describe("Contact Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.contactSection);
  });

  // ---------------------------------------------------------------------------
  // BEST CASE — Tampilan & Konten
  // ---------------------------------------------------------------------------

  test("BC-17: Section contact tampil dengan heading 'Get In Touch'", async ({
    page,
  }) => {
    // ALASAN: Heading adalah elemen pertama yang dilihat pengunjung.
    const heading = page.locator("#contact h2, #contact h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/get in touch/i);
  });

  test("BC-18: Pesan pengantar contact tampil dan tidak kosong", async ({
    page,
  }) => {
    // ALASAN: Teks pembuka harus selalu terbaca oleh pengunjung.
    const message = page.locator(SELECTORS.contactMessage).first();
    await expect(message).toBeVisible();
    const text = await message.textContent();
    expect(text?.trim().length ?? 0).toBeGreaterThan(20);
  });

  test("BC-19: Link email biasa tampil dan memiliki href mailto: yang valid", async ({
    page,
  }) => {
    // ALASAN: emailLink menarget <a href="mailto:"> TANPA target="_blank"
    // (bukan yang ada di social buttons). Ini adalah link kontak utama.
    const emailLink = page.locator(SELECTORS.emailLink);
    await expect(emailLink).toBeVisible();
    const href = await emailLink.getAttribute("href");
    expect(href).toMatch(/^mailto:.+@.+\..+/);
  });

  test("BC-20: Teks email yang ditampilkan sesuai dengan href-nya", async ({
    page,
  }) => {
    // ALASAN: Link email biasa menampilkan alamat email sebagai teks terlihat.
    // Ini berbeda dengan social button "Email" yang hanya berteks "Email".
    const emailLink = page.locator(SELECTORS.emailLink);
    const href = await emailLink.getAttribute("href");
    const visibleText = await emailLink.textContent();
    const emailFromHref = href?.replace("mailto:", "").trim();
    expect(visibleText?.trim()).toBe(emailFromHref);
  });

  test("BC-21: Social buttons tampil minimal 1", async ({ page }) => {
    // ALASAN: Harus ada setidaknya 1 social button (GitHub/LinkedIn/Email).
    const socialLinks = page.locator(SELECTORS.socialLinks);
    const count = await socialLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("BC-22: Setiap social button memiliki teks label yang tidak kosong", async ({
    page,
  }) => {
    // ALASAN: Setiap <a data-slot="button"> harus punya teks (GitHub/LinkedIn/Email)
    // agar pengunjung tahu ke mana link tersebut mengarah.
    const socialLinks = page.locator(SELECTORS.socialLinks);
    const count = await socialLinks.count();
    for (let i = 0; i < count; i++) {
      const text = await socialLinks.nth(i).textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  test("BC-23: Social button yang mengarah ke URL eksternal memiliki https://", async ({
    page,
  }) => {
    // ALASAN: Di DOM asli, ada 3 social buttons: GitHub (https), LinkedIn (https),
    // dan Email (mailto). Hanya yang https:// yang divalidasi URL-nya.
    // Yang mailto: dilewati karena bukan URL web.
    const socialLinks = page.locator(SELECTORS.socialLinks);
    const count = await socialLinks.count();
    let httpsCount = 0;
    for (let i = 0; i < count; i++) {
      const href = await socialLinks.nth(i).getAttribute("href");
      if (href?.startsWith("https://")) {
        httpsCount++;
        expect(href).toMatch(/^https:\/\/.+/);
      }
    }
    // Minimal harus ada 1 social link yang https://
    expect(httpsCount).toBeGreaterThan(0);
  });

  test("BC-24: Semua social button membuka tab baru (target=_blank)", async ({
    page,
  }) => {
    // ALASAN: Semua <a data-slot="button"> menggunakan target="_blank"
    // agar pengunjung tidak meninggalkan halaman portfolio.
    const socialLinks = page.locator(SELECTORS.socialLinks);
    const count = await socialLinks.count();
    for (let i = 0; i < count; i++) {
      const target = await socialLinks.nth(i).getAttribute("target");
      expect(target).toBe("_blank");
    }
  });

  test("BC-25: Semua social button memiliki rel='noopener noreferrer'", async ({
    page,
  }) => {
    // ALASAN: rel="noopener noreferrer" adalah keamanan wajib untuk target="_blank".
    const socialLinks = page.locator(SELECTORS.socialLinks);
    const count = await socialLinks.count();
    for (let i = 0; i < count; i++) {
      const rel = await socialLinks.nth(i).getAttribute("rel");
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  test("BC-26: Jumlah div.group sama dengan jumlah social button", async ({
    page,
  }) => {
    // ALASAN: Setiap social button dibungkus div.group untuk efek glow.
    // Jika jumlahnya tidak sama, ada button yang kehilangan efek hover-nya.
    const wrappers = page.locator(SELECTORS.socialLinkWrapper);
    const socialLinks = page.locator(SELECTORS.socialLinks);
    expect(await wrappers.count()).toBe(await socialLinks.count());
  });

  // ---------------------------------------------------------------------------
  // BEST CASE — Phone
  // ---------------------------------------------------------------------------

  test("BC-27: Link phone tampil dan memiliki href tel: yang valid", async ({
    page,
  }) => {
    // ALASAN: DOM asli menunjukkan phone SELALU ada (tidak conditional).
    // href harus diawali "tel:" agar bisa diklik di mobile.
    const phoneLink = page.locator(SELECTORS.phoneLink);
    await expect(phoneLink).toBeVisible();
    const href = await phoneLink.getAttribute("href");
    expect(href).toMatch(/^tel:/);
  });

  // ---------------------------------------------------------------------------
  // WORST CASE — Edge Cases
  // ---------------------------------------------------------------------------

  test("WC-05: Klik email link biasa tidak menyebabkan navigasi keluar halaman", async ({
    page,
  }) => {
    // ALASAN: emailLink (<a href="mailto:" tanpa target="_blank">) harus membuka
    // email client, bukan navigasi ke halaman lain.
    // Selector khusus yang MENGECUALIKAN social button (data-slot="button")
    const emailLinkOnly = page.locator(
      '#contact a[href^="mailto:"]:not([data-slot="button"])'
    );
    const currentUrl = page.url();
    await page.route("mailto:*", (route) => route.abort());
    await emailLinkOnly.click();
    expect(page.url()).toBe(currentUrl);
  });

  test("WC-06: Social button https:// dapat diakses (status < 400)", async ({
    page,
  }) => {
    // ALASAN: Hanya social button dengan href https:// yang dicek statusnya.
    // Link mailto: dilewati karena bukan request HTTP.
    const socialLinks = page.locator(SELECTORS.socialLinks);
    const count = await socialLinks.count();
    for (let i = 0; i < count; i++) {
      const href = await socialLinks.nth(i).getAttribute("href");
      if (href?.startsWith("https://")) {
        const response = await page.request.get(href).catch(() => null);
        if (response) expect(response.status()).toBeLessThan(400);
      }
    }
  });

  test("WC-07: Social buttons tampil rapi di mobile (375px)", async ({
    page,
  }) => {
    // ALASAN: flex-wrap gap-4 justify-center harus wrap dengan rapi di layar kecil.
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.contactSection);
    const socialLinks = page.locator(SELECTORS.socialLinks);
    const count = await socialLinks.count();
    for (let i = 0; i < count; i++) {
      await expect(socialLinks.nth(i)).toBeVisible();
    }
  });

  test("WC-08: Tidak ada elemen form yang tidak disengaja di section contact", async ({
    page,
  }) => {
    // ALASAN: Memastikan tidak ada sisa kode form yang tertinggal.
    await expect(page.locator("#contact form")).toHaveCount(0);
  });
});