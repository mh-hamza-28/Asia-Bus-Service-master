import { Phone } from 'lucide-react';
import { company } from '../../data/siteData';

type FloatingCallProps = {
  pastHero?: boolean;
};

export function FloatingCall({ pastHero = true }: FloatingCallProps) {
  return (
    <a
      href={company.phoneHref}
      className={`fixed bottom-5 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-deep text-white shadow-xl shadow-brand-deep/25 ring-2 ring-brand-accent/20 transition-all duration-500 md:hidden ${
        pastHero
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-8 opacity-0'
      }`}
      aria-label={`Call ${company.phone}`}
    >
      <Phone size={22} aria-hidden="true" />
    </a>
  );
}
