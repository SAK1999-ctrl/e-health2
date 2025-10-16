<template>
  <div 
    :class="`relative rounded-3xl p-6 sm:p-8 ${plan.popular ? 'scale-100 sm:scale-105' : ''} transition-transform hover:scale-105 sm:hover:scale-110`"
  >
    <div :class="`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl opacity-90`"></div>

    <div 
      v-if="plan.popular" 
      class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 bg-slate-800 rounded-full border-2 border-white z-10"
    >
      <div class="text-xs font-bold text-white">MOST</div>
      <div class="text-xs font-bold text-white">POPULAR</div>
    </div>

    <div class="relative z-10">
      <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">{{ plan.name }}</h3>

      <div class="mb-2">
        <span class="text-2xl sm:text-4xl font-bold text-slate-900/40 line-through">
          {{ symbol }}{{ originalPrice }}
        </span>
      </div>
      <div class="mb-1">
        <span class="text-4xl sm:text-5xl font-bold text-white">
          {{ symbol }}{{ price }}
        </span>
      </div>
      <div class="text-sm sm:text-base text-slate-900 mb-4 sm:mb-6">/ user / month</div>

      <div class="text-sm sm:text-base text-slate-900 mb-2">{{ plan.clinicians }}</div>
      <div class="text-sm sm:text-base text-slate-900 mb-6 sm:mb-8">
        Base: <span class="line-through text-slate-900/60">{{ symbol }}{{ originalBase.toLocaleString() }}</span>
        <span class="font-bold">{{ symbol }}{{ base.toLocaleString() }} / mo</span>
      </div>

      <button class="w-full py-3 px-6 bg-white text-slate-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
        {{ plan.isEnterprise ? 'Contact Sales' : 'Get Started' }}
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
