import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Twitter, Github, Instagram } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const DiscoverFooter = () => {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <img
            src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg"
            alt="Open Food Facts"
            className="h-8 mb-6"
          />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            A food products database, made by everyone, for everyone.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 dark:text-white">Discover</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="https://world.openfoodfacts.org/nutriscore" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Nutri-Score</a></li>
            <li><a href="https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Green-Score</a></li>
            <li><a href="https://world.openfoodfacts.org/nova" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Ultra-processed Foods</a></li>
            <li><a href="https://world.openfoodfacts.org" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Search products</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 dark:text-white">Contribute</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="https://world.openfoodfacts.org/1" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Add a product</a></li>
            <li><a href="https://world.openfoodfacts.org/data" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Developers API</a></li>
            <li><a href="https://donate.openfoodfacts.org" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Donate</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 dark:text-white">About</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link to="/about" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Who we are</Link></li>
            <li><a href="https://world.openfoodfacts.org/press" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Press</a></li>
            <li><a href="https://world.openfoodfacts.org/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Terms of use</a></li>
            <li><a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-off-btn dark:hover:text-orange-400 transition-colors">Privacy policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Open Food Facts. Open Data.
        </p>
        <div className="flex items-center gap-6">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="text-gray-500 hover:text-off-btn dark:text-gray-400 dark:hover:text-orange-400 transition-colors flex items-center gap-2 text-sm font-semibold"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          <div className="flex gap-4 border-l border-gray-200 dark:border-gray-700 pl-6">
            <a href="https://twitter.com/OpenFoodFacts" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-off-btn dark:hover:text-orange-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/openfoodfacts" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-off-btn dark:hover:text-orange-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/open.food.facts/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-off-btn dark:hover:text-orange-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DiscoverFooter;
