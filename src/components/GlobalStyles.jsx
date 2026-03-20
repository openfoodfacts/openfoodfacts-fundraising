import React from 'react';

const GlobalStyles = () => (
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
);

export default GlobalStyles;
