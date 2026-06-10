import { motion } from 'framer-motion';
import { ShieldCheck, Gem } from 'lucide-react';
import { images } from '../../data/siteData';

export function About() {
  return (
    <section id="about" className="section bg-white text-brand-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Image side */}
        <div data-reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={images.memory}
              alt="Asia Bus Service premium bus and interior"
              className="aspect-[4/5] w-full object-cover lg:aspect-[5/4]"
              loading="lazy"
            />
            {/* Copper corner accent */}
            <div className="absolute -bottom-1 -left-1 h-24 w-24 rounded-tl-3xl border-b-4 border-l-4 border-brand-accent/50" />
            <div className="absolute -right-1 -top-1 h-24 w-24 rounded-br-3xl border-r-4 border-t-4 border-brand-accent/50" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-brand-deep/6 bg-white/95 p-5 shadow-xl backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10">
                <Gem className="text-brand-accent" size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">Since 2014</p>
                <p className="text-sm font-semibold text-brand-deep">Premium journeys, every mile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div data-reveal>
          <p className="eyebrow">Our Story</p>
          <h2 className="section-title text-brand-deep">
            Built on a decade of <span className="highlight-text">trusted journeys</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-brand-muted">
            Asia Bus Service has been the quiet backbone behind thousands of memorable trips — corporate retreats that ran on time, wedding guests who arrived in comfort, school excursions parents trusted, and pilgrimages families still talk about. We don't just rent buses; we build travel experiences people remember for the right reasons.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'All India Tourist Permit',
              'AC / Non-AC Options',
              'Spacious Reclining Seats',
              'Experienced Professional Drivers',
            ].map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-center gap-3 rounded-2xl border border-brand-deep/8 bg-brand-warm/60 p-4"
              >
                <ShieldCheck className="shrink-0 text-brand-accent" size={20} />
                <span className="font-medium text-brand-deep/85">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-8 flex gap-8 border-t border-brand-deep/8 pt-6">
            {[
              { num: '10+', label: 'Years' },
              { num: '5000+', label: 'Happy Clients' },
              { num: '250+', label: 'Monthly Trips' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-brand-accent">{stat.num}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-brand-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
