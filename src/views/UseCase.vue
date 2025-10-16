<template>
  <div class="space-y-16">
    <!-- Navigation -->
    <nav class="relative z-20 px-4 sm:px-6 lg:px-8 py-4">
      <TheNavbar />
    </nav>

    <section class="hero-section">
      <h2 class="title">Use Cases</h2>
      <p class="subtitle">iSenseHUB in Action</p>
      <p class="lead">
        Discover real-world applications of iSenseHUB across different
        healthcare scenarios. From emergency care to chronic disease management,
        see how our platform transforms healthcare delivery.
      </p>
      <div class="actions">
        <RouterLink to="/contact" class="btn-outline">Contact Us</RouterLink>
        <RouterLink to="/pricing" class="btn-primary">View Pricing</RouterLink>
      </div>
    </section>

    <!-- Reused sections -->
    <TestimonialsSection />
    <ContactSection />
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import TheNavbar from "../components/layout/TheNavbar.vue";
import TestimonialsSection from "../components/sections/TestimonialsSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>

<style scoped>
.hero-section {
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
  text-align: center;
  margin: 2rem auto;
  max-width: 1200px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.15;
  color: white;
  margin-bottom: 1rem;
}

.subtitle {
  margin-top: 0.75rem;
  font-size: 1.75rem;
  font-weight: 600;
  background: linear-gradient(90deg, #7186ff 11%, #fe7587);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lead {
  margin-top: 1rem;
  max-width: 60ch;
  color: #e5e7eb;
  font-size: 1.125rem;
  line-height: 1.75;
  margin-left: auto;
  margin-right: auto;
}

.actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-outline,
.btn-primary {
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline {
  border: 2px solid white;
  color: white;
  background: transparent;
}

.btn-outline:hover {
  background: white;
  color: #3d1687;
}

.btn-primary {
  background: linear-gradient(90deg, #7186ff 11%, #fe7587);
  color: white;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(113, 134, 255, 0.3);
}

.space-y-16 > * + * {
  margin-top: 4rem;
}
</style>
