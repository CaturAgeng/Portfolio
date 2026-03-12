// =============================================================================
// helpers.ts
// -----------------------------------------------------------------------------
// File ini berisi kumpulan FUNGSI BANTU (utility functions) yang dipakai
// berulang-ulang di banyak file test. Tujuannya adalah menghindari penulisan
// logika yang sama berulang kali (DRY principle), dan membuat test lebih
// mudah dibaca karena aksi kompleks diringkas dalam satu nama fungsi.
//
// Bayangkan helpers.ts sebagai "toolkit" — alat-alat siap pakai yang tinggal
// dipanggil kapanpun dibutuhkan di dalam test manapun.
// =============================================================================

import { Page, expect } from "@playwright/test";

// -----------------------------------------------------------------------------
// scrollToSection
// -----------------------------------------------------------------------------
// Fungsi ini meng-scroll halaman ke sebuah section tertentu, lalu menunggu
// sebentar agar animasi scroll selesai sebelum test melanjutkan aksinya.
//
// KENAPA DIPISAH: Scroll + wait dipakai di hampir semua file test.
// Tanpa helper ini, setiap test harus menulis 2 baris yang sama berulang kali.
// -----------------------------------------------------------------------------
export async function scrollToSection(
  page: Page,
  selector: string
): Promise<void> {
  await page.locator(selector).scrollIntoViewIfNeeded();
  await page.waitForTimeout(500); // Tunggu animasi scroll selesai
}

// -----------------------------------------------------------------------------
// checkImageLoaded
// -----------------------------------------------------------------------------
// Memverifikasi bahwa sebuah elemen <img> benar-benar ter-load dengan baik
// (tidak broken). Caranya dengan mengecek apakah naturalWidth > 0, karena
// gambar broken akan memiliki naturalWidth = 0.
//
// KENAPA DIPISAH: Logika evaluate() ini agak teknis dan tidak intuitif jika
// ditulis langsung di dalam test. Dengan dibungkus fungsi, test jadi terbaca
// lebih natural: "checkImageLoaded(img)".
// -----------------------------------------------------------------------------
export async function checkImageLoaded(
  page: Page,
  selector: string
): Promise<boolean> {
  const img = page.locator(selector).first();
  await expect(img).toBeVisible();
  return img.evaluate((el: HTMLImageElement) => el.naturalWidth > 0);
}

// -----------------------------------------------------------------------------
// fillContactForm
// -----------------------------------------------------------------------------
// Mengisi seluruh field form kontak sekaligus dengan data yang diberikan.
// Mengembalikan referensi ke tombol submit agar test bisa melanjutkan
// aksi klik atau assertion setelahnya.
//
// KENAPA DIPISAH: Pengisian form dipakai di banyak test (happy path, double
// submit, XSS, dsb). Tanpa helper ini, setiap test harus mengulang 3 baris
// fill() yang identik — rawan typo dan membosankan untuk di-maintain.
// -----------------------------------------------------------------------------
export async function fillContactForm(
  page: Page,
  selectors: {
    nameInput: string;
    emailInput: string;
    messageInput: string;
  },
  data: {
    name: string;
    email: string;
    message: string;
  }
): Promise<void> {
  await page.locator(selectors.nameInput).fill(data.name);
  await page.locator(selectors.emailInput).fill(data.email);
  await page.locator(selectors.messageInput).fill(data.message);
}

// -----------------------------------------------------------------------------
// getLoadTime
// -----------------------------------------------------------------------------
// Mengukur waktu yang dibutuhkan halaman untuk selesai dimuat (domcontentloaded)
// dalam satuan milidetik. Berguna untuk performance testing.
//
// KENAPA DIPISAH: Logika start/end timer ini dipakai di test performance.
// Memisahkannya ke helper membuat test lebih fokus pada assertion-nya saja.
// -----------------------------------------------------------------------------
export async function getLoadTime(page: Page, url: string): Promise<number> {
  const startTime = Date.now();
  await page.goto(url, { waitUntil: "domcontentloaded" });
  return Date.now() - startTime;
}

// -----------------------------------------------------------------------------
// hasHorizontalScroll
// -----------------------------------------------------------------------------
// Mengecek apakah halaman memiliki horizontal scroll — tanda bahwa layout
// overflow dan tidak responsif dengan baik.
//
// KENAPA DIPISAH: Logika evaluate() ini dipakai di semua test responsivitas
// (mobile 320px, desktop 2560px, landscape, dll). Satu tempat, satu logika.
// -----------------------------------------------------------------------------
export async function hasHorizontalScroll(page: Page): Promise<boolean> {
  return page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  );
}

// -----------------------------------------------------------------------------
// interceptApiAndSubmit
// -----------------------------------------------------------------------------
// Meng-intercept request ke endpoint API form kontak agar tidak benar-benar
// mengirim data ke server saat testing, lalu klik tombol submit.
// Mengembalikan jumlah berapa kali request tersebut dipanggil.
//
// KENAPA DIPISAH: Pattern intercept + count ini dipakai di test submit sukses
// maupun test double-click. Memusatkan logika intercept di sini mencegah
// konfigurasi route yang berbeda-beda di setiap test.
// -----------------------------------------------------------------------------
export async function interceptApiAndSubmit(
  page: Page,
  apiPattern: string,
  submitSelector: string
): Promise<number> {
  let callCount = 0;

  await page.route(apiPattern, (route) => {
    callCount++;
    route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
  });

  await page.locator(submitSelector).click();
  await page.waitForTimeout(1000);
  return callCount;
}

// -----------------------------------------------------------------------------
// collectConsoleErrors
// -----------------------------------------------------------------------------
// Mendengarkan semua console error yang muncul selama halaman dimuat.
// Mengembalikan array berisi pesan error tersebut.
//
// KENAPA DIPISAH: Listener console.error() harus dipasang SEBELUM goto(),
// jika urutan ini salah maka error tidak akan tertangkap. Dengan helper ini,
// urutannya selalu benar dan test tidak perlu memikirkan detail implementasi.
// -----------------------------------------------------------------------------
export async function collectConsoleErrors(
  page: Page,
  url: string
): Promise<string[]> {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto(url);
  return errors;
}