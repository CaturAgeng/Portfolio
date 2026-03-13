import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  //Direktori tempat tes berada
  testDir: ".",

  //Jalankan tes dalam file secara paralel
  fullyParallel: true,

  //Gagalkan build jika ada tes.only yang tidak sengaja di commit
  forbidOnly: !!process.env.CI,

  //Retry otomatis saat di CI
  retries: process.env.CI ? 2 : 0,

  //Jumlah worker paralel
  workers: process.env.CI ? 1 : undefined,

  //Format laporan hasil tes
  reporter: [["html", {open: "never" }], ["list"]],

  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry", //Rekam trace saat retry
    screenshot: "only-on-failure", //Ambil screenshot hanya saat tes gagal
    video: "retain-on-failure", //Rekam video hanya saat tes gagal
  },

  projects: [
    { name: "chromium",       use: { ...devices["Desktop Chrome"] } },
    { name: "firefox",        use: { ...devices["Desktop Firefox"] } },
    { name: "Mobile Chrome",  use: { ...devices["Pixel 5"] } },
    { name: "Mobile Safari",  use: { ...devices["iPhone 12"] } },
  ],
});