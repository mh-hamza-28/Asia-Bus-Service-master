import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, SlidersHorizontal, MapPin, Phone } from 'lucide-react';
import { services, company } from '../data/siteData';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

export function AllServices() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('default');

  const filtered = useMemo(() => {
    let result = services.filter(
      (s) =>
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.copy.toLowerCase().includes(search.toLowerCase()) ||
        s.destination.toLowerCase().includes(search.toLowerCase())
    );

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [search, sort]);

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-brand-deep/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep transition-colors hover:text-brand-accent"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <a href="#home" className="text-lg font-bold tracking-tight text-brand-deep sm:text-2xl">
            Asia<span className="text-brand-accent">Bus</span>
          </a>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-deep px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-brand-primary"
          >
            <Phone size={14} /> <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-brand-deep px-6 py-14 text-white sm:px-8 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(193,127,89,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">All Services</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
            Every Journey,{' '}
            <span className="bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent bg-clip-text text-transparent">
              Covered
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
            Browse all {services.length} services. Search by destination, filter by price, and book the perfect bus for your trip.
          </p>
        </div>
      </section>

      {/* Search & Sort Bar */}
      <section className="sticky top-[57px] z-30 border-b border-brand-deep/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted" />
            <input
              type="text"
              placeholder="Search by service, destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-brand-deep/10 bg-brand-light py-2.5 pl-10 pr-4 text-sm font-medium text-brand-deep outline-none transition placeholder:text-brand-muted/50 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <SlidersHorizontal size={14} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="appearance-none rounded-xl border border-brand-deep/10 bg-brand-light py-2.5 pl-9 pr-10 text-sm font-medium text-brand-deep outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
            >
              <option value="default">Default Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-brand-deep">No services found</p>
              <p className="mt-2 text-sm text-brand-muted">Try a different search term or clear filters.</p>
              <button
                onClick={() => { setSearch(''); setSort('default'); }}
                className="mt-4 rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-white"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(({ title, icon: Icon, image, copy, priceLabel, destination }) => (
                <article
                  key={title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-brand-deep/6 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-accent/8"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={`${title} by Asia Bus Service`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-transparent to-transparent" />
                    {/* Price */}
                    <div className="absolute bottom-3 left-4">
                      <p className="text-[9px] font-semibold uppercase tracking-widest text-white/60">Starting from</p>
                      <p className="text-xl font-extrabold text-brand-accent-light">{priceLabel}</p>
                    </div>
                    {/* Icon badge */}
                    <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
                      <Icon className="text-brand-accent" size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold text-brand-deep">{title}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-brand-accent">
                      <MapPin size={12} /> {destination}
                    </p>
                    <p className="mt-2.5 flex-1 text-sm leading-6 text-brand-muted">{copy}</p>

                    <a
                      href={company.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-deep px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary"
                    >
                      Book Now <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Results count */}
          <p className="mt-6 text-center text-xs text-brand-muted">
            Showing {filtered.length} of {services.length} services
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-brand-deep/5 bg-brand-warm px-6 py-12 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Need Help Choosing?</p>
        <h2 className="mt-2 text-2xl font-extrabold text-brand-deep sm:text-3xl">
          Call us for a custom quote
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-brand-muted">
          Our team will help you find the perfect bus for your route, group size and budget.
        </p>
        <a
          href={company.phoneHref}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary"
        >
          <Phone size={16} /> {company.phone}
        </a>
      </section>
    </div>
  );
}
