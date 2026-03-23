import React from 'react';

const unSDGs = [
  { num: 2, title: "Zero Hunger", color: "#DDA63A", desc: "Promoting food security and sustainable agriculture." },
  { num: 3, title: "Good Health & Well-being", color: "#4C9F38", desc: "Combating diet-related non-communicable diseases." },
  { num: 12, title: "Responsible Consumption", color: "#BF8B2E", desc: "Ensuring transparency for sustainable consumption." },
  { num: 13, title: "Climate Action", color: "#3F7E44", desc: "Tracking food's carbon footprint via Green-Score." },
];

const SDGSection = () => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-extrabold text-black mb-4 tracking-tight">Advancing the UN Global Goals</h2>
            <p className="text-lg text-gray-700 mb-6">
              Open Food Facts directly contributes to the United Nations Sustainable Development Goals by providing the open data infrastructure required to monitor and achieve these targets.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {unSDGs.map((sdg, idx) => (
              <div key={idx} className="flex flex-col h-full">
                <div 
                  className="text-white p-4 rounded-t-xl font-bold text-lg flex items-start gap-2 h-24"
                  style={{ backgroundColor: sdg.color }}
                >
                  <span className="text-3xl opacity-80">{sdg.num}</span>
                  <span className="leading-tight">{sdg.title}</span>
                </div>
                <div className="bg-white p-4 rounded-b-xl shadow-sm border border-t-0 border-gray-200 flex-grow text-sm text-gray-700">
                  {sdg.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
