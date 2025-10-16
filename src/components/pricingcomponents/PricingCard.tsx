interface PricingCardProps {
  plan: {
    name: string;
    priceUSD: number;
    originalPriceUSD: number;
    priceGHS: number;
    originalPriceGHS: number;
    baseUSD: number;
    originalBaseUSD: number;
    baseGHS: number;
    originalBaseGHS: number;
    clinicians: string;
    color: string;
    popular: boolean;
    isEnterprise?: boolean;
  };
  currency: 'USD' | 'GHS';
}

export default function PricingCard({ plan, currency }: PricingCardProps) {
  const price = currency === 'USD' ? plan.priceUSD : plan.priceGHS;
  const originalPrice = currency === 'USD' ? plan.originalPriceUSD : plan.originalPriceGHS;
  const base = currency === 'USD' ? plan.baseUSD : plan.baseGHS;
  const originalBase = currency === 'USD' ? plan.originalBaseUSD : plan.originalBaseGHS;
  const symbol = currency === 'USD' ? '$' : '₵';

  return (
    <div className={`relative rounded-3xl p-6 sm:p-8 ${plan.popular ? 'scale-100 sm:scale-105' : ''} transition-transform hover:scale-105 sm:hover:scale-110`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl opacity-90`}></div>

      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 bg-slate-800 rounded-full border-2 border-white z-10">
          <div className="text-xs font-bold text-white">MOST</div>
          <div className="text-xs font-bold text-white">POPULAR</div>
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">{plan.name}</h3>

        <div className="mb-2">
          <span className="text-2xl sm:text-4xl font-bold text-slate-900/40 line-through">
            {symbol}{originalPrice}
          </span>
        </div>
        <div className="mb-1">
          <span className="text-4xl sm:text-5xl font-bold text-white">
            {symbol}{price}
          </span>
        </div>
        <div className="text-sm sm:text-base text-slate-900 mb-4 sm:mb-6">/ user / month</div>

        <div className="text-sm sm:text-base text-slate-900 mb-2">{plan.clinicians}</div>
        <div className="text-sm sm:text-base text-slate-900 mb-6 sm:mb-8">
          Base: <span className="line-through text-slate-900/60">{symbol}{originalBase.toLocaleString()}</span>{' '}
          <span className="font-bold">{symbol}{base.toLocaleString()} / mo</span>
        </div>

        <button className="w-full py-3 px-6 bg-white text-slate-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
          {plan.isEnterprise ? 'Contact Sales' : 'Get Started'}
        </button>
      </div>
    </div>
  );
}
