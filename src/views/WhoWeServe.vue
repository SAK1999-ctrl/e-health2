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
    <section class="relative z-10 px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div class="max-w-7xl mx-auto text-center">
        <!-- Main Title -->
        <h1 class="text-white font-raleway font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
          Who We Serve
        </h1>

        <!-- Gradient Subtitle -->
        <h2 class="text-gradient font-raleway font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight mb-6 lg:mb-8 max-w-5xl mx-auto">
          iSenseHUB For Every Health Facility
        </h2>

        <!-- Description -->
        <p class="text-white font-raleway text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto">
          Equip Your Hospital & Serve Unique Healthcare Centers
        </p>

        <!-- Categories with Icons -->
        <div class="flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-12 mt-12">
          <!-- Hospitals -->
          <div class="flex flex-col items-center group cursor-pointer">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
              <img src="/images/Untitled design (9) 1.png" alt="Hospital icon" class="w-8 h-8" />
            </div>
            <span class="text-white font-raleway font-medium text-lg">Hospitals</span>
          </div>

          <!-- Clinicians -->
          <div class="flex flex-col items-center group cursor-pointer">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
              <img src="/images/Untitled design (10) 1.png" alt="Clinician icon" class="w-8 h-8" />
            </div>
            <span class="text-white font-raleway font-medium text-lg">Clinicians</span>
          </div>

          <!-- Patients -->
          <div class="flex flex-col items-center group cursor-pointer">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
              <img src="/images/Untitled design (11) 1.png" alt="Patient icon" class="w-8 h-8" />
            </div>
            <span class="text-white font-raleway font-medium text-lg">Patients</span>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Reused sections -->
  <JoinTheMovementSection />
  <TheFooter />
</template>

<script setup>
import TheNavbar from "../components/layout/TheNavbar.vue";
import JoinTheMovementSection from "../components/sections/JoinTheMovementSection.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #7186FF 11%, #FE7587 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
