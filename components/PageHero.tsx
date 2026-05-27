import { cn } from '@/lib/utils';

interface PageHeroProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export default function PageHero({
  label,
  title,
  titleHighlight,
  subtitle,
  dark = true,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative pt-36 pb-20 px-4 md:px-8',
        !dark && 'bg-[#F7F7F7]',
        className
      )}
      style={dark ? { background: 'linear-gradient(135deg, #09090B 0%, #10191D 100%)' } : undefined}
    >
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      {dark && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(67,213,233,0.07) 0%, rgba(5,5,5,0) 70%)' }} />
      )}
      <div className="relative max-w-5xl mx-auto text-center">
        {label && (
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[#43D5E9]" />
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-[#43D5E9]">
              {label}
            </span>
            <span className="w-6 h-px bg-[#43D5E9]" />
          </div>
        )}
        <h1
          className={cn(
            'font-heading font-bold uppercase tracking-tight leading-none mb-5 pb-2',
            dark ? 'text-white' : 'text-[#111111]'
          )}
          style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
        >
          {titleHighlight ? (
            <>
              {title}{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #43D5E9, #7EF3FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {titleHighlight}
              </span>
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <p
            className={cn(
              'font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed',
              dark ? 'text-[#B8B8B8]' : 'text-[#6B7280]'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
