import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/ui/Loader';
import { BookingModal } from './components/ui/BookingModal';
import { FloatingCall } from './components/ui/FloatingCall';
import { FloatingWhatsapp } from './components/ui/FloatingWhatsapp';
import { FloatingBookNow } from './components/ui/FloatingBookNow';
import { Hero } from './components/sections/Hero';
import { MapSection } from './components/sections/MapSection';
import { Services } from './components/sections/Services';
import { Fleet } from './components/sections/Fleet';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { GoogleReviews } from './components/sections/GoogleReviews';
import { CTA } from './components/sections/CTA';
import { Contact } from './components/sections/Contact';
import { AllServices } from './pages/AllServices';
import { FleetPage } from './pages/FleetPage';
import { useScrollReveal } from './hooks/useScrollReveal';

function HomePage({ onBook, openInquiry }: { onBook: () => void; openInquiry: () => void }) {
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
        <Fleet onBook={onBook} />
        <WhyChooseUs />
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

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  const openInquiry = () => setBookingOpen(true);
  const goToBookToday = () => {
    document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Routes>
        <Route path="/" element={<HomePage onBook={goToBookToday} openInquiry={openInquiry} />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/fleet" element={<FleetPage />} />
      </Routes>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
