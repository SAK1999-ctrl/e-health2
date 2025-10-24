<template>
  <div class="homepage">
    <ContactHeroSection />
    <ContactHelpSection />
    <ContactSection />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import ContactHeroSection from "../components/sections/ContactHeroSection.vue";
import ContactHelpSection from "../components/sections/ContactHelpSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>
