import React, { useState, useEffect } from 'react';
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
  const [selectedPartner, setSelectedPartner] = useState(null);
  
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
    { icon: <Database className="w-8 h-8 text-black" />, value: "4M+", label: "Products in DB" },
    { icon: <Globe className="w-8 h-8 text-black" />, value: "150+", label: "Countries" },
    { icon: <Users className="w-8 h-8 text-black" />, value: "6M+", label: "Monthly Users" },
    { icon: <Code className="w-8 h-8 text-black" />, value: "1.2K+", label: "Apps use our API" },
  ];

  const partners = [
    { name: "Santé Publique France", tier: "Public Institution", description: "We work closely with the French national public health agency to deploy and democratize the Nutri-Score, transforming public health awareness across Europe." },
    { name: "Google.org", tier: "Foundation Partner", description: "Through the Google.org Fellowship and financial grants, we scaled our AI capabilities, empowering us to process thousands of labels and ingredients globally." },
    { name: "ADEME", tier: "Public Institution", description: "Partnering with the French Agency for Ecological Transition to develop robust environmental impact metrics and drive sustainable consumption." },
    { name: "AFNIC", tier: "Private Foundation", description: "Supported by the AFNIC Foundation to strengthen our digital infrastructure, ensuring our open data remains resilient, secure, and accessible to all." },
    { name: "EREN", tier: "Research Partner", description: "Collaborating with the Nutritional Epidemiology Research Team (EREN) to provide the vital raw data required for pivotal, independent public health studies." },
    { name: "10,000+ Individuals", tier: "Grassroots Donors", description: "Our most important partners. Everyday citizens who scan products, edit data, and donate financially to keep the database alive, free, and completely independent." }
  ];

  const initiatives = [
    { title: "Health Initiative", icon: <Heart className="w-8 h-8 text-[#341100]" />, description: "By democratizing access to the Nutri-Score and the NOVA classification for ultra-processed foods, we empower millions to make informed dietary choices, helping to combat the global rise in diet-related diseases and obesity.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" },
    { title: "Environment Initiative", icon: <Leaf className="w-8 h-8 text-[#341100]" />, description: "Our pioneering Green-Score calculates the ecological impact of food products. By aggregating complex data on carbon footprints, biodiversity, and farming practices, we incentivize sustainable consumption and production at scale.", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
    { title: "Circular Economy", icon: <RefreshCw className="w-8 h-8 text-[#341100]" />, description: "Through Open Products Facts, we index products globally, increasing the lifespan of products by defragmenting the circular economy. We are building the open data infrastructure needed to tackle waste and promote reuse.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" }
  ];

  const unSDGs = [
    { num: 2, title: "Zero Hunger", color: "#DDA63A", desc: "Promoting food security and sustainable agriculture." },
    { num: 3, title: "Good Health & Well-being", color: "#4C9F38", desc: "Combating diet-related non-communicable diseases." },
    { num: 12, title: "Responsible Consumption", color: "#BF8B2E", desc: "Ensuring transparency for sustainable consumption." },
    { num: 13, title: "Climate Action", color: "#3F7E44", desc: "Tracking food's carbon footprint via Green-Score." },
  ];

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

  return (
    <div className="font-jakarta text-black bg-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .pulse-orange {
          box-shadow: 0 0 0 0 rgba(255, 153, 0, 0.7);
          animation: pulse-ring 2s infinite;
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(255, 153, 0, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(255, 153, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 153, 0, 0); }
        }
      `}</style>

      {/* Interactive Multi-Step Donation Modal */}
      {isDonationModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4 transition-opacity backdrop-blur-sm" onClick={handleCloseModal}>
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl transform transition-transform max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            {donationStep < 4 && (
              <div className="bg-[#f2e9e4] p-6 relative flex items-center justify-center text-center">
                {donationStep > 1 && (
                  <button 
                    className="absolute left-6 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
                    onClick={() => setDonationStep(donationStep - 1)}
                  >
                    <ArrowLeft className="w-5 h-5 text-[#341100]" />
                  </button>
                )}
                <button 
                  className="absolute right-6 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
                  onClick={handleCloseModal}
                >
                  <X className="w-5 h-5 text-[#341100]" />
                </button>
                <div>
                  <h3 className="text-xl font-extrabold text-[#341100] mb-1">
                    {donationStep === 1 && "Support Open Food Facts"}
                    {donationStep === 2 && "Your Details"}
                    {donationStep === 3 && "Secure Payment"}
                  </h3>
                  <div className="flex gap-1 justify-center mt-2">
                    <div className={`h-1.5 w-6 rounded-full ${donationStep >= 1 ? 'bg-[#341100]' : 'bg-gray-300'}`}></div>
                    <div className={`h-1.5 w-6 rounded-full ${donationStep >= 2 ? 'bg-[#341100]' : 'bg-gray-300'}`}></div>
                    <div className={`h-1.5 w-6 rounded-full ${donationStep >= 3 ? 'bg-[#341100]' : 'bg-gray-300'}`}></div>
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 md:p-8">
              
              {/* STEP 1: AMOUNT SELECTION */}
              {donationStep === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                    <button 
                      className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${donationType === 'monthly' ? 'bg-white text-[#341100] shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                      onClick={() => { setDonationType('monthly'); setDonationAmount(10); setCustomAmount(''); }}
                    >
                      Monthly <span className="hidden sm:inline">(Recommended)</span>
                    </button>
                    <button 
                      className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${donationType === 'one-time' ? 'bg-white text-[#341100] shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                      onClick={() => { setDonationType('one-time'); setDonationAmount(50); setCustomAmount(''); }}
                    >
                      One-time
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {(donationType === 'monthly' ? monthlyAmounts : oneTimeAmounts).map((amt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setDonationAmount(amt)}
                        className={`py-4 rounded-xl font-bold text-lg border-2 transition-all ${
                          donationAmount === amt 
                            ? 'border-[#341100] bg-[#f2e9e4] text-[#341100]' 
                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {amt === 'custom' ? 'Other' : `€${amt}`}
                      </button>
                    ))}
                  </div>

                  {donationAmount === 'custom' && (
                    <div className="mb-6 relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">€</span>
                      <input 
                        type="number" min="1" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-[#341100] focus:outline-none focus:ring-4 focus:ring-[#f2e9e4] font-bold text-lg text-[#341100]"
                        autoFocus
                      />
                    </div>
                  )}

                  <div className="bg-blue-50 text-blue-800 p-4 rounded-xl mb-8 flex gap-3 items-start border border-blue-100">
                    <Heart className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                    <p className="text-sm font-medium leading-tight">{getImpactMessage()}</p>
                  </div>

                  <button 
                    disabled={donationAmount === 'custom' && !customAmount}
                    className="w-full bg-[#341100] hover:bg-black disabled:bg-gray-300 text-[#f2e9e4] font-extrabold text-xl py-4 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2"
                    onClick={() => setDonationStep(2)}
                  >
                    Next: Details <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* STEP 2: DETAILS & OPTIONS */}
              {donationStep === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                  
                  {/* Account / Badge Promo */}
                  <div className="bg-[#FFF4E5] border border-[#FFE0B2] p-4 rounded-xl">
                    <div className="flex gap-3 mb-3">
                      <Award className="text-[#FF9900] flex-shrink-0 w-6 h-6" />
                      <p className="text-sm text-[#8A5000] leading-snug">
                        <strong>Unlock your Donor Badge!</strong> Connect your Open Food Facts account or use the same email below to show our community's gratitude on your profile.
                      </p>
                    </div>
                    <button className="w-full py-2.5 bg-white border border-[#FFE0B2] shadow-sm rounded-lg font-bold text-[#8A5000] hover:bg-gray-50 flex justify-center items-center gap-2 transition-colors">
                      <UserCircle className="w-5 h-5" /> Connect with Open Food Facts
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase">
                    <hr className="flex-1 border-gray-200" /> OR CONTINUE AS GUEST <hr className="flex-1 border-gray-200" />
                  </div>

                  {/* Identity Form */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        placeholder="First Name" 
                        className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-[#341100] outline-none font-medium" 
                        value={donorDetails.firstName} onChange={e => setDonorDetails({...donorDetails, firstName: e.target.value})}
                      />
                      <input 
                        placeholder="Last Name" 
                        className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-[#341100] outline-none font-medium" 
                        value={donorDetails.lastName} onChange={e => setDonorDetails({...donorDetails, lastName: e.target.value})}
                      />
                    </div>
                    <input 
                      placeholder="Email Address" type="email" 
                      className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-[#341100] outline-none font-medium" 
                      value={donorDetails.email} onChange={e => setDonorDetails({...donorDetails, email: e.target.value})}
                    />
                  </div>

                  {/* Preferences Toggles */}
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="mt-0.5 relative flex items-center justify-center">
                        <input type="checkbox" className="peer sr-only" checked={donorDetails.subscribeNewsletter} onChange={e => setDonorDetails({...donorDetails, subscribeNewsletter: e.target.checked})} />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-[#341100] peer-checked:border-[#341100] transition-colors"></div>
                        <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium leading-snug">Subscribe to the Friends of Open Food Facts mailing list to receive updates. (Unsubscribe anytime)</span>
                    </label>

                    <div className="h-px bg-gray-200 w-full my-2"></div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 relative flex items-center justify-center">
                        <input type="checkbox" className="peer sr-only" checked={donorDetails.showOnWall} onChange={e => setDonorDetails({...donorDetails, showOnWall: e.target.checked})} />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-[#341100] peer-checked:border-[#341100] transition-colors"></div>
                        <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium leading-snug">Display my donation on the public Donor Wall</span>
                    </label>

                    {/* Expandable Wall Options */}
                    {donorDetails.showOnWall && (
                      <div className="pl-8 space-y-3 animate-in fade-in slide-in-from-top-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded text-[#341100] focus:ring-[#341100] w-4 h-4 border-gray-300" checked={donorDetails.showFirstNameOnly} onChange={e => setDonorDetails({...donorDetails, showFirstNameOnly: e.target.checked})} />
                          <span className="text-sm text-gray-600">Display my first name only</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded text-[#341100] focus:ring-[#341100] w-4 h-4 border-gray-300" checked={donorDetails.hideAmount} onChange={e => setDonorDetails({...donorDetails, hideAmount: e.target.checked})} />
                          <span className="text-sm text-gray-600">Hide donation amount</span>
                        </label>
                        <div className="relative pt-1">
                          <MessageSquareHeart className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                          <textarea 
                            placeholder="Write a comment for the wall... (optional)" 
                            className="w-full border border-gray-300 pl-9 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-[#341100] outline-none resize-none" 
                            rows="2"
                            value={donorDetails.comment} onChange={e => setDonorDetails({...donorDetails, comment: e.target.value})}
                          ></textarea>
                        </div>
                      </div>
                    )}
                  </div>

                  <button 
                    className="w-full bg-[#341100] hover:bg-black text-[#f2e9e4] font-extrabold text-xl py-4 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2 mt-4"
                    onClick={() => setDonationStep(3)}
                  >
                    Proceed to Payment <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* STEP 3: PAYMENT MOCKUP */}
              {donationStep === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="mb-6 flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="font-bold text-gray-700">Total Donation</span>
                    <span className="font-extrabold text-2xl text-[#341100]">€{currentAmount} <span className="text-sm text-gray-500 font-medium">{donationType === 'monthly' ? '/ month' : ''}</span></span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-lg flex justify-center items-center gap-2 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg> Pay
                    </button>
                    <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3.5 rounded-lg flex justify-center items-center gap-2 transition-colors shadow-sm">
                      <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#fbbc05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#ea4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#34a853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="#4285f4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/></svg> Pay
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase mb-6">
                    <hr className="flex-1 border-gray-200" /> OR PAY WITH CARD <hr className="flex-1 border-gray-200" />
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input placeholder="Card number" className="w-full border border-gray-300 pl-10 p-3.5 rounded-lg focus:ring-2 focus:ring-[#341100] outline-none font-medium" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input placeholder="MM / YY" className="w-full border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#341100] outline-none font-medium text-center" />
                      <input placeholder="CVC" className="w-full border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#341100] outline-none font-medium text-center" />
                    </div>
                  </div>

                  <button 
                    disabled={isProcessing}
                    className="w-full bg-[#341100] hover:bg-black text-[#f2e9e4] font-extrabold text-xl py-4 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2 disabled:opacity-80"
                    onClick={handleProcessPayment}
                  >
                    {isProcessing ? <><Loader2 className="w-6 h-6 animate-spin" /> Processing...</> : `Donate €${currentAmount}`}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
                    <Lock className="w-3.5 h-3.5" /> Secure Encrypted Payment
                  </div>
                </div>
              )}

              {/* STEP 4: THANK YOU */}
              {donationStep === 4 && (
                <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center text-center py-8">
                  <div className="w-24 h-24 bg-[#FF9900] rounded-full flex items-center justify-center mb-6 pulse-orange shadow-lg shadow-orange-500/40">
                    <Heart className="w-12 h-12 text-white fill-white" />
                  </div>
                  <h2 className="text-4xl font-extrabold text-[#341100] mb-4">Thank You!</h2>
                  <p className="text-lg text-gray-700 mb-8 max-w-sm">
                    {donorDetails.firstName ? `${donorDetails.firstName}, your` : 'Your'} generosity helps us keep food transparency open, free, and completely independent for millions around the globe.
                  </p>
                  
                  {donorDetails.email && (
                    <div className="bg-orange-50 text-orange-800 p-4 rounded-xl mb-8 border border-orange-100 flex items-center gap-3">
                      <Award className="w-8 h-8 text-[#FF9900]" />
                      <p className="text-sm font-medium text-left">We've applied the Donor Badge to the account linked to <strong>{donorDetails.email}</strong>. Check your profile!</p>
                    </div>
                  )}

                  <button 
                    onClick={handleCloseModal}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-[#341100] font-bold text-lg py-4 rounded-xl transition-colors"
                  >
                    Return to site
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Modal for Wall of Fame Context */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 transition-opacity backdrop-blur-sm" onClick={() => setSelectedPartner(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl transform transition-transform" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              onClick={() => setSelectedPartner(null)}
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <div className="w-16 h-16 bg-[#f2e9e4] rounded-2xl mb-6 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-[#341100]" />
            </div>
            <h3 className="text-3xl font-extrabold text-black mb-2">{selectedPartner.name}</h3>
            <p className="inline-block bg-gray-100 text-gray-700 font-bold px-3 py-1 rounded-full text-sm mb-6">
              {selectedPartner.tier}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {selectedPartner.description}
            </p>
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#f2e9e4] shadow-sm py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg" 
              alt="Open Food Facts" 
              className="h-10"
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
                Open Food Facts is the "Wikipedia of Food". We rely on a global community and visionary philanthropic partners to build a transparent, open-source food system for everyone, everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
                  Partner with us <ArrowRight className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => setIsDonationModalOpen(true)} 
                  className="flex items-center justify-center gap-2 bg-[#f2e9e4] hover:bg-[#e2d5ce] text-black px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
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
                <h3 className="font-bold text-xl text-black mb-2">Digital Public Good</h3>
                <p className="text-sm text-gray-700">Recognized by the UN Endorsed DPGA for leveraging open data for humanity.</p>
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

              <a 
                href={supportWays[activeTab].link}
                onClick={(e) => {
                  if (supportWays[activeTab].link === "https://donate.openfoodfacts.org") {
                    e.preventDefault();
                    setIsDonationModalOpen(true);
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

      {/* Wall of Fame / Acknowledgements */}
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
                onClick={() => setSelectedPartner(partner)}
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f2e9e4] rounded-3xl p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 border border-[#e2d5ce]">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
                Let's build the future of food together.
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
                    <a href="mailto:partnerships@openfoodfacts.org" className="text-xl font-extrabold text-black hover:text-[#341100]">
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
            <button onClick={() => setIsDonationModalOpen(true)} className="hover:text-white transition-colors text-[#f2e9e4]">Donate</button>
          </div>
          <p className="mt-12 text-sm opacity-50 font-medium">© {new Date().getFullYear()} Open Food Facts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SupportOFF;
