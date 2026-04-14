import React from 'react';
import { Barcode, SearchCheck, ArrowLeftRight } from 'lucide-react';

const steps = [
  {
    icon: <Barcode className="w-8 h-8" />,
    number: '1.',
    title: 'Scan',
    description:
      'Use the Open Food Facts app to scan the barcode of any food product, anywhere in the world.',
  },
  {
    icon: <SearchCheck className="w-8 h-8" />,
    number: '2.',
    title: 'Understand',
    description:
      'Instantly view independent scientific scores like Nutri-Score, Green-Score, and NOVA group.',
  },
  {
    icon: <ArrowLeftRight className="w-8 h-8" />,
    number: '3.',
    title: 'Compare',
    description:
      'Find better alternatives. Filter by allergens, vegan, organic, or your personal dietary preferences.',
  },
];

const HowItWorksSection = () => {
  return (
    <section
      className="py-24 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300"
      id="explore"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 dark:text-white">
            Making sense of labels
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We decode the complex information on packaging so you can make informed choices in
            seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`bg-off-header/30 dark:bg-gray-800 p-8 rounded-[2rem] reveal hover:-translate-y-2 transition-transform duration-300 ${
                idx === 1 ? 'delay-100' : idx === 2 ? 'delay-200' : ''
              }`}
            >
              <div className="w-16 h-16 bg-off-btn dark:bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">
                {step.number} {step.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
