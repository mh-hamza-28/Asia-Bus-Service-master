import { Mail, MapPin, Phone } from 'lucide-react';
import { company, navLinks } from '../../data/siteData';
import instagramImg from '../../assets/images/icons/instagram.png';
import whatsappImg from '../../assets/images/icons/whatsapp.png';
import facebookImg from '../../assets/images/icons/facebook.png';
import justdialImg from '../../assets/images/icons/justdial.png';

const socialIcons = [
  { src: instagramImg, alt: 'Instagram', href: company.socials.instagram },
  { src: whatsappImg, alt: 'WhatsApp', href: company.whatsappHref },
  { src: facebookImg, alt: 'Facebook', href: company.socials.facebook },
  { src: justdialImg, alt: 'Justdial', href: company.socials.justdial },
];

export function MobileFooter() {
  return (
    <footer className="bg-brand-deep px-5 py-10 text-white sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Brand */}
        <div className="text-center">
          <p className="font-display text-2xl font-bold">
            Asia<span className="text-brand-accent">Bus</span> Service
          </p>
          <p className="mt-1 text-xs text-white/40">Since {company.establishedYear} — {company.yearsInBusiness}+ Years of Trusted Travel</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/50">
            Premium AC and non-AC bus rental for tourist travel, corporate trips, weddings, school excursions, airport transfers, pilgrimage tours and outstation journeys across India.
          </p>
        </div>

        {/* Social Icons Row — same 4 icons from hero section */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {socialIcons.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="social-icon flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 active:scale-110 sm:h-14 sm:w-14"
              aria-label={social.alt}
            >
              <img
                src={social.src}
                alt={social.alt}
                width={36}
                height={36}
                className="aspect-square rounded-lg object-contain sm:w-[38px]"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        {/* Explore links — horizontal scroll on mobile */}
        <div className="mt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-accent">Explore</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/55">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-accent">Contact</p>
          <div className="mt-3 space-y-2.5 text-center text-sm text-white/55">
            <a className="flex items-center justify-center gap-2.5 transition-colors hover:text-white" href={company.phoneHref}>
              <Phone size={15} /> {company.phone}
            </a>
            <a className="flex items-center justify-center gap-2.5 transition-colors hover:text-white" href={`mailto:${company.email}`}>
              <Mail size={15} /> {company.email}
            </a>
            <p className="flex items-start justify-center gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0" /> <span className="text-left">{company.address}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center gap-2 border-t border-white/8 pt-5 text-center text-xs text-white/35">
        <p>© {new Date().getFullYear()} Asia Bus Service. All rights reserved.</p>
        <p>Comfort. Safety. Luxury. Every Journey.</p>
      </div>
    </footer>
  );
}
