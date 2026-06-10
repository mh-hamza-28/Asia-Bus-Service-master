import { MessageCircle } from 'lucide-react';
import { company } from '../../data/siteData';

export function FloatingWhatsapp() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-22 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25 ring-2 ring-brand-accent/20 transition-all hover:scale-105 md:hidden"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
