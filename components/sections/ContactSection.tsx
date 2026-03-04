import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PortfolioContent } from '@/types';

interface ContactSectionProps {
  data: PortfolioContent['contact'];
  social: PortfolioContent['social'];
}

/**
 * Contact section component - provides multiple ways to get in touch
 * Displays email, phone, and social media links
 */
export function ContactSection({ data, social }: ContactSectionProps) {
  return (
    <SectionContainer id="contact">
      <div className="max-w-2xl mx-auto space-y-12 text-center">
        {/* Section Title */}
        <SectionHeading title="Get In Touch" align="center" />

        {/* Contact Message */}
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm always interested in hearing about new opportunities and connecting with fellow developers. Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6">
          {/* Email */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Email</p>
            <a
              href={`mailto:${data.email}`}
              className="text-lg font-semibold hover:text-primary transition-colors break-all"
            >
              {data.email}
            </a>
          </div>

          {/* Phone (if available) */}
          {data.phone && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Phone</p>
              <a
                href={`tel:${data.phone}`}
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                {data.phone}
              </a>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="space-y-6 pt-8">
          <p className="text-sm text-muted-foreground">Or connect with me on:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {social.map((link) => (
              <Button
                key={link.id}
                asChild
                variant="outline"
                className="hover:bg-primary hover:text-white transition-colors hover:border-foreground"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
