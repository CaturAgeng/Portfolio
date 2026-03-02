# Portfolio Setup Instructions

Panduan lengkap untuk setup dan menjalankan portfolio website Anda.

## Prerequisites

Pastikan Anda memiliki:
- Node.js 18+ (https://nodejs.org)
- npm atau pnpm package manager
- Code editor (VS Code recommended)
- Git (untuk version control)

## Installation

### 1. Install Dependencies
```bash
# Menggunakan pnpm (recommended)
pnpm install

# Atau menggunakan npm
npm install
```

### 2. Run Development Server
```bash
# Menggunakan pnpm
pnpm dev

# Atau menggunakan npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) di browser untuk melihat portfolio Anda.

## Project Structure Overview

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles
├── components/
│   ├── common/            # Reusable utilities (Navigation, Footer, etc)
│   ├── sections/          # Portfolio sections
│   └── ui/                # shadcn/ui components
├── data/
│   └── portfolio.ts       # Portfolio content (EDIT THIS!)
├── types/
│   └── index.ts          # TypeScript types
├── hooks/
│   └── useScrollToSection.ts  # Custom hooks
├── public/                # Static assets
└── lib/
    └── utils.ts          # Utilities
```

## Quick Start Customization

### 1. Update Your Information (Most Important!)

Edit `data/portfolio.ts` dan replace template data dengan informasi Anda:

```typescript
export const portfolioData: PortfolioContent = {
  hero: {
    name: 'YOUR NAME',                    // Change this!
    title: 'Your Job Title',              // Change this!
    subtitle: 'Your professional summary', // Change this!
    cta: 'Explore My Work',
  },
  about: {
    title: 'About Me',
    description: [
      'Your bio here...',
      'Another paragraph...',
      'More about you...',
    ],
  },
  // ... dan seterusnya
};
```

### 2. Add Your Projects

Tambahkan projects Anda di `data/portfolio.ts`:

```typescript
projects: [
  {
    id: 'unique-id',
    title: 'Project Title',
    description: 'What the project does...',
    shortDescription: 'Short summary',
    image: '/projects/project-image.jpg',
    technologies: ['React', 'TypeScript'],
    link: 'https://project-url.com',
    github: 'https://github.com/yourname/project',
    featured: true,
  },
  // ... add more projects
];
```

### 3. Add Your Experience

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
    description: 'What you did at this job...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // ... add more jobs
];
```

### 4. Update Skills

Edit skills categories dan items:

```typescript
skills: [
  {
    id: 'frontend',
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  // ... add more categories
];
```

### 5. Add Contact Info & Social Links

```typescript
contact: {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567', // optional
},
social: [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/yourname',
    icon: 'github',
  },
  // ... add more social links
];
```

## Adding Project Images

1. Save project images ke `/public/projects/` folder
2. Update image path di `data/portfolio.ts`:
```typescript
{
  id: 'project-1',
  title: 'My Project',
  image: '/projects/my-project.jpg', // Path ke image
  // ...
}
```

Supported formats: JPG, PNG, WebP, SVG

## Customizing Theme & Colors

Edit `app/globals.css`:

```css
:root {
  /* Light mode colors */
  --primary: oklch(0.52 0.14 262.8);    /* Main color */
  --secondary: oklch(0.97 0.002 0);     /* Alternate section color */
  --background: oklch(0.985 0 0);       /* Background */
  /* ... */
}

.dark {
  /* Dark mode colors */
  --primary: oklch(0.65 0.17 260);
  /* ... */
}
```

Color format menggunakan OKLCH. Untuk generate colors, gunakan: https://oklch.space

## Build for Production

### Build Project
```bash
pnpm build
# atau
npm run build
```

### Test Production Build Locally
```bash
pnpm start
# atau
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code ke GitHub
2. Go to https://vercel.com
3. Connect GitHub repository
4. Vercel automatically deploys setiap push

### Deploy to Other Platforms

**Netlify:**
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

**Other platforms:** Follow their deployment guide untuk Next.js projects

## Environment Variables (If Needed)

Create `.env.local` di root folder untuk environment variables:

```
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
```

Saat ini project tidak memerlukan environment variables, tapi Anda bisa menambahkannya jika diperlukan.

## Troubleshooting

### Port 3000 sudah terpakai
```bash
# Gunakan port yang berbeda
pnpm dev -- -p 3001
```

### Dependencies error saat install
```bash
# Clear cache dan install ulang
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Changes tidak ter-reflect di browser
```bash
# Reload browser dengan Ctrl+Shift+R (atau Cmd+Shift+R di Mac)
# Atau buka private/incognito window
```

## Best Practices

1. **Keep data updated**: Update `data/portfolio.ts` regularly
2. **Use meaningful project descriptions**: Helps visitors understand your work
3. **Add actual project images**: Make projects visually appealing
4. **Keep contact info current**: Make it easy for opportunities to reach you
5. **Use semantic HTML**: Already included for accessibility
6. **Test on mobile**: Portfolio responsive di semua devices

## File Structure Walkthrough

### `app/page.tsx`
Main page yang mengimport semua section components. Jangan edit file ini kecuali Anda ingin mengubah urutan sections.

### `components/sections/`
Setiap file di sini adalah section. Semua components sudah complete dan tidak perlu di-edit untuk customize content.

### `data/portfolio.ts`
**THIS IS THE MAIN FILE YOU'LL EDIT!** Semua content portfolio disimpan di sini. Components automatically membaca dari file ini.

### `app/globals.css`
Global styles, colors, dan animations. Edit jika ingin customize theme.

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## Need Help?

- Check `PORTFOLIO_GUIDE.md` untuk detailed documentation
- Search untuk answer di component comments (banyak yang sudah documented)
- Refer ke data structure di `types/index.ts` untuk understand data format

Good luck dengan portfolio Anda! 🚀
