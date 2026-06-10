import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, ArrowRight, Phone } from 'lucide-react';
import { fleet, company } from '../data/siteData';

/* Extended fleet data for the full page */
const allBuses = [
  ...fleet,
  { name: 'Standard Coach', capacity: '50 Seater', type: 'Non AC', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&q=80', amenities: ['Basic seating', 'Budget friendly', 'Short routes'] },
  { name: 'Double Decker', capacity: '60 Seater', type: 'AC', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&q=80', amenities: ['Two levels', 'Panoramic view', 'City tours'] },
  { name: 'AC Pushback', capacity: '40 Seater', type: 'AC', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&q=80', amenities: ['Reclining seats', 'USB charging', 'Long routes'] },
];

export function FleetPage() {
  const [filter, setFilter] = useState<'all' | 'AC' | 'Non AC'>('all');

  const filtered = filter === 'all'
    ? allBuses
    : allBuses.filter((b) => b.type.includes(filter));

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-brand-deep/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep transition-colors hover:text-brand-accent">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <a href="#home" className="text-lg font-bold tracking-tight text-brand-deep sm:text-2xl">
            Asia<span className="text-brand-accent">Bus</span>
          </a>
          <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-brand-deep px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-brand-primary">
            <Phone size={14} /> <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </header>

      {/* Banner */}
      <section className="relative overflow-hidden bg-brand-deep px-6 py-14 text-white sm:px-8 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(193,127,89,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">Our Fleet</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
            Every Bus for{' '}
            <span className="bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent bg-clip-text text-transparent">
              Every Journey
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
            Browse our complete fleet — from mini buses to luxury Volvo coaches.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-[57px] z-30 border-b border-brand-deep/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:px-8">
          {(['all', 'AC', 'Non AC'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === f
                  ? 'bg-brand-deep text-white'
                  : 'bg-brand-warm text-brand-deep/70 hover:bg-brand-deep/10'
              }`}
            >
              {f === 'all' ? 'All Buses' : f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((bus) => (
              <article
                key={bus.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-brand-deep/6 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-accent/8"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={bus.image} alt={`${bus.name} fleet`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-brand-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                    {bus.type}
                  </span>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-xl font-bold text-white">{bus.name}</h3>
                    <p className="flex items-center gap-1.5 text-sm text-brand-accent-light">
                      <Users size={14} /> {bus.capacity}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="grid gap-2">
                    {bus.amenities.map((a) => (
                      <span key={a} className="flex items-center gap-2 text-sm text-brand-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                        {a}
                      </span>
                    ))}
                  </div>
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-deep px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary"
                  >
                    Enquire Now <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-brand-muted">Showing {filtered.length} of {allBuses.length} buses</p>
        </div>
      </section>
    </div>
  );
}
