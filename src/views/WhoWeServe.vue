<template>
  <div>
    <!-- Navigation -->
    <nav class="relative z-20 px-4 sm:px-6 lg:px-8 py-4 bg-black">
      <TheNavbar />
    </nav>

    <div class="space-y-16">
      <section :class="$style.hero">
        <h2 :class="$style.title">Who We Serve</h2>
        <p :class="$style.subtitle">iSenseHUB For Every Health Facility</p>
        <p :class="$style.lead">
          Explore how iSenseHUB serves different healthcare centers, from
          individual practices to large hospital networks.
        </p>
        <div :class="$style.actions">
          <RouterLink to="/contact" class="btn-outline">Contact Us</RouterLink>
          <RouterLink to="/services" class="btn-primary"
            >Request a Demo</RouterLink
          >
        </div>
      </section>

      <!-- Unique content for this page can be added here as needed -->

      <!-- Reused sections -->
      <TestimonialsSection />
      <ContactSection />
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import TheNavbar from "../components/layout/TheNavbar.vue";
import TestimonialsSection from "../components/sections/TestimonialsSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>

<style module>
.hero {
  position: relative;
  padding: 6rem 1.5rem 2rem;
  background: linear-gradient(
    180deg,
    #9a53d7,
    #9944cb 19.23%,
    #c3429a 41.35%,
    #e23169 56.25%,
    #e85b2c 72.12%,
    #e8902c 98.19%
  );
  border-radius: 2rem;
}
.title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.15;
}
.subtitle {
  margin-top: 0.75rem;
  font-size: 1.75rem;
  font-weight: 600;
  background: linear-gradient(90deg, #7186ff 11%, #fe7587);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.lead {
  margin-top: 1rem;
  max-width: 60ch;
  color: #e5e7eb;
}
.actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
}
</style>
