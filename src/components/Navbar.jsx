import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = ({ onSupportClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();

  return (
    <nav className="fixed w-full z-50 bg-[#f2e9e4] dark:bg-gray-900 shadow-sm dark:border-b dark:border-gray-800 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg"
            alt="Open Food Facts"
            className="h-10"
          />
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-semibold text-black dark:text-gray-200 hover:text-[#341100] dark:hover:text-orange-400 transition-colors">Support</Link>
          <Link to="/impact" className="font-semibold text-black dark:text-gray-200 hover:text-[#341100] dark:hover:text-orange-400 transition-colors">Impact</Link>
          <Link to="/about" className="font-semibold text-black dark:text-gray-200 hover:text-[#341100] dark:hover:text-orange-400 transition-colors">About</Link>
          <Link to="/discover" className="font-semibold text-black dark:text-gray-200 hover:text-[#341100] dark:hover:text-orange-400 transition-colors">Discover</Link>
          <button
            onClick={toggleDark}
            className="text-gray-500 hover:text-[#341100] dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          {onSupportClick ? (
            <button
              onClick={onSupportClick}
              className="bg-[#341100] hover:bg-black dark:bg-orange-600 dark:hover:bg-orange-500 text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              Support Us
            </button>
          ) : (
            <a href="#contact" className="bg-[#341100] hover:bg-black dark:bg-orange-600 dark:hover:bg-orange-500 text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5">
              Support Us
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-black dark:text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f2e9e4] dark:bg-gray-900 border-t border-[#e2d5ce] dark:border-gray-800 px-4 py-6 space-y-4">
          <Link to="/" className="block font-semibold text-black dark:text-gray-200 hover:text-[#341100] dark:hover:text-orange-400 transition-colors" onClick={() => setMobileOpen(false)}>Support</Link>
          <Link to="/impact" className="block font-semibold text-black dark:text-gray-200 hover:text-[#341100] dark:hover:text-orange-400 transition-colors" onClick={() => setMobileOpen(false)}>Impact</Link>
          <Link to="/about" className="block font-semibold text-black dark:text-gray-200 hover:text-[#341100] dark:hover:text-orange-400 transition-colors" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/discover" className="block font-semibold text-black dark:text-gray-200 hover:text-[#341100] dark:hover:text-orange-400 transition-colors" onClick={() => setMobileOpen(false)}>Discover</Link>
          <button
            onClick={() => { toggleDark(); setMobileOpen(false); }}
            className="flex items-center gap-2 font-semibold text-gray-600 dark:text-gray-300"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
          {onSupportClick ? (
            <button
              onClick={() => { onSupportClick(); setMobileOpen(false); }}
              className="block w-full bg-[#341100] hover:bg-black dark:bg-orange-600 dark:hover:bg-orange-500 text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold text-center transition-all shadow-lg"
            >
              Support Us
            </button>
          ) : (
            <a href="#contact" className="block bg-[#341100] hover:bg-black dark:bg-orange-600 dark:hover:bg-orange-500 text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold text-center transition-all shadow-lg" onClick={() => setMobileOpen(false)}>
              Support Us
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
