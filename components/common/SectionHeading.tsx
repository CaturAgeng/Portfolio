import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Reusable section heading component
 * Displays section title with optional subtitle and decorative underline
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-2',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <div
        className={cn(
          'h-1 w-20 bg-primary rounded-full',
          align === 'center' && 'mx-auto'
        )}
      />
      {subtitle && (
        <p className="text-lg text-muted-foreground pt-2">{subtitle}</p>
      )}
    </div>
  );
}
