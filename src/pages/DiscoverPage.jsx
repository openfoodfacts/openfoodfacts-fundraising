import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import DiscoverNavbar from '../components/DiscoverNavbar';
import DiscoverFooter from '../components/DiscoverFooter';
import DiscoverHeroSection from '../sections/DiscoverHeroSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import ScienceScoringSection from '../sections/ScienceScoringSection';
import OpenDataImpactSection from '../sections/OpenDataImpactSection';
import AppDownloadSection from '../sections/AppDownloadSection';
import useRevealAnimation from '../hooks/useRevealAnimation';

const DiscoverPage = () => {
  useRevealAnimation();

  return (
    <div className="font-jakarta text-black dark:text-white bg-white dark:bg-gray-900 min-h-screen overflow-x-hidden transition-colors duration-300">
      <GlobalStyles />
      <DiscoverNavbar />
      <DiscoverHeroSection />
      <HowItWorksSection />
      <ScienceScoringSection />
      <OpenDataImpactSection />
      <AppDownloadSection />
      <DiscoverFooter />
    </div>
  );
};

export default DiscoverPage;
