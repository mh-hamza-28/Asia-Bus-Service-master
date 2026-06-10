import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export function FloatingBookNow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#book-now"
      className={`fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full bg-brand-accent px-6 py-4 text-base font-bold text-white shadow-2xl shadow-brand-accent/35 transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-8 opacity-0'
      } animate-float-book`}
    >
      <Phone size={22} className="animate-phone-ring" />
      <span className="hidden sm:inline">Book Now</span>
    </a>
  );
}
