import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PortfolioContent } from '@/types';

interface AboutSectionProps {
  data: PortfolioContent['about'];
}

/**
 * About section component - displays personal introduction and background
 */
export function AboutSection({ data }: AboutSectionProps) {
  return (
    <SectionContainer id="about">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Section Title */}
        <SectionHeading title={data.title} />

        {/* Description Paragraphs */}
        <div className="space-y-6">
          {data.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
