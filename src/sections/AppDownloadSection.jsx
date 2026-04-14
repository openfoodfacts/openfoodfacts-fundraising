import React from 'react';
import { ArrowRight } from 'lucide-react';

const AppDownloadSection = () => {
  return (
    <section
      className="py-24 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300"
      id="download"
    >
      <div className="max-w-4xl mx-auto bg-off-header dark:bg-gray-800 rounded-[3rem] p-10 md:p-16 text-center shadow-soft reveal">
        <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <img
            src="https://world.openfoodfacts.org/images/logos/off-logo-icon-light.svg"
            alt="Open Food Facts icon"
            className="h-10 w-10"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 dark:text-white">
          Join the food revolution.
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Download the free app to start scanning, or join our community of contributors to help map
          the world&apos;s food products.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* App Store Badges */}
          <div className="flex flex-col gap-4">
            <a
              href="https://apps.apple.com/app/open-food-facts/id588797948?utm_source=off&utm_campaign=search_and_links_promo_en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-1 transition-transform inline-block"
            >
              <img
                src="https://world.openfoodfacts.org/images/misc/appstore/black/appstore_US.svg"
                alt="Download on the App Store"
                className="h-[48px] w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.openfoodfacts.scanner&hl=en&utm_source=off&utm_campaign=search_and_links_promo_en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-1 transition-transform inline-block"
            >
              <img
                src="https://world.openfoodfacts.org/images/misc/playstore/img/en_get.svg"
                alt="Get it on Google Play"
                className="h-[48px] w-auto"
              />
            </a>
          </div>

          <div className="hidden md:block w-px h-24 bg-off-btn/10 mx-2"></div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <img
              src="https://world.openfoodfacts.org/images/misc/app-landing-page/qrcode_en.svg"
              alt="Scan QR Code to download"
              className="w-28 h-28 dark:bg-white dark:p-2 dark:rounded-xl"
            />
            <span className="text-sm font-bold text-off-btn dark:text-orange-400 mt-2 opacity-80">
              Scan to download
            </span>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://world.openfoodfacts.org/1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-btn dark:text-orange-400 font-bold hover:underline inline-flex items-center gap-1"
          >
            Or start contributing on the web <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
