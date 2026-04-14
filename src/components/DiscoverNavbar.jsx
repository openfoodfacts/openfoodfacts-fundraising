import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const DiscoverNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();

  return (
    <nav className="bg-off-header dark:bg-gray-900 py-4 px-6 md:px-12 sticky top-0 z-50 transition-all duration-300 w-full dark:border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/discover" className="flex items-center gap-2 z-50">
          <img
            src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg"
            alt="Open Food Facts"
            className="h-8 md:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <Link to="/discover" className="hover:text-off-btn dark:text-gray-200 dark:hover:text-orange-400 transition-colors">Discover</Link>
          <Link to="/contribute" className="hover:text-off-btn dark:text-gray-200 dark:hover:text-orange-400 transition-colors">Contribute</Link>
          <a href="https://world.openfoodfacts.org/data" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:text-gray-200 dark:hover:text-orange-400 transition-colors">Data &amp; API</a>
          <Link to="/about" className="hover:text-off-btn dark:text-gray-200 dark:hover:text-orange-400 transition-colors">About Us</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="text-gray-500 hover:text-off-btn dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="https://donate.openfoodfacts.org" target="_blank" rel="noopener noreferrer" className="font-bold text-off-btn dark:text-orange-400 hover:opacity-80 transition-opacity">Donate</a>
          <a href="#download" className="bg-off-btn dark:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all">Get the App</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden z-50 text-black dark:text-white"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-off-header dark:bg-gray-900 z-40 flex flex-col justify-center items-center gap-8 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link to="/discover" className="text-2xl font-bold dark:text-white" onClick={() => setMobileOpen(false)}>Discover</Link>
        <Link to="/contribute" className="text-2xl font-bold dark:text-white" onClick={() => setMobileOpen(false)}>Contribute</Link>
        <a href="https://world.openfoodfacts.org/data" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold dark:text-white" onClick={() => setMobileOpen(false)}>Data &amp; API</a>
        <Link to="/about" className="text-2xl font-bold dark:text-white" onClick={() => setMobileOpen(false)}>About Us</Link>
        <a href="https://donate.openfoodfacts.org" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-off-btn dark:text-orange-400" onClick={() => setMobileOpen(false)}>Donate</a>
        <a href="#download" className="bg-off-btn dark:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-xl mt-4" onClick={() => setMobileOpen(false)}>Get the App</a>
        <button
          onClick={() => { toggleDark(); setMobileOpen(false); }}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-semibold"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default DiscoverNavbar;
