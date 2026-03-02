import { portfolioData } from '@/data/portfolio';

/**
 * Footer component displaying social links and copyright information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {portfolioData.social.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                aria-label={social.name}
              >
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-secondary-foreground/70">
            <p>© {currentYear} {portfolioData.hero.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
