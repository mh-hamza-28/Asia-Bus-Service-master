import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

type LoaderProps = {
  onDone: () => void;
};

/* Asia Logo SVG */
function AsiaLogoSVG() {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(160px, 38vw, 260px)', height: 'auto' }}>
      <polygon points="100,10 10,170 190,170" fill="#e8611a" />
      <text x="100" y="145" textAnchor="middle" fill="white" fontSize="80" fontWeight="900" fontFamily="Inter, Arial, sans-serif">A</text>
      <text x="100" y="210" textAnchor="middle" fill="#e8611a" fontSize="32" fontWeight="300" letterSpacing="10" fontFamily="Inter, Arial, sans-serif">ASIA</text>
    </svg>
  );
}

/* Wave text - each letter wrapped in span */
function WaveText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`wave-text ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

export function Loader({ onDone }: LoaderProps) {
  const [phase, setPhase] = useState<'logo' | 'bus' | 'done'>('logo');

  useEffect(() => {
    // Phase 1: Logo appears + glows (0 - 2.2s)
    const busTimer = setTimeout(() => setPhase('bus'), 2200);
    // Phase 2: Bus enters, stops, shows text, exits (2.2s - 6.2s)
    const doneTimer = setTimeout(() => setPhase('done'), 6200);
    return () => {
      clearTimeout(busTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === 'done') {
      const t = setTimeout(onDone, 500);
      return () => clearTimeout(t);
    }
  }, [phase, onDone]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Subtle radial bg glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.04),transparent_60%)]" />

          {/* Floating particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${8 + Math.random() * 84}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 3}s`,
                background: `rgba(201, 168, 76, ${0.15 + Math.random() * 0.2})`,
              }}
            />
          ))}

          <div className="relative flex w-full flex-col items-center justify-center">

            {/* ─── LOGO PHASE (0 - 2.2s) ─── */}
            {phase === 'logo' && (
              <motion.div
                className="absolute flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: [0, 1, 1], scale: [0.4, 1.05, 1] }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 2.2, times: [0, 0.5, 1], ease: 'easeOut' }}
              >
                <div className="animate-logo-glow">
                  <AsiaLogoSVG />
                </div>
                <motion.p
                  className="mt-4 text-sm font-semibold uppercase tracking-[0.38em] text-brand-accent sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Travel in Refined Comfort
                </motion.p>
              </motion.div>
            )}

            {/* ─── BUS PHASE (2.2s - 6.2s) ─── */}
            {phase === 'bus' && (
              <motion.div
                className="flex items-center"
                initial={{ x: '-140vw', filter: 'blur(4px)' }}
                animate={{
                  x: ['-140vw', '-5vw', '-5vw', '130vw'],
                  filter: ['blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(5px)'],
                }}
                transition={{
                  duration: 4,
                  times: [0, 0.3, 0.6, 1],
                  ease: ['easeOut', 'easeInOut', 'easeIn'],
                }}
              >
                {/* Happy Journey — trailing behind bus with wave + gold glow */}
                <motion.div
                  className="mr-4 flex flex-col items-end gap-1 sm:mr-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
                >
                  <h2
                    className="font-display text-2xl font-extrabold whitespace-nowrap tracking-tight text-white sm:text-4xl lg:text-5xl"
                    style={{
                      textShadow: '0 0 15px rgba(201,168,76,0.6), 0 0 40px rgba(201,168,76,0.3), 0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    <WaveText text="Happy Journey" />
                  </h2>
                  <motion.p
                    className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    Asia Bus Service
                  </motion.p>
                </motion.div>

                {/* Bus */}
                <div>
                  <div className="loader-bus">
                    <span>ASIA BUS SERVICE</span>
                    <i className="loader-stripe" />
                    <i className="headlight" />
                    <i className="taillight" />
                    <i className="wheel wheel-a" />
                    <i className="wheel wheel-b" />
                  </div>
                  <div className="road-lines" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
