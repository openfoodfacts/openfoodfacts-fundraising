import React from 'react';
import { Heart, Leaf, RefreshCw } from 'lucide-react';

const initiatives = [
  { title: "Health Initiative", icon: <Heart className="w-8 h-8 text-[#341100]" />, description: "By democratizing access to the Nutri-Score and the NOVA classification for ultra-processed foods, we empower millions to make informed dietary choices, helping to combat the global rise in diet-related diseases and obesity.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" },
  { title: "Environment Initiative", icon: <Leaf className="w-8 h-8 text-[#341100]" />, description: "Our pioneering Green-Score calculates the ecological impact of food products. By aggregating complex data on carbon footprints, biodiversity, and farming practices, we incentivize sustainable consumption and production at scale.", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
  { title: "Circular Economy", icon: <RefreshCw className="w-8 h-8 text-[#341100]" />, description: "Through Open Products Facts, we index products globally, increasing the lifespan of products by defragmenting the circular economy. We are building the open data infrastructure needed to tackle waste and promote reuse.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" }
];

const InitiativesSection = () => {
  return (
    <section id="initiatives" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Data as a Catalyst for Change</h2>
          <p className="text-xl text-gray-700">
            We translate raw data into actionable knowledge through three global, science-backed initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {initiatives.map((init, idx) => (
            <div key={idx} className="bg-[#f2e9e4] rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#341100] transition-all group">
              <div className="h-48 overflow-hidden">
                <img src={init.image} alt={init.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="bg-white inline-flex p-3 rounded-xl mb-6 shadow-sm">
                  {init.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{init.title}</h3>
                <p className="text-gray-800 leading-relaxed">
                  {init.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
