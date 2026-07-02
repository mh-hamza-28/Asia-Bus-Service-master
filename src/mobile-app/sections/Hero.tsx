import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown, Route, Star, Bus, Mail, ShieldCheck, Clock3, MapPin } from 'lucide-react';
import { company } from '../../data/siteData';
import instagramImg from '../../assets/images/icons/instagram.png';
import whatsappImg from '../../assets/images/icons/whatsapp.png';
import facebookImg from '../../assets/images/icons/facebook.png';
import justdialImg from '../../assets/images/icons/justdial.png';

type HeroProps = { onBook: () => void };

const navCards = [
  { label: 'Services', href: '#services', icon: Route },
  { label: 'Reviews', href: '#reviews', icon: Star },
  { label: 'Our Fleet', href: '#fleet', icon: Bus },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const quickStats = [
  { icon: Clock3, text: 'Available 24/7' },
  { icon: ShieldCheck, text: 'All India Permit' },
  { icon: MapPin, text: 'Lucknow Based' },
];

const socials = [
  { src: instagramImg, alt: 'Instagram', href: company.socials.instagram },
  { src: whatsappImg, alt: 'WhatsApp', href: company.whatsappHref },
  { src: facebookImg, alt: 'Facebook', href: company.socials.facebook },
  { src: justdialImg, alt: 'Justdial', href: company.socials.justdial },
];

export function Hero({ onBook }: HeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Book Now', href: '#book-now' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-brand-deep/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-lg font-bold tracking-tight text-white">
            Asia<span className="text-brand-accent">Bus</span>
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <motion.div
            className="mx-3 mb-3 rounded-2xl border border-white/10 bg-brand-deep/95 p-3 shadow-xl backdrop-blur-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href={company.phoneHref} className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent py-3 text-sm font-semibold text-white">
              <Phone size={16} /> Call Now
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/70 via-brand-deep/30 to-brand-deep/95" />
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="particle" style={{ left: `${5 + Math.random() * 90}%`, width: `${2 + Math.random() * 3}px`, height: `${2 + Math.random() * 3}px`, animationDuration: `${5 + Math.random() * 8}s`, animationDelay: `${Math.random() * 4}s`, background: `rgba(201, 168, 76, ${0.12 + Math.random() * 0.18})` }} />
          ))}
        </div>

        <div className="relative flex min-h-[100dvh] flex-col justify-between px-4 pb-6 pt-28">
          {/* Heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="reveal-line mb-2.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
              {company.yearsInBusiness}+ Years · Lucknow's Trusted Bus Service
            </p>
            <h1 className="text-[clamp(2.4rem,10vw,3.8rem)] font-display font-extrabold leading-[0.88] tracking-tighter">
              <span className="reveal-line text-white" style={{ animationDelay: '0.2s' }}>Travel</span><br />
              <span className="reveal-line bg-gradient-to-r from-brand-gold via-brand-accent-light to-brand-gold bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
                Luxuriously
              </span>
            </h1>
            <div className="mt-2 h-0.5 w-16 rounded-full shimmer-gold" />
            <p className="reveal-line mt-3 max-w-xs text-[12px] leading-relaxed text-white/75" style={{ animationDelay: '0.6s' }}>
              Safe, comfortable bus rental for tours, weddings, corporate trips & more. AC & non-AC coaches, available 24/7.
            </p>
          </motion.div>

          {/* Quick stats: constrained to heading width (centered under the hero text) */}
          <div className="mt-3 w-full max-w-xs sm:max-w-md">
            <div className="grid grid-cols-2 gap-2">
              {quickStats.slice(0, 2).map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm">
                  <Icon size={12} className="text-brand-accent" /> {text}
                </span>
              ))}
            </div>
            <div className="mt-2 flex justify-center">
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm">
                <MapPin size={12} className="text-brand-accent" /> {quickStats[2].text}
              </span>
            </div>
          </div>

          {/* Social icons*/}
         <motion.div
  className="absolute right-4 top-32 z-20 flex flex-col gap-3"
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
  {socials.map((social) => (
    <a
      key={social.alt}
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className="social-icon flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:scale-110"
      aria-label={social.alt}
    >
      <img
        src={social.src}
        alt={social.alt}
        width={38}
        height={38}
        className="rounded-xl object-contain"
      />
    </a>
  ))}
</motion.div>

          <div className="flex-1 max-h-6" />

          {/* 2x2 Navigation Cards */}
          <motion.div className="mt-2 grid grid-cols-2 gap-2.5" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
            {navCards.map(({ label, href, icon: Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-brand-deep/75 to-brand-deep/55 px-3.5 py-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 active:translate-y-0"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.1, ease: 'easeOut' }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/30 ring-1 ring-brand-accent/40 text-white">
                  <Icon size={17} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white">{label}</span>
                  <span className="text-[9px] text-white/55">Explore</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Book Now Card */}
          <motion.a
            href={company.phoneHref}
            className="animate-gentle-bounce mt-10 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-3 shadow-2xl shadow-black/30"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="animate-pulse-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500">
              <Phone size={20} className="animate-phone-ring text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-brand-muted">Call for Instant Booking</p>
              <p className="text-sm font-extrabold text-brand-deep">{company.phone}</p>
            </div>
            <button onClick={(e) => { e.preventDefault(); onBook(); }} className="shrink-0 rounded-xl bg-brand-accent px-3.5 py-2 text-[11px] font-bold text-white active:bg-brand-accent-light">
              Book Now
            </button>
          </motion.a>

          {/* Action buttons */}
          <motion.div className="mt-2.5 grid grid-cols-2 gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 py-2.5 text-xs font-semibold text-white backdrop-blur-sm active:bg-white/20">
              <img src={whatsappImg} alt="WhatsApp" width={16} height={16} className="rounded-sm" /> WhatsApp
            </a>
            <button onClick={onBook} className="rounded-xl bg-brand-accent py-2.5 text-xs font-bold text-white active:bg-brand-accent-light">
              Book Online
            </button>
          </motion.div>

          <motion.div className="mt-3 flex justify-center" animate={{ y: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={18} className="text-white/30" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
