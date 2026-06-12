import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Loader } from './components/ui/Loader';
import { BookingModal } from './components/ui/BookingModal';
import { AllServices } from './pages/AllServices';
import { FleetPage } from './pages/FleetPage';
import { useDeviceType } from './hooks/useDeviceType';
import WebPortal from './web-portal';
import MobileApp from './mobile-app';
import TabletApp from './tablet-app';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();
  const device = useDeviceType();

  const openInquiry = () => setBookingOpen(true);
  const goToBookToday = () => {
    document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Render the device-specific home page layout
  const renderHomePage = () => {
    const props = { onBook: goToBookToday, openInquiry };
    switch (device) {
      case 'mobile':
        return <MobileApp {...props} />;
      case 'tablet':
        return <TabletApp {...props} />;
      default:
        return <WebPortal {...props} />;
    }
  };

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Routes>
        <Route path="/" element={renderHomePage()} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/fleet" element={<FleetPage />} />
      </Routes>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
