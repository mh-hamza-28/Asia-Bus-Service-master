import { useRef, useEffect } from 'react';
import { ArrowRight, Users, MapPin, Clock3 } from 'lucide-react';
import { services } from '../../data/siteData';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ServicesProps = { onBook: () => void };

const servicePairs = [
  {
    left: { serviceIndex: 1, destination: 'Corporate Travel', price: '₹20,000', priceNote: 'from', seats: '49-Seater', type: 'Volvo AC', duration: 'Daily', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80' },
    right: { serviceIndex: 2, destination: 'Wedding Transport', price: '₹25,000', priceNote: 'from', seats: 'Multi-Bus', type: 'Decorated', duration: 'Full Day', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80' },
  },
  {
    left: { serviceIndex: 4, destination: 'Airport Transfers', price: '₹5,000', priceNote: 'from', seats: 'Any Size', type: 'AC Coach', duration: '24/7', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' },
    right: { serviceIndex: 0, destination: 'Luxury Tours', price: '₹18,000', priceNote: 'from', seats: '45-Seater', type: 'AC Luxury', duration: 'Multi-Day', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80' },
  },
  {
    left: { serviceIndex: 3, destination: 'School Transport', price: '₹10,000', priceNote: 'from', seats: '50-Seater', type: 'Non AC', duration: 'Day Trip', image: 'https://images.unsplash.com/photo-1609766815686-b56f35df090e?w=800&q=80' },
    right: { serviceIndex: 6, destination: 'Employee Transit', price: '₹8,000', priceNote: 'from', seats: '40-Seater', type: 'AC / Non AC', duration: 'Monthly', image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&q=80' },
  },
];

function ServiceCard({ card, onBook }: { card: typeof servicePairs[0]['left']; onBook: () => void }) {
  const service = services[card.serviceIndex];
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-brand-accent/15 bg-brand-light shadow-lg transition-all duration-500 hover:border-brand-accent/35 hover:shadow-2xl hover:shadow-brand-accent/15">
      <span className="deal-badge animate-float-pulse">Premium</span>
      <div className="relative h-32 overflow-hidden sm:h-48">
        <img src={card.image} alt={`${card.destination} by Asia Bus Service`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4">
          <p className="text-[8px] font-semibold uppercase tracking-widest text-white/60 sm:text-[9px]">{card.priceNote}</p>
          <p className="text-xl font-extrabold text-brand-accent-light sm:text-2xl">{card.price}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="text-base font-display font-bold text-brand-deep sm:text-lg">{service.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-brand-accent sm:text-sm">
          <MapPin size={13} /> {card.destination}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-brand-muted sm:gap-3 sm:text-xs">
          <span className="flex items-center gap-0.5 sm:gap-1"><Users size={12} className="text-brand-accent" /> {card.seats}</span>
          <span className="flex items-center gap-0.5 sm:gap-1"><Clock3 size={12} className="text-brand-accent" /> {card.duration}</span>
          <span className="rounded-full bg-brand-accent/10 px-2 py-0.5 text-[9px] font-semibold text-brand-accent sm:text-[10px]">{card.type}</span>
        </div>
        <button onClick={onBook} className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-deep px-3 py-2 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary sm:px-4 sm:py-2.5 sm:text-xs">
          Book This Trip <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      <div className="h-1 w-full shimmer-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}

export function Services({ onBook }: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pairs = gsap.utils.toArray<HTMLElement>('.svc-pair');
      const totalPairs = pairs.length;

      // Medium-speed timeline: peek(0.15) + arrive(0.15) + exit+overlap(0.15) per cycle
      // Each pair cycle = 0.5, last pair hold + button = 0.45
      const scrollLen = (totalPairs - 1) * 0.5 + 0.6;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top top',
          end: () => `+=${scrollLen * window.innerHeight}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Set all pairs to hidden initially, EXCEPT first pair which starts peeking
      pairs.forEach((pair, i) => {
        const left = pair.querySelector('.pair-left') as HTMLElement;
        const right = pair.querySelector('.pair-right') as HTMLElement;
        if (i === 0) {
          // First pair starts at peek position (half visible)
          if (left) gsap.set(left, { xPercent: -45, opacity: 0.75, rotateY: 20, scale: 0.92 });
          if (right) gsap.set(right, { xPercent: 45, opacity: 0.75, rotateY: -20, scale: 0.92 });
        } else {
          if (left) gsap.set(left, { xPercent: -130, opacity: 0, rotateY: 30, scale: 0.8 });
          if (right) gsap.set(right, { xPercent: 130, opacity: 0, rotateY: -30, scale: 0.8 });
        }
      });

      pairs.forEach((pair, i) => {
        const left = pair.querySelector('.pair-left') as HTMLElement;
        const right = pair.querySelector('.pair-right') as HTMLElement;
        if (!left || !right) return;

        const base = i * 0.5;
        const isLast = i === totalPairs - 1;

        if (i === 0) {
          // First pair already peeking — go straight to arrive fully
          tl.call(() => pair.classList.add('active'), [], base);
          tl.to(left,
            { xPercent: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.15, ease: 'power3.out' },
            base
          );
          tl.to(right,
            { xPercent: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.15, ease: 'power3.out' },
            base
          );
        } else {
          // STEP 1: Peek half — snap from sides to half-visible
          tl.call(() => pair.classList.add('active'), [], base);
          tl.to(left,
            { xPercent: -45, opacity: 0.75, rotateY: 20, scale: 0.92, duration: 0.15, ease: 'power2.out' },
            base
          );
          tl.to(right,
            { xPercent: 45, opacity: 0.75, rotateY: -20, scale: 0.92, duration: 0.15, ease: 'power2.out' },
            base
          );

          // STEP 2: Arrive fully — snap to center
          tl.to(left,
            { xPercent: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.15, ease: 'power3.out' },
            base + 0.18
          );
          tl.to(right,
            { xPercent: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.15, ease: 'power3.out' },
            base + 0.18
          );
        }

        // Hide center button for last pair when it arrives — no longer needed

        // STEP 3: For non-last pairs — exit + next pair peeks simultaneously
        if (!isLast) {
          tl.call(() => pair.classList.remove('active'), [], base + 0.35);
          tl.to(left,
            { xPercent: -130, opacity: 0, rotateY: -30, scale: 0.8, duration: 0.15, ease: 'power2.in' },
            base + 0.35
          );
          tl.to(right,
            { xPercent: 130, opacity: 0, rotateY: 30, scale: 0.8, duration: 0.15, ease: 'power2.in' },
            base + 0.35
          );
        }
        // Last pair: stays at center, no exit
      });

      // Glass overlay + button after last pair
      const glassTime = (totalPairs - 1) * 0.5 + 0.38;
      if (glassRef.current) {
        // Fade in the glass backdrop
        tl.fromTo(glassRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.15, ease: 'power2.out' },
          glassTime
        );
        // Pop the button inside the glass
        const btn = glassRef.current.querySelector('.glass-btn');
        if (btn) {
          tl.fromTo(btn,
            { scale: 0.4, opacity: 0, y: 20 },
            { scale: 1, opacity: 1, y: 0, duration: 0.15, ease: 'back.out(3)' },
            glassTime + 0.06
          );
          tl.to(btn,
            { scale: 1.05, duration: 0.05, ease: 'power1.inOut', yoyo: true, repeat: 1 },
            glassTime + 0.22
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-white text-brand-deep">
      <div ref={pinRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-8">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-12">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-title text-center text-brand-deep">
            Explore Our <span className="highlight-text">Premium Services</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full shimmer-accent" />
        </div>

        {/* Card pairs stacked with center button */}
        <div className="relative mx-auto w-full max-w-6xl min-h-[700px] sm:min-h-[420px]" style={{ perspective: '1200px' }}>
          {servicePairs.map((pair, i) => (
            <div
              key={i}
              className="svc-pair pointer-events-none absolute inset-0 grid grid-cols-1 items-start gap-3 sm:grid-cols-2 sm:items-center sm:gap-6"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="pair-left" style={{ willChange: 'transform, opacity' }}>
                <ServiceCard card={pair.left} onBook={onBook} />
              </div>

              <div className="pair-right" style={{ willChange: 'transform, opacity' }}>
                <ServiceCard card={pair.right} onBook={onBook} />
              </div>
            </div>
          ))}
        </div>

        {/* Glass overlay with View All Services — appears after last pair */}
        <div
          ref={glassRef}
          className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl"
          style={{ opacity: 0, willChange: 'opacity' }}
        >
          <div className="absolute inset-0 rounded-3xl border border-white/60 bg-white/95 backdrop-blur-2xl" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.03), 0 8px 32px rgba(11,31,23,0.08)' }} />
          <div className="glass-btn relative flex flex-col items-center gap-4 px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent sm:text-sm">All Services</p>
            <Link
              to="/services"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border-2 border-brand-accent/40 bg-brand-light px-10 py-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/70 hover:shadow-2xl hover:shadow-brand-accent/15 sm:px-14 sm:py-6"
            >
              <div className="absolute inset-0 shimmer-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative font-display text-lg font-bold text-brand-deep sm:text-xl">View All Services</span>
              <ArrowRight size={20} className="relative text-brand-accent transition-transform group-hover:translate-x-2" />
            </Link>
            <p className="text-xs text-brand-muted sm:text-sm">Explore all 8 premium services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
