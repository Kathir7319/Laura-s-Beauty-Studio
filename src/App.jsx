import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);

  const handleOpenBooking = (service = null) => {
    setPreselectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-cream-50 text-charcoal-900 selection:bg-rosewood-200 selection:text-rosewood-900 font-sans">
        
        {/* Sticky Responsive Navbar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
            <Route path="/gallery" element={<Gallery onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
            {/* Fallback */}
            <Route path="*" element={<Home onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Luxury Brand Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Global Interactive Booking Wizard Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          preselectedService={preselectedService}
        />
      </div>
    </Router>
  );
}
