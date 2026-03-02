# Getting Started - Portfolio Website

Selamat datang! Panduan ini akan memandu Anda step by step untuk mulai menggunakan portfolio website Anda.

## 🎯 The Plan (5 Simple Steps)

1. **Start the dev server** (2 minutes)
2. **Edit your information** (30 minutes)
3. **Add project images** (10 minutes)
4. **Test everything** (10 minutes)
5. **Deploy** (5 minutes)

**Total time: ~1 hour to have your portfolio live!**

---

## Step 1: Start Development Server (2 minutes)

### A. Install Dependencies (First time only)
```bash
cd your-portfolio-folder
pnpm install
```

### B. Run Development Server
```bash
pnpm dev
```

You should see:
```
> next dev
  ▲ Next.js 16.x
  - Local:        http://localhost:3000
```

### C. Open in Browser
Open your browser and go to: **http://localhost:3000**

You should see a portfolio website with placeholder content.

---

## Step 2: Edit Your Information (30 minutes)

### WHERE TO EDIT:
**File**: `data/portfolio.ts` (This is the MAIN file you'll edit)

### WHAT TO EDIT:

#### 2.1 Update Hero Section (Your Name & Title)
```typescript
// Line ~1-6
hero: {
  name: 'REPLACE WITH YOUR NAME',              // <- Change this
  title: 'Replace with Your Job Title',        // <- Change this
  subtitle: 'Replace with your bio here...',   // <- Change this
  cta: 'View My Work',
},
```

**Example:**
```typescript
hero: {
  name: 'John Developer',
  title: 'Full Stack Developer & QA Engineer',
  subtitle: 'I build robust web applications and ensure quality through comprehensive testing.',
  cta: 'View My Work',
},
```

#### 2.2 Update About Section (Your Bio)
```typescript
// Line ~10-16
about: {
  title: 'About Me',
  description: [
    'Replace this first paragraph with your bio...',
    'Replace this second paragraph with your background...',
    'Replace this third paragraph with what you love doing...',
  ],
},
```

**Example:**
```typescript
about: {
  title: 'About Me',
  description: [
    'I am a passionate full stack developer with 5+ years of experience building web applications. I specialize in creating clean, maintainable code and comprehensive test coverage.',
    'My journey started with a degree in Computer Science. I\'ve worked with various companies from startups to enterprises, always focusing on delivering quality software.',
    'When I\'m not coding, you can find me exploring new technologies, contributing to open source, or mentoring junior developers.',
  ],
},
```

#### 2.3 Update Skills
```typescript
// Line ~18-45
skills: [
  {
    id: 'frontend',
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'], // <- Update with YOUR skills
  },
  {
    id: 'backend',
    category: 'Backend Development',
    items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'], // <- Update with YOUR skills
  },
  {
    id: 'qa',
    category: 'Quality Assurance',
    items: ['Jest', 'Cypress', 'Playwright', 'Test Automation'], // <- Update with YOUR skills
  },
  {
    id: 'tools',
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux', 'Agile'], // <- Update with YOUR skills
  },
];
```

#### 2.4 Update Projects
```typescript
// Line ~47-80
projects: [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',           // <- Change project name
    description: 'A full-stack...',         // <- Change description
    shortDescription: 'Short desc',         // <- Keep it short
    image: '/projects/ecommerce.jpg',       // <- You'll add image later
    technologies: ['React', 'Node.js'],     // <- Your tech stack
    link: 'https://project-url.com',        // <- Your project URL
    github: 'https://github.com/you/repo',  // <- Your GitHub URL
    featured: true,
  },
  // Add more projects here (3-5 is good)
];
```

**TIP**: Replace the existing projects one by one with YOUR projects.

#### 2.5 Update Experience
```typescript
// Line ~82-120
experience: [
  {
    id: 'job-1',
    company: 'Your Company Name',           // <- Change this
    position: 'Your Job Title',             // <- Change this
    duration: {
      start: 'Jan 2023',
      end: 'Present',
    },
    description: 'What you did at this job...', // <- Change this
    achievements: [
      'Achievement 1',                       // <- Your achievements
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // Add more jobs (most recent first)
];
```

#### 2.6 Update Contact Info
```typescript
// Line ~122-125
contact: {
  email: 'your.email@example.com',          // <- Change this
  phone: '+1 (555) 123-4567',              // <- Change this (optional)
},
```

#### 2.7 Update Social Links
```typescript
// Line ~127-160
social: [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME',  // <- Change this
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/YOUR_NAME',  // <- Change this
    icon: 'linkedin',
  },
  // ... update more social links
];
```

### ✅ Checklist for Step 2:
- [ ] Updated hero.name, hero.title, hero.subtitle
- [ ] Updated about.description (3 paragraphs)
- [ ] Updated 4 skill categories
- [ ] Added at least 3 projects
- [ ] Added work experience
- [ ] Updated contact email
- [ ] Updated social links

---

## Step 3: Add Project Images (10 minutes)

### A. Create Folder
Create a new folder: `public/projects/`

### B. Add Images
1. Take screenshots of your projects (or use existing images)
2. Save them as JPG or PNG
3. Put them in `public/projects/` folder

**Example filenames:**
- `ecommerce-platform.jpg`
- `task-management-app.jpg`
- `analytics-dashboard.jpg`

### C. Update Image Paths
In `data/portfolio.ts`, update the `image` path for each project:

```typescript
projects: [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: '...',
    shortDescription: '...',
    image: '/projects/ecommerce-platform.jpg',  // <- Update this path
    technologies: [...],
    // ...
  },
  // ... more projects
];
```

### ✅ Checklist for Step 3:
- [ ] Created `public/projects/` folder
- [ ] Added project images
- [ ] Updated image paths in `data/portfolio.ts`

---

## Step 4: Test Everything (10 minutes)

### A. Check in Browser
Go to http://localhost:3000 and verify:

- [ ] Your name appears at the top
- [ ] Your about section shows
- [ ] Skills are displayed correctly
- [ ] Projects show with descriptions
- [ ] Experience timeline looks good
- [ ] Contact section has your email
- [ ] Social links are correct

### B. Test on Mobile
1. Open DevTools (Press F12)
2. Click responsive device icon
3. Select iPhone or tablet
4. Check that everything looks good on mobile

### C. Test Dark Mode
1. Check your system dark mode setting
2. Switch between light and dark mode
3. Verify colors look good in both modes

### D. Test Navigation
1. Click navigation menu items
2. Verify smooth scrolling works
3. Test mobile menu (hamburger icon)

### ✅ Checklist for Step 4:
- [ ] All content displays correctly
- [ ] Mobile layout looks good
- [ ] Dark mode works
- [ ] Navigation works
- [ ] All links are correct

---

## Step 5: Deploy (5 minutes)

### Option A: Deploy to Vercel (Easiest)

#### 1. Create GitHub Account (if you don't have one)
Go to https://github.com/signup

#### 2. Create a Repository
1. Click "New repository"
2. Name it `portfolio` (or any name)
3. Add description (optional)
4. Click "Create repository"

#### 3. Push Your Code
Follow GitHub's instructions to push your code.

Or use these commands:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

#### 4. Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" and create account
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Wait ~2 minutes for deployment
7. Visit your live URL!

### Option B: Deploy to Netlify
1. Go to https://netlify.com
2. Click "Connect to Git"
3. Select GitHub and your repository
4. Build command: `pnpm build`
5. Publish directory: `.next`
6. Click "Deploy"

### Option C: Deploy Manually
```bash
# Build for production
pnpm build

# Test production build
pnpm start
```

Then upload the `.next` folder to any Node.js hosting.

### ✅ Checklist for Step 5:
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel (or Netlify)
- [ ] Live URL accessible
- [ ] Portfolio works on live URL

---

## 🎉 Success! Your Portfolio is Live!

Congratulations! Your portfolio is now live on the internet. 

### Next: Share With the World

1. Add to your resume
2. Share on LinkedIn
3. Share with your network
4. Email to potential employers
5. Add to your email signature

---

## 🆘 Troubleshooting

### Port 3000 is Already in Use
```bash
# Use a different port
pnpm dev -- -p 3001
```
Then visit http://localhost:3001

### Changes Not Appearing
1. Save the file
2. Browser auto-refreshes (should see it immediately)
3. If not, hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)

### Images Not Showing
1. Check image is in `public/projects/` folder
2. Check image path is correct in `data/portfolio.ts`
3. Check image filename has no spaces or special characters
4. Try `.jpg` or `.png` format

### Build Errors
1. Make sure all imports are correct
2. Check for typos in `data/portfolio.ts`
3. Ensure all files are saved
4. Delete `node_modules` and run `pnpm install` again

### Still Having Issues?
Check the detailed documentation:
- **QUICK_START.md** - Quick guide
- **SETUP_INSTRUCTIONS.md** - Detailed setup
- **PORTFOLIO_GUIDE.md** - Customization help

---

## 📚 Documentation Reference

| Document | Purpose |
|----------|---------|
| **README.md** | Project overview |
| **QUICK_START.md** | Quick 5-minute guide |
| **SETUP_INSTRUCTIONS.md** | Complete setup guide |
| **PORTFOLIO_GUIDE.md** | Detailed customization |
| **CLEAN_CODE_PRACTICES.md** | How code is organized |
| **IMPLEMENTATION_CHECKLIST.md** | Pre-launch checklist |
| **PROJECT_SUMMARY.md** | What was built |

---

## 📋 Quick Reference

**Main file to edit**: `data/portfolio.ts`

**Sections**:
- Hero → `hero` object
- About → `about` object
- Skills → `skills` array
- Projects → `projects` array
- Experience → `experience` array
- Contact → `contact` object
- Social → `social` array

**Commands**:
- Start: `pnpm dev`
- Build: `pnpm build`
- Start production: `pnpm start`

**Folders**:
- Components: `components/`
- Data: `data/portfolio.ts`
- Public files: `public/`
- Styles: `app/globals.css`

---

## ✨ Tips for Success

1. ✅ **Be specific** - Describe what your projects actually do
2. ✅ **Use real examples** - Don't use Lorem ipsum
3. ✅ **Add project images** - Screenshots make it better
4. ✅ **Keep it updated** - Add new projects regularly
5. ✅ **Proofread** - Check for typos
6. ✅ **Test on mobile** - Make sure it looks good everywhere
7. ✅ **Share** - Tell people about your portfolio

---

## 🚀 You're All Set!

You now have:
- ✅ A professional portfolio website
- ✅ All code explained and documented
- ✅ Live on the internet
- ✅ Ready to impress

**Congratulations! Now go share your portfolio with the world! 🎉**

---

**Questions? Check the other documentation files or look at the code comments.**

**Happy building! 💪**
