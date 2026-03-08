import { PortfolioContent } from '@/types';

export const portfolioData: PortfolioContent = {
  hero: {
    name: 'Catur Ageng Pinaringan',
    title: 'Software Developer & QA Engineer',
    subtitle: 'Building robust web applications with clean code and comprehensive testing practices. Passionate about creating seamless user experiences backed by quality assurance.',
    cta: 'View My Work',
  },
  about: {
    title: 'About Me',
    description: [
      'Someone who wants to grow with a great passion for software development, product development, and development quality.',
      'I am also excited to be challenged with various projects in an agile environment and to upskill to the next level.',
      'Graduated from the Adisutjipto Institute of Aerospace Technology and graduated from the RevoU Full Stack Software Engineer Program with proficient scores.',
    ],
  },
  skills: [
    {
      id: 'frontend',
      category: 'Frontend Development',
      items: [
        'React',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'ShadCn/ui',
        'Vite',
      ],
    },
    {
      id: 'backend',
      category: 'Backend Development',
      items: [
        'Node.js',
        'Python',
        'PostgreSQL',
        'MongoDB',
        'Supabase',
        'Authentication',
      ],
    },
    {
      id: 'qa',
      category: 'Quality Assurance',
      items: [
        'Postman',
        'Playwright',
        'Test Automation',
        'Manual Testing',
        'Bug Tracking',
      ],
    },
    {
      id: 'tools',
      category: 'Tools & DevOps',
      items: [
        'Git',
        'GitHub',
        'CI/CD',
        'Vercel',
        'Netlify',
        'Jira',
      ],
    },
  ],
  projects: [
    {
      id: 'project-1',
      title: 'BeanHub POS App',
      description: 'BeanHub is a point of sale (POS) and inventory management application specifically designed to meet the needs of coffee shop owners in Wonosobo.',
      shortDescription: 'Frontend',
      image: ['/projects/BeanHub/logo.png', '/projects/BeanHub/home-page.png', '/projects/BeanHub/menu-populer.png', '/projects/BeanHub/stok-menu.png'], // Example of multiple images for carousel
      jobdesk: [
        '+ Created a Dashboard page by adding revenue charts and shortcuts to popular menu pages and low stock items.', 
        '+ Created a popular menu page based on the Figma provided.'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Vercel'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
    },
    {
      id: 'project-2',
      title: 'SaleMate POS App',
      description: 'SaleMate is a RESTful API designed to empower local businesses by providing comprehensive Inventory Management and Point of Sales (POS) solutions. Our mission is to support local businesses in growing and managing their assets with ease, while also enhancing their online presence, automating marketing efforts, and offering customer relationship management (CRM) tools tailored specifically to their needs.',
      shortDescription: 'Frontend',
      image: ['/projects/SaleMate/SaleMate-Login.png', '/projects/SaleMate/SaleMate-Dashboard.png', '/projects/SaleMate/SaleMate-API-Doc.jpg'], // Example of multiple images for carousel // Placeholder image until SaleMate images are added
      jobdesk: [
        '+ Created a GitHub repository for the Frontend team.', 
        '+ Built Tax and Promo pages according to Figma', 
        '+ Deployed a completed Frontend project using Vercel.'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Vercel'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
    },
  ],
  experience: [
    {
      id: 'job-1',
      company: 'CV. Eka Dina Nugraha',
      position: 'IT Support & CSO',
      duration: {
        start: 'July 2025',
        end: 'November 2025',
      },
      description: 'Resolving IT problems experienced by users and supporting the CSO division in interacting with customers both offline and online.',
      achievements: [
        'Ensured that all computer devices were 100% functional.',
        'Created a LAN network.',
        'Reinstalled problematic devices, such as reinstalling Windows and printers.',
        'Established communication with customers both online and offline.',
      ],
    },
    {
      id: 'job-2',
      company: 'RevoU Associate',
      position: 'Frontend Engineer',
      duration: {
        start: 'May 2024',
        end: 'September 2024',
      },
      description: 'Developed various applications according to the PRD provided by the Product Manager. Collaborate with the Backend Engineering team to ensure the application runs properly.',
      achievements: [
        'Built a frontend display based on the PRD provided by the Product Manager.',
        'Implemented the features that must be available in the application must be 100% in accordance with the existing PRD.',
        'Improved and added features that are needed in the application, in accordance with UI/UX.',
      ],
    },
  ],
  contact: {
    email: 'caturageng023@gmail.com',
    phone: '0812-2851-4551',
  },
  social: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/CaturAgeng',
      icon: 'github',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/catur-ageng-3aaa54237/',
      icon: 'linkedin',
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:caturageng023@gmail.com',
      icon: 'mail',
    },
  ],
};
