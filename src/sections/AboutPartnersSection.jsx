import React from 'react';
import { Handshake } from 'lucide-react';

const partnerList = [
  "Santé publique France", "Ford Foundation", "European Commission",
  "Mozilla", "Google.org", "Ashoka", "OVHcloud", "Wavestone",
  "Bayes Impact", "ADEME", "NGI Search", "Latitudes",
  "Etalab", "Fondation Free", "Accenture", "Share IT"
];

const AboutPartnersSection = () => {
  return (
    <section id="about-partners" className="py-24 bg-[#f2e9e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Our Partners</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We are proud to work with public institutions, foundations, and technology leaders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partnerList.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-transparent hover:border-[#341100] p-6 rounded-2xl text-center transition-all shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 mx-auto bg-[#f2e9e4] rounded-full mb-3 flex items-center justify-center group-hover:bg-[#341100] transition-colors">
                <Handshake className="w-6 h-6 text-[#341100] group-hover:text-[#f2e9e4] transition-colors" />
              </div>
              <h4 className="font-bold text-black">{partner}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartnersSection;
