import { Phone, ArrowRight } from 'lucide-react';
import { company, images } from '../../data/siteData';

type CTAProps = {
  onInquiry: () => void;
};

export function CTA({ onInquiry }: CTAProps) {
  return (
    <section id="book-now" className="relative overflow-hidden bg-brand-primary px-6 py-20 text-white sm:px-8 sm:py-28">
      <img src={images.road} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/90 to-brand-primary/70" />

      <div data-reveal className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow">Book Now</p>
        <h2 className="mt-4 text-center font-display text-4xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
          Ready to Travel?<br />
          <span className="text-brand-accent">Book Your Bus Today</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
          Call us directly for the fastest booking, or send an inquiry and our team will reach out within the hour.
        </p>

        <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/25"
          >
            <Phone size={17} /> Call to Book
          </a>
          <button
            onClick={onInquiry}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/12"
          >
            Send Inquiry <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
