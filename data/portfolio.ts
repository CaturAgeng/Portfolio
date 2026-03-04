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
      'I am a passionate full stack developer with a strong background in software quality assurance. With expertise in both frontend and backend technologies, I create web applications that are not only feature-rich but also thoroughly tested and reliable.',
      'My approach combines clean coding principles with comprehensive QA methodologies to deliver products that users can trust. I believe that great software is the intersection of excellent development and rigorous testing.',
      'When I\'m not coding or testing, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.',
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
        'React Query',
        'State Management',
      ],
    },
    {
      id: 'backend',
      category: 'Backend Development',
      items: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'MongoDB',
        'REST API',
        'Authentication',
      ],
    },
    {
      id: 'qa',
      category: 'Quality Assurance',
      items: [
        'Jest',
        'Cypress',
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
        'Docker',
        'CI/CD',
        'AWS',
        'Linux',
        'Agile Methodologies',
      ],
    },
  ],
  projects: [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React frontend, Node.js backend, and comprehensive test coverage.',
      shortDescription: 'Full-stack e-commerce solution with payment integration',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Jest', 'Cypress'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
    },
    {
      id: 'project-2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user authentication, and automated test suite.',
      shortDescription: 'Real-time task management with collaboration features',
      image: '/projects/taskapp.jpg',
      technologies: ['Next.js', 'MongoDB', 'Socket.io', 'TypeScript', 'Playwright'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
    },
    {
      id: 'project-3',
      title: 'Analytics Dashboard',
      description: 'A data visualization dashboard with interactive charts, responsive design, and comprehensive QA testing.',
      shortDescription: 'Interactive analytics and reporting dashboard',
      image: '/projects/analytics.jpg',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL', 'Jest'],
      link: 'https://example.com',
      featured: false,
    },
  ],
  experience: [
    {
      id: 'job-1',
      company: 'Tech Company Inc.',
      position: 'Full Stack Developer & QA Lead',
      duration: {
        start: 'Jan 2023',
        end: 'Present',
      },
      description: 'Lead development and QA efforts for multiple projects. Implemented automated testing pipelines and mentored junior developers.',
      achievements: [
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Developed automated test suite covering 85% of codebase',
        'Mentored 3 junior developers in full stack development',
      ],
    },
    {
      id: 'job-2',
      company: 'Web Solutions Ltd.',
      position: 'Full Stack Developer',
      duration: {
        start: 'Jun 2021',
        end: 'Dec 2022',
      },
      description: 'Developed and maintained multiple web applications. Collaborated with QA team to ensure code quality.',
      achievements: [
        'Built 5+ production web applications',
        'Reduced bug count by 40% through better testing practices',
        'Improved application performance by optimizing database queries',
      ],
    },
    {
      id: 'job-3',
      company: 'StartUp XYZ',
      position: 'Junior Full Stack Developer',
      duration: {
        start: 'Jan 2021',
        end: 'May 2021',
      },
      description: 'Developed features for the main product. Learned full stack development and testing best practices.',
      achievements: [
        'Built user authentication system',
        'Created responsive UI components',
        'Implemented basic test coverage',
      ],
    },
  ],
  contact: {
    email: 'hello@example.com',
    phone: '+1 (555) 123-4567',
  },
  social: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'twitter',
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:hello@example.com',
      icon: 'mail',
    },
  ],
};
