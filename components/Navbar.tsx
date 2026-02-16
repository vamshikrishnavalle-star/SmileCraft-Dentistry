import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/treatments' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Testimonial', path: '/gallery' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-glow-blue py-3 shadow-lg' : 'bg-glow-blue py-6'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-0.5">
          <span className="text-2xl font-black text-white tracking-tighter">Glow</span>
          <span className="text-2xl font-light italic text-white tracking-tighter">Dent</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold tracking-tight transition-all hover:opacity-100 ${
                location.pathname === link.path ? 'text-white border-b-2 border-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Prominent Book Now Button at the end of links */}
          <Link 
            to="/book" 
            className="bg-white text-glow-blue px-6 py-2 rounded-full font-black text-base hover:bg-glow-accent transition-all shadow-xl transform hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h10" />
            </svg>
          </button>

          <Link to="/book" className="hidden sm:flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full text-base font-black hover:bg-white/20 transition-all shadow-sm">
            <span>Contact</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-glow-blue z-[100] p-6 animate-fadeIn flex flex-col text-white">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center">
              <span className="text-2xl font-black text-white tracking-tighter">Glow</span>
              <span className="text-2xl font-light italic text-white tracking-tighter">Dent</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 border border-white/20 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold hover:italic transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-white text-glow-blue text-center py-5 rounded-full text-xl font-black shadow-2xl"
            >
              Set Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;