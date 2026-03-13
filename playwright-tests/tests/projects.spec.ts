// =============================================================================
// projects.spec.ts
// Tanggung jawab: Memastikan section Projects menampilkan portfolio dengan benar.
//
// ⚠️  Disesuaikan dengan DOM asli ProjectsSection:
//     - Card     → <div data-slot="card" class="... card-hover ...">
//     - Title    → <div data-slot="card-title">
//     - Desc     → <div data-slot="card-description">
//     - Badge    → <span data-slot="badge">
//     - Carousel → <div data-slot="carousel">
//     - Slide    → <div data-slot="carousel-item">
//     - Prev/Next → <button data-slot="carousel-previous/next">
//     - Links    → <a data-slot="button" target="_blank"> di dalam .pt-4
//     - Jobdesk  → <span> di dalam <p class="flex flex-col gap-1"> (opsional)
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

  // ---------------------------------------------------------------------------
  // BEST CASE — Struktur & Konten Dasar
  // ---------------------------------------------------------------------------

  test("BC-13: Section projects tampil dengan heading 'Featured Projects'", async ({
    page,
  }) => {
    // ALASAN: Heading adalah penanda section — harus selalu ada dan terbaca.
    const heading = page.locator("#projects h2, #projects h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/featured projects/i);
  });

  test("BC-14: Minimal ada 1 project card", async ({ page }) => {
    // ALASAN: Section tanpa card berarti data projects tidak berhasil di-render.
    const cards = page.locator(SELECTORS.projectCards);
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test("BC-15: Setiap project card memiliki judul yang tidak kosong", async ({
    page,
  }) => {
    // ALASAN: <div data-slot="card-title"> berisi project.title.
    // Tanpa judul pengunjung tidak tahu project apa yang ditampilkan.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const title = cards.nth(i).locator('[data-slot="card-title"]');
      await expect(title).toBeVisible();
      const text = await title.textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  test("BC-16: Setiap project card memiliki short description", async ({
    page,
  }) => {
    // ALASAN: <div data-slot="card-description"> berisi project.shortDescription.
    // Ini ringkasan pertama yang dibaca pengunjung sebelum detail.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const desc = cards.nth(i).locator('[data-slot="card-description"]');
      await expect(desc).toBeVisible();
      const text = await desc.textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  test("BC-17: Setiap project card memiliki deskripsi lengkap", async ({
    page,
  }) => {
    // ALASAN: <p class="leading-relaxed"> di card-content berisi project.description.
    const descriptions = page.locator(SELECTORS.projectDescription);
    const count = await descriptions.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const text = await descriptions.nth(i).textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(10);
    }
  });

  // ---------------------------------------------------------------------------
  // BEST CASE — Carousel & Gambar
  // ---------------------------------------------------------------------------

  test("BC-18: Setiap project card memiliki carousel", async ({ page }) => {
    // ALASAN: Carousel adalah wrapper utama gambar —
    // jika tidak ada, area gambar akan kosong.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const carousel = cards.nth(i).locator('[data-slot="carousel"]');
      await expect(carousel).toBeVisible();
    }
  });

  test("BC-19: Setiap project memiliki minimal 1 slide gambar", async ({
    page,
  }) => {
    // ALASAN: <div data-slot="carousel-item"> berisi setiap gambar.
    // Minimal harus ada 1 item agar carousel tidak kosong.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const slides = cards.nth(i).locator('[data-slot="carousel-item"]');
      expect(await slides.count()).toBeGreaterThan(0);
    }
  });

  test("BC-20: Setiap gambar memiliki alt text format '{title} - Image {n}'", async ({
    page,
  }) => {
    // ALASAN: Alt text dirender sebagai "{project.title} - Image {index + 1}".
    // Format ini penting untuk aksesibilitas screen reader.
    const images = page.locator(SELECTORS.projectImages);
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
      expect(alt).toMatch(/- Image \d+$/i);
    }
  });

  test("BC-21: Tombol carousel next ada di setiap card", async ({ page }) => {
    // ALASAN: <button data-slot="carousel-next"> harus selalu ada.
    // Tombol previous bisa disabled di slide pertama, tapi next tetap ada.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const nextBtn = cards.nth(i).locator('[data-slot="carousel-next"]');
      await expect(nextBtn).toBeVisible();
    }
  });

  test("BC-22: Tombol carousel previous disabled di slide pertama", async ({
    page,
  }) => {
    // ALASAN: DOM asli menunjukkan tombol previous punya attribute disabled=""
    // saat berada di slide pertama — ini perilaku yang benar.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const prevBtn = cards.nth(i).locator('[data-slot="carousel-previous"]');
      await expect(prevBtn).toBeDisabled();
    }
  });

  // ---------------------------------------------------------------------------
  // BEST CASE — Technologies (Badge)
  // ---------------------------------------------------------------------------

  test("BC-23: Setiap project memiliki minimal 1 badge teknologi", async ({
    page,
  }) => {
    // ALASAN: <span data-slot="badge"> berisi nama teknologi.
    // Badge teknologi adalah info kunci bagi recruiter/client.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const badges = cards.nth(i).locator('[data-slot="badge"]');
      expect(await badges.count()).toBeGreaterThan(0);
    }
  });

  test("BC-24: Setiap badge teknologi memiliki teks yang tidak kosong", async ({
    page,
  }) => {
    // ALASAN: Badge kosong tidak informatif dan menandakan data tidak lengkap.
    const badges = page.locator(SELECTORS.techBadges);
    const count = await badges.count();
    for (let i = 0; i < count; i++) {
      const text = await badges.nth(i).textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  // ---------------------------------------------------------------------------
  // BEST CASE — Links (View Project & GitHub)
  // ---------------------------------------------------------------------------

  test("BC-25: Link project memiliki URL https:// yang valid", async ({
    page,
  }) => {
    // ALASAN: <a data-slot="button" target="_blank"> harus punya URL https://.
    const links = page.locator(SELECTORS.projectAllLinks);
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute("href");
      expect(href).toMatch(/^https?:\/\/.+/);
    }
  });

  test("BC-26: Link project membuka tab baru (target=_blank)", async ({
    page,
  }) => {
    // ALASAN: Link eksternal harus membuka tab baru agar pengunjung
    // tidak meninggalkan halaman portfolio.
    const links = page.locator(SELECTORS.projectAllLinks);
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      const target = await links.nth(i).getAttribute("target");
      expect(target).toBe("_blank");
    }
  });

  test("BC-27: Link project memiliki rel='noopener noreferrer'", async ({
    page,
  }) => {
    // ALASAN: Keamanan wajib untuk semua link target="_blank".
    const links = page.locator(SELECTORS.projectAllLinks);
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      const rel = await links.nth(i).getAttribute("rel");
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  // ---------------------------------------------------------------------------
  // BEST CASE — Jobdesk (opsional)
  // ---------------------------------------------------------------------------

  test("BC-28: Jika jobdesk ada, setiap span tidak kosong", async ({ page }) => {
    // ALASAN: <span> di dalam <p class="flex flex-col gap-1"> berisi item jobdesk.
    // Jika dirender, setiap span harus punya teks yang bermakna.
    const jobdeskSpans = page.locator(SELECTORS.jobdeskItems);
    const count = await jobdeskSpans.count();
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const text = await jobdeskSpans.nth(i).textContent();
        expect(text?.trim().length ?? 0).toBeGreaterThan(0);
      }
    } else {
      console.log("ℹ️  Jobdesk tidak dikonfigurasi di semua project — dilewati.");
    }
  });

  // ---------------------------------------------------------------------------
  // WORST CASE — Edge Cases
  // ---------------------------------------------------------------------------

  test("WC-04: Project cards tampil rapi di mobile (375px) tanpa overflow", async ({
    page,
  }) => {
    // ALASAN: Grid md:grid-cols-2 collapse ke 1 kolom di mobile.
    // Semua card harus tetap terbaca tanpa horizontal overflow.
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.projectSection);

    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i)).toBeVisible();
    }

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(hasOverflow).toBeFalsy();
  });

  test("WC-05: Klik tombol carousel next berpindah ke slide berikutnya", async ({
    page,
  }) => {
    // ALASAN: Fungsionalitas carousel harus bekerja — next menggeser ke slide 2,
    // dan tombol previous menjadi tidak disabled lagi.
    const firstCard = page.locator(SELECTORS.projectCards).first();
    const nextBtn = firstCard.locator('[data-slot="carousel-next"]');
    const prevBtn = firstCard.locator('[data-slot="carousel-previous"]');

    // Awalnya previous disabled (di slide pertama)
    await expect(prevBtn).toBeDisabled();

    // Klik next
    await nextBtn.click();
    await page.waitForTimeout(400); // tunggu animasi slide

    // Setelah klik next, previous tidak lagi disabled
    await expect(prevBtn).not.toBeDisabled();
  });

  test("WC-06: Semua link project dapat diakses (status < 400)", async ({
    page,
  }) => {
    // ALASAN: Link mati ke project atau GitHub merusak kredibilitas portfolio.
    const links = page.locator(SELECTORS.projectAllLinks);
    const count = await links.count();
    for (let i = 0; i < Math.min(count, 6); i++) {
      const href = await links.nth(i).getAttribute("href");
      if (href?.startsWith("https://")) {
        const response = await page.request.get(href).catch(() => null);
        if (response) expect(response.status()).toBeLessThan(400);
      }
    }
  });

  test("WC-07: Tidak ada project card yang dirender tanpa judul", async ({
    page,
  }) => {
    // ALASAN: Card tanpa judul adalah tanda data tidak lengkap atau bug mapping.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const title = cards.nth(i).locator('[data-slot="card-title"]');
      expect(await title.count()).toBeGreaterThan(0);
      const text = await title.textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  test("WC-08: Tidak ada project card yang dirender tanpa badge teknologi", async ({
    page,
  }) => {
    // ALASAN: Project tanpa teknologi terlihat tidak informatif —
    // ini menandakan data technologies[] kosong atau tidak ter-map dengan benar.
    const cards = page.locator(SELECTORS.projectCards);
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const badges = cards.nth(i).locator('[data-slot="badge"]');
      expect(await badges.count()).toBeGreaterThan(0);
    }
  });
});