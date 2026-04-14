import React from 'react';

const Footer = ({ onDonateClick }) => {
  return (
    <footer className="bg-black dark:bg-gray-950 text-gray-400 py-16 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center gap-2 mb-8">
          <img 
            src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg" 
            alt="Open Food Facts" 
            className="h-8 opacity-80" 
          />
        </div>
        <p className="mb-8 max-w-2xl mx-auto text-lg">A 100% independent non-profit association building a collaborative, free, and open database of food products worldwide.</p>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold tracking-wide uppercase">
          <a href="https://world.openfoodfacts.org" className="hover:text-white transition-colors">Main Website</a>
          <a href="https://world.openfoodfacts.org/terms-of-use" className="hover:text-white transition-colors">Terms of Use</a>
          {onDonateClick ? (
            <button onClick={onDonateClick} className="hover:text-white transition-colors text-[#f2e9e4]">Donate</button>
          ) : (
            <a href="https://donate.openfoodfacts.org" className="hover:text-white transition-colors text-[#f2e9e4]">Donate</a>
          )}
        </div>
        <p className="mt-12 text-sm opacity-50 font-medium">© {new Date().getFullYear()} Open Food Facts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
