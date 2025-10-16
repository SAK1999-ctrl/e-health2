<template>
  <div class="homepage">
    <HeroSection />
    <AboutUsSection />
    <JoinUsSection />
    <TestimonialsSection />
    <FAQSection />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "../components/sections/HeroSection.vue";
import AboutUsSection from "../components/sections/AboutUsSection.vue";
import JoinUsSection from "../components/sections/JoinUsSection.vue";
import TestimonialsSection from "../components/sections/TestimonialsSection.vue";
import FAQSection from "../components/sections/FAQSection.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>
