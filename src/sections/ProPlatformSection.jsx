import { CheckCircle2, ExternalLink } from 'lucide-react';

const features = [
  'Bulk import via Excel or API',
  'Calculate your Nutri-Score automatically',
  'Reformulation opportunities',
];

function ProPlatformSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-[#f2e9e4] rounded-3xl p-8 md:p-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-[#341100] text-white font-bold px-4 py-1.5 rounded-full text-sm">
              For Producers &amp; Brands
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#341100]">
              Open Food Facts Pro
            </h3>
            <p className="text-lg text-gray-800 font-medium">
              Are you a food manufacturer? Share your product data directly with us through our free professional platform. Enhance your transparency and make your product data easily accessible to researchers and the public.
            </p>
            <ul className="space-y-3 font-semibold text-gray-700">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://world.pro.openfoodfacts.org/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-[#341100] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all inline-flex items-center gap-2"
            >
              Access Pro Platform <ExternalLink size={18} />
            </a>
          </div>
          <div className="flex-1 relative w-full">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://world.openfoodfacts.org/images/misc/pro-platform-mockup.jpg"
                alt="Pro Platform Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProPlatformSection;
