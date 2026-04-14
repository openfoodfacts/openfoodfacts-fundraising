import GlobalStyles from '../components/GlobalStyles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContributeHeroSection from '../sections/ContributeHeroSection';
import ContributeStatsSection from '../sections/ContributeStatsSection';
import ContributeWaysSection from '../sections/ContributeWaysSection';
import ProPlatformSection from '../sections/ProPlatformSection';
import ContributeCtaSection from '../sections/ContributeCtaSection';

const ContributePage = () => {
  return (
    <div className="font-jakarta text-black bg-white min-h-screen">
      <GlobalStyles />
      <Navbar />
      <ContributeHeroSection />
      <ContributeStatsSection />
      <ContributeWaysSection />
      <ProPlatformSection />
      <ContributeCtaSection />
      <Footer />
    </div>
  );
};

export default ContributePage;
