// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { SectionContainer } from '@/components/common/SectionContainer';
// import { SectionHeading } from '@/components/common/SectionHeading';
// import { PortfolioContent } from '@/types';
// import Image from 'next/image';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// interface ProjectsSectionProps {
//   data: PortfolioContent['projects'];
// }

// /**
//  * Projects section component - showcases portfolio projects with descriptions and technologies
//  * Uses Card components for consistent project presentation
//  */
// export function ProjectsSection({ data }: ProjectsSectionProps) {
//   return (
//     <SectionContainer id="projects">
//       <div className="space-y-12">
//         {/* Section Title */}
//         <SectionHeading title="Featured Projects" />

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 gap-8  ">
//           {data.map((project) => (
//             <Card key={project.id} className="flex flex-col overflow-hidden card-hover bg-orange-900/10 hover:bg-primary/20 transition-colors duration-300">
//               {/* Project Images Carousel */}
//               <div className="h-96 overflow-hidden">
//                 <Carousel className="w-full h-full">
//                   <CarouselContent>
//                     {(Array.isArray(project.image) ? project.image : [project.image]).map((imgSrc, index) => (
//                       <CarouselItem key={index}>
//                         <Image
//                           src={imgSrc}
//                           alt={`${project.title} - Image ${index + 1}`}
//                           width={400}
//                           height={400}
//                           className="w-full h-96 object-cover"
//                         />
//                       </CarouselItem>
//                     ))}
//                   </CarouselContent>
//                   <CarouselPrevious />
//                   <CarouselNext />
//                 </Carousel>
//               </div>

//               {/* Card Content */}
//               <CardHeader>
//                 <CardTitle className="text-xl">{project.title}</CardTitle>
//                 <CardDescription className="text-base">
//                   {project.shortDescription}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="flex-1 space-y-4">
//                 {/* Description */}
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Job Description */}
//                 <div className="space-y-2">
//                   <p className="text-xs font-semibold text-foreground">Job Description:</p>
//                   <p className="text-sm text-muted-foreground flex flex-col gap-1">
//                     {project.jobdesk.map((item, index) => (
//                       <span key={index}>{item}</span>
//                     ))}
//                   </p>
//                 </div>

//                 {/* Technologies */}
//                 <div className="space-y-2">
//                   <p className="text-xs font-semibold text-foreground">Technologies:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <Badge key={tech} variant="outline" className="text-xs">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Links */}
//                 <div className="pt-4 flex gap-3 flex-wrap">
//                   {project.link && (
//                     <Button asChild variant="outline" size="sm" className='hover:bg-primary hover:text-primary-foreground hover:text-white'>
//                       <a href={project.link} target="_blank" rel="noopener noreferrer">
//                         View Project
//                       </a>
//                     </Button>
//                   )}
//                   {project.github && (
//                     <Button asChild variant="outline" size="sm" className='hover:bg-primary hover:text-primary-foreground hover:text-white'>
//                       <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         GitHub
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </SectionContainer>
//   );
// }


'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PortfolioContent } from '@/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ProjectsSectionProps {
  data: PortfolioContent['projects'];
}

/**
 * Projects section component - showcases portfolio projects with descriptions and technologies
 * Uses Card components with carousel support for multiple project images
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
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden text-white card-hover bg-primary/90 hover:bg-primary/20 hover:text-foreground transition-colors duration-300"
            >
              {/* Project Images Carousel */}
              <div className="h-96 overflow-hidden">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {(Array.isArray(project.image) ? project.image : [project.image]).map((imgSrc, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={imgSrc}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-96 object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg rounded-full" />
                  <CarouselNext className="right-4 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg rounded-full" />
                </Carousel>
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

                {/* Job Description */}
                {project.jobdesk && project.jobdesk.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Job Description:</p>
                    <p className="text-sm text-muted-foreground flex flex-col gap-1">
                      {project.jobdesk.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </p>
                  </div>
                )}

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
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground hover:text-white"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground hover:text-white"
                    >
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

