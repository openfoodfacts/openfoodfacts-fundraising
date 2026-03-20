import React, { useState } from 'react';
import { Landmark, Code, Users, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

const supportWays = {
  foundations: {
    icon: <Landmark className="w-6 h-6" />, title: "Philanthropic Foundations", subtitle: "Scale a Digital Public Good",
    description: "Open Food Facts is a uniquely positioned lever for systemic change. By funding our core infrastructure and strategic expansion, foundations can simultaneously advance global public health, environmental sustainability, and open data initiatives.",
    points: ["Fund specific public health (NOVA) or environmental (Green-Score) programs.", "Support our expansion into new markets (e.g., US, Latin America, Asia).", "Enable the development of advanced AI for global label recognition.", "Ensure the long-term sustainability of an essential open-source database."],
    cta: "Schedule a Strategy Call", link: "#contact"
  },
  corporate: {
    icon: <Code className="w-6 h-6" />, title: "Tech & Infrastructure Partners", subtitle: "Align your CSR with Open Data",
    description: "In alignment with our strict independence policy, we partner with technology companies and non-food corporations who want to support transparency. Crucially, infrastructure isn't just machines and servers—it also requires funding for the dedicated human experts who build and maintain it.",
    points: ["Provide grants for cloud infrastructure and AI processing.", "Fund the core development team maintaining the database.", "Sponsor hackathons and open-data civic initiatives.", "Support our circular economy and product lifespan tracking goals."],
    cta: "Become a Tech Partner", link: "#contact"
  },
  individual: {
    icon: <Users className="w-6 h-6" />, title: "Individual Donors", subtitle: "Fuel the Transparency Revolution",
    description: "We are an independent non-profit. We don't sell ads, and we don't sell user data. We rely on the generosity of people like you to keep our servers running and our core team working.",
    points: ["€5/month covers API access for a new innovative civic app.", "€50 funds server costs for 100,000 product scans.", "One-time donations help us upgrade our infrastructure.", "Tax-deductible in France and several other countries."],
    cta: "Make a Donation", link: "https://donate.openfoodfacts.org"
  }
};

const SupportWaysSection = ({ onDonateClick }) => {
  const [activeTab, setActiveTab] = useState('foundations');

  return (
    <section id="ways-to-help" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">How You Can Support Us</h2>
          <p className="text-xl text-gray-700">
            We offer multiple avenues for support, tailored to your capacity for impact. Choose your path to join the movement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {Object.keys(supportWays).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-4 p-6 rounded-2xl text-left transition-all duration-200 border-2 ${
                  activeTab === key 
                    ? 'border-[#341100] bg-[#f2e9e4] shadow-md' 
                    : 'border-gray-100 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`p-3 rounded-xl ${activeTab === key ? 'bg-[#341100] text-[#f2e9e4]' : 'bg-gray-100 text-black'}`}>
                  {supportWays[key].icon}
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${activeTab === key ? 'text-[#341100]' : 'text-gray-800'}`}>
                    {supportWays[key].title}
                  </h3>
                </div>
                <ChevronRight className={`ml-auto w-5 h-5 ${activeTab === key ? 'text-[#341100]' : 'text-gray-300'}`} />
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="inline-flex items-center gap-2 text-[#341100] font-bold mb-4 uppercase tracking-wider text-sm bg-[#f2e9e4] px-4 py-1.5 rounded-full">
              {supportWays[activeTab].icon}
              {supportWays[activeTab].title}
            </div>
            <h3 className="text-3xl font-extrabold text-black mb-4">
              {supportWays[activeTab].subtitle}
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {supportWays[activeTab].description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {supportWays[activeTab].points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#341100] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <a 
              href={supportWays[activeTab].link}
              onClick={(e) => {
                if (supportWays[activeTab].link === "https://donate.openfoodfacts.org") {
                  e.preventDefault();
                  onDonateClick?.();
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
            >
              {supportWays[activeTab].cta} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportWaysSection;
