import { Smartphone, Edit3, Heart, Code, Globe, Megaphone } from 'lucide-react';
import ContributionCard from '../components/ContributionCard';

const contributions = [
  {
    icon: <Smartphone size={32} className="text-white" />,
    title: 'Add Products',
    desc: 'Download our app and scan products while doing your groceries. Every new product helps build the database.',
    action: 'Get the App',
    color: 'bg-[#341100]',
    link: 'https://world.openfoodfacts.org/open-food-facts-mobile-app',
  },
  {
    icon: <Edit3 size={32} className="text-[#341100]" />,
    title: 'Edit & Correct Data',
    desc: 'Transcribe ingredients from photos, verify nutritional values, and ensure our data is top quality.',
    action: 'Start Editing',
    color: 'bg-white border-2 border-gray-200 text-[#341100]',
    iconBg: 'bg-[#f2e9e4]',
    link: 'https://world.openfoodfacts.org/contribute',
  },
  {
    icon: <Heart size={32} className="text-[#341100]" />,
    title: 'Make a Donation',
    desc: 'As a non-profit, we rely on your donations to pay for our servers and keep our small team running.',
    action: 'Donate Now',
    color: 'bg-[#f2e9e4]',
    iconBg: 'bg-white',
    link: 'https://openfoodfacts.github.io/openfoodfacts-fundraising/',
  },
  {
    icon: <Code size={32} className="text-white" />,
    title: 'Write Code',
    desc: 'Help us build the next generation of our mobile app (Flutter/Dart), our backend (Perl/Python) or our frontend (React).',
    action: 'View our GitHub',
    color: 'bg-gray-900 text-white',
    iconBg: 'bg-gray-800',
    link: 'https://github.com/openfoodfacts',
  },
  {
    icon: <Globe size={32} className="text-[#341100]" />,
    title: 'Translate',
    desc: "Food is a universal language, but our app isn't yet! Help us translate the project into your native language.",
    action: 'Join Crowdin',
    color: 'bg-white border-2 border-gray-200',
    iconBg: 'bg-[#f2e9e4]',
    link: 'https://translate.openfoodfacts.org/',
  },
  {
    icon: <Megaphone size={32} className="text-[#341100]" />,
    title: 'Spread the Word',
    desc: 'Become an ambassador. Talk about Open Food Facts on social media, write an article, or tell your friends.',
    action: 'Access Press Kit',
    color: 'bg-orange-100',
    iconBg: 'bg-white',
    link: 'https://world.openfoodfacts.org/press',
  },
];

function ContributeWaysSection() {
  return (
    <section id="ways-to-help" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf6f4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Choose your superpower</h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            There are many ways to support Open Food Facts. Choose the one that fits your skills and available time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((item) => (
            <ContributionCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContributeWaysSection;
