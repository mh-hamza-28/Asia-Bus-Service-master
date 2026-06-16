import { useEffect } from 'react';
import gsap from 'gsap';
import { Hero } from './sections';
import { MapSection } from './sections';
import { Services } from './sections';
import { GoogleReviews } from './sections';
import { Fleet } from './sections';
import { WhyChooseUs } from './sections';
import { CTA } from './sections';
import { Contact } from './sections';
import { Footer } from '../components/layout/Footer';
import { FloatingCall } from '../components/ui/FloatingCall';
import { FloatingWhatsapp } from '../components/ui/FloatingWhatsapp';
import { FloatingBookNow } from '../components/ui/FloatingBookNow';
import { useScrollReveal } from '../hooks/useScrollReveal';

type TabletAppProps = {
  onBook: () => void;
  openInquiry: () => void;
};

export default function TabletApp({ onBook, openInquiry }: TabletAppProps) {
  useScrollReveal();

  useEffect(() => {
    gsap.to('html', { scrollBehavior: 'smooth', duration: 0 });
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
      <Footer />
      <FloatingCall />
      <FloatingWhatsapp />
      <FloatingBookNow />
    </>
  );
}
