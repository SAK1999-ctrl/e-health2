<template>
  <div 
    :class="`relative rounded-3xl p-6 sm:p-8 ${plan.popular ? 'scale-100 sm:scale-105' : ''} transition-all duration-300 hover:scale-105 sm:hover:scale-110 group`"
  >
    <!-- Background container with overflow-hidden -->
    <div class="absolute inset-0 overflow-hidden rounded-3xl">
      <!-- Background gradient -->
      <div :class="`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl opacity-90`"></div>
      
      <!-- Shine effect overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-3xl shine-effect"></div>
    </div>

    <!-- Most Popular Badge -->
    <div 
      v-if="plan.popular" 
      class="absolute -top-3 right-4 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full z-20 shadow-lg flex flex-col items-center justify-center"
      style="min-width: 80px;"
    >
      <span class="text-[12px] uppercase tracking-wider font-semibold text-white leading-tight">Most</span>
      <span class="text-[12px] uppercase tracking-wider font-semibold text-white leading-tight">Popular</span>
    </div>

    <div class="relative z-10 text-center">
      <!-- Plan Name -->
      <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">{{ plan.name }}</h3>

      <!-- Pricing Section -->
      <div class="mb-2 text-center">
        <span class="text-2xl sm:text-4xl font-bold text-slate-900/40 line-through">
          {{ symbol }}{{ originalPrice }}
        </span>
      </div>
      <div class="mb-1 text-center">
        <span class="text-4xl sm:text-5xl font-bold text-white">
          {{ symbol }}{{ price }}
        </span>
      </div>
      <div class="text-sm sm:text-base text-slate-900 mb-4 sm:mb-6 text-center">/ user / month</div>

      <!-- Features Section -->
      <div class="text-sm sm:text-base text-slate-900 mb-2 text-center">{{ plan.clinicians }}</div>
      <div class="text-sm sm:text-base text-slate-900 mb-6 sm:mb-8 text-center">
        Base: <span class="line-through text-slate-900/60">{{ symbol }}{{ originalBase.toLocaleString() }}</span>
        <span class="font-bold">{{ symbol }}{{ base.toLocaleString() }} / mo</span>
      </div>

      <!-- Get Started Button -->
      <button class="w-full py-3 px-6 bg-gradient-to-r from-slate-50 to-white text-slate-900 rounded-xl font-semibold transition-all duration-300 cursor-pointer text-center group/btn relative overflow-hidden hover:text-white">
        <span class="relative z-10 transition-all duration-300 group-hover/btn:scale-105">{{ plan.isEnterprise ? 'Contact Sales' : 'Get Started' }}</span>
        <!-- Background gradient on hover -->
        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-all duration-500 rounded-xl -z-0"></div>
        <!-- Shine effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out rounded-xl z-0"></div>
        <!-- Pulsing glow effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 opacity-0 group-hover/btn:opacity-100 animate-pulse transition-opacity duration-300 rounded-xl"></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Plan {
  name: string
  priceUSD: number
  originalPriceUSD: number
  priceGHS: number
  originalPriceGHS: number
  baseUSD: number
  originalBaseUSD: number
  baseGHS: number
  originalBaseGHS: number
  clinicians: string
  color: string
  popular: boolean
  isEnterprise?: boolean
}

interface Props {
  plan: Plan
  currency: 'USD' | 'GHS'
}

const props = defineProps<Props>()

const price = computed(() => props.currency === 'USD' ? props.plan.priceUSD : props.plan.priceGHS)
const originalPrice = computed(() => props.currency === 'USD' ? props.plan.originalPriceUSD : props.plan.originalPriceGHS)
const base = computed(() => props.currency === 'USD' ? props.plan.baseUSD : props.plan.baseGHS)
const originalBase = computed(() => props.currency === 'USD' ? props.plan.originalBaseUSD : props.plan.originalBaseGHS)
const symbol = computed(() => props.currency === 'USD' ? '$' : '₵')
</script>

<style scoped>
/* Custom cursor for button */
button {
  cursor: pointer !important;
}

button:hover {
  cursor: pointer !important;
  transform: translateY(-2px);
}

/* Enhanced shine effect for the card */
.group:hover .shine-effect {
  animation: shine 1.5s ease-in-out;
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Smooth transitions for all interactive elements */
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Button hover enhancement */
button {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-out;
}

button:hover {
  box-shadow: 
    0 10px 30px rgba(79, 70, 229, 0.2),
    0 0 0 1px rgba(99, 102, 241, 0.1),
    0 0 40px rgba(79, 70, 229, 0.1);
  transform: translateY(-3px) scale(1.02);
  border-color: transparent;
}

button:active {
  transform: translateY(-1px) scale(0.98);
  box-shadow: 
    0 5px 15px rgba(79, 70, 229, 0.1),
    0 0 0 1px rgba(99, 102, 241, 0.05);
  transition: all 0.1s ease;
}

/* Text centering improvements */
.text-center {
  text-align: center;
}

/* Ensure proper cursor on all interactive elements */
button, .group {
  cursor: pointer;
}

/* Enhanced button animations */
@keyframes buttonPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

button:focus {
  animation: buttonPulse 1.5s infinite;
}
</style>
