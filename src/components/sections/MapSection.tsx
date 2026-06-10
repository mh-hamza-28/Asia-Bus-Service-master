import { Navigation, MapPin } from 'lucide-react';
import { company } from '../../data/siteData';

export function MapSection() {
  return (
    <section id="location" className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="grid items-stretch gap-4 md:grid-cols-[1fr_auto] md:gap-6">
          {/* Map embed */}
          <div className="overflow-hidden rounded-2xl border border-brand-deep/8 shadow-sm">
            <iframe
              title="Asia Bus Service Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.06!2d80.9278!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0c9b1a3c1d%3A0x4b1207f8e24b1234!2sChowk%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info sidebar */}
          <div className="flex flex-col justify-center gap-3 md:w-64">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
              <div>
                <p className="text-xs font-semibold text-brand-deep">{company.address}</p>
                <p className="mt-0.5 text-xs text-brand-muted">{company.hours}</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/asia+bus+service+chowk+lucknow/@26.863143,80.927825,14z"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-deep px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary"
            >
              <Navigation size={14} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
