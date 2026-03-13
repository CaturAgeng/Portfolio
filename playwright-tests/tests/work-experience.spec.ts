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

  // ---------------------------------------------------------------------------
  // BEST CASE — Struktur & Konten
  // ---------------------------------------------------------------------------

  test("BC-09: Section experience tampil dengan heading 'Work Experience'", async ({
    page,
  }) => {
    // ALASAN: Heading adalah penanda section — harus selalu ada dan terbaca jelas.
    const heading = page.locator("#experience h2, #experience h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/work experience/i);
  });

  test("BC-10: Minimal ada 1 item work experience", async ({ page }) => {
    // ALASAN: Section tanpa konten artinya data tidak berhasil di-render.
    const items = page.locator(SELECTORS.workItems);
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test("BC-11: Setiap item memiliki timeline dot", async ({ page }) => {
    // ALASAN: Timeline dot (div.bg-primary.rounded-full) adalah elemen visual
    // utama format timeline — jika tidak ada, layout timeline rusak.
    const items = page.locator(SELECTORS.workItems);
    const dots = page.locator(SELECTORS.timelineDot);
    const itemCount = await items.count();
    const dotCount = await dots.count();
    // Jumlah dot harus sama dengan jumlah item
    expect(dotCount).toBe(itemCount);
  });

  test("BC-12: Garis timeline muncul di antara item (jumlah = total item - 1)", async ({
    page,
  }) => {
    // ALASAN: Kode menggunakan kondisi {index !== data.length - 1} untuk render
    // garis. Artinya item terakhir tidak punya garis — total garis = item - 1.
    // Jika jumlahnya salah, visual timeline tidak konsisten.
    const items = page.locator(SELECTORS.workItems);
    const lines = page.locator(SELECTORS.timelineLine);
    const itemCount = await items.count();
    const lineCount = await lines.count();
    expect(lineCount).toBe(itemCount - 1);
  });

  test("BC-13: Setiap item memiliki job title (position) yang tidak kosong", async ({
    page,
  }) => {
    // ALASAN: <h3> berisi experience.position — ini informasi paling penting
    // di setiap item. Tanpanya, pengunjung tidak tahu posisi yang pernah dijabat.
    const titles = page.locator(SELECTORS.jobTitle);
    const count = await titles.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const text = await titles.nth(i).textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  test("BC-14: Setiap item memiliki nama perusahaan yang tidak kosong", async ({
    page,
  }) => {
    // ALASAN: <p> setelah <h3> berisi experience.company — tanpa nama perusahaan,
    // pengunjung tidak bisa memverifikasi riwayat kerja kamu.
    const companies = page.locator(SELECTORS.companyName);
    const count = await companies.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const text = await companies.nth(i).textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  test("BC-15: Setiap item memiliki periode waktu dengan format yang benar", async ({
    page,
  }) => {
    // ALASAN: Duration dirender sebagai "start - end" (misal: "Jan 2022 - Des 2023").
    // Format dengan tanda " - " harus konsisten agar mudah dibaca pengunjung.
    const periods = page.locator(SELECTORS.workPeriod);
    const count = await periods.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const text = await periods.nth(i).textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(0);
      // Harus mengandung tanda " - " sesuai template: {start} - {end}
      expect(text).toContain(" - ");
    }
  });

  test("BC-16: Setiap item memiliki deskripsi pekerjaan", async ({ page }) => {
    // ALASAN: experience.description adalah konteks penting yang menjelaskan
    // apa yang dikerjakan di posisi tersebut.
    const descriptions = page.locator(SELECTORS.workDescription);
    const count = await descriptions.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const text = await descriptions.nth(i).textContent();
      expect(text?.trim().length ?? 0).toBeGreaterThan(10);
    }
  });

  // ---------------------------------------------------------------------------
  // BEST CASE — Achievements (opsional)
  // ---------------------------------------------------------------------------

  test("BC-17: Jika achievements ada, setiap item list tidak kosong", async ({
    page,
  }) => {
    // ALASAN: Achievements bersifat opsional ({experience.achievements && ...}).
    // Jika data achievements diisi, setiap <li> harus punya teks yang bermakna.
    const lists = page.locator(SELECTORS.achievementsList);
    const count = await lists.count();

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const items = lists.nth(i).locator("li");
        const itemCount = await items.count();
        expect(itemCount).toBeGreaterThan(0);

        for (let j = 0; j < itemCount; j++) {
          const text = await items.nth(j).textContent();
          expect(text?.trim().length ?? 0).toBeGreaterThan(0);
        }
      }
    } else {
      console.log("ℹ️  Tidak ada achievements di data — test dilewati.");
    }
  });

  test("BC-18: Bullet point achievement menggunakan warna primary", async ({
    page,
  }) => {
    // ALASAN: Setiap <li> memiliki <span class="text-primary font-bold"> sebagai bullet "•".
    // Jika span ini tidak ada, visual list achievement terlihat tidak rapi.
    const bullets = page.locator(SELECTORS.achievementBullet);
    const count = await bullets.count();

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const text = await bullets.nth(i).textContent();
        expect(text?.trim()).toBe("•");
      }
    } else {
      console.log("ℹ️  Tidak ada achievements di data — test dilewati.");
    }
  });

  // ---------------------------------------------------------------------------
  // WORST CASE — Edge Cases
  // ---------------------------------------------------------------------------

  test("WC-09: Item terakhir tidak memiliki garis timeline", async ({
    page,
  }) => {
    // ALASAN: Kondisi {index !== data.length - 1} memastikan item terakhir
    // tidak punya garis. Jika garis tetap muncul di item terakhir, berarti
    // kondisi rendering di komponen tidak berjalan dengan benar.
    const items = page.locator(SELECTORS.workItems);
    const itemCount = await items.count();

    if (itemCount > 1) {
      const lastItem = items.nth(itemCount - 1);
      const lineInLastItem = lastItem.locator(".bg-border");
      await expect(lineInLastItem).toHaveCount(0);
    }
  });

  test("WC-10: Section tetap rapi di mobile (375px) — tidak ada overflow", async ({
    page,
  }) => {
    // ALASAN: Layout flex md:flex-row akan collapse ke column di mobile.
    // Position dan duration harus tetap terbaca tanpa terpotong.
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    await scrollToSection(page, SELECTORS.workSection);

    const titles = page.locator(SELECTORS.jobTitle);
    const count = await titles.count();
    for (let i = 0; i < count; i++) {
      await expect(titles.nth(i)).toBeVisible();
    }

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(hasOverflow).toBeFalsy();
  });

  test("WC-11: Semua item ter-render meskipun data achievements kosong", async ({
    page,
  }) => {
    // ALASAN: Komponen menggunakan conditional render untuk achievements.
    // Item tanpa achievements harus tetap tampil normal tanpa layout shift.
    const items = page.locator(SELECTORS.workItems);
    const count = await items.count();
    for (let i = 0; i < count; i++) {
      await expect(items.nth(i)).toBeVisible();
      // Setiap item minimal harus punya h3 (position)
      await expect(items.nth(i).locator("h3")).toBeVisible();
    }
  });
});