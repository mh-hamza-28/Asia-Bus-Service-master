import { features } from '../../data/siteData';

export function WhyChooseUs() {
  /* Duplicate features for seamless infinite loop */
  const looped = [...features, ...features];

  return (
    <section id="why-choose-us" className="bg-brand-warm py-10 text-brand-deep sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="right" className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title text-center text-brand-deep">
            Built Different,<br /> <span className="highlight-text">Driven by Trust</span>
          </h2>
        </div>
      </div>

      {/* Horizontal auto-scrolling marquee */}
      <div data-reveal="scale" className="mt-8 overflow-hidden sm:mt-10">
        <div className="features-marquee">
          {looped.map(({ title, icon: Icon, copy }, i) => (
            <div
              key={`${title}-${i}`}
              className="feature-pill flex w-[220px] shrink-0 items-start gap-3 rounded-2xl border border-brand-deep/6 bg-white px-4 py-3.5 shadow-sm sm:w-[260px] sm:px-5 sm:py-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent/15 to-brand-accent/5 text-brand-accent sm:h-11 sm:w-11">
                <Icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs font-bold text-brand-deep sm:text-sm">{title}</h3>
                <p className="mt-1 text-[11px] leading-5 text-brand-muted sm:text-xs">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
