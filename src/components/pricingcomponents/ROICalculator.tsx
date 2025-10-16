import { useState } from 'react';

const planData = {
  Essential: { price: 1200, clinicians: 50, savings: 18150, roi: 1413 },
  Growth: { price: 2340, clinicians: 100, savings: 24200, roi: 934 },
  Professional: { price: 5550, clinicians: 250, savings: 36300, roi: 554 },
  Advanced: { price: 10500, clinicians: 500, savings: 48400, roi: 361 },
  Enterprise: { price: 19200, clinicians: 1000, savings: 72600, roi: 278 },
};

export default function ROICalculator() {
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof planData>('Professional');
  const plan = planData[selectedPlan];
  const netSavings = plan.savings * 12 - plan.price * 12;

  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 sm:mb-6 px-4">
          Calculate Your Potential ROI
        </h2>
        <p className="text-gray-300 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          See how our AI-powered platform can translate to tangible savings for your
          practice. Select a plan below to get a personalized estimate.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Select Your Plan:</h3>
            <div className="space-y-3 sm:space-y-4">
              {Object.keys(planData).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan as keyof typeof planData)}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg transition-all ${
                    selectedPlan === plan
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-105'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-6 sm:p-8">
              <div className="text-gray-400 mb-2 text-sm sm:text-base">Plan Selected:</div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">{selectedPlan}</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="text-gray-400 mb-2 text-sm sm:text-base">Monthly Cost (Discounted)</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    ${plan.price.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2 text-sm sm:text-base">Potential Monthly Savings</div>
                  <div className="text-2xl sm:text-3xl font-bold text-teal-400">
                    ${plan.savings.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur rounded-3xl p-6 sm:p-8 border-2 border-purple-500/30">
              <div className="text-center mb-4">
                <div className="text-gray-300 mb-2 text-sm sm:text-base">Estimated Annual ROI</div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  {plan.roi}%
                </div>
                <div className="text-gray-300 mt-4 text-sm sm:text-base">
                  Which is <span className="font-bold text-white">${netSavings.toLocaleString()}</span> in net savings!
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">How we estimate this:</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>
                    Based on <span className="font-bold text-white">{plan.clinicians} clinicians</span> at an average wage of{' '}
                    <span className="font-bold text-white">$22/hr</span>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>
                    <span className="font-bold text-white">1650 hours</span> saved monthly from improved workflows.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>
                    Savings areas include:{' '}
                    <span className="font-bold text-white">
                      administrative tasks, billing efficiency, and clinical decision support
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
