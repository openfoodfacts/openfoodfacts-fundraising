import { ChevronDown } from 'lucide-react';

function ContributeHeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#f2e9e4] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C30,80 70,120 100,80 L100,0 L0,0 Z" fill="#341100"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#341100]/20 bg-white/50 backdrop-blur-sm mb-6 font-semibold text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Join 150,000+ contributors worldwide
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Together, let&apos;s build the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#341100] to-orange-800">
            food revolution.
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-800 font-medium max-w-3xl mx-auto leading-relaxed">
          Open Food Facts is a collaborative database of food products. Every photo you take and every ingredient you transcribe helps millions of people eat better.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button onClick={() => { const el = document.getElementById('ways-to-help'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="bg-[#341100] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-all transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg cursor-pointer">
            Find how to help <ChevronDown size={20} />
          </button>
          <a href="https://world.openfoodfacts.org/discover" target="_blank" rel="noreferrer" className="bg-white text-[#341100] border-2 border-[#341100]/20 px-8 py-4 rounded-full font-bold text-lg hover:border-[#341100] transition-all w-full sm:w-auto justify-center text-center">
            Explore the database
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContributeHeroSection;
