import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darkBg?: boolean;
}

/**
 * Reusable section container component that provides consistent spacing and styling
 * Used by all portfolio sections for visual consistency
 */
export function SectionContainer({
  children,
  className,
  id,
  darkBg = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full py-16 md:py-24 lg:py-32',
        darkBg ? 'bg-secondary text-secondary-foreground' : 'bg-background text-foreground',
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
