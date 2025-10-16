<template>
  <section class="py-12 sm:py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 sm:mb-6 px-4">
        Calculate Your Potential ROI
      </h2>
      <p class="text-gray-300 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
        See how our AI-powered platform can translate to tangible savings for your
        practice. Select a plan below to get a personalized estimate.
      </p>

      <div class="grid lg:grid-cols-2 gap-6 sm:gap-8">
        <div class="bg-slate-800/50 backdrop-blur rounded-3xl p-6 sm:p-8">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Select Your Plan:</h3>
          <div class="space-y-3 sm:space-y-4">
            <button
              v-for="plan in Object.keys(planData)"
              :key="plan"
              @click="setSelectedPlan(plan as keyof typeof planData)"
              :class="`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg transition-all ${
                selectedPlan === plan
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-105'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
              }`"
            >
              {{ plan }}
            </button>
          </div>
        </div>

        <div class="space-y-4 sm:space-y-6">
          <div class="bg-slate-800/50 backdrop-blur rounded-3xl p-6 sm:p-8">
            <div class="text-gray-400 mb-2 text-sm sm:text-base">Plan Selected:</div>
            <div class="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">{{ selectedPlan }}</div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div class="text-gray-400 mb-2 text-sm sm:text-base">Monthly Cost (Discounted)</div>
                <div class="text-2xl sm:text-3xl font-bold text-white">
                  ${{ plan.price.toLocaleString() }}
                </div>
              </div>
              <div>
                <div class="text-gray-400 mb-2 text-sm sm:text-base">Potential Monthly Savings</div>
                <div class="text-2xl sm:text-3xl font-bold text-teal-400">
                  ${{ plan.savings.toLocaleString() }}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur rounded-3xl p-6 sm:p-8 border-2 border-purple-500/30">
            <div class="text-center mb-4">
              <div class="text-gray-300 mb-2 text-sm sm:text-base">Estimated Annual ROI</div>
              <div class="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                {{ plan.roi }}%
              </div>
              <div class="text-gray-300 mt-4 text-sm sm:text-base">
                Which is <span class="font-bold text-white">${{ netSavings.toLocaleString() }}</span> in net savings!
              </div>
            </div>
          </div>

          <div class="bg-slate-800/50 backdrop-blur rounded-3xl p-6 sm:p-8">
            <h4 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">How we estimate this:</h4>
            <ul class="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li class="flex items-start gap-2">
                <span class="text-teal-400 mt-1">•</span>
                <span>
                  Based on <span class="font-bold text-white">{{ plan.clinicians }} clinicians</span> at an average wage of
                  <span class="font-bold text-white">$22/hr</span>.
                </span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-teal-400 mt-1">•</span>
                <span>
                  <span class="font-bold text-white">1650 hours</span> saved monthly from improved workflows.
                </span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-teal-400 mt-1">•</span>
                <span>
                  Savings areas include:
                  <span class="font-bold text-white">
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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const planData = {
  Essential: { price: 1200, clinicians: 50, savings: 18150, roi: 1413 },
  Growth: { price: 2340, clinicians: 100, savings: 24200, roi: 934 },
  Professional: { price: 5550, clinicians: 250, savings: 36300, roi: 554 },
  Advanced: { price: 10500, clinicians: 500, savings: 48400, roi: 361 },
  Enterprise: { price: 19200, clinicians: 1000, savings: 72600, roi: 278 },
}

const selectedPlan = ref<keyof typeof planData>('Professional')

const plan = computed(() => planData[selectedPlan.value])
const netSavings = computed(() => plan.value.savings * 12 - plan.value.price * 12)

const setSelectedPlan = (newPlan: keyof typeof planData) => {
  selectedPlan.value = newPlan
}
</script>
