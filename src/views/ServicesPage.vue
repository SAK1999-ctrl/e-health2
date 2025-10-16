<template>
  <div>
    <!-- Navigation -->
    <nav class="relative z-20 px-4 sm:px-6 lg:px-8 py-4 bg-black">
      <TheNavbar />
    </nav>

    <div class="py-16">
      <h2 class="section-title">Healthcare Services</h2>
      <ServicesSection />
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from "../components/layout/TheNavbar.vue";
import ServicesSection from "../components/sections/ServicesSection.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>
