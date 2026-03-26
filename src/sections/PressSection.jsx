import React from 'react';
import { Newspaper } from 'lucide-react';

const pressList = [
  "Le Monde", "The Guardian", "BBC RADIO", "LE FIGARO",
  "Les Echos", "France 2", "DailyMail", "France Inter",
  "Reporterre", "il alimentare", "Tortoise."
];

const PressSection = () => {
  return (
    <section id="press" className="py-24 bg-[#341100] text-[#f2e9e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Newspaper className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">In the Press</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Open Food Facts has been featured in major media outlets worldwide.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {pressList.map((outlet, idx) => (
            <div
              key={idx}
              className="bg-[#f2e9e4]/10 border border-[#f2e9e4]/20 px-6 py-3 rounded-full text-[#f2e9e4] font-bold text-lg hover:bg-[#f2e9e4]/20 transition-colors"
            >
              {outlet}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
