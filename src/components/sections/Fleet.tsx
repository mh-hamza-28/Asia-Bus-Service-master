import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type FleetProps = {
  onBook: () => void;
};

/* Demo bus gallery photos — curated unsplash images */
const galleryItems = [
  {
    name: 'Luxury Coach',
    caption: 'Super Deluxe',
    capacity: '45-49 Seater',
    type: 'AC / Non AC',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&q=80',
    tall: true,
  },
  {
    name: 'Volvo Coach',
    caption: 'Premium Volvo',
    capacity: '49 Seater',
    type: 'AC',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&q=80',
    tall: false,
  },
  {
    name: 'Tourist Coach',
    caption: 'Deluxe Tourer',
    capacity: '45 Seater',
    type: 'AC / Non AC',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&q=80',
    tall: false,
  },
  {
    name: 'Mini Bus',
    caption: 'Compact Express',
    capacity: '20-32 Seater',
    type: 'AC / Non AC',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    tall: true,
  },
  {
    name: 'Sleeper Bus',
    caption: 'Night Cruiser',
    capacity: 'Long Route',
    type: 'AC',
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=1000&q=80',
    tall: false,
  },
  {
    name: 'Corporate Bus',
    caption: 'Executive Class',
    capacity: 'Staff Routes',
    type: 'AC / Non AC',
    image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=1000&q=80',
    tall: false,
  },
];

export function Fleet({ onBook }: FleetProps) {
  return (
    <section id="fleet" className="section bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <p className="eyebrow">Our Fleet</p>
          <h2 className="section-title text-center text-white">
            Buses Built for<br /> <span className="highlight-text">Comfort</span>
          </h2>
          <p className="mx-auto max-w-lg text-base leading-8 text-white/55">
            Clean interiors, smooth rides, and attention to detail passengers notice.
          </p>
          <button onClick={onBook} className="mt-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/25">
            Check Availability
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <article
              key={item.name}
              data-reveal
              className={`group relative overflow-hidden rounded-2xl ${item.tall && index < 4 ? 'sm:row-span-2' : ''}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className={`relative w-full overflow-hidden ${item.tall && index < 4 ? 'h-64 sm:h-full sm:min-h-[28rem]' : 'h-52 sm:h-60'}`}>
                <img
                  src={item.image}
                  alt={`${item.name} fleet gallery`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-brand-deep/20 transition-all duration-500 group-hover:bg-brand-deep/10" />

                {/* Type badge */}
                <span className="absolute right-3 top-3 rounded-full bg-brand-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-sm">
                  {item.type}
                </span>

                {/* Floating caption */}
                <div className="fleet-caption translate-y-2 transition-all duration-500 group-hover:translate-y-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent-light">{item.caption}</p>
                  <h3 className="mt-0.5 text-lg font-bold text-white sm:text-xl">{item.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-sm text-white/60">
                      <Users size={14} className="text-brand-accent" /> {item.capacity}
                    </p>
                    <button
                      onClick={onBook}
                      className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-brand-accent hover:text-white"
                    >
                      Enquire <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div data-reveal className="mt-8 flex justify-center">
          <Link
            to="/fleet"
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/30 hover:bg-white/10 sm:px-6 sm:py-3.5"
          >
            <span className="text-sm font-semibold text-white sm:text-base">View All Buses</span>
            <ArrowRight size={16} className="text-brand-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
