import { Database, Users, Globe, Heart } from 'lucide-react';

const stats = [
  { icon: Database, value: '4.1M+', label: 'Products' },
  { icon: Users, value: '15K+', label: 'Monthly Active' },
  { icon: Globe, value: '150+', label: 'Countries' },
  { icon: Heart, value: '100%', label: 'Non-Profit' },
];

function ContributeStatsSection() {
  return (
    <section className="py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <stat.icon className="w-10 h-10 mx-auto text-[#341100] mb-3 opacity-80" />
              <div className="text-4xl font-extrabold text-[#341100] mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContributeStatsSection;
