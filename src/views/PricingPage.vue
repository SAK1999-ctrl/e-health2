<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Navigation -->
    <nav class="relative z-20 px-4 sm:px-6 lg:px-8 py-4">
      <TheNavbar />
    </nav>

    <HeroSection />
    <PricingSection />
    <FeaturesTable />
    <ROICalculator />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "../components/layout/TheNavbar.vue";
import HeroSection from "../components/pricingcomponents/HeroSection.vue";
import PricingSection from "../components/pricingcomponents/PricingSection.vue";
import FeaturesTable from "../components/pricingcomponents/FeaturesTable.vue";
import ROICalculator from "../components/pricingcomponents/ROICalculator.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>
