import { useState } from 'react';
import PricingCard from './PricingCard';

const plans = [
  {
    name: 'Essential',
    priceUSD: 24,
    originalPriceUSD: 40,
    priceGHS: 288,
    originalPriceGHS: 480,
    baseUSD: 1200,
    originalBaseUSD: 2000,
    baseGHS: 14400,
    originalBaseGHS: 24000,
    clinicians: 'Up to 50 Clinicians',
    color: 'from-purple-400 to-purple-500',
    popular: false,
  },
  {
    name: 'Growth',
    priceUSD: 23,
    originalPriceUSD: 39,
    priceGHS: 276,
    originalPriceGHS: 468,
    baseUSD: 2340,
    originalBaseUSD: 3900,
    baseGHS: 28080,
    originalBaseGHS: 46800,
    clinicians: 'Up to 100 Clinicians',
    color: 'from-cyan-400 to-cyan-500',
    popular: false,
  },
  {
    name: 'Professional',
    priceUSD: 22,
    originalPriceUSD: 37,
    priceGHS: 264,
    originalPriceGHS: 444,
    baseUSD: 5550,
    originalBaseUSD: 9250,
    baseGHS: 66600,
    originalBaseGHS: 111000,
    clinicians: 'Up to 250 Clinicians',
    color: 'from-purple-300 to-purple-400',
    popular: true,
  },
  {
    name: 'Advanced',
    priceUSD: 21,
    originalPriceUSD: 35,
    priceGHS: 252,
    originalPriceGHS: 420,
    baseUSD: 10500,
    originalBaseUSD: 17500,
    baseGHS: 126000,
    originalBaseGHS: 210000,
    clinicians: 'Up to 500 Clinicians',
    color: 'from-blue-400 to-blue-500',
    popular: false,
  },
  {
    name: 'Enterprise',
    priceUSD: 19,
    originalPriceUSD: 32,
    priceGHS: 228,
    originalPriceGHS: 384,
    baseUSD: 19200,
    originalBaseUSD: 32000,
    baseGHS: 230400,
    originalBaseGHS: 384000,
    clinicians: '1000+ Clinicians',
    color: 'from-teal-400 to-teal-500',
    popular: false,
    isEnterprise: true,
  },
];

export default function PricingSection() {
  const [currency, setCurrency] = useState<'USD' | 'GHS'>('USD');

  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full border-2 border-teal-400/50 bg-slate-800/50 backdrop-blur mb-6 sm:mb-8">
            <span className="text-teal-400 font-semibold text-sm sm:text-base">Early Bird Offer:</span>
            <span className="text-white font-bold text-sm sm:text-base">40% OFF</span>
            <span className="text-teal-400 font-semibold text-sm sm:text-base">All Plans!</span>
          </div>

          <div className="inline-flex rounded-full bg-slate-800 p-1">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-6 sm:px-8 py-2 rounded-full font-semibold transition-all text-sm sm:text-base ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency('GHS')}
              className={`px-6 sm:px-8 py-2 rounded-full font-semibold transition-all text-sm sm:text-base ${
                currency === 'GHS'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              GHS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} currency={currency} />
          ))}
        </div>
      </div>
    </section>
  );
}
