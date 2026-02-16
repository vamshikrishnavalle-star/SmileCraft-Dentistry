import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/treatments' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-glow-blue py-4 md:py-5 shadow-2xl border-b border-white/5" role="navigation" aria-label="Main Navigation">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-0.5 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg p-1" aria-label="GlowDent Home">
          <span className="text-xl sm:text-2xl font-black text-white tracking-tighter">Glow</span>
          <span className="text-xl sm:text-2xl font-light italic text-white tracking-tighter">Dent</span>
        </Link>

        {/* Desktop Links (Visible from lg breakpoint) */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-bold tracking-tight transition-all relative py-1 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md px-2 ${
                location.pathname === link.path ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full"></span>
              )}
            </Link>
          ))}
          <Link 
            to="/book" 
            className="bg-white text-glow-blue px-7 py-2.5 rounded-full font-black text-base hover:bg-glow-accent transition-all shadow-xl transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Book Now
          </Link>
        </div>

        {/* Right Action Icons & Mobile Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Quick Contact Button (Visible on mobile/tablet too) */}
          <Link to="/book" className="hidden sm:flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-5 md:px-6 py-2.5 rounded-full text-sm font-black hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/20">
            <span>Contact</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>

          {/* Hamburger Menu Toggle (Visible below lg) */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="p-2.5 border border-white/20 rounded-full hover:bg-white/10 transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-glow-blue z-[200] transition-all duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col h-[100dvh]`}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <div className="flex items-center">
            <span className="text-2xl font-black text-white tracking-tighter">Glow</span>
            <span className="text-2xl font-light italic text-white tracking-tighter">Dent</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Links Area */}
        <div className="flex-grow flex flex-col justify-center px-8 space-y-6 sm:space-y-10 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl sm:text-6xl font-black transition-all hover:translate-x-2 focus:outline-none ${
                location.pathname === link.path ? 'text-white italic underline underline-offset-8 decoration-white/20' : 'text-white/40 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom Action Area */}
        <div className="p-8 space-y-4">
          <Link 
            to="/book" 
            onClick={() => setIsOpen(false)}
            className="block w-full bg-white text-glow-blue text-center py-5 rounded-3xl text-xl font-black shadow-2xl active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-white/20"
          >
            Start Your Journey
          </Link>
          <div className="flex justify-between items-center px-4 pt-4 border-t border-white/5">
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">LB Nagar, Hyderabad</span>
             <a href="tel:+919123456789" className="text-xs font-bold text-white/60">Call Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;