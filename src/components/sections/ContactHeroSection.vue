<template>
  <div class="min-h-screen relative overflow-hidden text-center text-white font-raleway">
    <!-- Main Background Gradient -->
    <div class="absolute inset-0 [background:linear-gradient(180deg,_#c3429a_4.81%,_#e23169_32.49%,_#e85b2c_60.58%,_#e8902c_98.19%)]" />
    <!-- Background Overlay -->
    <div class="absolute inset-0 [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0.25))] opacity-50" />

    <!-- Hero Section Background Images -->
    <div class="absolute inset-0">
      <!-- Heart Shape on Left -->
      <img class="absolute top-[117px] left-0 w-[201.5px] h-[347.5px] object-cover opacity-80" src="/images/Untitled design (15) 1.png" alt="Heart shape background" />
      <!-- Cross Shape on Right -->
      <img class="absolute top-[80px] right-0 w-[201px] h-[350px] object-cover opacity-80" src="/images/Untitled design (12) 1.png" alt="Cross shape background" />
    </div>

    <!-- Navigation -->
    <nav class="relative z-10 px-4 sm:px-6 lg:px-8 py-4">
      <TheNavbar />
    </nav>

    <!-- Hero Section Main Content -->
    <section class="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div class="max-w-7xl mx-auto text-center">
        <!-- Main Title -->
        <h1 class="text-white font-raleway font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
          Connect with ISenseHUB
        </h1>

        <!-- Gradient Subtitle -->
        <h2 class="text-gradient font-raleway font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight mb-6 lg:mb-8 max-w-5xl mx-auto">
          Your Journey to Better Healthcare Starts Here
        </h2>

        <!-- Description -->
        <p class="text-white font-raleway text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto">
          Ready to transform your healthcare operations and patient experience? Our team is eager to show you how ISenseHUB can make a difference for your institution in Ghana and across Africa.
        </p>
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
</style>
