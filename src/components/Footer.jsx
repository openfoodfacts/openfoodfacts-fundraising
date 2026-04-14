import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Instagram } from 'lucide-react';

const Footer = ({ onDonateClick }) => {
  return (
    <footer className="bg-black dark:bg-gray-950 text-gray-400 py-12 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <img
            src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-dark.svg"
            alt="Open Food Facts"
            className="h-8 mb-6"
          />
          <p className="text-gray-500 text-sm">
            A food products database, made by everyone, for everyone.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Discover</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://world.openfoodfacts.org/nutriscore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Nutri-Score</a></li>
            <li><a href="https://world.openfoodfacts.org/green-score" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Green-Score</a></li>
            <li><a href="https://world.openfoodfacts.org/nova" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ultra-processed Foods</a></li>
            <li><Link to="/discover" className="hover:text-white transition-colors">Discover Page</Link></li>
            <li><Link to="/impact" className="hover:text-white transition-colors">Impact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Contribute</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://world.openfoodfacts.org/1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Add a product</a></li>
            <li><a href="https://world.openfoodfacts.org/data" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Developers API</a></li>
            <li><Link to="/contribute" className="hover:text-white transition-colors">Contribute Page</Link></li>
            {onDonateClick ? (
              <li><button onClick={onDonateClick} className="hover:text-white transition-colors">Donate</button></li>
            ) : (
              <li><a href="https://donate.openfoodfacts.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Donate</a></li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">About</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">Who we are</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Support Us</Link></li>
            <li><a href="https://world.openfoodfacts.org/press" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Press</a></li>
            <li><a href="https://world.openfoodfacts.org/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of use</a></li>
            <li><a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; 2012-2026 Open Food Facts. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://twitter.com/OpenFoodFacts" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://github.com/openfoodfacts" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/open.food.facts/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
