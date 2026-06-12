import { MessageCircle } from 'lucide-react';
import { company } from '../../data/siteData';

type FloatingWhatsappProps = {
  pastHero?: boolean;
};

export function FloatingWhatsapp({ pastHero = true }: FloatingWhatsappProps) {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25 ring-2 ring-brand-accent/20 transition-all duration-500 md:hidden ${
        pastHero
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-8 opacity-0'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
