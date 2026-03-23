import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f2e9e4] rounded-3xl p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 border border-[#e2d5ce]">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
              Let&apos;s build the future of food together.
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Whether you represent a major foundation looking to fund a high-impact digital public good, or a tech organization wanting to support open data, we are available to discuss how we can align our goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="bg-[#f2e9e4] p-3 rounded-full text-[#341100]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email our Fundraising Team</p>
                  <a href="mailto:fundraising@openfoodfacts.org" className="text-xl font-extrabold text-black hover:text-[#341100]">
                    fundraising@openfoodfacts.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="bg-[#f2e9e4] p-3 rounded-full text-[#341100]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Direct Line</p>
                  <a href="tel:+33602131457" className="text-xl font-extrabold text-black hover:text-[#341100]">
                    +33 6 02 13 14 57
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
              <h3 className="font-extrabold text-2xl text-black mb-6">Request a Partnership Deck</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#341100] focus:border-[#341100] outline-none transition-all font-medium" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Organization / Foundation</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#341100] focus:border-[#341100] outline-none transition-all font-medium" placeholder="e.g. My Foundation" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#341100] focus:border-[#341100] outline-none transition-all font-medium" placeholder="jane@example.org" />
                </div>
                <button className="w-full bg-[#341100] hover:bg-black text-[#f2e9e4] font-bold py-4 rounded-xl transition-colors mt-4 text-lg">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
