import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type FleetProps = { onBook: () => void };

const galleryItems = [
  { name: 'Luxury Coach', caption: 'Super Deluxe', capacity: '45-49 Seater', type: 'AC / Non AC', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80' },
  { name: 'Volvo Coach', caption: 'Premium Volvo', capacity: '49 Seater', type: 'AC', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80' },
  { name: 'Tourist Coach', caption: 'Deluxe Tourer', capacity: '45 Seater', type: 'AC / Non AC', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80' },
  { name: 'Mini Bus', caption: 'Compact Express', capacity: '20-32 Seater', type: 'AC / Non AC', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80' },
  { name: 'Sleeper Bus', caption: 'Night Cruiser', capacity: 'Long Route', type: 'AC', image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=600&q=80' },
  { name: 'Corporate Bus', caption: 'Executive Class', capacity: 'Staff Routes', type: 'AC / Non AC', image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=600&q=80' },
];

export function Fleet({ onBook }: FleetProps) {
  return (
    <section id="fleet" className="bg-brand-deep py-14 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div data-reveal className="text-center">
          <p className="eyebrow">Our Fleet</p>
          <h2 className="section-title text-center text-white">
            Buses Built for <span className="highlight-text">Comfort</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full shimmer-accent" />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 stagger-children">
          {galleryItems.map((item) => (
            <article key={item.name} data-reveal="scale" className="group relative overflow-hidden rounded-2xl border-2 border-brand-accent/20 transition-all duration-300 active:scale-[0.98]" onClick={onBook}>
              <div className="h-36">
                <img src={item.image} alt={`${item.name} fleet`} className="h-full w-full object-cover transition-transform duration-500 group-active:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-transparent to-transparent" />
                <span className="absolute right-2 top-2 rounded-full bg-brand-accent/90 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white">{item.type}</span>
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-brand-accent-light">{item.caption}</p>
                  <h3 className="text-sm font-display font-bold text-white">{item.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-[10px] text-white/60"><Users size={10} className="text-brand-accent" /> {item.capacity}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-6 flex justify-center">
          <Link to="/fleet" className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm transition-all active:scale-[0.98]">
            <span className="text-sm font-semibold text-white">View All Buses</span>
            <ArrowRight size={16} className="text-brand-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
