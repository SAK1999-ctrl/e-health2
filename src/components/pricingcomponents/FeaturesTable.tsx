import { Check } from 'lucide-react';

const features = [
  'AI-Assisted Telemedicine',
  'AI-Powered Clinical Decision Support',
  'Appointment Scheduling',
  'Bed & Ward Management',
  'Blood Donor Management',
  'Finance & Billing',
  'Pharmacy & Lab Management',
  'Patient & Employee Management',
  'Powerful Dashboard & Analytics',
  'Reports Per Function',
  'Built-in Team Messaging & Chat',
  'Web & Mobile App Versions',
];

const plans = ['Essential', 'Growth', 'Professional', 'Advanced', 'Enterprise'];

export default function FeaturesTable() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-4 sm:p-8 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-3 sm:px-6 text-white font-bold text-base sm:text-lg">Features</th>
                {plans.map((plan) => (
                  <th key={plan} className="text-center py-4 px-2 sm:px-6 text-white font-bold text-sm sm:text-base">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature}
                  className={`border-b border-slate-700/50 ${
                    index % 2 === 0 ? 'bg-slate-800/30' : ''
                  }`}
                >
                  <td className="py-4 px-3 sm:px-6 text-white text-sm sm:text-base">{feature}</td>
                  {plans.map((plan) => (
                    <td key={`${feature}-${plan}`} className="py-4 px-2 sm:px-6">
                      <div className="flex justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-teal-400/20 to-teal-500/20 flex items-center justify-center">
                          <Check className="text-teal-400" size={20} />
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
