import { motion } from 'framer-motion';
import React from 'react';
import { company } from '../../data/siteData';

const profiles = [
  {
    name: 'Rajesh Kumar',
    title: 'Founder',
    quote: 'Built this company on trust, comfort and safety for every traveler.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=512&q=60',
  },
  {
    name: 'Anita Singh',
    title: 'Co-Founder',
    quote: 'We believe in punctuality and premium service for every trip.',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=512&q=60',
  },
  {
    name: 'Vikram Patel',
    title: 'CFO',
    quote: 'Transparent pricing and reliable operations keep us moving.',
    img: 'https://images.unsplash.com/photo-1545996124-1b2a4b9f2b67?w=512&q=60',
  },
];

export function ContactMobile() {
  return (
    <section id="contact" className="section bg-gradient-to-b from-brand-warm/60 to-white/5 text-white/95">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <div className="text-center mb-6">
          <p className="eyebrow">Meet The Team</p>
          <h2 className="section-title">Leaders Who Drive Our Journey</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {profiles.map((p, i) => (
            <motion.div
              key={p.name}
              className="relative perspective-card overflow-visible"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ rotateY: 8, scale: 1.02 }}
                whileTap={{ rotateY: 0 }}
                className="group relative overflow-hidden rounded-3xl border border-white/6 bg-white/5 p-4 shadow-2xl backdrop-blur-md"
                style={{ transformStyle: 'preserve-3d', perspective: 900 }}
              >
                <div className="absolute -left-6 -top-6 h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/8">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                </div>

                <div className="ml-20 min-h-[120px] pt-2">
                  <h3 className="text-sm font-bold text-white">{p.name}</h3>
                  <p className="text-[11px] text-white/60">{p.title}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/80">“{p.quote}”</p>
                </div>

                <div className="absolute -right-8 -bottom-8 h-20 w-20 rounded-full bg-gradient-to-br from-brand-accent/30 to-brand-gold/20 blur-2xl opacity-60" />
              </motion.div>

              <motion.div
                className="mt-3 text-[12px] text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 1 + i * 0.18, duration: 2, repeat: Infinity }}
              >
                <p>"{p.quote}"</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-white/60">
          <p>Want to speak with leadership? <a href={company.phoneHref} className="font-semibold text-white underline">Call us</a></p>
        </div>
      </div>
    </section>
  );
}

export default ContactMobile;
