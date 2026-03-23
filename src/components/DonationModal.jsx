import React, { useState } from 'react';
import { 
  ArrowRight, Heart, ArrowLeft, X, Lock,
  CheckCircle2, Award, UserCircle, 
  MessageSquareHeart, CreditCard, Loader2
} from 'lucide-react';

const DonationModal = ({ isOpen, onClose }) => {
  const [donationStep, setDonationStep] = useState(1);
  const [donationType, setDonationType] = useState('monthly');
  const [donationAmount, setDonationAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
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
    setTimeout(() => {
      setIsProcessing(false);
      setDonationStep(4);
    }, 1500);
  };

  const resetModal = () => {
    setDonationStep(1);
    setDonationType('monthly');
    setDonationAmount(10);
    setCustomAmount('');
    setIsProcessing(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetModal, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4 transition-opacity backdrop-blur-sm" onClick={handleClose}>
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
              onClick={handleClose}
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
              
              <div className="bg-[#FFF4E5] border border-[#FFE0B2] p-4 rounded-xl">
                <div className="flex gap-3 mb-3">
                  <Award className="text-[#FF9900] flex-shrink-0 w-6 h-6" />
                  <p className="text-sm text-[#8A5000] leading-snug">
                    <strong>Unlock your Donor Badge!</strong> Connect your Open Food Facts account or use the same email below to show our community&apos;s gratitude on your profile.
                  </p>
                </div>
                <button className="w-full py-2.5 bg-white border border-[#FFE0B2] shadow-sm rounded-lg font-bold text-[#8A5000] hover:bg-gray-50 flex justify-center items-center gap-2 transition-colors">
                  <UserCircle className="w-5 h-5" /> Connect with Open Food Facts
                </button>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase">
                <hr className="flex-1 border-gray-200" /> OR CONTINUE AS GUEST <hr className="flex-1 border-gray-200" />
              </div>

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
                  <p className="text-sm font-medium text-left">We&apos;ve applied the Donor Badge to the account linked to <strong>{donorDetails.email}</strong>. Check your profile!</p>
                </div>
              )}

              <button 
                onClick={handleClose}
                className="w-full bg-gray-100 hover:bg-gray-200 text-[#341100] font-bold text-lg py-4 rounded-xl transition-colors"
              >
                Return to site
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DonationModal;
