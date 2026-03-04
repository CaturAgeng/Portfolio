'use client';

import { Button } from '@/components/ui/button';
import { PortfolioContent } from '@/types';

interface HeroSectionProps {
  data: PortfolioContent['hero'];
}

/**
 * Hero section component - the landing section of the portfolio
 * Displays name, title, subtitle and call-to-action button
 */
export function HeroSection({ data }: HeroSectionProps) {
  const handleScroll = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            {data.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            {data.title}
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
          {data.subtitle}
        </p>

        {/* Call to Action Button */}
        <div className="pt-4">
          <Button
            onClick={handleScroll}
            size="lg"
            className="rounded-lg px-8 bg-background border border-foreground hover:text-white hover:bg-primary hover:cursor-pointer"
          >
            {data.cta}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
