<template>
  <div class="w-full relative overflow-hidden py-12 sm:py-16 lg:py-20">
    <!-- Background gradient -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(to bottom, #e84192, #e44748)"
    >
      <!-- Starry details -->
      <div class="absolute inset-0 opacity-70">
        <div
          class="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"
        ></div>
        <div
          class="absolute top-32 right-32 w-1 h-1 bg-white rounded-full animate-pulse"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute top-48 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute top-64 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"
          style="animation-delay: 1.5s"
        ></div>
        <div
          class="absolute top-80 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse"
          style="animation-delay: 2s"
        ></div>
        <div
          class="absolute bottom-32 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
          style="animation-delay: 2.5s"
        ></div>
        <div
          class="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"
          style="animation-delay: 3s"
        ></div>
        <div
          class="absolute top-40 right-1/2 w-1 h-1 bg-white rounded-full animate-pulse"
          style="animation-delay: 3.5s"
        ></div>
      </div>
    </div>

    <!-- Centered content container with max-width -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Dark content box with decorative wave background -->
      <div
        class="relative bg-[#1a1f3a] rounded-[40px] px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
        <!-- Decorative wave/mountain background -->
        <div class="absolute bottom-0 left-0 right-0 h-1/2 opacity-30">
          <svg
            viewBox="0 0 1200 400"
            class="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,300 Q150,200 300,250 T600,280 T900,260 T1200,300 L1200,400 L0,400 Z"
              fill="#2a3150"
              opacity="0.5"
            />
            <path
              d="M0,320 Q200,240 400,280 T800,300 T1200,320 L1200,400 L0,400 Z"
              fill="#232844"
              opacity="0.7"
            />
          </svg>
        </div>

        <!-- Content -->
        <div class="relative z-10 text-center space-y-6">
          <!-- Subtitle -->
          <p
            class="font-raleway text-xs sm:text-sm font-semibold text-[#7286ff] tracking-[3px] sm:tracking-[4px] uppercase"
          >
            Ready to Transform Your Healthcare Journey?
          </p>

          <!-- Main heading -->
          <h2
            class="font-raleway text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight text-white max-w-4xl mx-auto"
          >
            Join the Movement for a Healthier Africa
          </h2>

          <!-- Icon (optional decorative element) -->
          <div class="flex justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-[#7286ff]"
            >
              <path
                d="M20 5L22.5 15L32.5 12.5L25 20L32.5 27.5L22.5 25L20 35L17.5 25L7.5 27.5L15 20L7.5 12.5L17.5 15L20 5Z"
                fill="currentColor"
                opacity="0.8"
              />
            </svg>
          </div>

          <!-- Description -->
          <p
            class="font-manrope text-sm sm:text-base leading-relaxed text-[#8f9bb7] max-w-2xl mx-auto px-4"
          >
            The future of healthcare in Africa is here, and it's powered by
            iSenseHUB. Let's build a more efficient, accessible, and effective
            healthcare system together.
          </p>

          <!-- CTA Button -->
          <div class="pt-4">
            <button
              @click="handleDemoRequest"
              class="bg-gradient-to-r from-[#7286ff] to-[#9265ff] hover:from-[#8295ff] hover:to-[#a375ff] text-white font-raleway font-semibold text-base px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
            >
              Request a Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleDemoRequest = () => {
  // Scroll to contact section or open modal
  const contactSection = document.querySelector("#contact-section");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  } else {
    // Fallback to alert if no contact section
    alert(
      "Thank you for your interest! We will contact you soon to schedule your free demo."
    );
  }
};
</script>

<style scoped>
/* Font families */
.font-raleway {
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.font-manrope {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
