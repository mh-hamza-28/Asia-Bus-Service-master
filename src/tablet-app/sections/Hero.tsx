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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight text-white">
            Asia<span className="text-brand-accent">Bus</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-white/70 transition-colors hover:text-brand-accent">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex">
            <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-accent-light">
              <Phone size={16} /> Call Now
            </a>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <motion.div className="mx-3 mb-3 rounded-2xl border border-white/10 bg-brand-deep/95 p-3 shadow-xl backdrop-blur-xl md:hidden" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10">{item.label}</a>
            ))}
            <a href={company.phoneHref} className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent py-3 text-sm font-semibold text-white">
              <Phone size={16} /> Call Now
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-[100dvh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/70 via-brand-deep/30 to-brand-deep/95" />
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="particle" style={{ left: `${5 + Math.random() * 90}%`, width: `${2 + Math.random() * 3}px`, height: `${2 + Math.random() * 3}px`, animationDuration: `${5 + Math.random() * 8}s`, animationDelay: `${Math.random() * 4}s`, background: `rgba(201, 168, 76, ${0.12 + Math.random() * 0.18})` }} />
          ))}
        </div>

        <div className="relative flex min-h-[100dvh] flex-col px-6 pb-8 pt-32">
          {/* Top: Heading + socials */}
          <div className="flex items-start justify-between gap-4">
            <motion.div className="flex-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <p className="reveal-line mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
                {company.yearsInBusiness}+ Years · Lucknow's Trusted Bus Service
              </p>
              <h1 className="text-[clamp(2.8rem,8vw,4.5rem)] font-display font-extrabold leading-[0.88] tracking-tighter">
                <span className="reveal-line text-white" style={{ animationDelay: '0.2s' }}>Travel</span><br />
                <span className="reveal-line bg-gradient-to-r from-brand-gold via-brand-accent-light to-brand-gold bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>Luxuriously</span>
              </h1>
              <div className="mt-2 h-0.5 w-20 rounded-full shimmer-gold" />
              <p className="reveal-line mt-3 max-w-md text-[13px] leading-relaxed text-white/75" style={{ animationDelay: '0.6s' }}>
                Safe, comfortable bus rental for tours, weddings, corporate trips & more. AC & non-AC coaches, available 24/7.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {quickStats.map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
                    <Icon size={13} className="text-brand-accent" /> {text}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div className="flex flex-col items-center gap-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              {socials.map((social) => (
                <a key={social.alt} href={social.href} target="_blank" rel="noreferrer" className="social-icon flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 active:scale-110" aria-label={social.alt}>
                  <img src={social.src} alt={social.alt} width={44} height={44} className="aspect-square rounded-xl object-contain" loading="lazy" />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="flex-1 max-h-32" />

          {/* 2x2 Nav Cards */}
          <motion.div className="grid max-w-lg grid-cols-2 gap-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
            {navCards.map(({ label, href, icon: Icon }, i) => (
              <motion.a key={label} href={href} className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-brand-deep/75 to-brand-deep/55 px-4 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: 0.35 + i * 0.1, ease: 'easeOut' }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/30 ring-1 ring-brand-accent/40 text-white"><Icon size={19} /></div>
                <div className="flex flex-col"><span className="text-sm font-bold text-white">{label}</span><span className="text-[10px] text-white/55">Explore</span></div>
              </motion.a>
            ))}
          </motion.div>

          {/* Book Now Card */}
          <motion.a href={company.phoneHref} className="animate-gentle-bounce mt-3 flex max-w-lg items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-2xl shadow-black/30" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <div className="animate-pulse-glow flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500"><Phone size={24} className="animate-phone-ring text-white" /></div>
            <div className="min-w-0 flex-1"><p className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted">Call for Instant Booking</p><p className="text-lg font-extrabold text-brand-deep">{company.phone}</p></div>
            <button onClick={(e) => { e.preventDefault(); onBook(); }} className="shrink-0 rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-bold text-white">Book Now</button>
          </motion.a>

          <motion.div className="mt-3 flex justify-center" animate={{ y: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={20} className="text-white/30" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
