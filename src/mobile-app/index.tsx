import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Hero } from './sections';
import { MapSection } from './sections';
import { Services } from './sections';
import { GoogleReviews } from './sections';
import { Fleet } from './sections';
import { WhyChooseUs } from './sections';
import { CTA } from './sections';
import { Contact } from './sections';
import { MobileFooter } from './sections/MobileFooter';
import { FloatingCall } from '../components/ui/FloatingCall';
import { FloatingWhatsapp } from '../components/ui/FloatingWhatsapp';
import { useScrollReveal } from '../hooks/useScrollReveal';

type MobileAppProps = {
  onBook: () => void;
  openInquiry: () => void;
};

export default function MobileApp({ onBook, openInquiry }: MobileAppProps) {
  useScrollReveal();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    gsap.to('html', { scrollBehavior: 'smooth', duration: 0 });
  }, []);

  // Detect when user scrolls past the hero section
  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        <Hero onBook={onBook} />
        <MapSection />
        <Services onBook={onBook} />
        <GoogleReviews />
        <WhyChooseUs />
        <Fleet onBook={onBook} />
        <CTA onInquiry={openInquiry} />
        <Contact onInquiry={openInquiry} />
      </main>
      <MobileFooter />
      <FloatingCall pastHero={pastHero} />
      <FloatingWhatsapp pastHero={pastHero} />
    </>
  );
}
