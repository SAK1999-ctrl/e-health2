<template>
  <section class="py-18 sm:py-20 px-4" style="background-color: #291f58;">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 sm:mb-6 px-4">
        Calculate Your Potential ROI
      </h2>
      <p class="text-gray-400 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
        See how our AI-powered platform can translate to tangible savings for your
        practice. Select a plan below to get a personalized estimate.
      </p>

      <!-- Single rectangular container -->
      <div class="w-full max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 md:p-12" style="background-color: #28243D;">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-1">
          <!-- Plan Selection Section -->
          <div class="w-full">
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Select Your Plan:</h3>
            <div class="space-y-3 sm:space-y-4">
              <button
                v-for="plan in Object.keys(planData)"
                :key="plan"
                @click="setSelectedPlan(plan as keyof typeof planData)"
                :class="`w-full max-w-sm py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg transition-all ${
                  selectedPlan === plan
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-105'
                    : 'bg-slate-600 text-white hover:bg-slate-700'
                }`"
              >
                {{ plan }}
              </button>
            </div>
          </div>

          <!-- Plan Details Section -->
          <div class="w-full space-y-4 sm:space-y-6">
            <div>
              <div class="text-gray-400 mb-2 text-sm sm:text-base">Plan Selected:</div>
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">{{ selectedPlan }}</div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <div>
                  <div class="text-gray-400 mb-2 text-sm sm:text-base">Monthly Cost (Discounted)</div>
                  <div class="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    ${{ animatedPrice.toLocaleString() }}
                  </div>
                </div>
                <div>
                  <div class="text-gray-400 mb-2 text-sm sm:text-base">Potential Monthly Savings</div>
                  <div class="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">
                    ${{ animatedSavings.toLocaleString() }}
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur rounded-2xl p-4 sm:p-6 border-2 border-purple-500/30">
              <div class="text-center">
                <div class="text-gray-400 mb-2 text-sm sm:text-base">Estimated Annual ROI</div>
                <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  {{ animatedROI }}%
                </div>
                <div class="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
                  Which is <span class="font-bold text-white">${{ animatedNetSavings.toLocaleString() }}</span> in net savings!
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">How we estimate this:</h4>
              <ul class="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
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
      <p class="text-gray-400 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-5xl mx-auto px-4 mt-8 sm:mt-10 md:mt-12">
      Annual discounts apply to yearly billing. *Unlimited patients are subject to our fair use policy.
      <span class="inline-block mt-1">Clinician and patient count limits are flexible and can be upgraded at any time to accommodate your growth.</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useNumberAnimation } from '@/composables/useNumberAnimation'

const planData = {
  Essential: { price: 1200, clinicians: 50, savings: 18150, roi: 1413 },
  Growth: { price: 2340, clinicians: 100, savings: 24200, roi: 934 },
  Professional: { price: 5550, clinicians: 250, savings: 36300, roi: 554 },
  Advanced: { price: 10500, clinicians: 500, savings: 48400, roi: 361 },
  Enterprise: { price: 19200, clinicians: 1000, savings: 72600, roi: 278 },
}

const selectedPlan = ref<keyof typeof planData>('Professional')
const plan = computed(() => planData[selectedPlan.value])
const netSavingsValue = computed(() => plan.value.savings * 12 - plan.value.price * 12)

// Create animated values
const { animatedValue: animatedPrice, animateNumber: animatePrice } = useNumberAnimation()
const { animatedValue: animatedSavings, animateNumber: animateSavings } = useNumberAnimation()
const { animatedValue: animatedROI, animateNumber: animateROI } = useNumberAnimation()
const { animatedValue: animatedNetSavings, animateNumber: animateNetSavings } = useNumberAnimation()

// Watch for plan changes and animate the numbers
watch(() => selectedPlan.value, () => {
  animatePrice(plan.value.price, 1500)
  animateSavings(plan.value.savings, 1500)
  animateROI(plan.value.roi, 1500)
  animateNetSavings(netSavingsValue.value, 2000)
}, { immediate: true })

const setSelectedPlan = (newPlan: keyof typeof planData) => {
  selectedPlan.value = newPlan
}
</script>
