import { useState } from 'react';
import { Users, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fleet } from '../../data/siteData';

type FleetProps = {
  onBook: () => void;
};

/* Extended gallery items with multiple images and specs */
const galleryItems = [
  {
    name: 'Luxury Coach',
    caption: 'Super Deluxe',
    capacity: '45-49 Seater',
    type: 'AC / Non AC',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&q=80',
    height: 'h-72 sm:h-80',
    amenities: ['Pushback seats', 'Ambient lighting', 'Tour permit', 'USB charging'],
    images: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    ],
  },
  {
    name: 'Volvo Coach',
    caption: 'Premium Volvo',
    capacity: '49 Seater',
    type: 'AC',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&q=80',
    height: 'h-56 sm:h-64',
    amenities: ['Premium suspension', 'Entertainment system', 'Spacious cabin'],
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    ],
  },
  {
    name: 'Tourist Coach',
    caption: 'Deluxe Tourer',
    capacity: '45 Seater',
    type: 'AC / Non AC',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&q=80',
    height: 'h-64 sm:h-72',
    amenities: ['Curtains', 'Clean interiors', 'Luggage support', 'Reclining seats'],
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    ],
  },
  {
    name: 'Mini Bus',
    caption: 'Compact Express',
    capacity: '20-32 Seater',
    type: 'AC / Non AC',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    height: 'h-56 sm:h-60',
    amenities: ['City friendly', 'Family trips', 'Airport runs'],
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
      'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&q=80',
    ],
  },
  {
    name: 'Sleeper Bus',
    caption: 'Night Cruiser',
    capacity: 'Long Route',
    type: 'AC',
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=1000&q=80',
    height: 'h-72 sm:h-80',
    amenities: ['Berth seats', 'Night travel', 'Blankets', 'Private hire'],
    images: [
      'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=800&q=80',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    ],
  },
  {
    name: 'Corporate Bus',
    caption: 'Executive Class',
    capacity: 'Staff Routes',
    type: 'AC / Non AC',
    image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=1000&q=80',
    height: 'h-56 sm:h-64',
    amenities: ['Daily operations', 'GPS ready', 'On-time routes'],
    images: [
      'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    ],
  },
];

/* Gallery Modal */
function GalleryModal({ item, onClose, onBook }: { item: typeof galleryItems[0]; onClose: () => void; onBook: () => void }) {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-brand-deep/80 px-4 py-6 backdrop-blur-xl" onClick={onClose}>
      <div className="gallery-modal-enter relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-brand-deep shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20">
          <X size={18} />
        </button>

        {/* Hero image */}
        <div className="relative h-56 w-full overflow-hidden sm:h-72">
          <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="rounded-full bg-brand-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">{item.type}</span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent-light">{item.caption}</p>
          <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">{item.name}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-white/60"><Users size={14} className="text-brand-accent" /> {item.capacity}</p>

          {/* Thumbnail strip */}
          <div className="mt-4 flex gap-2">
            {item.images.map((img, i) => (
              <div key={i} className="h-16 w-24 overflow-hidden rounded-lg border border-white/10 sm:h-20 sm:w-28">
                <img src={img} alt={`${item.name} view ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Specifications</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {item.amenities.map((a) => (
                <span key={a} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 size={14} className="shrink-0 text-brand-accent" /> {a}
                </span>
              ))}
            </div>
          </div>

          <button onClick={onBook} className="mt-6 w-full rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-lg hover:shadow-brand-accent/20">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

export function Fleet({ onBook }: FleetProps) {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="fleet" className="section bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="left" className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <p className="eyebrow">Our Fleet</p>
          <h2 className="section-title text-center text-white">
            Buses Built for<br /> <span className="highlight-text">Comfort</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full shimmer-accent" />
          <p className="mx-auto max-w-lg text-base leading-8 text-white/55">
            Clean interiors, smooth rides, and attention to detail passengers notice.
          </p>
          <button onClick={onBook} className="mt-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/25">
            Check Availability
          </button>
        </div>

        {/* Masonry Gallery */}
        <div className="masonry-grid mt-12">
          {galleryItems.map((item) => (
            <div
              key={item.name}
              data-reveal="scale"
              className="masonry-item fleet-premium"
              onClick={() => setSelectedItem(item)}
            >
              <div className={item.height}>
                <img src={item.image} alt={`${item.name} fleet gallery`} className="h-full w-full object-cover" loading="lazy" />
                <div className="fleet-overlay" />

                {/* Type badge */}
                <span className="absolute right-3 top-3 z-10 rounded-full bg-brand-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-sm">
                  {item.type}
                </span>

                {/* Info at bottom */}
                <div className="fleet-info">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent-light">{item.caption}</p>
                  <h3 className="mt-0.5 font-display text-lg font-bold text-white sm:text-xl">{item.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-white/60">
                    <Users size={14} className="text-brand-accent" /> {item.capacity}
                  </p>

                  {/* Amenities revealed on hover */}
                  <div className="fleet-amenities mt-2 flex flex-wrap gap-1.5">
                    {item.amenities.map((a) => (
                      <span key={a} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70 backdrop-blur-sm">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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

      {/* Gallery Modal */}
      {selectedItem && (
        <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} onBook={() => { setSelectedItem(null); onBook(); }} />
      )}
    </section>
  );
}