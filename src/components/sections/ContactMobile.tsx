import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { company } from '../../data/siteData';

const profiles = [
  {
    name: 'Syed Waseem Akhtar',
    title: 'Founder & Chairman',
    quote: 'Our mission is to deliver comfortable, reliable journeys with unmatched care.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
  },
  {
    name: 'Dr. Neha Sharma',
    title: 'Co-Founder',
    quote: 'We design each trip with safety and customer delight as top priorities.',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80',
  },
  {
    name: 'Amit Verma',
    title: 'Chief Financial Officer',
    quote: 'Transparent pricing and punctual operations ensure peace of mind for travellers.',
    img: 'https://images.unsplash.com/photo-1545996124-1b2a4b9f2b67?w=1200&q=80',
  },
];

type ContactMobileProps = {
  onInquiry?: () => void;
};

export function ContactMobile({ onInquiry }: ContactMobileProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % profiles.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="contact" className="section bg-gradient-to-b from-brand-warm/60 to-white/5 text-brand-deep">
      <div className="mx-auto w-full px-4 py-12 sm:py-16">
        <div className="text-center mb-6 max-w-7xl mx-auto">
          <p className="eyebrow text-brand-deep">Meet The Team</p>
          <h2 className="section-title text-brand-deep">Leaders Who <span className="highlight-text">Drive Our Journey</span></h2>
        </div>

        <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -80, rotateY: -10 }}
              transition={{ duration: 0.7 }}
              className="mx-auto w-full"
            >
              <div className="relative mx-auto w-full rounded-3xl border border-white/8 bg-white p-4 shadow-2xl backdrop-blur-md sm:p-6">
                <div className="grid grid-cols-1 gap-4 items-center sm:[grid-template-columns:40%_1fr]">
                  {/* Image (40%) */}
                  <div className="w-full sm:h-48 overflow-hidden rounded-2xl sm:rounded-l-3xl sm:rounded-r-none">
                    <img src={profiles[index].img} alt={profiles[index].name} className="h-full w-full object-cover" />
                  </div>

                  {/* Text (60%) */}
                  <div className="px-1 sm:px-6">
                    <h3 className="text-lg font-bold text-brand-deep">{profiles[index].name}</h3>
                    <p className="text-sm text-brand-muted">{profiles[index].title}</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-brand-deep/80">“{profiles[index].quote}”</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-sm text-brand-deep/70 max-w-7xl mx-auto sm:flex-row">
          <p>Want to speak with leadership?</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {onInquiry && (
              <button
                type="button"
                onClick={onInquiry}
                className="font-semibold text-brand-accent underline"
              >
                Send inquiry
              </button>
            )}
            <a href={company.phoneHref} className="font-semibold text-brand-accent underline">Call us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMobile;
