import { useState } from 'react';
import { features } from '../../data/siteData';

export function WhyChooseUs() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const toggleFlip = (title: string) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <section id="why-choose-us" className="section bg-brand-warm text-brand-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title text-center text-brand-deep">
            Built Different,<br /> <span className="highlight-text">Driven by Trust</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {features.map(({ title, icon: Icon, copy }) => (
            <div
              key={title}
              data-reveal
              onClick={() => toggleFlip(title)}
              className={`flip-card group h-52 sm:h-56 ${flipped.has(title) ? 'flipped' : ''}`}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-face flip-card-front flex flex-col items-center justify-center gap-3.5 rounded-2xl border border-brand-deep/6 bg-white p-4 text-center shadow-md transition-shadow duration-300 group-hover:shadow-lg">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent/15 to-brand-accent/5 text-brand-accent">
                    <Icon size={26} />
                    <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-brand-accent/20" />
                  </div>
                  <h3 className="text-xs font-bold leading-tight text-brand-deep sm:text-sm">{title}</h3>
                  <div className="h-0.5 w-8 rounded-full bg-brand-accent/25" />
                </div>
                {/* Back */}
                <div className="flip-card-face flip-card-back flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-brand-deep to-brand-primary p-5 text-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-accent/20">
                    <Icon size={16} className="text-brand-accent-light" />
                  </div>
                  <p className="text-xs leading-relaxed text-white/85 sm:text-sm">{copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] font-medium text-brand-muted/60 sm:text-xs">
          Tap any card to learn more
        </p>
      </div>
    </section>
  );
}
