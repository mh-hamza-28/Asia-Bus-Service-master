import { ArrowRight, Users, MapPin, Clock3 } from 'lucide-react';
import { services } from '../../data/siteData';
import { Link } from 'react-router-dom';

type ServicesProps = {
  onBook: () => void;
};

/* Top 3 deals with pricing & route info */
const topDeals = [
  {
    serviceIndex: 0,
    destination: 'Lucknow → Varanasi',
    price: '₹18,000',
    priceNote: 'starting from',
    seats: '45-Seater',
    type: 'AC Luxury Coach',
    duration: '6-7 hrs',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
  },
  {
    serviceIndex: 2,
    destination: 'Lucknow → Agra (Taj Mahal)',
    price: '₹22,000',
    priceNote: 'starting from',
    seats: '49-Seater',
    type: 'Volvo AC',
    duration: '5-6 hrs',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  },
  {
    serviceIndex: 4,
    destination: 'Lucknow → Ayodhya',
    price: '₹12,000',
    priceNote: 'starting from',
    seats: '32-Seater',
    type: 'AC Mini Bus',
    duration: '3-4 hrs',
    image: 'https://images.unsplash.com/photo-1609766815686-b56f35df090e?w=800&q=80',
  },
];

export function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="section bg-white text-brand-deep">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div data-reveal="right" className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-title text-center text-brand-deep">
            Top Deals,<br className="sm:hidden" /> <span className="highlight-text">Best Journeys</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full shimmer-accent" />
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-brand-muted">
            Handpicked routes with premium coaches at competitive prices. Book your next trip today.
          </p>
        </div>

        {/* Top Deals Cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {topDeals.map(({ serviceIndex, destination, price, priceNote, seats, type, duration, image }, i) => {
            const service = services[serviceIndex];
            return (
              <div key={destination} className="card-3d">
                <article
                  className="card-3d-inner group relative flex flex-col overflow-hidden rounded-3xl border border-brand-deep/6 bg-brand-light shadow-sm"
                >
                  {/* Top Deal badge */}
                  <span className="deal-badge animate-float-pulse">Top Deal</span>

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={image}
                      alt={`${destination} bus service by Asia Bus Service`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
                    {/* Price tag on image */}
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[9px] font-semibold uppercase tracking-widest text-white/60">{priceNote}</p>
                      <p className="text-2xl font-extrabold text-brand-accent-light">{price}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-brand-deep">{service.title}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
                      <MapPin size={14} /> {destination}
                    </p>

                    {/* Details row */}
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-brand-muted">
                      <span className="flex items-center gap-1">
                        <Users size={13} className="text-brand-accent" /> {seats}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock3 size={13} className="text-brand-accent" /> {duration}
                      </span>
                      <span className="rounded-full bg-brand-accent/10 px-2.5 py-0.5 text-[10px] font-semibold text-brand-accent">
                        {type}
                      </span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-6 text-brand-muted">{service.copy}</p>

                    <button
                      onClick={onBook}
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-deep px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary"
                    >
                      Book This Trip <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Bottom shimmer accent bar */}
                  <div className="h-1 w-full shimmer-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div data-reveal className="mt-10 flex justify-center">
          <Link
            to="/services"
            className="group flex items-center gap-3 rounded-2xl border border-brand-deep/10 bg-brand-light px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-md sm:px-6 sm:py-3.5"
          >
            <span className="text-sm font-semibold text-brand-deep sm:text-base">View More Services</span>
            <ArrowRight size={16} className="text-brand-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
