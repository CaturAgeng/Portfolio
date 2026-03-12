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
      <div className="mx-auto max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center md:text-left">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                {data.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                {data.title}
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {data.subtitle}
            </p>

            {/* Call to Action Button */}
            <div className="pt-4 relative inline-block group">
              <div className='absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 blur-lg rounded-lg opacity-70 group-hover:opacity-100 transition duration-500'></div>
              <Button
                onClick={handleScroll}
                size="lg"
                className="relative rounded-lg px-8 bg-background text-foreground hover:text-white hover:bg-primary transition-all duration-300 hover:cursor-pointer "
              >
                {data.cta}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
              {/* Image Container with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-2xl transform -rotate-3"></div>
              <img
                src="/catur/4.jpg"
                alt={data.name}
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
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
