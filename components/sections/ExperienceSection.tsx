import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PortfolioContent } from '@/types';

interface ExperienceSectionProps {
  data: PortfolioContent['experience'];
}

/**
 * Experience section component - displays work history in a timeline format
 */
export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <SectionContainer id="experience" darkBg>
      <div className="space-y-12">
        {/* Section Title */}
        <SectionHeading title="Work Experience" />

        {/* Timeline */}
        <div className="space-y-8">
          {data.map((experience, index) => (
            <div key={experience.id} className="relative pl-8 pb-8">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full transform -translate-x-1" />

              {/* Timeline Line (except for last item) */}
              {index !== data.length - 1 && (
                <div className="absolute left-1 top-6 w-0.5 h-full bg-border" />
              )}

              {/* Experience Card */}
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {experience.position}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {experience.company}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {experience.duration.start} - {experience.duration.end}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <ul className="space-y-2 pt-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-primary font-bold">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
