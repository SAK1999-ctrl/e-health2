<template>
  <div class="min-h-screen bg-black relative overflow-hidden">
    <!-- Background Images -->
    <div class="absolute inset-0 bg-hero-bg bg-cover bg-center"></div>
    <div class="absolute inset-0 bg-hero-overlay bg-cover bg-center"></div>
    
    <!-- Navigation -->
    <nav class="relative z-10 px-4 sm:px-6 lg:px-8 py-4">
      <TheNavbar />
    </nav>

    <!-- Hero Section -->
    <section class="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div class="max-w-7xl mx-auto text-center">
        <!-- Main Title -->
        <h1 class="text-white font-raleway font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
          Our Story
        </h1>

        <!-- Gradient Subtitle -->
        <h2 class="text-gradient font-raleway font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight mb-6 lg:mb-8 max-w-5xl mx-auto">
          Pioneering a Healthier Future for <span class="text-pink-400">Africa</span>
        </h2>

        <!-- Description -->
        <p class="text-white font-raleway text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto">
          iSenseHUB is more than a software company – we are a movement dedicated to transforming healthcare across Africa through innovative technology solutions.
        </p>

        <!-- CTA Button -->
        <div class="flex justify-center">
          <div class="relative">
            <button
              class="bg-purple-secondary text-white font-raleway font-bold text-lg px-8 py-4 rounded-full border border-white hover:shadow-xl transition-shadow"
            >
              Partner with iSenseHUB
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '../layout/TheNavbar.vue'
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #7186FF 11%, #FE7587 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Static button styling - no animations */
</style>
