
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Treatments from './pages/Treatments';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Book from './pages/Book';
import WhatsAppWidget from './components/WhatsAppWidget';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
};

export default App;
