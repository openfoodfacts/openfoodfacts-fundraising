import React from 'react';
import { X, BookOpen } from 'lucide-react';

const PartnerModal = ({ partner, onClose }) => {
  if (!partner) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 transition-opacity backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl transform transition-transform" onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <div className="w-16 h-16 bg-[#f2e9e4] rounded-2xl mb-6 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-[#341100]" />
        </div>
        <h3 className="text-3xl font-extrabold text-black mb-2">{partner.name}</h3>
        <p className="inline-block bg-gray-100 text-gray-700 font-bold px-3 py-1 rounded-full text-sm mb-6">
          {partner.tier}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {partner.description}
        </p>
      </div>
    </div>
  );
};

export default PartnerModal;
