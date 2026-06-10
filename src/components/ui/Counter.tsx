import type { ComponentType } from 'react';
import CountUpImport, { type CountUpProps } from 'react-countup';
import { motion } from 'framer-motion';

type CounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function Counter({ value, suffix = '', label }: CounterProps) {
  const CountUp = (CountUpImport as unknown as { default?: ComponentType<CountUpProps> }).default ?? (CountUpImport as unknown as ComponentType<CountUpProps>);

  return (
    <motion.div
      className="rounded-3xl border border-white/8 bg-white/[0.04] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/20 hover:bg-white/[0.07]"
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        <CountUp end={value} duration={2.4} enableScrollSpy scrollSpyOnce separator="," />
        <span className="text-brand-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/45">{label}</p>
    </motion.div>
  );
}
