import React, { useState, useEffect } from 'react';
import { 
  Globe, Users, Database, Leaf, Shield, 
  ArrowRight, Heart, FileText, BarChart3, 
  MessageSquare, ExternalLink, Menu, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalStyles from '../components/GlobalStyles';
import AnimatedCounter from '../components/AnimatedCounter';
import Footer from '../components/Footer';

const ImpactPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-jakarta text-black bg-white min-h-screen selection:bg-[#341100] selection:text-white overflow-x-hidden">
      <GlobalStyles />

      {/* Navbar with scroll shadow */}
      <nav className={`fixed w-full z-50 bg-[#f2e9e4] py-4 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg" 
              alt="Open Food Facts" 
              className="h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Support</Link>
            <Link to="/impact" className="font-semibold text-[#341100] transition-colors">Impact</Link>
            <a href="#stats" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Stats</a>
            <a href="#mission" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Mission</a>
            <a href="#research" className="font-semibold text-black hover:text-[#341100]/70 transition-colors">Research</a>
            <Link to="/" className="bg-[#341100] hover:bg-black text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5">
              Support Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f2e9e4] border-t border-[#e2d5ce] px-4 py-6 space-y-4">
            <Link to="/" className="block font-semibold text-black hover:text-[#341100]/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Support</Link>
            <Link to="/impact" className="block font-semibold text-[#341100] transition-colors" onClick={() => setMobileMenuOpen(false)}>Impact</Link>
            <a href="#stats" className="block font-semibold text-black hover:text-[#341100]/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Stats</a>
            <a href="#mission" className="block font-semibold text-black hover:text-[#341100]/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Mission</a>
            <a href="#research" className="block font-semibold text-black hover:text-[#341100]/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Research</a>
            <Link to="/" className="block bg-[#341100] hover:bg-black text-[#f2e9e4] px-6 py-2.5 rounded-full font-bold text-center transition-all shadow-lg" onClick={() => setMobileMenuOpen(false)}>
              Support Us
            </Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2e9e4] text-[#341100] text-sm font-bold mb-8 uppercase tracking-wide">
              <BarChart3 className="w-4 h-4" />
              Our Impact in Numbers
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight mb-6 tracking-tight">
              Measuring our <span className="text-[#341100]">global impact.</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              From scientific research to policy change, Open Food Facts data drives real-world outcomes. 
              Here&apos;s a look at the numbers behind our mission.
            </p>
          </div>
        </div>
      </header>

      {/* Animated Stats Section */}
      <section id="stats" className="py-20 bg-[#f2e9e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">The Numbers That Matter</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Every number represents real impact — products scanned, lives informed, and research enabled.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center pt-6">
                <div className="bg-[#f2e9e4] p-4 rounded-full">
                  <Database className="w-8 h-8 text-black" />
                </div>
              </div>
              <AnimatedCounter end={4000000} suffix="+" label="Products in database" />
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center pt-6">
                <div className="bg-[#f2e9e4] p-4 rounded-full">
                  <Globe className="w-8 h-8 text-black" />
                </div>
              </div>
              <AnimatedCounter end={150} suffix="+" label="Countries reached" />
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center pt-6">
                <div className="bg-[#f2e9e4] p-4 rounded-full">
                  <Users className="w-8 h-8 text-black" />
                </div>
              </div>
              <AnimatedCounter end={6000000} suffix="+" label="Monthly users" />
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center pt-6">
                <div className="bg-[#f2e9e4] p-4 rounded-full">
                  <FileText className="w-8 h-8 text-black" />
                </div>
              </div>
              <AnimatedCounter end={900} suffix="+" label="Scientific papers" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-[#341100] text-[#f2e9e4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-20 h-20 mx-auto mb-8 text-[#f2e9e4] opacity-90" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Data for the Public Good</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
            Open Food Facts is more than a database — it&apos;s a movement. Our open data has been used in over <strong className="text-white">900 scientific publications</strong>, shaping food policy and empowering consumers worldwide.
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            From the adoption of Nutri-Score across Europe to environmental impact assessments, our data serves as the foundation for evidence-based decision making in food policy.
          </p>
        </div>
      </section>

      {/* Research & Community Impact */}
      <section id="research" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Research & Community Impact</h2>
            <p className="text-xl text-gray-700">
              Our open data empowers researchers, developers, and advocates around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-[#f2e9e4] rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#341100] transition-all group p-8">
              <div className="bg-white inline-flex p-3 rounded-xl mb-6 shadow-sm">
                <FileText className="w-8 h-8 text-[#341100]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Scientific Research</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Over 900 peer-reviewed papers cite Open Food Facts data, spanning nutritional epidemiology, food policy, and environmental science.
              </p>
              <a href="https://world.openfoodfacts.org/science" className="inline-flex items-center gap-2 text-[#341100] font-bold hover:underline">
                View publications <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#f2e9e4] rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#341100] transition-all group p-8">
              <div className="bg-white inline-flex p-3 rounded-xl mb-6 shadow-sm">
                <MessageSquare className="w-8 h-8 text-[#341100]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Community Contributions</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Thousands of volunteers worldwide contribute daily by scanning products, verifying data, and translating the platform into 40+ languages.
              </p>
              <a href="https://world.openfoodfacts.org/contribute" className="inline-flex items-center gap-2 text-[#341100] font-bold hover:underline">
                Join the community <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#f2e9e4] rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#341100] transition-all group p-8">
              <div className="bg-white inline-flex p-3 rounded-xl mb-6 shadow-sm">
                <Leaf className="w-8 h-8 text-[#341100]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Policy Influence</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Our data has directly supported the adoption of Nutri-Score labeling across multiple European countries and informed UN sustainable development tracking.
              </p>
              <a href="https://world.openfoodfacts.org" className="inline-flex items-center gap-2 text-[#341100] font-bold hover:underline">
                Learn more <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More Stats */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-extrabold text-black mb-4 tracking-tight">Growing Every Day</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our database and community continue to grow rapidly, with new products and contributors joining daily from around the world.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
              >
                Support this growth <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <AnimatedCounter end={1200} suffix="+" label="Apps using our API" />
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <AnimatedCounter end={40} suffix="+" label="Languages supported" />
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <AnimatedCounter end={30000} suffix="+" label="Active contributors" />
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <AnimatedCounter end={100} suffix="M+" label="Products scanned/year" />
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <AnimatedCounter end={10} suffix="+" label="Years of open data" />
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <AnimatedCounter end={50} suffix="+" label="Partner organizations" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-8 text-[#341100]" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
            Help us continue making an impact.
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
            Every donation, every scan, and every contribution helps build a more transparent, healthier food system for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="flex items-center justify-center gap-2 bg-[#341100] hover:bg-black text-[#f2e9e4] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
            >
              Support Open Food Facts <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://world.openfoodfacts.org"
              className="flex items-center justify-center gap-2 bg-[#f2e9e4] hover:bg-[#e2d5ce] text-black px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Visit Main Website <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactPage;
