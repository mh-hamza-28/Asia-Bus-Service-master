import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle2, Phone, Send, X, Navigation, MapPin } from 'lucide-react';
import { company, services } from '../../data/siteData';

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

type BookingForm = {
  fullName: string;
  mobile: string;
  service: string;
  fromDate: string;
  toDate: string;
  fromDestination: string;
  toDestination: string;
  message: string;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<BookingForm>();

  const onSubmit = (data: BookingForm) => {
    console.info('Asia Bus Service booking inquiry:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-brand-deep/60 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-brand-deep/8 bg-white p-6 shadow-2xl sm:p-8"
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
          >
            <button
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-warm text-brand-deep transition hover:bg-brand-light"
              onClick={onClose}
              aria-label="Close booking form"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="py-14 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-accent/10"
                >
                  <CheckCircle2 size={40} className="text-brand-accent" />
                </motion.div>
                <h2 className="mt-6 font-display text-2xl font-bold text-brand-deep">Thank You</h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-brand-muted">
                  Your details have been received. Our team will review your travel requirements and reach out shortly.
                </p>
                <button
                  className="mt-8 rounded-full bg-brand-deep px-7 py-3 text-sm font-semibold text-white"
                  onClick={() => { setSubmitted(false); onClose(); }}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Priority Booking</p>
                <h2 id="booking-title" className="mt-2 font-display text-2xl font-bold text-brand-deep sm:text-3xl">
                  Book Your Bus
                </h2>
                <p className="mt-2 text-sm text-brand-muted">
                  Share your travel details and our team will call you with the best options.
                </p>

                <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                  <input {...register('fullName', { required: true })} placeholder="Full Name" className="field" aria-label="Full Name" />
                  <input {...register('mobile', { required: true })} placeholder="Mobile Number" className="field" aria-label="Mobile Number" />
                  <select {...register('service', { required: true })} className="field" aria-label="Service Required" defaultValue="">
                    <option value="" disabled>Service Required</option>
                    {services.map((service) => <option key={service.title}>{service.title}</option>)}
                  </select>
                  <label className="date-field">
                    <span>From Date</span>
                    <Calendar className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted/40" size={16} />
                    <input {...register('fromDate', { required: true })} type="date" aria-label="From Date" />
                  </label>
                  <label className="date-field">
                    <span>To Date</span>
                    <Calendar className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted/40" size={16} />
                    <input {...register('toDate', { required: true })} type="date" aria-label="To Date" />
                  </label>

                  {/* Destination fields */}
                  <div className="relative sm:col-span-1">
                    <input {...register('fromDestination', { required: true })} placeholder="Pickup Location" className="field pl-10" aria-label="From Destination" />
                    <Navigation size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-accent/50" />
                  </div>
                  <div className="relative sm:col-span-1">
                    <input {...register('toDestination', { required: true })} placeholder="Drop Location" className="field pl-10" aria-label="To Destination" />
                    <MapPin size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-accent/50" />
                  </div>
                  <textarea {...register('message')} placeholder="Message (Optional)" className="field min-h-24 resize-y sm:col-span-2" aria-label="Message Optional" />

                  {formState.isSubmitted && !formState.isValid && (
                    <p className="text-sm text-brand-accent sm:col-span-2">Please fill all required fields.</p>
                  )}

                  <div className="grid gap-3 sm:col-span-2 sm:grid-cols-2">
                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-primary"
                      type="submit"
                    >
                      <Send size={16} /> Submit Inquiry
                    </button>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-deep/10 px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:border-brand-accent"
                      href={company.phoneHref}
                    >
                      <Phone size={16} /> Call Directly
                    </a>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
