import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSupportClick }) => {
  return (
    <nav className="fixed w-full z-50 bg-[#f2e9e4] shadow-sm py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg" 
            alt="Open Food Facts" 
            className="h-10"
          />
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Support</Link>
          <Link to="/impact" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Impact</Link>
          <a href="#independence" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Independence</a>
          <a href="#initiatives" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Initiatives</a>
          <a href="#ways-to-help" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Ways to Help</a>
          {onSupportClick ? (
            <button
              onClick={onSupportClick}
              className="bg-[#341100] hover:bg-black text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              Support Us
            </button>
          ) : (
            <a href="#contact" className="bg-[#341100] hover:bg-black text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5">
              Support Us
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
