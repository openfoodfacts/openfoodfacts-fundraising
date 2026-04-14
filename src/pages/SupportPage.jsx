import React, { useState } from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DonationModal from '../components/DonationModal';
import PartnerModal from '../components/PartnerModal';
import HeroSection from '../sections/HeroSection';
import ImpactStatsSection from '../sections/ImpactStatsSection';
import IndependenceSection from '../sections/IndependenceSection';
import InitiativesSection from '../sections/InitiativesSection';
import SDGSection from '../sections/SDGSection';
import SupportWaysSection from '../sections/SupportWaysSection';
import WallOfFameSection from '../sections/WallOfFameSection';
import ContactSection from '../sections/ContactSection';

const SupportPage = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const openDonationModal = () => setIsDonationModalOpen(true);
  const closeDonationModal = () => setIsDonationModalOpen(false);

  return (
    <div className="font-jakarta text-black dark:text-white bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <GlobalStyles />
      <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} />
      <PartnerModal partner={selectedPartner} onClose={() => setSelectedPartner(null)} />
      <Navbar onSupportClick={openDonationModal} />
      <HeroSection onDonateClick={openDonationModal} />
      <ImpactStatsSection />
      <IndependenceSection />
      <InitiativesSection />
      <SDGSection />
      <SupportWaysSection onDonateClick={openDonationModal} />
      <WallOfFameSection onSelectPartner={setSelectedPartner} />
      <ContactSection />
      <Footer onDonateClick={openDonationModal} />
    </div>
  );
};

export default SupportPage;
