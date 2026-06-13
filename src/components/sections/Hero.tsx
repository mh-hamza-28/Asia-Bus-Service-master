import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown, Route, Star, Bus, Mail, ShieldCheck, Clock3, MapPin } from 'lucide-react';
import { company } from '../../data/siteData';
import instagramImg from '../../assets/images/icons/instagram.png';
import whatsappImg from '../../assets/images/icons/whatsapp.png';
import facebookImg from '../../assets/images/icons/facebook.png';
import justdialImg from '../../assets/images/icons/justdial.png';

type HeroProps = {
  onBook: () => void;
};

/* ─── Image-based social icon component ─── */
function SocialImg({ src, alt, size = 38 }: { src: string; alt: string; size?: number }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="aspect-square rounded-xl object-contain"
      loading="lazy"
    />
  );
}

const socials = [
  { icon: (s: number) => <SocialImg src={instagramImg} alt="Instagram" size={s} />, href: company.socials.instagram, label: 'Instagram' },
  { icon: (s: number) => <SocialImg src={whatsappImg} alt="WhatsApp" size={s} />, href: company.whatsappHref, label: 'WhatsApp' },
  { icon: (s: number) => <SocialImg src={facebookImg} alt="Facebook" size={s} />, href: company.socials.facebook, label: 'Facebook' },
  { icon: (s: number) => <SocialImg src={justdialImg} alt="Justdial" size={s} />, href: company.socials.justdial, label: 'Justdial' },
];

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
      {/* ─── Navigation ─── */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-brand-deep/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <a href="#home" className="text-lg font-bold tracking-tight text-white sm:text-2xl">
            Asia<span className="text-brand-accent">Bus</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-white/70 transition-colors hover:text-brand-accent">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex">
            <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-accent-light">
              <Phone size={16} /> Call Now
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
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
            className="mx-3 mb-3 rounded-2xl border border-white/10 bg-brand-deep/95 p-3 shadow-xl backdrop-blur-xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
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

      {/* ─── Hero Section ─── */}
      <section id="home" className="relative min-h-[100dvh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/70 via-brand-deep/30 to-brand-deep/95" />
        </div>

        {/* ─── Mobile / Tablet Layout ─── */}
        <div className="relative flex min-h-[100dvh] flex-col px-4 pb-6 pt-28 sm:px-6 sm:pb-8 sm:pt-32 lg:hidden">

          {/* TOP: Heading + socials row */}
          <div className="flex items-start justify-between gap-3">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-brand-accent sm:text-[10px]">
                {company.yearsInBusiness}+ Years · Lucknow's Trusted Bus Service
              </p>
              <h1 className="text-[clamp(2.4rem,10vw,3.8rem)] font-extrabold leading-[0.88] tracking-tighter">
                <span className="text-white">Travel</span><br />
                <span className="bg-gradient-to-r from-brand-accent-light via-brand-accent to-[#a06840] bg-clip-text text-transparent">
                  Luxuriously
                </span>
              </h1>
              <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-white/75 sm:max-w-sm sm:text-[13px]">
                Safe, comfortable bus rental for tours, weddings, corporate trips & more. AC & non-AC coaches, available 24/7.
              </p>

              {/* Quick stats row */}
              <div className="mt-4 flex flex-wrap gap-3">
                {quickStats.map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm">
                    <Icon size={11} className="text-brand-accent" /> {text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social icons — right side, vertical, bigger */}
            <motion.div
              className="flex flex-col items-center gap-2.5 sm:gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 active:scale-110 sm:h-14 sm:w-14"
                  aria-label={social.label}
                >
                  {social.icon(38)}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Spacer — capped so cards don't push too far down on tall screens */}
          <div className="flex-1 max-h-24 sm:max-h-32" />

          {/* BOTTOM: 5-card block */}
          <div>
            {/* 2x2 Navigation Cards — more prominent */}
            <motion.div
              className="grid grid-cols-2 gap-2 sm:gap-2.5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {navCards.map(({ label, href, icon: Icon }, i) => (
                <a
                  key={label}
                  href={href}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-brand-deep/75 to-brand-deep/55 px-3.5 py-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:from-brand-deep/85 hover:to-brand-deep/65 hover:shadow-lg hover:shadow-brand-accent/15 active:translate-y-0 sm:px-4 sm:py-4"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/30 ring-1 ring-brand-accent/40 text-white transition-all duration-300 group-hover:bg-brand-accent/40 group-hover:ring-brand-accent/60 sm:h-10 sm:w-10">
                    <Icon size={17} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-white sm:text-xs">{label}</span>
                    <span className="text-[9px] text-white/55 sm:text-[10px]">Explore</span>
                  </div>
                  <svg className="absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-brand-accent/0 transition-all duration-300 group-hover:text-brand-accent/60 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </a>
              ))}
            </motion.div>

            {/* Horizontal Book Now Card */}
            <motion.a
              href={company.phoneHref}
              className="animate-gentle-bounce mt-2.5 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-3 shadow-2xl shadow-black/30 sm:gap-3 sm:px-5 sm:py-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="animate-pulse-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500 sm:h-12 sm:w-12">
                <Phone size={20} className="animate-phone-ring text-white sm:size-[22px]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-brand-muted sm:text-[10px]">Call for Instant Booking</p>
                <p className="text-sm font-extrabold text-brand-deep sm:text-base">{company.phone}</p>
              </div>
              <button
                onClick={(e) => { e.preventDefault(); onBook(); }}
                className="shrink-0 rounded-xl bg-brand-accent px-3.5 py-2 text-[11px] font-bold text-white transition-colors active:bg-brand-accent-light sm:px-4 sm:text-xs"
              >
                Book Now
              </button>
            </motion.a>

            {/* Action buttons */}
            <motion.div
              className="mt-2.5 grid grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors active:bg-white/20"
              >
                <SocialImg src={whatsappImg} alt="WhatsApp" size={20} /> WhatsApp
              </a>
              <button
                onClick={onBook}
                className="rounded-xl bg-brand-accent py-2.5 text-xs font-bold text-white transition-colors active:bg-brand-accent-light"
              >
                Send Inquiry
              </button>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="mt-3 flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-white/30" />
          </motion.div>
        </div>

        {/* ─── Desktop Layout ─── */}
        <div className="relative hidden min-h-[100dvh] flex-col px-8 pb-10 pt-28 lg:flex">
          <div className="mx-auto flex w-full max-w-7xl flex-1 items-center gap-10">

            {/* Left: Heading + buttons + stats */}
            <div className="max-w-lg flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
                  {company.yearsInBusiness}+ Years · Lucknow's Trusted Bus Service
                </p>
                <h1 className="text-[clamp(3.5rem,5.5vw,6rem)] font-extrabold leading-[0.88] tracking-tighter">
                  <span className="text-white">Travel</span><br />
                  <span className="bg-gradient-to-r from-brand-accent-light via-brand-accent to-[#a06840] bg-clip-text text-transparent">
                    Luxuriously
                  </span>
                </h1>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                  Safe, comfortable bus rental for tours, weddings, corporate trips & more. AC & non-AC coaches available 24/7 across Lucknow and all of Uttar Pradesh.
                </p>

                {/* Quick stats */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {quickStats.map(({ icon: Icon, text }) => (
                    <span key={text} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
                      <Icon size={13} className="text-brand-accent" /> {text}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="mt-7 flex gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  <SocialImg src={whatsappImg} alt="WhatsApp" size={24} /> WhatsApp
                  </a>
                <button
                  onClick={onBook}
                  className="rounded-2xl bg-brand-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-accent-light"
                >
                  Send Inquiry
                </button>
              </motion.div>
            </div>

            {/* Center: 5-card block — more prominent */}
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* 2x2 Navigation Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                {navCards.map(({ label, href, icon: Icon }, i) => (
                  <a
                    key={label}
                    href={href}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-brand-deep/75 to-brand-deep/55 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:from-brand-deep/85 hover:to-brand-deep/65 hover:shadow-lg hover:shadow-brand-accent/15"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/30 ring-1 ring-brand-accent/40 text-white transition-all duration-300 group-hover:bg-brand-accent/40 group-hover:ring-brand-accent/60">
                      <Icon size={19} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{label}</span>
                      <span className="text-[10px] text-white/55">Explore</span>
                    </div>
                    <svg className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-accent/0 transition-all duration-300 group-hover:text-brand-accent/60 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </a>
                ))}
              </div>

              {/* Horizontal Book Now Card */}
              <a
                href={company.phoneHref}
                className="animate-gentle-bounce flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-2xl shadow-black/20"
              >
                <div className="animate-pulse-glow flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500">
                  <Phone size={24} className="animate-phone-ring text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted">Call for Instant Booking</p>
                  <p className="text-lg font-extrabold text-brand-deep">{company.phone}</p>
                </div>
                <button
                  onClick={(e) => { e.preventDefault(); onBook(); }}
                  className="rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-accent-light"
                >
                  Book Now
                </button>
              </a>
            </motion.div>

            {/* Extreme Right: Social icons — bigger */}
            <div className="ml-auto flex flex-col items-center gap-5">
              <motion.div
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110 hover:-rotate-3"
                    aria-label={social.label}
                  >
                    {social.icon(60)}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            className="flex justify-center"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={22} className="text-white/30" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
