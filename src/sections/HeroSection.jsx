import React from 'react';
import { Globe, ArrowRight, Heart, Award } from 'lucide-react';

const HeroSection = ({ onDonateClick }) => {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2e9e4] text-[#341100] text-sm font-bold mb-8 uppercase tracking-wide">
              <Globe className="w-4 h-4" />
              A Digital Public Good
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight mb-6 tracking-tight">
              Empowering the world to make <span className="text-[#341100]">better food choices.</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Open Food Facts is the &quot;Wikipedia of Food&quot;. We rely on a global community and visionary philanthropic partners to build a transparent, open-source food system for everyone, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
                Partner with us <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={onDonateClick} 
                className="flex items-center justify-center gap-2 bg-[#f2e9e4] hover:bg-[#e2d5ce] text-black px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Make a Donation <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
             <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
              alt="Global Food Transparency" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
            />
            <div className="absolute -bottom-10 -left-10 bg-[#f2e9e4] p-8 rounded-3xl shadow-xl max-w-xs border-4 border-white">
              <Award className="w-12 h-12 text-[#341100] mb-4" />
              <h3 className="font-bold text-xl text-black mb-2">Digital Public Good</h3>
              <p className="text-sm text-gray-700">Recognized by the UN Endorsed DPGA for leveraging open data for humanity.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
