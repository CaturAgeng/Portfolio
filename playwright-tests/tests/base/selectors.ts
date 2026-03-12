// =============================================================================
// selectors.ts
// -----------------------------------------------------------------------------
// File ini adalah "kamus" dari semua CSS selector yang digunakan di seluruh
// test suite. Tujuannya adalah memusatkan semua selector di SATU tempat,
// sehingga jika HTML website berubah (misalnya class name diganti), kamu
// cukup update di FILE INI SAJA — tidak perlu ubah satu per satu di setiap
// file test.
//
// PRINSIP: DRY — Don't Repeat Yourself.
// =============================================================================

export const SELECTORS = {
  // ---------------------------------------------------------------------------
  // NAVIGATION
  // Elemen navbar dan link-link di dalamnya.
  // ---------------------------------------------------------------------------
  navbar: "nav",
  navLinks: "nav a",
  navAbout: 'nav a[href="#about"]',
  navWork: 'nav a[href="#work-experience"]',
  navProjects: 'nav a[href="#projects"]',
  navContact: 'nav a[href="#contact"]',

  // ---------------------------------------------------------------------------
  // SECTIONS
  // ID dari setiap section utama pada halaman.
  // ---------------------------------------------------------------------------
  aboutSection: "#about",
  workSection: "#work-experience",
  projectSection: "#projects",
  contactSection: "#contact",

  // ---------------------------------------------------------------------------
  // ABOUT ME
  // ---------------------------------------------------------------------------
  profileImage: 'img[alt*="profile"], img[alt*="avatar"]',
  aboutHeading: "#about h1, #about h2",
  bioText: "#about p",

  // ---------------------------------------------------------------------------
  // WORK EXPERIENCE
  // ---------------------------------------------------------------------------
  workCards: ".work-card, .experience-item, #work-experience .card",
  companyName: ".company-name, .company",
  jobTitle: ".job-title, .position",
  workPeriod: ".period, .duration, .date",

  // ---------------------------------------------------------------------------
  // PROJECTS
  // ---------------------------------------------------------------------------
  projectCards: ".project-card, .project-item, #projects .card",
  projectTitle: ".project-title, .project-name",
  projectDescription: ".project-description, .project-desc",
  projectLinks: ".project-card a, .project-item a",

  // ---------------------------------------------------------------------------
  // CONTACT
  // ---------------------------------------------------------------------------
  contactForm: "#contact form",
  nameInput: 'input[name="name"], input[placeholder*="name" i]',
  emailInput: 'input[name="email"], input[type="email"]',
  messageInput: 'textarea[name="message"], textarea[placeholder*="message" i]',
  submitButton: 'button[type="submit"], input[type="submit"]',
  successMessage: '.success-message, [data-testid="success"]',
  socialLinks: '#contact a[href*="linkedin"], #contact a[href*="github"]',

  // ---------------------------------------------------------------------------
  // SEO & META
  // ---------------------------------------------------------------------------
  metaDescription: 'meta[name="description"]',
  ogTitle: 'meta[property="og:title"]',
  ogImage: 'meta[property="og:image"]',

  // ---------------------------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------------------------
  footer: "footer",
};