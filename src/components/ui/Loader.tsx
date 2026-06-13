import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';

type LoaderProps = {
  onDone: () => void;
};

/* Inline SVG: Asia logo (orange triangle + A + ASIA text) */
function AsiaLogoSVG() {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(160px, 38vw, 260px)', height: 'auto' }}>
      <polygon points="100,10 10,170 190,170" fill="#e8611a" />
      <text x="100" y="145" textAnchor="middle" fill="white" fontSize="80" fontWeight="900" fontFamily="Inter, Arial, sans-serif">A</text>
      <text x="100" y="210" textAnchor="middle" fill="#e8611a" fontSize="32" fontWeight="300" letterSpacing="10" fontFamily="Inter, Arial, sans-serif">ASIA</text>
    </svg>
  );
}

export function Loader({ onDone }: LoaderProps) {
  const [phase, setPhase] = useState<'logo-in' | 'bus-transit' | 'text-reveal' | 'done'>('logo-in');
  const device = useDeviceType();
  const isMobile = device === 'mobile';

  useEffect(() => {
    // Phase 1: Logo appears and stays (0 - 2.5s)
    const busTimer = setTimeout(() => setPhase('bus-transit'), 2500);
    // Phase 2: Bus crosses screen (2.5s - 6.8s)
    const textOrDoneTimer = setTimeout(() => {
      if (isMobile) {
        // Mobile: show "Happy Journey" text after bus disappears
        setPhase('text-reveal');
      } else {
        setPhase('done');
      }
    }, 6800);
    // Phase 3 (mobile only): text visible then done
    const doneTimer = isMobile
      ? setTimeout(() => setPhase('done'), 9000)
      : null;
    return () => {
      clearTimeout(busTimer);
      clearTimeout(textOrDoneTimer);
      if (doneTimer) clearTimeout(doneTimer);
    };
  }, [isMobile]);

  useEffect(() => {
    if (phase === 'done') {
      const t = setTimeout(onDone, 400);
      return () => clearTimeout(t);
    }
  }, [phase, onDone]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative flex w-full flex-col items-center justify-center">

            {/* ─── LOGO (visible during logo-in only) ─── */}
            {phase === 'logo-in' && (
              <motion.div
                className="absolute flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.3, rotate: -40 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                <AsiaLogoSVG />
                <motion.p
                  className="mt-4 text-sm font-semibold uppercase tracking-[0.38em] text-brand-accent sm:text-base"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Travel in Refined Comfort
                </motion.p>
              </motion.div>
            )}

            {/* ─── BUS TRANSIT ─── */}
            {phase === 'bus-transit' && (
              <motion.div
                className="flex items-center"
                initial={{ x: '-140vw', filter: 'blur(4px)' }}
                animate={{
                  x: ['-140vw', '-5vw', '-5vw', '125vw'],
                  filter: ['blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(5px)'],
                }}
                transition={{
                  duration: 4.3,
                  times: [0, 0.32, 0.68, 1],
                  ease: ['easeOut', 'easeInOut', 'easeIn'],
                }}
              >
                {/* Happy Journey — behind bus on web only */}
                {!isMobile && (
                  <motion.div
                    className="mr-4 flex flex-col items-end gap-1 sm:mr-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
                  >
                    <h2 className="font-display text-2xl font-extrabold whitespace-nowrap tracking-tight text-white sm:text-4xl lg:text-5xl">
                      Happy <span className="text-brand-accent">Journey</span>
                    </h2>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                      Asia Bus Service
                    </p>
                  </motion.div>
                )}

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

            {/* ─── TEXT REVEAL (mobile only — appears after bus exits) ─── */}
            {phase === 'text-reveal' && (
              <motion.div
                className="absolute flex flex-col items-center gap-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.05] }}
                transition={{
                  duration: 2,
                  times: [0, 0.25, 0.65, 1],
                  ease: ['easeOut', 'linear', 'easeIn'],
                }}
              >
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white">
                  Happy <span className="text-brand-accent">Journey</span>
                </h2>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                  Asia Bus Service
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
