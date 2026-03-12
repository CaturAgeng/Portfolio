// Portfolio Types
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string | string[]; // Support single image or array of images for carousel
  jobdesk: string[];
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: {
    start: string;
    end: string;
  };
  description: string;
  achievements?: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioContent {
  hero: {
    name: string;
    title: string;
    image: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string[];
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  contact: {
    email: string;
    phone?: string;
  };
  social: SocialLink[];
}
