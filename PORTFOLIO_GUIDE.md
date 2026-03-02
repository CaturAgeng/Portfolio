# Portfolio Website Guide

Selamat datang! Berikut adalah panduan lengkap untuk memahami dan mengkustomisasi portfolio website Anda.

## Struktur Folder

```
project/
├── app/
│   ├── layout.tsx          # Root layout dengan metadata
│   ├── page.tsx            # Main page yang meng-combine semua sections
│   └── globals.css         # Global styles dan theme colors
├── components/
│   ├── common/             # Reusable utility components
│   │   ├── Navigation.tsx   # Navigation bar
│   │   ├── Footer.tsx       # Footer dengan social links
│   │   ├── SectionContainer.tsx   # Container untuk setiap section
│   │   └── SectionHeading.tsx     # Reusable heading component
│   ├── sections/           # Portfolio section components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                 # shadcn/ui components
├── data/
│   └── portfolio.ts        # All portfolio content (centralized)
├── types/
│   └── index.ts            # TypeScript types dan interfaces
├── hooks/
│   └── useScrollToSection.ts # Custom hook untuk smooth scrolling
└── lib/
    └── utils.ts            # Utility functions
```

## Cara Mengupdate Portfolio Content

Semua konten portfolio disimpan dalam satu file: `data/portfolio.ts`. File ini sangat mudah di-update tanpa perlu mengubah component code.

### Update Hero Section
```typescript
// data/portfolio.ts
export const portfolioData: PortfolioContent = {
  hero: {
    name: 'Nama Anda',
    title: 'Your Title',
    subtitle: 'Your subtitle...',
    cta: 'Button text',
  },
  // ...
};
```

### Add Project
```typescript
projects: [
  {
    id: 'project-1',
    title: 'Project Title',
    description: 'Project description...',
    shortDescription: 'Short description',
    image: '/projects/image.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
  // ...
];
```

### Add Experience
```typescript
experience: [
  {
    id: 'job-1',
    company: 'Company Name',
    position: 'Your Position',
    duration: {
      start: 'Jan 2023',
      end: 'Present',
    },
    description: 'Job description...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
  // ...
];
```

### Update Skills
```typescript
skills: [
  {
    id: 'frontend',
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  // ...
];
```

## Component Reusability

Portfolio website ini dibangun dengan prinsip reusability yang tinggi:

### SectionContainer
Gunakan component ini untuk membuat section dengan consistent spacing dan styling:
```typescript
<SectionContainer id="section-id" darkBg={true}>
  {/* Content */}
</SectionContainer>
```

### SectionHeading
Untuk heading yang konsisten di semua section:
```typescript
<SectionHeading 
  title="Section Title" 
  align="center"
/>
```

### Navigation & Footer
Kedua component ini automatically membaca dari `portfolioData`, jadi update data otomatis reflect di navigation dan footer.

## Theme & Colors

Portfolio menggunakan modern minimalist color scheme:

### Light Mode (Default)
- Background: White
- Primary: Modern Blue
- Secondary: Subtle Gray
- Foreground: Deep Navy

### Dark Mode
- Background: Deep Navy
- Primary: Bright Blue
- Secondary: Slightly Lighter Navy
- Foreground: Off White

Semua colors didefinisikan di `app/globals.css` menggunakan CSS variables dengan format `--primary`, `--background`, dll.

## Customization Tips

### 1. Update Your Information
Edit `data/portfolio.ts` dan replace placeholder content dengan informasi Anda:
- Name, title, description
- Skills dan technologies
- Projects dan links
- Experience timeline
- Contact information

### 2. Add Project Images
Tempat placeholder images ada di `ProjectsSection.tsx`. Untuk menambahkan actual images:
1. Save images ke `/public/projects/` folder
2. Update image path di `data/portfolio.ts`
3. Component akan automatically load dan display images

### 3. Modify Colors
Edit CSS variables di `app/globals.css`:
```css
:root {
  --primary: oklch(0.52 0.14 262.8); /* Blue */
  --secondary: oklch(0.97 0.002 0);  /* Gray */
  /* ... */
}

.dark {
  --primary: oklch(0.65 0.17 260);
  /* ... */
}
```

### 4. Add Sections
Untuk menambahkan section baru:
1. Create component di `components/sections/`
2. Add data type di `types/index.ts`
3. Add data di `data/portfolio.ts`
4. Import dan render di `app/page.tsx`

## Clean Code Principles

Portfolio ini dibangun mengikuti best practices:

1. **Type Safety**: Full TypeScript typing - tidak ada `any` types
2. **Component Composition**: Single responsibility principle
3. **Reusability**: Components bisa diuse di multiple tempat
4. **Data Centralization**: Semua content di satu file
5. **Separation of Concerns**: UI components separate dari data
6. **Responsive Design**: Mobile-first approach dengan Tailwind

## Performance Optimizations

- Static generation (Next.js default)
- Minimal bundle size
- CSS classes optimization dengan Tailwind
- Smooth scrolling dengan native browser API

## Deployment

Portfolio ini siap di-deploy ke Vercel:

1. Push code ke GitHub repository
2. Connect repository ke Vercel
3. Vercel automatically deploy setiap push

Atau download ZIP dan deploy manually ke platform pilihan Anda (Vercel, Netlify, AWS, dll).

## Next Steps

1. **Customize data**: Edit `data/portfolio.ts` dengan informasi Anda
2. **Add images**: Upload project images ke `/public/projects/`
3. **Update colors**: Modify CSS variables sesuai brand Anda
4. **Add more projects**: Copy-paste project object dan customize
5. **Deploy**: Push ke GitHub dan deploy ke Vercel

## Questions atau Issues?

Struktur code dibuat untuk semudah mungkin di-customize. Setiap component punya clear comments menjelaskan fungsinya. Happy customizing!
