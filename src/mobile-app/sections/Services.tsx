import { ArrowRight, Users, MapPin, Clock3 } from 'lucide-react';
import { services } from '../../data/siteData';
import { Link } from 'react-router-dom';

type ServicesProps = {
  onBook: () => void;
};

/* Top 3 deals with pricing & route info — 2x2 grid with View More in 4th slot */
const topDeals = [
  {
    serviceIndex: 0,
    destination: 'Lucknow → Varanasi',
    price: '₹18,000',
    priceNote: 'from',
    seats: '45-Seater',
    type: 'AC Luxury',
    duration: '6-7 hrs',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
  },
  {
    serviceIndex: 2,
    destination: 'Lucknow → Agra',
    price: '₹22,000',
    priceNote: 'from',
    seats: '49-Seater',
    type: 'Volvo AC',
    duration: '5-6 hrs',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  },
  {
    serviceIndex: 4,
    destination: 'Lucknow → Ayodhya',
    price: '₹12,000',
    priceNote: 'from',
    seats: '32-Seater',
    type: 'AC Mini',
    duration: '3-4 hrs',
    image: 'https://images.unsplash.com/photo-1609766815686-b56f35df090e?w=800&q=80',
  },
];

export function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="section bg-white text-brand-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 sm:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-title text-center text-brand-deep">
            Top Deals,<br className="sm:hidden" /> <span className="highlight-text">Best Journeys</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-brand-muted sm:mt-5 sm:text-base sm:leading-8">
            Handpicked routes with premium coaches at competitive prices.
          </p>
        </div>

        {/* Mobile: 2 per row, 3 cards + View More in 4th slot */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {topDeals.map(({ serviceIndex, destination, price, priceNote, seats, type, duration, image }, i) => {
            const service = services[serviceIndex];
            return (
              <article
                key={destination}
                data-reveal
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-deep/6 bg-brand-light shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/10 sm:rounded-3xl sm:hover:-translate-y-2"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top Deal badge */}
                <span className="absolute left-2 top-2 z-10 rounded-full bg-brand-accent px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white shadow-lg sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[10px]">
                  Top Deal
                </span>

                {/* Image */}
                <div className="relative h-32 overflow-hidden sm:h-52">
                  <img
                    src={image}
                    alt={`${destination} bus service by Asia Bus Service`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
                  {/* Price tag on image */}
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                    <p className="text-[7px] font-semibold uppercase tracking-widest text-white/60 sm:text-[9px]">{priceNote}</p>
                    <p className="text-base font-extrabold text-brand-accent-light sm:text-2xl">{price}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <h3 className="text-sm font-bold text-brand-deep sm:text-lg">{service.title}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-brand-accent sm:mt-1 sm:gap-1.5 sm:text-sm">
                    <MapPin size={11} className="sm:size-[14px]" /> <span className="truncate">{destination}</span>
                  </p>

                  {/* Details row */}
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-brand-muted sm:mt-3 sm:gap-3 sm:text-xs">
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <Users size={10} className="text-brand-accent sm:size-[13px]" /> {seats}
                    </span>
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <Clock3 size={10} className="text-brand-accent sm:size-[13px]" /> {duration}
                    </span>
                  </div>

                  <span className="mt-1.5 self-start rounded-full bg-brand-accent/10 px-2 py-0.5 text-[9px] font-semibold text-brand-accent sm:mt-3 sm:px-2.5 sm:py-0.5 sm:text-[10px]">
                    {type}
                  </span>

                  <p className="mt-2 hidden flex-1 text-sm leading-6 text-brand-muted sm:mt-3 sm:block">{service.copy}</p>

                  <button
                    onClick={onBook}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-brand-deep px-3 py-2 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary sm:mt-4 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-xs"
                  >
                    Book This Trip <ArrowRight size={12} className="transition-transform group-hover:translate-x-1 sm:size-[14px]" />
                  </button>
                </div>

                {/* Bottom accent bar */}
                <div className="h-0.5 w-full bg-gradient-to-r from-brand-accent/0 via-brand-accent/60 to-brand-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:h-1" />
              </article>
            );
          })}

          {/* View More — occupies the 4th card slot in the 2x2 grid */}
          <Link
            to="/services"
            data-reveal
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-brand-deep/15 bg-brand-light p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg sm:rounded-3xl sm:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 transition-colors group-hover:bg-brand-accent/20 sm:h-14 sm:w-14">
              <ArrowRight size={22} className="text-brand-accent transition-transform group-hover:translate-x-1 sm:size-[26px]" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-brand-deep sm:text-base">View More</p>
              <p className="mt-0.5 text-[10px] text-brand-muted sm:text-xs">All Services</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
