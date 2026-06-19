import { Mail, MapPin, Phone } from 'lucide-react';
import { company, navLinks } from '../../data/siteData';

/* Generate static particles for footer background */
const footerParticles = Array.from({ length: 8 }).map((_, i) => ({
  left: `${10 + Math.random() * 80}%`,
  size: 2 + Math.random() * 3,
  duration: 6 + Math.random() * 8,
  delay: Math.random() * 4,
  opacity: 0.1 + Math.random() * 0.15,
}));

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-deep px-6 py-14 text-white sm:px-8">
      {/* Floating particles */}
      {footerParticles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            background: `rgba(201, 168, 76, ${p.opacity})`,
          }}
        />
      ))}

      {/* Gold line accents */}
      <div className="absolute left-0 right-0 top-0 h-px gold-line" />

      <div data-reveal className="relative mx-auto grid max-w-7xl gap-10 stagger-children md:grid-cols-[1.2fr_0.8fr_1fr]">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl font-bold">
            Asia<span className="text-brand-accent">Bus</span> Service
          </p>
          <p className="mt-1 text-xs text-white/40">Since {company.establishedYear} — {company.yearsInBusiness}+ Years of Trusted Travel</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
            Premium AC and non-AC bus rental for tourist travel, corporate trips, weddings, school excursions, airport transfers, pilgrimage tours and outstation journeys across India.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Explore</p>
          <div className="mt-4 grid grid-cols-1 gap-2.5 text-sm text-white/55">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="transition-all duration-300 hover:text-brand-accent hover:translate-x-1">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/55">
            <a className="flex items-center gap-3 transition-all duration-300 hover:text-brand-accent hover:translate-x-1" href={company.phoneHref}>
              <Phone size={16} className="text-brand-accent/70" /> {company.phone}
            </a>
            <a className="flex items-center gap-3 transition-all duration-300 hover:text-brand-accent hover:translate-x-1" href={`mailto:${company.email}`}>
              <Mail size={16} className="text-brand-accent/70" /> {company.email}
            </a>
            <p className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent/70" /> {company.address}
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="social-link" href={company.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <span className="brand-mark">IG</span> Instagram
            </a>
            <a className="social-link" href={company.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <span className="brand-mark">FB</span> Facebook
            </a>
            <a className="social-link" href={company.socials.justdial} target="_blank" rel="noreferrer" aria-label="Justdial">
              <span className="brand-mark">JD</span> Justdial
            </a>
          </div>
        </div>
      </div>

      <div data-reveal className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/8 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Asia Bus Service. All rights reserved.</p>
        <p className="gold-text text-xs font-semibold">Comfort. Safety. Luxury. Every Journey.</p>
      </div>
    </footer>
  );
}

