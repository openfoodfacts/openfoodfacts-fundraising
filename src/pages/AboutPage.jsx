import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalStyles from '../components/GlobalStyles';
import Footer from '../components/Footer';
import AboutHeroSection from '../sections/AboutHeroSection';
import CoreValuesSection from '../sections/CoreValuesSection';
import EcosystemSection from '../sections/EcosystemSection';
import PressSection from '../sections/PressSection';
import AboutPartnersSection from '../sections/AboutPartnersSection';
import useDarkMode from '../hooks/useDarkMode';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, toggleDark] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-jakarta text-black dark:text-white bg-white dark:bg-gray-900 min-h-screen selection:bg-[#341100] selection:text-white overflow-x-hidden transition-colors duration-300">
      <GlobalStyles />

      {/* Navbar with scroll shadow */}
      <nav className={`fixed w-full z-50 bg-[#f2e9e4] dark:bg-gray-900 py-4 transition-all duration-300 dark:border-b dark:border-gray-800 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg"
              alt="Open Food Facts"
              className="h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="font-semibold text-black dark:text-gray-200 hover:text-[#341100]/70 dark:hover:text-orange-400 transition-colors">Support</Link>
            <Link to="/impact" className="font-semibold text-black dark:text-gray-200 hover:text-[#341100]/70 dark:hover:text-orange-400 transition-colors">Impact</Link>
            <Link to="/about" className="font-semibold text-[#341100] dark:text-orange-400 transition-colors">About</Link>
            <button onClick={() => scrollTo('core-values')} className="font-semibold text-black dark:text-gray-200 hover:text-[#341100]/70 dark:hover:text-orange-400 transition-colors cursor-pointer">Values</button>
            <button onClick={() => scrollTo('ecosystem')} className="font-semibold text-black dark:text-gray-200 hover:text-[#341100]/70 dark:hover:text-orange-400 transition-colors cursor-pointer">Ecosystem</button>
            <button
              onClick={toggleDark}
              className="text-gray-500 hover:text-[#341100] dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/" className="bg-[#341100] hover:bg-black dark:bg-orange-600 dark:hover:bg-orange-500 text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5">
              Support Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden p-2 text-black dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#f2e9e4] dark:bg-gray-900 border-t border-[#e2d5ce] dark:border-gray-800 px-4 py-6 space-y-4">
            <Link to="/" className="block font-semibold text-black dark:text-gray-200 hover:text-[#341100]/70 dark:hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Support</Link>
            <Link to="/impact" className="block font-semibold text-black dark:text-gray-200 hover:text-[#341100]/70 dark:hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Impact</Link>
            <Link to="/about" className="block font-semibold text-[#341100] dark:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <button onClick={() => scrollTo('core-values')} className="block font-semibold text-black dark:text-gray-200 hover:text-[#341100]/70 dark:hover:text-orange-400 transition-colors cursor-pointer">Values</button>
            <button onClick={() => scrollTo('ecosystem')} className="block font-semibold text-black dark:text-gray-200 hover:text-[#341100]/70 dark:hover:text-orange-400 transition-colors cursor-pointer">Ecosystem</button>
            <button
              onClick={() => { toggleDark(); setIsMenuOpen(false); }}
              className="flex items-center gap-2 font-semibold text-gray-600 dark:text-gray-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Link to="/" className="block bg-[#341100] hover:bg-black dark:bg-orange-600 dark:hover:bg-orange-500 text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold text-center transition-all shadow-lg" onClick={() => setIsMenuOpen(false)}>
              Support Us
            </Link>
          </div>
        )}
      </nav>

      <AboutHeroSection />
      <CoreValuesSection />
      <EcosystemSection />
      <PressSection />
      <AboutPartnersSection />

      <Footer />
    </div>
  );
};

export default AboutPage;
