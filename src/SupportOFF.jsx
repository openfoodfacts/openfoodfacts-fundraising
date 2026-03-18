import React, { useState } from 'react';
import { 
  Globe, 
  Users, 
  Database, 
  Leaf, 
  Heart, 
  Landmark, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  ChevronRight,
  ShieldCheck,
  Code,
  RefreshCw,
  Award,
  BookOpen,
  X,
  Lock,
  ArrowLeft,
  UserCircle,
  CreditCard,
  MessageSquareHeart,
  Loader2
} from 'lucide-react';

const SupportOFF = () => {
  const [activeTab, setActiveTab] = useState('foundations');
  
  // Donation Modal States
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [donationStep, setDonationStep] = useState(1); // 1: Amount, 2: Details, 3: Payment, 4: Success
  const [donationType, setDonationType] = useState('monthly'); // 'monthly' | 'one-time'
  const [donationAmount, setDonationAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState('');
  
  // Donor Details State
  const [donorDetails, setDonorDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subscribeNewsletter: true,
    showOnWall: true,
    showFirstNameOnly: false,
    hideAmount: false,
    comment: ''
  });
  
  const [isProcessing, setIsProcessing] = useState(false);

  const monthlyAmounts = [5, 10, 25, 50, 'custom'];
  const oneTimeAmounts = [20, 50, 100, 250, 'custom'];

  const getImpactMessage = () => {
    const amt = donationAmount === 'custom' ? Number(customAmount) || 0 : donationAmount;
    if (donationType === 'monthly') {
      if (amt >= 50) return "Accelerates our global expansion and AI capabilities.";
      if (amt >= 25) return "Sustains our core data science and development team.";
      if (amt >= 10) return "Covers server costs for over 100,000 product scans every month.";
      return "Helps keep our open-source servers running smoothly.";
    } else {
      if (amt >= 100) return "Provides crucial support for our infrastructure upgrades.";
      if (amt >= 50) return "Helps us index thousands of new products and packaging data.";
      return "Every contribution helps build a more transparent food system.";
    }
  };

  const currentAmount = donationAmount === 'custom' ? (customAmount || 0) : donationAmount;

  const handleProcessPayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setDonationStep(4);
    }, 1500);
  };

  const resetDonationModal = () => {
    setDonationStep(1);
    setDonationType('monthly');
    setDonationAmount(10);
    setCustomAmount('');
    setIsProcessing(false);
  };

  const handleCloseModal = () => {
    setIsDonationModalOpen(false);
    setTimeout(resetDonationModal, 300); // Reset after animation
  };

  const impactStats = [
    { icon: <Database className="w-8 h-8 text-black" />, value: "3.5M+", label: "Products in DB" },
    { icon: <Globe className="w-8 h-8 text-black" />, value: "150+", label: "Countries" },
    { icon: <Users className="w-8 h-8 text-black" />, value: "3M+", label: "Monthly Users" },
    { icon: <Code className="w-8 h-8 text-black" />, value: "200+", label: "Apps use our API" },
  ];

  const partners = [
    { name: "Santé Publique France", tier: "Public Institution" },
    { name: "Google.org", tier: "Foundation Partner" },
    { name: "INRAE", tier: "Scientific Partner" },
    { name: "AFNOR", tier: "Public Institution" },
    { name: "Sorbonne Université", tier: "Research Partner" },
    { name: "10,000+ Individuals", tier: "Grassroots Donors" }
  ];

  const initiatives = [
    {
      title: "Health Initiative",
      icon: <Heart className="w-8 h-8 text-[#341100]" />,
      description: "By democratizing access to the Nutri-Score and the NOVA classification for ultra-processed foods, we empower millions to make informed dietary choices, helping to combat the global rise in diet-related diseases and obesity.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Environment Initiative",
      icon: <Leaf className="w-8 h-8 text-[#341100]" />,
      description: "Our pioneering Eco-Score calculates the ecological impact of food products. By aggregating complex data on carbon footprints, biodiversity, and farming practices, we incentivize sustainable consumption and production at scale.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Circular Economy",
      icon: <RefreshCw className="w-8 h-8 text-[#341100]" />,
      description: "Through Open Packaging Facts, we index packaging materials, shapes, and recycling instructions globally. We are building the data infrastructure needed to tackle the global plastic crisis and promote a true circular economy.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const unSDGs = [
    { num: 2, title: "Zero Hunger", color: "#DDA63A", desc: "Promoting food security and sustainable agriculture." },
    { num: 3, title: "Good Health & Well-being", color: "#4C9F38", desc: "Combating diet-related non-communicable diseases." },
    { num: 12, title: "Responsible Consumption", color: "#BF8B2E", desc: "Ensuring transparency for sustainable consumption." },
    { num: 13, title: "Climate Action", color: "#3F7E44", desc: "Tracking food's carbon footprint via Eco-Score." },
  ];

  const supportWays = {
    foundations: {
      icon: <Landmark className="w-6 h-6" />,
      title: "Philanthropic Foundations",
      subtitle: "Scale a Digital Public Good",
      description: "Open Food Facts is a uniquely positioned lever for systemic change. By funding our core infrastructure and strategic expansion, foundations can simultaneously advance global public health, environmental sustainability, and open data initiatives.",
      points: [
        "Fund specific public health (NOVA) or environmental (Eco-Score) programs.",
        "Support our expansion into new markets (e.g., US, Latin America, Asia).",
        "Enable the development of advanced AI for global label recognition.",
        "Ensure the long-term sustainability of an essential open-source database."
      ],
      cta: "Schedule a Strategy Call",
      link: "#contact"
    },
    corporate: {
      icon: <Code className="w-6 h-6" />,
      title: "Tech & Health Partners",
      subtitle: "Align your CSR with Open Data",
      description: "In alignment with our strict independence policy, we partner with technology companies, healthcare providers, and non-food corporations who want to support transparency through infrastructure, data science, and financial sponsorship.",
      points: [
        "Provide cloud infrastructure and AI processing grants.",
        "Sponsor hackathons and open-data civic initiatives.",
        "Integrate our API into health and wellness applications.",
        "Support our circular economy and packaging tracking goals."
      ],
      cta: "Become a Tech Partner",
      link: "#contact"
    },
    individual: {
      icon: <Users className="w-6 h-6" />,
      title: "Individual Donors",
      subtitle: "Fuel the Transparency Revolution",
      description: "We are an independent non-profit. We don't sell ads, and we don't sell user data. We rely on the generosity of people like you to keep our servers running and our core team working.",
      points: [
        "€5/month covers API access for a new innovative civic app.",
        "€50 funds server costs for 100,000 product scans.",
        "One-time donations help us upgrade our infrastructure.",
        "Tax-deductible in France and several other countries."
      ],
      cta: "Make a Donation",
      link: "https://donate.openfoodfacts.org"
    }
  };

  return (
    <div className="font-jakarta text-black bg-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#f2e9e4] shadow-sm py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg" 
              alt="Open Food Facts" 
              className="h-10 brightness-0"
            />
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#independence" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Independence</a>
            <a href="#initiatives" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Initiatives</a>
            <a href="#ways-to-help" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Ways to Help</a>
            <a href="#contact" className="bg-[#341100] hover:bg-black text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5">
              Support Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2e9e4] text-[#341100] text-sm font-bold mb-8 uppercase tracking-wide">
                <Globe className="w-4 h-4" />
                A Digital Public Good
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight mb-6 tracking-tight">
                Empowering the world to make <span className="text-[#341100]">better food choices.</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Open Food Facts is the &ldquo;Wikipedia of Food&rdquo;. We rely on a global community and visionary philanthropic partners to build a transparent, open-source food system for everyone, everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
                  Partner with us <ArrowRight className="w-5 h-5" />
                </a>
                <button onClick={() => setIsDonationModalOpen(true)} className="flex items-center justify-center gap-2 bg-[#f2e9e4] hover:bg-[#e2d5ce] text-black px-8 py-4 rounded-full font-bold text-lg transition-all">
                  Make a Donation <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
               <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                alt="Global Food Transparency" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-10 -left-10 bg-[#f2e9e4] p-8 rounded-3xl shadow-xl max-w-xs border-4 border-white">
                <Award className="w-12 h-12 text-[#341100] mb-4" />
                <h3 className="font-bold text-xl text-black mb-2">EU Datathon Winners</h3>
                <p className="text-sm text-gray-700">Recognized globally for leveraging open data for public health.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Impact Stats Section */}
      <section className="py-12 bg-[#f2e9e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 bg-[#f2e9e4] p-4 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-[#341100] mb-1">{stat.value}</h3>
                <p className="text-black font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independence Manifesto */}
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

      {/* Our 3 Core Initiatives */}
      <section id="initiatives" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Data as a Catalyst for Change</h2>
            <p className="text-xl text-gray-700">
              We translate raw data into actionable knowledge through three global, science-backed initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {initiatives.map((init, idx) => (
              <div key={idx} className="bg-[#f2e9e4] rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#341100] transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src={init.image} alt={init.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="bg-white inline-flex p-3 rounded-xl mb-6 shadow-sm">
                    {init.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{init.title}</h3>
                  <p className="text-gray-800 leading-relaxed">
                    {init.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN SDGs Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-extrabold text-black mb-4 tracking-tight">Advancing the UN Global Goals</h2>
              <p className="text-lg text-gray-700 mb-6">
                Open Food Facts directly contributes to the United Nations Sustainable Development Goals by providing the open data infrastructure required to monitor and achieve these targets.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
              {unSDGs.map((sdg, idx) => (
                <div key={idx} className="flex flex-col h-full">
                  <div 
                    className="text-white p-4 rounded-t-xl font-bold text-lg flex items-start gap-2 h-24"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span className="text-3xl opacity-80">{sdg.num}</span>
                    <span className="leading-tight">{sdg.title}</span>
                  </div>
                  <div className="bg-white p-4 rounded-b-xl shadow-sm border border-t-0 border-gray-200 flex-grow text-sm text-gray-700">
                    {sdg.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help (Interactive Tabs) */}
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

              {activeTab === 'individual' ? (
                <button 
                  onClick={() => setIsDonationModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
                >
                  {supportWays[activeTab].cta} <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <a 
                  href={supportWays[activeTab].link}
                  className="inline-flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
                >
                  {supportWays[activeTab].cta} <ArrowRight className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame / Acknowledgements */}
      <section id="partners" className="py-24 bg-[#f2e9e4] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Wall of Fame</h2>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto">
              Open Food Facts is made possible by a coalition of forward-thinking institutions, philanthropic foundations, and thousands of individuals worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white border-2 border-transparent hover:border-[#341100] p-8 rounded-2xl text-center transition-all shadow-sm hover:shadow-md group">
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-[#f2e9e4] transition-colors">
                  <BookOpen className="w-8 h-8 text-[#341100]" />
                </div>
                <h4 className="font-extrabold text-xl text-black">{partner.name}</h4>
                <p className="text-gray-600 font-medium mt-2">{partner.tier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f2e9e4] rounded-3xl p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 border border-[#e2d5ce]">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
                Let&rsquo;s build the future of food together.
              </h2>
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                Whether you represent a major foundation looking to fund a high-impact digital public good, or a tech organization wanting to support open data, I am available to discuss how we can align our goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="bg-[#f2e9e4] p-3 rounded-full text-[#341100]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email our Co-Founder &amp; CPO</p>
                    <a href="mailto:pierre@openfoodfacts.org" className="text-xl font-extrabold text-black hover:text-[#341100]">
                      pierre@openfoodfacts.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="bg-[#f2e9e4] p-3 rounded-full text-[#341100]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Direct Line (Pierre Slamich)</p>
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
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#341100] focus:border-[#341100] outline-none transition-all font-medium" placeholder="e.g. The Gates Foundation" />
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

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-8">
            <img 
              src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg" 
              alt="Open Food Facts" 
              className="h-8 opacity-80" 
            />
          </div>
          <p className="mb-8 max-w-2xl mx-auto text-lg">A 100% independent non-profit association building a collaborative, free, and open database of food products worldwide.</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold tracking-wide uppercase">
            <a href="https://world.openfoodfacts.org" className="hover:text-white transition-colors">Main Website</a>
            <a href="https://world.openfoodfacts.org/terms-of-use" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="https://donate.openfoodfacts.org" className="hover:text-white transition-colors text-[#f2e9e4]">Donate</a>
          </div>
          <p className="mt-12 text-sm opacity-50 font-medium">&copy; {new Date().getFullYear()} Open Food Facts. All rights reserved.</p>
        </div>
      </footer>

      {/* Donation Modal */}
      {isDonationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Step 1: Choose Amount */}
            {donationStep === 1 && (
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f2e9e4] rounded-full mb-4">
                    <Heart className="w-8 h-8 text-[#341100]" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-black">Support Open Food Facts</h2>
                  <p className="text-gray-600 mt-2">Your donation keeps our open-source platform free for everyone.</p>
                </div>

                {/* Donation Type Toggle */}
                <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                  <button
                    onClick={() => { setDonationType('monthly'); setDonationAmount(10); setCustomAmount(''); }}
                    className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${donationType === 'monthly' ? 'bg-[#341100] text-white shadow-md' : 'text-gray-600 hover:text-black'}`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => { setDonationType('one-time'); setDonationAmount(50); setCustomAmount(''); }}
                    className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${donationType === 'one-time' ? 'bg-[#341100] text-white shadow-md' : 'text-gray-600 hover:text-black'}`}
                  >
                    One-time
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {(donationType === 'monthly' ? monthlyAmounts : oneTimeAmounts).map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setDonationAmount(amt); if (amt !== 'custom') setCustomAmount(''); }}
                      className={`py-4 rounded-xl font-bold text-lg transition-all border-2 ${
                        donationAmount === amt 
                          ? 'border-[#341100] bg-[#f2e9e4] text-[#341100]' 
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {amt === 'custom' ? 'Other' : `€${amt}`}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                {donationAmount === 'custom' && (
                  <div className="mb-6">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">€</span>
                      <input
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#341100] outline-none text-lg font-bold"
                      />
                    </div>
                  </div>
                )}

                {/* Impact Message */}
                <div className="bg-[#f2e9e4] rounded-xl p-4 mb-8">
                  <p className="text-sm text-[#341100] font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    {getImpactMessage()}
                  </p>
                </div>

                {/* Continue Button */}
                <button
                  onClick={() => setDonationStep(2)}
                  disabled={donationAmount === 'custom' && (!customAmount || Number(customAmount) < 1)}
                  className="w-full bg-[#341100] hover:bg-black text-white font-bold py-4 rounded-xl transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue — €{currentAmount}{donationType === 'monthly' ? '/month' : ''}
                </button>
              </div>
            )}

            {/* Step 2: Donor Details */}
            {donationStep === 2 && (
              <div className="p-8">
                <button onClick={() => setDonationStep(1)} className="flex items-center gap-1 text-gray-500 hover:text-black font-medium mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>

                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-[#f2e9e4] p-3 rounded-full">
                    <UserCircle className="w-6 h-6 text-[#341100]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-black">Your Details</h2>
                    <p className="text-sm text-gray-500">€{currentAmount}{donationType === 'monthly' ? '/month' : ' one-time'}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        value={donorDetails.firstName}
                        onChange={(e) => setDonorDetails({...donorDetails, firstName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#341100] focus:border-[#341100] outline-none font-medium"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={donorDetails.lastName}
                        onChange={(e) => setDonorDetails({...donorDetails, lastName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#341100] focus:border-[#341100] outline-none font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={donorDetails.email}
                      onChange={(e) => setDonorDetails({...donorDetails, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#341100] focus:border-[#341100] outline-none font-medium"
                      placeholder="jane@example.org"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Leave a message (optional)</label>
                    <textarea
                      value={donorDetails.comment}
                      onChange={(e) => setDonorDetails({...donorDetails, comment: e.target.value})}
                      rows="2"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#341100] focus:border-[#341100] outline-none font-medium resize-none"
                      placeholder="A message for the Open Food Facts team..."
                    />
                  </div>

                  {/* Preferences */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={donorDetails.subscribeNewsletter}
                        onChange={(e) => setDonorDetails({...donorDetails, subscribeNewsletter: e.target.checked})}
                        className="w-5 h-5 rounded border-gray-300 text-[#341100] focus:ring-[#341100]"
                      />
                      <span className="text-sm text-gray-700 font-medium">Subscribe to our newsletter</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={donorDetails.showOnWall}
                        onChange={(e) => setDonorDetails({...donorDetails, showOnWall: e.target.checked})}
                        className="w-5 h-5 rounded border-gray-300 text-[#341100] focus:ring-[#341100]"
                      />
                      <span className="text-sm text-gray-700 font-medium">Show my name on the Wall of Fame</span>
                    </label>
                  </div>
                </div>

                <button
                  onClick={() => setDonationStep(3)}
                  disabled={!donorDetails.firstName || !donorDetails.email}
                  className="w-full bg-[#341100] hover:bg-black text-white font-bold py-4 rounded-xl transition-colors text-lg mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 3: Payment */}
            {donationStep === 3 && (
              <div className="p-8">
                <button onClick={() => setDonationStep(2)} className="flex items-center gap-1 text-gray-500 hover:text-black font-medium mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>

                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-[#f2e9e4] p-3 rounded-full">
                    <CreditCard className="w-6 h-6 text-[#341100]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-black">Payment</h2>
                    <p className="text-sm text-gray-500">€{currentAmount}{donationType === 'monthly' ? '/month' : ' one-time'}</p>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 rounded-xl p-5 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Donor</span>
                    <span className="font-bold text-black">{donorDetails.firstName} {donorDetails.lastName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Amount</span>
                    <span className="font-bold text-black">€{currentAmount}{donationType === 'monthly' ? '/month' : ''}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type</span>
                    <span className="font-bold text-black capitalize">{donationType === 'monthly' ? 'Monthly recurring' : 'One-time donation'}</span>
                  </div>
                </div>

                {/* Simulated Payment Button */}
                <button
                  onClick={handleProcessPayment}
                  disabled={isProcessing}
                  className="w-full bg-[#341100] hover:bg-black text-white font-bold py-4 rounded-xl transition-colors text-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" /> Donate €{currentAmount}{donationType === 'monthly' ? '/month' : ''}
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Secure payment powered by Stripe
                </p>
              </div>
            )}

            {/* Step 4: Success */}
            {donationStep === 4 && (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <MessageSquareHeart className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-extrabold text-black mb-2">Thank you, {donorDetails.firstName}!</h2>
                <p className="text-gray-600 mb-6">
                  Your {donationType === 'monthly' ? 'monthly' : 'one-time'} donation of <strong>€{currentAmount}</strong> makes a real difference. You are helping build a more transparent food system for everyone.
                </p>
                
                {donorDetails.comment && (
                  <div className="bg-[#f2e9e4] rounded-xl p-4 mb-6 text-left">
                    <p className="text-sm font-bold text-[#341100] mb-1">Your message:</p>
                    <p className="text-sm text-gray-700 italic">&ldquo;{donorDetails.comment}&rdquo;</p>
                  </div>
                )}

                <p className="text-sm text-gray-500 mb-8">A confirmation email has been sent to <strong>{donorDetails.email}</strong>.</p>

                <button
                  onClick={handleCloseModal}
                  className="w-full bg-[#341100] hover:bg-black text-white font-bold py-4 rounded-xl transition-colors text-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default SupportOFF;
