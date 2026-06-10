import { Phone, Clock3 } from 'lucide-react';
import { company } from '../../data/siteData';

type TopContactBarProps = {
  onBook: () => void;
};

export function TopContactBar({ onBook }: TopContactBarProps) {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b border-brand-deep/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between px-8 text-xs font-medium text-brand-deep/70">
        <div className="flex items-center gap-4">
          <a href={company.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-brand-accent">
            <Phone size={13} />
            <span>{company.phone}</span>
          </a>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Clock3 size={13} />
            Available 24/7
          </span>
        </div>
        <button
          onClick={onBook}
          className="rounded-full bg-brand-deep px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-primary"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
