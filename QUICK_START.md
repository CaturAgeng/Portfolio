# Quick Start Guide

Selamat! Portfolio website Anda sudah siap. Ikuti langkah-langkah sederhana ini untuk get started:

## Step 1: Customize Your Information (5 minutes)

Edit file: `data/portfolio.ts`

```typescript
export const portfolioData: PortfolioContent = {
  hero: {
    name: 'YOUR NAME',           // <- Change this
    title: 'Your Job Title',     // <- Change this
    subtitle: 'Your bio here',   // <- Change this
    cta: 'View My Work',
  },
  about: {
    title: 'About Me',
    description: [
      'Write your bio here...',  // <- Update these
      'More about yourself...',
      'What you love doing...',
    ],
  },
  // ... rest of data
};
```

## Step 2: Add Your Skills

Still in `data/portfolio.ts`, update skills section:

```typescript
skills: [
  {
    id: 'frontend',
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'], // <- Your skills
  },
  {
    id: 'backend',
    category: 'Backend Development',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'], // <- Your skills
  },
  // ... add more categories
];
```

## Step 3: Add Your Projects

```typescript
projects: [
  {
    id: 'project-1',
    title: 'My Amazing Project',     // <- Your project name
    description: 'What it does...',  // <- Your description
    shortDescription: 'Short desc',
    image: '/projects/project.jpg',  // <- Add image path (optional)
    technologies: ['React', 'Node'],  // <- Technologies used
    link: 'https://...',              // <- Project URL
    github: 'https://github.com/...', // <- GitHub link
    featured: true,
  },
  // ... add more projects
];
```

## Step 4: Update Work Experience

```typescript
experience: [
  {
    id: 'job-1',
    company: 'Your Company',         // <- Company name
    position: 'Your Position',       // <- Your title
    duration: {
      start: 'Jan 2023',
      end: 'Present',
    },
    description: 'What you did...',  // <- Job description
    achievements: [
      'Achievement 1',               // <- Your achievements
      'Achievement 2',
    ],
  },
  // ... add more jobs
];
```

## Step 5: Add Contact Info

```typescript
contact: {
  email: 'your.email@example.com',   // <- Your email
  phone: '+1 (555) 123-4567',        // <- Your phone (optional)
},
social: [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/yourname',  // <- Your GitHub
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourname',  // <- Your LinkedIn
    icon: 'linkedin',
  },
  // ... add more social links
];
```

## Step 6: Run Locally & Check

```bash
pnpm dev
# Open http://localhost:3000
```

Preview portfolio Anda dan pastikan semuanya sudah benar!

## Step 7: Add Project Images (Optional)

1. Create folder: `public/projects/`
2. Upload project images ke folder tersebut
3. Update image paths di `data/portfolio.ts`

Example:
```typescript
{
  id: 'project-1',
  title: 'E-Commerce Platform',
  image: '/projects/ecommerce.jpg',  // <- Now with image
  // ...
}
```

## Step 8: Deploy (Choose One)

### Option A: Deploy to Vercel (Recommended)

1. Push code ke GitHub
2. Go to https://vercel.com
3. Click "Add New" → "Project"
4. Select your repository
5. Click "Deploy"
6. Done! Your portfolio is live

### Option B: Deploy Anywhere Else

Build production version:
```bash
pnpm build
```

Then deploy `.next` folder ke:
- Netlify
- Firebase Hosting
- AWS S3 + CloudFront
- Your own server
- Anywhere that supports Node.js

## Architecture Overview

```
Your Portfolio Website
    ↓
app/page.tsx (Main Page)
    ↓
Imports 6 Sections:
├── HeroSection (Name, Title, CTA)
├── AboutSection (Bio & Description)
├── SkillsSection (Skills by Category)
├── ProjectsSection (Your Projects)
├── ExperienceSection (Work History)
└── ContactSection (Contact Info & Links)
    ↓
All sections read from: data/portfolio.ts
    ↓
Styled with Tailwind CSS + Dark Mode Support
```

## Key Features Built-In

- ✅ Fully Responsive (Mobile, Tablet, Desktop)
- ✅ Dark Mode Support
- ✅ Smooth Scrolling Navigation
- ✅ Clean, Modern Design
- ✅ TypeScript Type Safety
- ✅ Reusable Components
- ✅ Fast Performance
- ✅ SEO Optimized
- ✅ Accessible (WCAG Compliant)
- ✅ Production Ready

## Customization Options

### Change Colors

Edit `app/globals.css`:
```css
:root {
  --primary: oklch(0.52 0.14 262.8);  /* Blue - change this */
  --background: oklch(0.985 0 0);     /* White - change this */
}
```

Use https://oklch.space to generate colors

### Change Fonts

Already using "Geist" font. To change:
1. Edit `app/layout.tsx`
2. Import different Google Font
3. Update `tailwind.config.ts`

### Add More Sections

1. Create new component in `components/sections/`
2. Add data type in `types/index.ts`
3. Add data in `data/portfolio.ts`
4. Import and render in `app/page.tsx`

## Project Structure (Simplified)

```
portfolio/
├── data/portfolio.ts          ← EDIT THIS (All your content)
├── app/page.tsx               ← Main page (don't need to edit)
├── components/sections/       ← Section components (already done)
├── components/common/         ← Utility components (already done)
├── app/globals.css            ← Styles (can customize)
├── SETUP_INSTRUCTIONS.md      ← Detailed setup guide
└── PORTFOLIO_GUIDE.md         ← Advanced customization
```

## Common Tasks

### Update Hero Title
File: `data/portfolio.ts`
→ Change `hero.title`

### Add New Project
File: `data/portfolio.ts`
→ Add object to `projects` array

### Change Theme Color
File: `app/globals.css`
→ Change `--primary` value

### Update Contact Email
File: `data/portfolio.ts`
→ Change `contact.email`

### Add Social Link
File: `data/portfolio.ts`
→ Add object to `social` array

## Next Steps

1. Open `data/portfolio.ts`
2. Replace all template data with YOUR information
3. Add your project images to `/public/projects/`
4. Run `pnpm dev` to preview
5. Push to GitHub
6. Deploy to Vercel

## Docs & Resources

- **SETUP_INSTRUCTIONS.md** - Full setup guide
- **PORTFOLIO_GUIDE.md** - Detailed documentation
- **types/index.ts** - Data structure reference
- **components/** - Component code with comments

## Need Help?

Each component has detailed comments explaining what it does. Check the code!

---

That's it! You now have a professional, production-ready portfolio website. Good luck! 🚀
