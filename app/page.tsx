import { Navigation } from '@/components/common/Navigation';
import { Footer } from '@/components/common/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection data={portfolioData.hero} />

        {/* About Section */}
        <AboutSection data={portfolioData.about} />

        {/* Skills Section */}
        <SkillsSection data={portfolioData.skills} />

        {/* Projects Section */}
        <ProjectsSection data={portfolioData.projects} />

        {/* Experience Section */}
        <ExperienceSection data={portfolioData.experience} />

        {/* Contact Section */}
        <ContactSection data={portfolioData.contact} social={portfolioData.social} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
