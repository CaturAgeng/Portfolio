import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PortfolioContent } from '@/types';

interface ProjectsSectionProps {
  data: PortfolioContent['projects'];
}

/**
 * Projects section component - showcases portfolio projects with descriptions and technologies
 * Uses Card components for consistent project presentation
 */
export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <SectionContainer id="projects">
      <div className="space-y-12">
        {/* Section Title */}
        <SectionHeading title="Featured Projects" />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden card-hover">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">{project.title}</span>
              </div>

              {/* Card Content */}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="pt-4 flex gap-3 flex-wrap">
                  {project.link && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
