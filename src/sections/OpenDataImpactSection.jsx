import React from 'react';
import { Globe2, Users } from 'lucide-react';

const stats = [
  { value: '4.1M', label: 'Products' },
  { value: '150+', label: 'Countries' },
  { value: '20k+', label: 'Contributors' },
  { value: 'Free', label: 'Forever' },
];

const OpenDataImpactSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-off-btn dark:bg-gray-950 text-white overflow-hidden relative transition-colors duration-300">
      {/* Abstract bg shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <Globe2 className="w-96 h-96 absolute -right-20 -bottom-20" />
        <Users className="w-64 h-64 absolute left-10 top-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">By everyone, for everyone.</h2>
          <p className="text-xl text-white/80">
            Open Food Facts is a non-profit project driven by tens of thousands of volunteers
            globally. All the data is open data, empowering developers, scientists, and citizens.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal delay-200">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-4xl md:text-6xl font-extrabold text-[#f2e9e4] mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenDataImpactSection;
