import React from 'react';
import { Database, Globe, Users, Code } from 'lucide-react';

const impactStats = [
  { icon: <Database className="w-8 h-8 text-black" />, value: "4M+", label: "Products in DB" },
  { icon: <Globe className="w-8 h-8 text-black" />, value: "150+", label: "Countries" },
  { icon: <Users className="w-8 h-8 text-black" />, value: "6M+", label: "Monthly Users" },
  { icon: <Code className="w-8 h-8 text-black" />, value: "1.2K+", label: "Apps use our API" },
];

const ImpactStatsSection = () => {
  return (
    <section className="py-12 bg-[#f2e9e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 bg-[#f2e9e4] p-4 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-[#341100] mb-1">{stat.value}</h3>
              <p className="text-black font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
