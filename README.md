# Modern Portfolio Website

Professional, clean, and reusable portfolio website built with React, TypeScript, and Shadcn/ui.

## Overview

Ini adalah fully functional portfolio website yang siap untuk Anda customize dan deploy. Built dengan:

- **React 19** + **TypeScript** - Type-safe, maintainable code
- **Next.js 16** - Server-side rendering dan static generation
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - Accessible, high-quality UI components
- **Modern & Minimalist Design** - Clean aesthetic suitable for developers & QA professionals

## ✨ Features

✅ **Fully Responsive** - Works on mobile, tablet, desktop
✅ **Dark Mode Support** - Light and dark theme included
✅ **Smooth Scrolling** - Navigation with smooth scroll to sections
✅ **Type-Safe** - Full TypeScript implementation
✅ **Clean Code** - Reusable components, centralized data
✅ **Accessible** - WCAG compliant, keyboard navigation
✅ **Production Ready** - Optimized for performance and SEO
✅ **Easy to Customize** - All content in one file (`data/portfolio.ts`)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Customize Your Content
Edit `data/portfolio.ts` and replace template data with your information.

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### 4. Deploy
Push to GitHub and deploy to Vercel (or your preferred platform).

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and theme colors
├── components/
│   ├── common/             # Reusable utility components
│   ├── sections/           # Portfolio section components
│   └── ui/                 # shadcn/ui components
├── data/
│   └── portfolio.ts        # Your portfolio content (EDIT THIS!)
├── types/
│   └── index.ts           # TypeScript interfaces
├── hooks/
│   └── useScrollToSection.ts # Custom hooks
└── public/                # Static files
```

## 📝 Quick Customization Guide

### Update Your Information
```typescript
// data/portfolio.ts
export const portfolioData: PortfolioContent = {
  hero: {
    name: 'YOUR NAME',              // Change this
    title: 'Your Job Title',        // Change this
    subtitle: 'Your bio...',        // Change this
  },
  // ... and so on
};
```

### Add Projects
```typescript
projects: [
  {
    id: 'project-1',
    title: 'My Project',
    description: 'What it does...',
    technologies: ['React', 'Node.js'],
    link: 'https://...',
    github: 'https://github.com/...',
  },
  // Add more projects
];
```

### Add Work Experience
```typescript
experience: [
  {
    id: 'job-1',
    company: 'Company Name',
    position: 'Your Position',
    duration: { start: 'Jan 2023', end: 'Present' },
    description: 'What you did...',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
  // Add more jobs
];
```

See `QUICK_START.md` for more detailed instructions.

## 🎨 Customization

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: oklch(0.52 0.14 262.8);  /* Change primary color */
}
```

Use [oklch.space](https://oklch.space) to generate colors.

### Change Fonts
Edit `app/layout.tsx` to import different Google fonts.

### Add Sections
1. Create component in `components/sections/`
2. Add data type in `types/index.ts`
3. Add data in `data/portfolio.ts`
4. Import in `app/page.tsx`

## 📚 Documentation

- **QUICK_START.md** - Get started in 5 minutes
- **SETUP_INSTRUCTIONS.md** - Complete setup guide
- **PORTFOLIO_GUIDE.md** - Detailed customization guide
- **CLEAN_CODE_PRACTICES.md** - Code architecture & best practices
- **IMPLEMENTATION_CHECKLIST.md** - Verification checklist before deployment

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start dev server on localhost:3000

# Build & Deploy
pnpm build            # Build for production
pnpm start            # Run production build locally

# Linting (if configured)
pnpm lint             # Run ESLint
```

## 📦 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React (if used)
- **Package Manager**: pnpm

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Respects prefers-reduced-motion

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy (automatic on every push)

### Other Platforms
Build: `pnpm build`
Deploy the `.next` folder to your platform of choice.

## 🎯 Key Features Explained

### Centralized Data
All portfolio content is in one file (`data/portfolio.ts`). Components automatically read from this file, so updating content is simple.

### Reusable Components
Components like `SectionContainer`, `SectionHeading`, etc. are reused across sections to maintain consistency and reduce code duplication.

### Type Safety
Full TypeScript implementation means:
- IDE autocomplete works perfectly
- Compile-time error checking
- Self-documenting code
- Easy refactoring

### Clean Architecture
- Components have single responsibility
- Data separated from UI
- Proper folder structure
- Easy to understand and maintain

## 🆘 Need Help?

Each file has detailed comments explaining what it does.

**Quick questions?**
- Check relevant documentation files
- Review component comments
- Look at data structure in `types/index.ts`

## 📈 Next Steps

1. **Customize content** - Edit `data/portfolio.ts`
2. **Add project images** - Upload to `public/projects/`
3. **Test locally** - Run `pnpm dev`
4. **Deploy** - Push to GitHub and deploy to Vercel
5. **Share** - Add to resume, LinkedIn, share with network

## 📄 License

Feel free to use this portfolio for your own projects.

## 🎉 You're All Set!

You now have a professional, production-ready portfolio website. Customize it with your information and you're ready to share with the world!

**Happy customizing! 🚀**

---

**Quick Links:**
- [Vercel](https://vercel.com) - Deploy here
- [Next.js Docs](https://nextjs.org/docs) - Framework docs
- [Tailwind CSS](https://tailwindcss.com) - Styling docs
- [Shadcn/ui](https://ui.shadcn.com) - UI Components
- [OKLCH Color Tool](https://oklch.space) - Color picker
