import React from 'react';
import { BookOpen } from 'lucide-react';

const partners = [
  { name: "Santé Publique France", tier: "Public Institution", description: "We work closely with the French national public health agency to deploy and democratize the Nutri-Score, transforming public health awareness across Europe." },
  { name: "Google.org", tier: "Foundation Partner", description: "Through the Google.org Fellowship and financial grants, we scaled the Green-Score as well as our AI capabilities, empowering us to process millions of products globally." },
  { name: "ADEME", tier: "Public Institution", description: "Partnering with the French Agency for Ecological Transition to develop robust environmental impact metrics and drive sustainable consumption." },
  { name: "AFNIC", tier: "Private Foundation", description: "Supported by the AFNIC Foundation to develop our circular economy initiative, with Open Products Facts, with the long term goal to increase the lifespan of products." },
  { name: "EREN", tier: "Research Partner", description: "Collaborating with the Nutritional Epidemiology Research Team (EREN) to provide the vital raw data required for pivotal, independent public health studies." },
  { name: "10,000+ Individuals", tier: "Grassroots Donors", description: "Our most important partners. Everyday citizens who scan products, edit data, and donate financially to keep the database alive, free, and completely independent." }
];

const WallOfFameSection = ({ onSelectPartner }) => {
  return (
    <section id="partners" className="py-24 bg-[#f2e9e4] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Wall of Fame</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Open Food Facts is made possible by a coalition of forward-thinking institutions, philanthropic foundations, and thousands of individuals worldwide. Click below to learn more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner, idx) => (
            <button 
              key={idx} 
              onClick={() => onSelectPartner(partner)}
              className="bg-white border-2 border-transparent hover:border-[#341100] p-8 rounded-2xl text-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group w-full text-left flex flex-col items-center cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-[#f2e9e4] transition-colors">
                <BookOpen className="w-8 h-8 text-[#341100]" />
              </div>
              <h4 className="font-extrabold text-xl text-black text-center">{partner.name}</h4>
              <p className="text-gray-600 font-medium mt-2 text-center">{partner.tier}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfFameSection;
