<template>
  <section class="py-12 sm:py-20 px-4 bg-slate-900">
    <div class="max-w-6xl mx-auto">
      <div class="bg-slate-800/50 backdrop-blur rounded-3xl p-4 sm:p-8 overflow-x-auto">
        <table class="w-full min-w-[600px]">
          <thead>
            <tr class="border-b border-slate-700">
              <th class="text-left py-4 px-3 sm:px-6 text-white font-bold text-base sm:text-lg">Features</th>
              <th 
                v-for="plan in plans" 
                :key="plan" 
                class="text-center py-4 px-2 sm:px-6 text-white font-bold text-sm sm:text-base"
              >
                {{ plan }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(feature, index) in features"
              :key="feature"
              :class="`border-b border-slate-700/50 ${
                index % 2 === 0 ? 'bg-slate-800/30' : ''
              }`"
            >
              <td class="py-4 px-3 sm:px-6 text-white text-sm sm:text-base">{{ feature }}</td>
              <td 
                v-for="plan in plans" 
                :key="`${feature}-${plan}`" 
                class="py-4 px-2 sm:px-6"
              >
                <div class="flex justify-center">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-teal-400/20 to-teal-500/20 flex items-center justify-center">
                    <svg class="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Using inline SVG instead of lucide-vue-next

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
]

const plans = ['Essential', 'Growth', 'Professional', 'Advanced', 'Enterprise']
</script>
