<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <ParticleSphere />
    </div>

    <div class="relative z-10 max-w-5xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray mb-6 leading-tight px-4">
        Finally, an AI Health Platform
        <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          That Pays for Itself.
        </span>
      </h1>

      <p class="text-base sm:text-lg md:text-xl text-gray max-w-2xl mx-auto leading-relaxed px-4">
        Discover how healthcare facilities like yours leverage iSenseHUB to
        not only enhance patient care but also unlock significant savings.
        Calculate your ROI below.
      </p>
    </div>

    <button
      @click="scrollDown"
      class="absolute center -translate-x-1/2 bottom-4 sm:bottom-6 md:bottom-8 flex items-center justify-center text-white animate-bounce z-10 w-16 h-16 sm:w-20 sm:h-20"
      aria-label="Scroll down"
    >
      <svg class="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  </section>
</template>

<script setup lang="ts">
// Using inline SVG instead of lucide-vue-next
import ParticleSphere from './ParticleSphere.vue'

const scrollDown = () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
}
</script>
