import React, { useState } from 'react';
import { ShieldCheck, Users, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const coreValues = [
  {
    title: "Independent & Non-Profit",
    content: "Our non-profit organization is supported by donations, public entities (such as Santé publique France), and private foundations. We remain completely independent from the food industry.",
    icon: <ShieldCheck className="w-8 h-8 text-[#341100]" />
  },
  {
    title: "Radically Collaborative",
    content: "We welcome all with open arms! We provide open data, knowledge, and tools to empower consumers, producers, scientists, and governments to positively impact the food system.",
    icon: <Users className="w-8 h-8 text-[#341100]" />
  },
  {
    title: "A True Digital Commons",
    content: "Like Wikipedia or OpenStreetMap, we are a citizen project. Data about food is of public interest and published as open data. Our app is completely free, ad-free, and respects your privacy.",
    icon: <Globe className="w-8 h-8 text-[#341100]" />
  }
];

const CoreValuesSection = () => {
  const [expandedValue, setExpandedValue] = useState(0);

  return (
    <section id="core-values" className="py-24 bg-[#f2e9e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Our Core Values</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            These principles guide everything we do and define who we are as a project.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedValue(expandedValue === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#f2e9e4] p-3 rounded-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black">{value.title}</h3>
                </div>
                {expandedValue === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#341100]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#341100]" />
                )}
              </button>
              {expandedValue === idx && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed pl-[4.25rem]">
                    {value.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
