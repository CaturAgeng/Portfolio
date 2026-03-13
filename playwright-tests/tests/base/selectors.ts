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
  // ---------------------------------------------------------------------------
  navbar: "nav",
  navLinks: "nav a",
  navAbout: 'nav a[href="#about"]',
  navWork: 'nav a[href="#experience"]',
  navProjects: 'nav a[href="#projects"]',
  navContact: 'nav a[href="#contact"]',

  // ---------------------------------------------------------------------------
  // SECTIONS
  // ID dari setiap section utama — satu tempat, tidak boleh duplikat.
  // ---------------------------------------------------------------------------
  aboutSection: "#about",
  workSection: "#experience",
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
  // Disesuaikan dengan ExperienceSection component:
  // - SectionContainer id="experience"
  // - Setiap item = div.relative.pl-8 (timeline item)
  // - Position  → <h3> font-bold
  // - Company   → <p> text-sm tepat setelah <h3>
  // - Duration  → <p> whitespace-nowrap (format: "start - end")
  // - Timeline dot → div.bg-primary.rounded-full
  // - Achievements → <ul><li> bersifat opsional
  // ---------------------------------------------------------------------------
  workItems: "#experience .relative.pl-8",
  timelineDot: "#experience .bg-primary.rounded-full",
  timelineLine: "#experience .bg-border",
  jobTitle: "#experience h3",
  companyName: "#experience h3 + p",
  workPeriod: "#experience p.whitespace-nowrap",
  workDescription: "#experience p.leading-relaxed",
  achievementsList: "#experience ul",
  achievementItem: "#experience ul li",
  achievementBullet: "#experience ul li span.text-primary",

  // ---------------------------------------------------------------------------
  // PROJECTS
  // Disesuaikan dengan ProjectsSection component:
  // - SectionContainer id="projects"
  // - Setiap project = <Card> → div dengan class card-hover bg-primary/90
  // - Gambar = <Carousel> → <img> dengan alt dinamis "{title} - Image {n}"
  //   Support single image (string) maupun multiple images (array)
  // - Judul = <CardTitle> → div di dalam CardHeader
  // - Short desc = <CardDescription> → p di dalam CardHeader
  // - Description = <p> text-sm leading-relaxed di dalam CardContent
  // - Jobdesk = <span> dalam <p> — opsional (jobdesk && length > 0)
  // - Technologies = <Badge variant="outline"> per tech
  // - Link project = <Button asChild> → <a> — opsional (project.link)
  // - GitHub link = <Button asChild> → <a> — opsional (project.github)
  // - Carousel prev/next button ada di setiap card
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // PROJECTS
  // Berdasarkan DOM asli yang dirender shadcn/ui + Tailwind:
  //
  // Card     → <div data-slot="card" class="... card-hover ...">
  // Header   → <div data-slot="card-header">
  // Title    → <div data-slot="card-title" class="font-semibold text-xl">
  // Desc     → <div data-slot="card-description" class="text-muted-foreground text-base">
  // Content  → <div data-slot="card-content">
  // Badge    → <span data-slot="badge" class="... text-xs">
  // Carousel → <div data-slot="carousel">
  // Slide    → <div data-slot="carousel-item">
  // Prev btn → <button data-slot="carousel-previous">
  // Next btn → <button data-slot="carousel-next">
  // Links    → <a data-slot="button" target="_blank"> di dalam div.pt-4
  // Jobdesk  → <span> di dalam <p class="flex flex-col gap-1">
  // ---------------------------------------------------------------------------

  // Setiap project card — kombinasi data-slot="card" dan class card-hover
  projectCards: '#projects [data-slot="card"].card-hover',

  // Judul project — <div data-slot="card-title">
  projectTitle: '#projects [data-slot="card-title"]',

  // Short description — <div data-slot="card-description">
  projectShortDesc: '#projects [data-slot="card-description"]',

  // Deskripsi lengkap — <p class="text-sm text-muted-foreground leading-relaxed">
  projectDescription: '#projects [data-slot="card-content"] p.leading-relaxed',

  // Badge teknologi — <span data-slot="badge">
  techBadges: '#projects [data-slot="badge"]',

  // Container tombol link — div.pt-4 di dalam card-content
  projectLinksContainer: '#projects [data-slot="card-content"] .pt-4',

  // Semua link project (View Project + GitHub) — <a data-slot="button" target="_blank">
  projectAllLinks: '#projects [data-slot="card-content"] .pt-4 a[data-slot="button"][target="_blank"]',

  // Tombol GitHub — link dengan href mengandung "github"
  projectGithubLink: '#projects a[data-slot="button"][href*="github"][target="_blank"]',

  // Gambar di dalam carousel item
  projectImages: '#projects [data-slot="carousel-item"] img',

  // Carousel wrapper
  projectCarousel: '#projects [data-slot="carousel"]',

  // Tombol Previous carousel — <button data-slot="carousel-previous">
  carouselPrev: '#projects [data-slot="carousel-previous"]',

  // Tombol Next carousel — <button data-slot="carousel-next">
  carouselNext: '#projects [data-slot="carousel-next"]',

  // Item jobdesk — <span> di dalam <p class="flex flex-col gap-1">
  jobdeskItems: '#projects [data-slot="card-content"] p.flex-col span',

  // ---------------------------------------------------------------------------
  // CONTACT
  // Disesuaikan dengan ContactSection component:
  // - Tidak ada form — kontak via email, phone (opsional), social links
  // - Social links = <Button asChild> → <a target="_blank">
  // ---------------------------------------------------------------------------
  contactMessage: "#contact p.text-muted-foreground",

  // Link email BIASA — <a href="mailto:"> tanpa data-slot="button" dan tanpa target="_blank"
  // Ini berbeda dari social button "Email" yang juga pakai mailto: tapi dengan target="_blank"
  emailLink: '#contact a[href^="mailto:"]',
  phoneLink: '#contact a[href^="tel:"]',
  socialLinks: "#contact a[target='_blank']",
  socialLinkWrapper: "#contact .group",

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