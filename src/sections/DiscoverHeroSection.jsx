import React from 'react';
import { Smartphone, ScanLine } from 'lucide-react';

const DiscoverHeroSection = () => {
  return (
    <header className="bg-off-header dark:bg-gray-900 pt-12 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Decorative bg elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/40 blob-shape blur-xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-100/50 blob-shape blur-xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="reveal">
          <div className="inline-block bg-white/60 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-6 text-off-btn dark:text-orange-300 border border-off-btn/10 dark:border-orange-300/20">
            The Wikipedia of Food
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight dark:text-white">
            Understand your food.{' '}
            <br />
            <span className="text-off-btn dark:text-orange-400 relative">
              Empower
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-off-btn/20 dark:text-orange-400/20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{' '}
            your choices.
          </h1>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-10 leading-relaxed max-w-lg">
            A collaborative, free, and open database of food products from around the world. Made by
            everyone, for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#download"
              className="bg-off-btn text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-soft hover:-translate-y-1 transition-all flex justify-center items-center gap-2"
            >
              <Smartphone className="w-5 h-5" /> Download the App
            </a>
            <a
              href="#explore"
              className="bg-transparent border-2 border-off-btn dark:border-orange-400 text-off-btn dark:text-orange-400 px-8 py-4 rounded-full font-bold text-center hover:bg-off-btn dark:hover:bg-orange-400 hover:text-white dark:hover:text-gray-900 transition-all flex justify-center items-center gap-2"
            >
              Explore Database
            </a>
          </div>
        </div>

        {/* Hero Interactive Mockup */}
        <div className="relative reveal delay-200 hidden lg:block">
          <div className="absolute inset-0 bg-off-btn/5 dark:bg-orange-400/5 blob-shape scale-110"></div>
          <div className="relative bg-white dark:bg-gray-800 p-6 rounded-[2.5rem] shadow-soft border border-gray-100 dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Fake App UI */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-600">
              <div className="h-48 bg-white dark:bg-gray-800 relative overflow-hidden flex items-center justify-center p-4">
                <img
                  src="https://images.openfoodfacts.org/images/products/871/052/292/2019/front_en.126.400.jpg"
                  alt="Tomato Ketchup"
                  className="h-full w-auto object-contain drop-shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-xl">Organic Tomato Ketchup</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <img
                    src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-c-new-en.svg"
                    alt="Nutriscore C"
                    className="h-10"
                  />
                  <img
                    src="https://static.openfoodfacts.org/images/attributes/dist/green-score-a.svg"
                    alt="Green-Score A"
                    className="h-10"
                  />
                  <img
                    src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-3.svg"
                    alt="Nova 3"
                    className="h-10"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-600 pb-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">Sugar</span>
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded">
                      Moderate
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-600 pb-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">Additives</span>
                    <span className="text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                      None
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">Origin</span>
                    <span className="text-gray-800 dark:text-gray-200 font-bold">France</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Scanner Badge */}
            <div className="absolute -bottom-6 -left-6 bg-off-btn text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
              <div className="bg-white/20 p-2 rounded-xl">
                <ScanLine className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs opacity-80 font-semibold">Live Scanner</p>
                <p className="font-bold">Scan to uncover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DiscoverHeroSection;
