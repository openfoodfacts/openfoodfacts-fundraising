import React, { useState } from 'react';
import { Smartphone, Database, Search, ArrowRight, Activity, CheckCircle } from 'lucide-react';

const tabs = [
  {
    key: 'apps',
    label: 'Apps',
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Mobile & Web Apps',
    description: 'Over 1,200 apps use Open Food Facts data to help consumers make better food choices every day.',
    items: [
      'Official Open Food Facts app on iOS and Android',
      'Yuka, Foodvisor, and other popular health apps',
      'Allergen detection and dietary restriction tools',
      'Price comparison and shopping assistants'
    ]
  },
  {
    key: 'data',
    label: 'Data',
    icon: <Database className="w-5 h-5" />,
    title: 'Open Data & API',
    description: 'Our free and open API provides access to data on over 4 million food products from 150+ countries.',
    items: [
      'RESTful API with comprehensive product data',
      'Full database exports in CSV and JSON formats',
      'Nutri-Score, NOVA, and eco-score computations',
      'Multilingual support in 40+ languages'
    ]
  },
  {
    key: 'tools',
    label: 'Tools',
    icon: <Search className="w-5 h-5" />,
    title: 'Research & Analysis Tools',
    description: 'Scientists and researchers use our tools and data to conduct studies and shape food policy worldwide.',
    items: [
      'Advanced search and filtering capabilities',
      'Data visualization and comparison tools',
      'Ingredient and additive analysis',
      'Environmental impact calculators'
    ]
  }
];

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState('apps');
  const current = tabs.find(t => t.key === activeTab);

  return (
    <section id="ecosystem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Our Ecosystem</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A thriving ecosystem of apps, data, and tools built on open food data.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#341100] text-[#f2e9e4] shadow-lg'
                  : 'bg-[#f2e9e4] text-[#341100] hover:bg-[#e2d5ce]'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {current && (
          <div className="max-w-4xl mx-auto bg-[#f2e9e4] rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Activity className="w-8 h-8 text-[#341100]" />
              </div>
              <h3 className="text-2xl font-bold text-black">{current.title}</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {current.description}
            </p>
            <ul className="space-y-3">
              {current.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#341100] mt-0.5 shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="https://world.openfoodfacts.org/data"
                className="inline-flex items-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-6 py-3 rounded-full font-bold transition-all shadow-lg"
              >
                Explore our data <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EcosystemSection;
