import { Counter } from '../ui/Counter';
import { trustStats } from '../../data/siteData';

export function Trust() {
  return (
    <section className="bg-brand-deep px-6 py-14 sm:px-8">
      <div data-reveal className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustStats.map((stat) => <Counter key={stat.label} {...stat} />)}
      </div>
    </section>
  );
}
