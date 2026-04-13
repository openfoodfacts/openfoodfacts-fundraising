import { ArrowRight } from 'lucide-react';

function ContributionCard({ icon, title, desc, action, color, link, iconBg }) {
  const isDarkText = color.includes('bg-white') || color.includes('bg-[#f2e9e4]') || color.includes('bg-orange');
  const textColor = isDarkText ? 'text-[#341100]' : 'text-white';
  const descColor = isDarkText ? 'text-gray-700' : 'text-gray-300';
  const defaultIconBg = isDarkText ? 'bg-[#341100]' : 'bg-white/20';

  return (
    <div className={`group rounded-3xl p-8 flex flex-col h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${color}`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${iconBg || defaultIconBg}`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-extrabold mb-3 ${textColor}`}>
        {title}
      </h3>
      <p className={`font-medium mb-8 flex-grow leading-relaxed ${descColor}`}>
        {desc}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center font-bold text-lg group-hover:gap-3 gap-2 transition-all ${textColor}`}
      >
        {action}
        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export default ContributionCard;
