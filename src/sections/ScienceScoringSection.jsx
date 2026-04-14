import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 'nutriscore',
    label: 'Nutri-Score',
    title: 'Nutritional Quality',
    description:
      'The Nutri-Score translates the nutritional table into an easy A to E grade. It helps you balance your diet by favoring foods with better nutritional profiles.',
    learnMoreUrl: 'https://world.openfoodfacts.org/nutriscore',
    learnMoreLabel: 'Learn more about Nutri-Score',
    image: 'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-c-new-en.svg',
    imageAlt: 'Nutri-Score example',
  },
  {
    id: 'ecoscore',
    label: 'Green-Score',
    title: 'Environmental Impact',
    description:
      'The Green-Score tells you the environmental footprint of a product, from agricultural production to packaging and transportation.',
    learnMoreUrl:
      'https://world.openfoodfacts.org/eco-score-the-environmental-impact-of-food-products',
    learnMoreLabel: 'Learn more about Green-Score',
    image: 'https://static.openfoodfacts.org/images/attributes/dist/green-score-a.svg',
    imageAlt: 'Green-Score example',
  },
  {
    id: 'nova',
    label: 'Ultra-processed Foods',
    title: 'Ultra-processed Foods',
    description:
      'The NOVA classification assigns a group from 1 to 4 based on the degree of processing of foods. It helps you identify heavily processed industrial formulations.',
    learnMoreUrl: 'https://world.openfoodfacts.org/nova',
    learnMoreLabel: 'Learn more about Ultra-processed Foods',
    image: 'https://static.openfoodfacts.org/images/attributes/dist/nova-group-3.svg',
    imageAlt: 'NOVA group example',
  },
];

const ScienceScoringSection = () => {
  const [activeTab, setActiveTab] = useState('nutriscore');
  const current = tabs.find((t) => t.id === activeTab);

  return (
    <section className="py-24 px-6 md:px-12 bg-off-bg dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 dark:text-white">
              Science-backed scoring.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
              We don&apos;t invent the scores, we compute them transparently based on peer-reviewed
              science and official public health guidelines.
            </p>

            {/* Tab Navigation */}
            <div className="flex overflow-x-auto no-scrollbar gap-4 mb-8 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-off-btn text-white'
                      : 'bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              <h3 className="text-2xl font-bold mb-3 dark:text-white">{current.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {current.description}
              </p>
              <a
                href={current.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-btn dark:text-orange-400 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                {current.learnMoreLabel} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="reveal delay-200">
            <div className="bg-off-header dark:bg-gray-800 p-10 rounded-[3rem] relative">
              <img
                src={current.image}
                alt={current.imageAlt}
                className="w-full max-w-sm mx-auto h-auto transition-transform duration-500 transform hover:scale-110 drop-shadow-xl"
              />
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/50"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-off-btn/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceScoringSection;
