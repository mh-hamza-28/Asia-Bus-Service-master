import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone, Send, Clock3, Navigation } from 'lucide-react';
import { company, services } from '../../data/siteData';

type ContactProps = {
  onInquiry: () => void;
};

type ContactForm = {
  fullName: string;
  mobile: string;
  service: string;
  fromDate: string;
  toDate: string;
  fromDestination: string;
  toDestination: string;
  message: string;
};

export function Contact({ onInquiry }: ContactProps) {
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    const msg = `*New Inquiry — Asia Bus Service*%0A%0A*Name:* ${data.fullName}%0A*Mobile:* ${data.mobile}%0A*Service:* ${data.service}%0A*From Date:* ${data.fromDate}%0A*To Date:* ${data.toDate}%0A*Pickup:* ${data.fromDestination}%0A*Destination:* ${data.toDestination}%0A*Message:* ${data.message || 'N/A'}`;
    window.open(`https://wa.me/919559222275?text=${msg}`, '_blank');
    reset();
  };

  return (
    <section id="contact" className="section bg-brand-warm text-brand-deep">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="right" className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Get in Touch</p>
          <h2 className="section-title text-center text-brand-deep">
            Book Fast,<br /> <span className="highlight-text">Travel Better</span>
          </h2>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Contact info */}
        <div data-reveal="left">
          <div className="stagger-children grid gap-4">
            <a className="contact-card" href={company.phoneHref}>
              <Phone className="shrink-0 text-brand-accent" size={20} />
              <span><strong>Phone</strong>{company.phone}</span>
            </a>
            <a className="contact-card" href={`mailto:${company.email}`}>
              <Mail className="shrink-0 text-brand-accent" size={20} />
              <span><strong>Email</strong>{company.email}</span>
            </a>
            <div className="contact-card">
              <MapPin className="shrink-0 text-brand-accent" size={20} />
              <span><strong>Address</strong>{company.address}</span>
              <a
                href="https://www.google.com/maps/search/asia+bus+service+chowk+lucknow/@26.863143,80.927825,14z"
                target="_blank"
                rel="noreferrer"
                className="ml-auto shrink-0 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-semibold text-brand-accent transition-colors hover:bg-brand-accent/20"
              >
                Directions
              </a>
            </div>
            <div className="contact-card">
              <Clock3 className="shrink-0 text-brand-accent" size={20} />
              <span><strong>Hours</strong>{company.hours}</span>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <a className="social-link justify-center" href={company.socials.instagram} target="_blank" rel="noreferrer">
              <span className="brand-mark">IG</span> Instagram
            </a>
            <a className="social-link justify-center" href={company.socials.facebook} target="_blank" rel="noreferrer">
              <span className="brand-mark">FB</span> Facebook
            </a>
            <a className="social-link justify-center" href={company.socials.justdial} target="_blank" rel="noreferrer">
              <span className="brand-mark">JD</span> Justdial
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form
          data-reveal="right"
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-brand-deep/8 bg-white p-6 shadow-lg sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Send Inquiry</p>
          <h3 className="mt-2 text-2xl font-bold text-brand-deep">Tell us your route</h3>
          <div className="mt-1 h-0.5 w-16 rounded-full shimmer-accent" />

          <div className="stagger-children mt-6 grid gap-4">
            <input className="field" placeholder="Full Name" aria-label="Full Name" {...register('fullName', { required: true })} />
            <input className="field" placeholder="Mobile Number" aria-label="Mobile Number" {...register('mobile', { required: true })} />
            <select className="field" aria-label="Service Required" defaultValue="" {...register('service', { required: true })}>
              <option value="" disabled>Service Required</option>
              {services.map((service) => <option key={service.title}>{service.title}</option>)}
            </select>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="date-field">
                <span>From Date</span>
                <input type="date" aria-label="From Date" {...register('fromDate', { required: true })} />
              </label>
              <label className="date-field">
                <span>To Date</span>
                <input type="date" aria-label="To Date" {...register('toDate', { required: true })} />
              </label>
            </div>

            {/* Destination fields */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input className="field pl-10" placeholder="Pickup Location" aria-label="From Destination" {...register('fromDestination', { required: true })} />
                <Navigation size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-accent/50" />
              </div>
              <div className="relative">
                <input className="field pl-10" placeholder="Drop Location" aria-label="To Destination" {...register('toDestination', { required: true })} />
                <MapPin size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-accent/50" />
              </div>
            </div>
            <textarea className="field min-h-28 resize-y" placeholder="Message (Optional)" aria-label="Message Optional" {...register('message')} />

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary"
              >
                <Send size={16} /> Submit Inquiry
              </button>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-deep/12 px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:border-brand-accent"
              >
                <Phone size={16} /> Call Directly
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
