import { ArrowRight, Users, MapPin, Clock3 } from 'lucide-react';
import { services } from '../../data/siteData';
import { Link } from 'react-router-dom';

type ServicesProps = { onBook: () => void };

const topDeals = [
  { serviceIndex: 1, destination: 'Corporate Travel', price: '₹20,000', priceNote: 'from', seats: '49-Seater', type: 'Volvo AC', duration: 'Daily', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80' },
  { serviceIndex: 2, destination: 'Wedding Transport', price: '₹25,000', priceNote: 'from', seats: 'Multi-Bus', type: 'Decorated', duration: 'Full Day', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80' },
  { serviceIndex: 4, destination: 'Airport Transfers', price: '₹5,000', priceNote: 'from', seats: 'Any Size', type: 'AC Coach', duration: '24/7', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' },
  { serviceIndex: 0, destination: 'Luxury Tours', price: '₹18,000', priceNote: 'from', seats: '45-Seater', type: 'AC Luxury', duration: 'Multi-Day', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80' },
  { serviceIndex: 3, destination: 'School Transport', price: '₹10,000', priceNote: 'from', seats: '50-Seater', type: 'Non AC', duration: 'Day Trip', image: 'https://images.unsplash.com/photo-1609766815686-b56f35df090e?w=800&q=80' },
  { serviceIndex: 6, destination: 'Employee Transit', price: '₹8,000', priceNote: 'from', seats: '40-Seater', type: 'AC / Non AC', duration: 'Monthly', image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&q=80' },
];

export function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="bg-white py-14 text-brand-deep">
      <div className="mx-auto max-w-7xl px-4">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-title text-center text-brand-deep">
            Explore Our <span className="highlight-text">Premium Services</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full shimmer-accent" />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 stagger-children">
          {topDeals.map(({ serviceIndex, destination, price, priceNote, seats, type, duration, image }) => {
            const service = services[serviceIndex];
            return (
              <article key={destination} className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-deep/6 bg-brand-light shadow-sm transition-all duration-300 active:scale-[0.98]">
                <span className="absolute left-2 top-2 z-10 rounded-full bg-brand-accent px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white shadow-lg">Premium</span>
                <div className="relative h-28 overflow-hidden">
                  <img src={image} alt={`${destination} by Asia Bus Service`} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-[7px] font-semibold uppercase tracking-widest text-white/60">{priceNote}</p>
                    <p className="text-base font-extrabold text-brand-accent-light">{price}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-2.5">
                  <h3 className="text-xs font-display font-bold text-brand-deep">{service.title}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-brand-accent">
                    <MapPin size={10} /> {destination}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[9px] text-brand-muted">
                    <span className="flex items-center gap-0.5"><Users size={9} className="text-brand-accent" /> {seats}</span>
                    <span className="flex items-center gap-0.5"><Clock3 size={9} className="text-brand-accent" /> {duration}</span>
                  </div>
                  <button onClick={onBook} className="mt-2 inline-flex items-center gap-1 rounded-lg bg-brand-deep px-2.5 py-1.5 text-[9px] font-semibold text-white transition-colors active:bg-brand-primary">
                    Book <ArrowRight size={10} />
                  </button>
                </div>
                <div className="h-0.5 w-full shimmer-accent opacity-0 transition-opacity duration-300 group-active:opacity-100" />
              </article>
            );
          })}
        </div>

        <div data-reveal className="mt-8 flex justify-center">
          <Link to="/services" className="group flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-brand-accent/30 bg-brand-light px-6 py-4 shadow-md transition-all duration-300 active:scale-[0.98]">
            <div className="absolute inset-0 shimmer-gold opacity-0 transition-opacity duration-300 group-active:opacity-100" />
            <span className="relative font-display text-base font-bold text-brand-deep">View All Services</span>
            <ArrowRight size={18} className="relative text-brand-accent transition-transform group-active:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
