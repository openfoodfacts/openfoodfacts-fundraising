import React from 'react';
import { ShieldCheck } from 'lucide-react';

const IndependenceSection = () => {
  return (
    <section id="independence" className="py-24 bg-[#341100] text-[#f2e9e4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ShieldCheck className="w-20 h-20 mx-auto mb-8 text-[#f2e9e4] opacity-90" />
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">100% Independent. 100% Transparent.</h2>
        <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
          To maintain our absolute objectivity and the trust of our millions of users globally, we maintain a strict policy of independence. <strong className="text-white">We do not accept financial sponsorship or donations from food manufacturers or the food retail industry.</strong>
        </p>
        <p className="text-lg opacity-80 max-w-3xl mx-auto">
          Our data is built for everyone, but our agenda is dictated by no one. We rely entirely on citizen donations, philanthropic foundations, and scientific/tech partnerships to fund our operations and scale our impact.
        </p>
      </div>
    </section>
  );
};

export default IndependenceSection;
