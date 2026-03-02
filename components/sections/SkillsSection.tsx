import { Badge } from '@/components/ui/badge';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PortfolioContent } from '@/types';

interface SkillsSectionProps {
  data: PortfolioContent['skills'];
}

/**
 * Skills section component - displays technical skills organized by category
 * Uses Badge components for clean skill presentation
 */
export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <SectionContainer id="skills" darkBg>
      <div className="space-y-12">
        {/* Section Title */}
        <SectionHeading title="Skills & Technologies" />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {data.map((skillGroup) => (
            <div key={skillGroup.id} className="space-y-4">
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-foreground">
                {skillGroup.category}
              </h3>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
