# Clean Code Practices - Portfolio Website

Portfolio website ini dibangun dengan best practices untuk clean, maintainable, dan reusable code. Dokumentasi ini menjelaskan approach yang digunakan.

## 1. Type Safety (TypeScript)

Semua code menggunakan TypeScript dengan strict type checking.

### ✅ Good
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export function ProjectsSection({ data }: { data: Project[] }) {
  // ...
}
```

### ❌ Avoid
```typescript
export function ProjectsSection({ data }: any) {
  // No type info - harder to maintain
}
```

**Benefits:**
- IDE autocomplete works perfectly
- Catch errors before runtime
- Self-documenting code
- Easy refactoring

---

## 2. Component Composition

Aplikasi dibagi menjadi small, focused components dengan single responsibility.

### Component Hierarchy
```
App (page.tsx)
├── Navigation
├── HeroSection
├── AboutSection
├── SkillsSection
├── ProjectsSection
├── ExperienceSection
├── ContactSection
└── Footer
```

### ✅ Good Structure
```typescript
// HeroSection.tsx - Single responsibility
export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section>
      <h1>{data.name}</h1>
      <p>{data.subtitle}</p>
      <Button>{data.cta}</Button>
    </section>
  );
}
```

### ❌ Avoid
```typescript
// Combining multiple responsibilities
export function HeroAndAbout({ heroData, aboutData }) {
  return (
    <div>
      <Hero {...heroData} />
      <About {...aboutData} />
    </div>
  );
}
```

**Benefits:**
- Easier to test
- Easier to maintain
- Easier to reuse
- Better code readability

---

## 3. Data Centralization

Semua portfolio content disimpan dalam satu file: `data/portfolio.ts`

### ✅ Good Approach
```typescript
// data/portfolio.ts
export const portfolioData: PortfolioContent = {
  hero: { name: '...', title: '...' },
  projects: [{ id: '1', title: '...' }, ...],
  experience: [{ id: '1', company: '...' }, ...],
  // ... all content in one place
};

// components/sections/ProjectsSection.tsx
export function ProjectsSection({ data }: ProjectsSectionProps) {
  return data.map(project => <ProjectCard key={project.id} {...project} />);
}

// app/page.tsx
import { portfolioData } from '@/data/portfolio';
export default function Home() {
  return <ProjectsSection data={portfolioData.projects} />;
}
```

### ❌ Avoid
```typescript
// Scattering data across components
export function ProjectsSection() {
  const projects = [
    { id: '1', title: '...' },
    { id: '2', title: '...' },
    // ... hardcoded in component
  ];
  return projects.map(p => <ProjectCard {...p} />);
}
```

**Benefits:**
- Single source of truth
- Easy to update content
- Content separate from UI logic
- Reusable data across components

---

## 4. Interfaces & Types

Jelas mendefinisikan data structures dengan TypeScript interfaces.

### ✅ Well-Defined Types
```typescript
// types/index.ts
export interface Project {
  id: string;           // Unique identifier
  title: string;        // Project name
  description: string;  // Full description
  shortDescription: string; // Brief summary
  image: string;        // Image path
  technologies: string[]; // Array of tech
  link?: string;        // Optional project URL
  github?: string;      // Optional GitHub
  featured?: boolean;   // Optional flag
}

export interface PortfolioContent {
  hero: { ... };
  about: { ... };
  skills: Skill[];
  projects: Project[];
  // ... all sections typed
}
```

### Benefits
- Compiler catches type errors
- IDE provides autocomplete
- Self-documenting
- Easy to extend

---

## 5. Separation of Concerns

Each file has clear responsibility:

```
components/
├── common/              # Shared utilities
│   ├── Navigation.tsx   # Navigation logic
│   ├── Footer.tsx       # Footer component
│   ├── SectionContainer.tsx # Layout wrapper
│   └── SectionHeading.tsx   # Reusable heading
│
├── sections/            # Page sections
│   ├── HeroSection.tsx  # Hero display
│   ├── AboutSection.tsx # About content
│   └── ProjectsSection.tsx # Projects list
│
└── ui/                  # UI components
    ├── Button.tsx       # Button component
    ├── Card.tsx         # Card component
    └── Badge.tsx        # Badge component

data/
└── portfolio.ts         # Content only (no UI)

types/
└── index.ts            # Type definitions only

hooks/
└── useScrollToSection.ts # Custom logic

app/
├── page.tsx            # Main component assembly
├── layout.tsx          # Root wrapper
└── globals.css         # Global styles
```

**Benefits:**
- Clear structure
- Easy to find things
- Reduced coupling
- Better testability

---

## 6. DRY (Don't Repeat Yourself)

Reusable components menghindari code duplication.

### ✅ Reusable Components
```typescript
// SectionHeading.tsx - Used by multiple sections
export function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <h2>{title}</h2>
      <div className="h-1 w-20 bg-primary rounded-full" />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

// Used in multiple sections
<SectionHeading title="About Me" />
<SectionHeading title="Skills & Technologies" />
<SectionHeading title="Featured Projects" />
```

### ❌ Avoid - Code Duplication
```typescript
// AboutSection.tsx
<div>
  <h2>About Me</h2>
  <div className="h-1 w-20 bg-primary rounded-full" />
</div>

// SkillsSection.tsx
<div>
  <h2>Skills & Technologies</h2>
  <div className="h-1 w-20 bg-primary rounded-full" />
</div>

// ProjectsSection.tsx
<div>
  <h2>Featured Projects</h2>
  <div className="h-1 w-20 bg-primary rounded-full" />
</div>
```

**Benefits:**
- Less code to maintain
- Consistent styling
- Single point of change
- Better performance

---

## 7. Props Over Component State

Components menerima data via props, bukan managing state.

### ✅ Good - Props Based
```typescript
interface HeroSectionProps {
  data: PortfolioContent['hero'];
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <h1>{data.name}</h1>
    <h2>{data.title}</h2>
    <p>{data.subtitle}</p>
  );
}

// Usage
<HeroSection data={portfolioData.hero} />
```

### ❌ Avoid - Internal State
```typescript
export function HeroSection() {
  const [name] = useState('');
  const [title] = useState('');
  // Component managing its own data - harder to test
}
```

**Benefits:**
- Easier to test (pass different data)
- Easier to reuse (works with any data)
- Easier to debug (data flow is clear)
- Better performance (no unnecessary renders)

---

## 8. Custom Hooks for Logic

Reusable logic extracted ke custom hooks.

### ✅ Custom Hook
```typescript
// hooks/useScrollToSection.ts
export function useScrollToSection() {
  return (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

// Usage in Navigation.tsx
const scrollToSection = useScrollToSection();
scrollToSection('projects');
```

**Benefits:**
- Logic reusable across components
- Easier to test
- Cleaner components
- Better organization

---

## 9. Comments & Documentation

Code contains clear comments explaining what and why.

### ✅ Good Comments
```typescript
/**
 * Displays work experience in timeline format
 * Maps over experience array and renders timeline item for each
 */
export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <SectionContainer id="experience" darkBg>
      {/* Timeline rendering */}
      {data.map((experience, index) => (
        <div key={experience.id}>
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 w-3 h-3 bg-primary" />
          
          {/* Timeline content */}
          <div className="space-y-3">
            {/* ... */}
          </div>
        </div>
      ))}
    </SectionContainer>
  );
}
```

### ❌ Avoid - Obvious Comments
```typescript
// Don't comment the obvious
const name = "John"; // Set name to John
const age = 30; // Set age to 30
```

**Benefits:**
- Easier to understand code
- Easier for others (or future you) to maintain
- Explains the "why" not the "what"

---

## 10. Accessibility First

Components built dengan accessibility in mind.

### ✅ Accessible Components
```typescript
// Navigation.tsx
<nav aria-label="Main navigation">
  <button
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
    aria-controls="mobile-nav"
    onKeyDown={handleKeyDown}
  >
    {/* ... */}
  </button>
</nav>

// CSS for focus states
button:focus-visible {
  @apply outline-none ring-2 ring-primary ring-offset-background;
}

// Support for reduced motion preferences
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

**Benefits:**
- Works with screen readers
- Keyboard navigation support
- Better UX for everyone
- Compliant with WCAG standards

---

## 11. Tailwind CSS Best Practices

Using semantic classes dan design tokens.

### ✅ Good Tailwind Usage
```typescript
// Using semantic classes
<div className="flex items-center justify-between gap-4">
  <h2 className="text-4xl font-bold">Title</h2>
  <p className="text-muted-foreground">Subtitle</p>
</div>

// Using design tokens
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Click me
</button>

// Responsive design
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* ... */}
</div>
```

### ❌ Avoid
```typescript
// Arbitrary values instead of scale
<div className="p-[17px] m-[9px]">Bad</div>

// Hardcoded colors instead of tokens
<div className="bg-blue-500 text-white">Bad</div>

// No responsive design
<div className="grid-cols-3">Not responsive</div>
```

**Benefits:**
- Consistent sizing
- Easy theme changes
- Better performance
- Maintains design system

---

## 12. Error Prevention Patterns

Patterns yang mencegah common errors.

### ✅ Safe Patterns
```typescript
// Always type event handlers
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // Type-safe
};

// Type guards for optional values
if (project.github) {
  // Now TypeScript knows github exists
  <a href={project.github}>GitHub</a>
}

// Proper key usage in lists
{data.map((item) => (
  <Component key={item.id} {...item} />
))}
```

### ❌ Avoid
```typescript
// Untyped event handlers
const handleClick = (e) => { ... };

// Unchecked optional access
<a href={project.github}> // Could be undefined!

// Using array index as key
{data.map((item, index) => (
  <Component key={index} {...item} />
))}
```

---

## Testing Your Code

Sampai dengan best practices untuk testing:

### Unit Testing Example
```typescript
// Dapat test components dengan passing different props
describe('ProjectsSection', () => {
  it('renders all projects', () => {
    const projects = [
      { id: '1', title: 'Project 1', ... },
      { id: '2', title: 'Project 2', ... },
    ];
    
    render(<ProjectsSection data={projects} />);
    
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });
});
```

---

## Performance Best Practices

### Optimization Techniques Used

1. **Static Generation**: Next.js default pre-renders pages
2. **Minimal Dependencies**: Only essential packages
3. **CSS-in-JS Optimized**: Using Tailwind (not runtime CSS)
4. **Responsive Images**: Using standard img tags
5. **Semantic HTML**: Better SEO & smaller bundle

### Future Optimization Ideas

- Add Image component for auto-optimization
- Implement lazy loading for below-fold content
- Add service worker for offline support
- Implement API caching strategies

---

## Summary

Portfolio website dibangun dengan:

✅ **Type Safety** - Full TypeScript typing
✅ **Composition** - Small, focused components
✅ **DRY** - Reusable components dan utilities
✅ **Separation of Concerns** - Clear file structure
✅ **Centralized Data** - Single source of truth
✅ **Accessibility** - WCAG compliant
✅ **Documentation** - Code comments dan guides
✅ **Performance** - Optimized for speed
✅ **Maintainability** - Easy to update and extend
✅ **Production Ready** - Best practices implemented

---

## Extending the Code

Ketika menambah fitur baru, ikuti patterns yang sudah ada:

1. Define types di `types/index.ts`
2. Create component di `components/` dengan folder structure yang appropriate
3. Add data ke `data/portfolio.ts`
4. Import dan use di `app/page.tsx`
5. Style dengan Tailwind classes dan design tokens
6. Add comments explaining the purpose

---

Happy coding! Portfolio Anda built dengan solid foundation untuk future growth dan maintenance.
