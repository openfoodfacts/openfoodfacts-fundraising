import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const AboutHeroSection = () => {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2e9e4] text-[#341100] text-sm font-bold mb-8 uppercase tracking-wide">
            <Globe className="w-4 h-4" />
            About Open Food Facts
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight mb-6 tracking-tight">
            A citizen project for <span className="text-[#341100]">food transparency.</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Open Food Facts is a collaborative, free, and open database of food products from around the world.
            Built by everyone, for everyone — like Wikipedia for food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://world.openfoodfacts.org"
              className="flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
            >
              Explore the database <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeroSection;
