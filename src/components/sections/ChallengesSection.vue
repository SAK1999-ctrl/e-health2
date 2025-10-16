<template>
  <div
    class="challenges-container relative w-full mx-auto"
    style="background: linear-gradient(180deg, #29194d 0%, #2c293a 100%)"
  >
    <!-- Background gradient -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(180deg, #29194d 0%, #2c293a 100%)"
    ></div>

    <!-- Background overlay images with responsive positioning -->
    <!-- Left background image - visible on all screens -->
    <div
      class="w-[80px] h-[100px] sm:w-[120px] sm:h-[150px] md:w-[150px] md:h-[200px] lg:w-[180px] lg:h-[250px] xl:w-[310px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] absolute top-[80px] sm:top-[100px] lg:top-[110px] left-0 z-[1] animate-float-left"
      style="background: url('/images/Untitled design (10) 1.png') 50% / cover no-repeat; aspect-ratio: 1/1; filter: sepia(0.8) saturate(0.8) hue-rotate(250deg) brightness(1) opacity: 0.6;"
    ></div>

    <!-- Right background image - visible on all screens -->
    <div
      class="w-[70px] h-[90px] sm:w-[110px] sm:h-[140px] md:w-[140px] md:h-[180px] lg:w-[165px] lg:h-[220px] xl:w-[290px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] absolute top-[120px] sm:top-[150px] lg:top-[200px] right-0 z-[1] animate-float-right"
      style="background: url('/images/Untitled design (12) 1.png') 50% / cover no-repeat; aspect-ratio: 1/1; filter: sepia(0.7) saturate(0.8) hue-rotate(250deg) brightness(1) opacity: 0.6;"
    ></div>

    <!-- Dot Pattern Overlays - Top -->
    <div
      class="absolute top-[-12px] left-[85%] transform -translate-x-1/2 z-[2]"
    >
      <DotPattern :use-tailwind="false" color="#929BFF" :opacity="0.9" />
    </div>

    <!-- Mobile Layout -->
    <div class="block lg:hidden">
      <!-- Section Header -->
      <div
        class="flex w-full justify-center items-center font-raleway text-xs font-semibold leading-5 text-brand-blue tracking-widest text-center uppercase z-[2] px-4 pt-14 pb-4"
      >
        The African Healthcare Challenge<br />We Understand Your Struggle
      </div>

      <!-- Main Title -->
      <div
        class="w-full font-raleway text-lg font-semibold leading-tight tracking-tight text-center z-[4] px-4 pb-4"
      >
        <span class="font-raleway text-brand-purple-light">
          Beyond Blueprints
        </span>
        <span class="font-raleway text-white block mt-1">
          Addressing Africa's Real Healthcare<br />
          Pain Points
        </span>
      </div>

      <!-- Description -->
      <div
        class="flex w-full justify-center items-center font-manrope text-xs font-normal leading-relaxed text-white text-center z-[3] px-4 pb-6"
      >
        For too long, our healthcare heroes and the communities they serve have
        faced immense challenges. From the relentless "Triple Burden" of disease
        to critical shortages in medical staff and persistent funding
        challenges, the system often feels stretched thin.<br />Manual records
        lead to delays, fragmented data hinders care, and vital resources are
        often hard to track. We hear your concerns about:
      </div>

      <!-- Challenge Cards Container - Mobile -->
      <div class="w-full px-4 mb-8">
        <div class="bg-neutral-900 rounded-xl p-4">
          <div class="grid grid-cols-1 gap-4">
            <div
              v-for="(challenge, index) in challenges"
              :key="index"
              class="flex flex-col items-center text-center space-y-3"
            >
              <!-- Icon -->
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <img
                  :src="challenge.image"
                  :alt="challenge.title"
                  class="w-6 h-6 object-contain"
                />
              </div>

              <!-- Content -->
              <div class="flex-1">
                <!-- Title -->
                <h3
                  class="font-raleway text-base font-medium text-white leading-tight mb-2 text-center"
                >
                  {{ challenge.title }}
                </h3>

                <!-- Description -->
                <p
                  class="font-manrope text-xs font-normal leading-relaxed text-white text-center"
                >
                  {{ challenge.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom text - Mobile -->
      <div
        class="flex w-full justify-center items-start font-raleway text-sm font-semibold leading-tight text-white text-center z-[26] px-4 pb-8"
      >
        We understand these challenges because iSenseHUB was built from the
        ground up to solve them.
      </div>
    </div>

    <!-- Desktop Layout -->
    <div
      class="hidden lg:block relative min-h-[1000px] xl:min-h-[1100px] py-16 xl:py-20"
    >
      <!-- Section Header -->
      <div
        class="flex w-full max-w-[404px] justify-center items-center font-raleway text-sm font-semibold leading-5 text-brand-blue tracking-widest absolute top-[60px] left-1/2 transform -translate-x-1/2 text-center uppercase z-[2] px-4"
      >
        The African Healthcare Challenge<br />We Understand Your Struggle
      </div>

      <!-- Main Title -->
      <div
        class="w-full max-w-[995px] font-raleway text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight tracking-tight absolute top-[120px] left-1/2 transform -translate-x-1/2 text-center z-[4] px-4"
      >
        <span class="font-raleway text-brand-purple-light">
          Beyond Blueprints
        </span>
        <span class="font-raleway text-white block mt-2">
          Addressing Africa's Real Healthcare<br class="hidden xl:block" />
          Pain Points
        </span>
      </div>

      <!-- Description -->
      <div
        class="flex w-full max-w-[800px] justify-center items-center font-manrope text-lg xl:text-lg font-normal leading-relaxed text-white absolute top-[300px] left-1/2 transform -translate-x-1/2 text-center z-[3] px-4"
      >
        For too long, our healthcare heroes and the communities they serve have
        faced immense challenges. From the relentless "Triple Burden" of disease
        to critical shortages in medical staff and persistent funding
        challenges, the system often feels stretched thin.<br
          class="hidden xl:block"
        />Manual records lead to delays, fragmented data hinders care, and vital
        resources are often hard to track. We hear your concerns about:
      </div>

      <!-- Challenge Cards Container - Desktop -->
      <div
        class="w-full max-w-[1080px] h-[360px] bg-neutral-900 rounded-xl absolute top-[500px] left-1/2 transform -translate-x-1/2 z-[6] mx-8"
      >
        <!-- Desktop Layout: 4 cards in a row -->
        <div class="grid grid-cols-4 gap-8 xl:gap-14 p-6 xl:p-10">
          <!-- Vertical dividers for desktop -->
          <div
            class="w-px h-56 bg-gray-400 absolute top-1/2 left-[25%] transform -translate-y-1/2 z-[6]"
          ></div>
          <div
            class="w-px h-56 bg-gray-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 z-[7]"
          ></div>
          <div
            class="w-px h-56 bg-gray-400 absolute top-1/2 left-[75%] transform -translate-y-1/2 z-[8]"
          ></div>

          <!-- Challenge Cards for Desktop -->
          <div
            v-for="(challenge, index) in challenges"
            :key="index"
            class="flex flex-col items-center text-center space-y-4 relative"
          >
            <!-- Icon -->
            <div
              class="w-16 h-16 xl:w-20 xl:h-20 rounded-lg flex items-center justify-center"
            >
              <img
                :src="challenge.image"
                :alt="challenge.title"
                class="w-10 h-10 xl:w-12 xl:h-12 object-contain"
              />
            </div>

            <!-- Title -->
            <h3
              class="font-raleway text-base xl:text-lg 2xl:text-xl font-medium text-white leading-tight text-center"
            >
              {{ challenge.title }}
            </h3>
            <!-- Description -->
            <p
              class="font-manrope text-xs xl:text-sm font-normal leading-relaxed text-white text-center"
            >
              {{ challenge.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom text - Desktop -->
      <div
        class="flex w-full max-w-[1100px] justify-center items-start font-raleway text-xl font-semibold leading-tight text-white absolute top-[900px] left-1/2 transform -translate-x-1/2 text-center z-[26] px-4"
      >
        We understand these challenges because iSenseHUB was built from the
        ground up to solve them.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DotPattern from "../common/DotPattern.vue";

const challenges = [
  {
    title: "Stressed Clinicians",
    description:
      "Doctors and nurses juggling complex cases, burdened by endless paperwork, and facing burnout.",
    image: "/images/image1.PNG",
  },
  {
    title: "Patient Frustration",
    description:
      "Long waiting times, difficulty accessing specialists, and a lack of clear communication about their health journey.",
    image: "/images/image2.PNG",
  },
  {
    title: "Hospital Hurdles",
    description:
      "Crippling cash flow due to delayed reimbursements, frequent stockouts of essential supplies, and inefficient operations.",
    image: "/images/image3.PNG",
  },
  {
    title: "Data Disconnect",
    description:
      "Vital health information trapped in paper files or scattered across disconnected systems, making comprehensive care a distant dream.",
    image: "/images/image4.PNG",
  },
];
</script>

<style scoped>
.challenges-container {
  overflow: hidden;
}

.challenges-container,
.challenges-container * {
  box-sizing: border-box;
}

/* Custom font families */
.font-raleway {
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.font-manrope {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* Ensure proper z-index stacking */
.z-\[1\] {
  z-index: 1;
}
.z-\[2\] {
  z-index: 2;
}
.z-\[3\] {
  z-index: 3;
}
.z-\[4\] {
  z-index: 4;
}
.z-\[6\] {
  z-index: 6;
}
.z-\[7\] {
  z-index: 7;
}
.z-\[8\] {
  z-index: 8;
}
.z-\[9\] {
  z-index: 9;
}
.z-\[26\] {
  z-index: 26;
}

/* Subtle 3D floating animations */
@keyframes float-left {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) rotateY(0deg);
  }
  25% {
    transform: translateY(-10px) translateX(5px) rotateY(2deg);
  }
  50% {
    transform: translateY(-5px) translateX(-3px) rotateY(-1deg);
  }
  75% {
    transform: translateY(-15px) translateX(8px) rotateY(1deg);
  }
}

@keyframes float-right {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) rotateY(0deg);
  }
  25% {
    transform: translateY(-8px) translateX(-5px) rotateY(-2deg);
  }
  50% {
    transform: translateY(-12px) translateX(3px) rotateY(1deg);
  }
  75% {
    transform: translateY(-6px) translateX(-8px) rotateY(-1deg);
  }
}

.animate-float-left {
  animation: float-left 8s ease-in-out infinite;
}

.animate-float-right {
  animation: float-right 10s ease-in-out infinite;
}

/* Mobile-specific styles */
@media (max-width: 1023px) {
  .challenges-container {
    min-height: auto !important;
    height: auto !important;
    padding: 1rem 0;
  }

  .challenges-container .block.lg\:hidden {
    display: block !important;
    position: relative !important;
    z-index: 10 !important;
    visibility: visible !important;
    opacity: 1 !important;
  }

  .challenges-container .hidden.lg\:block {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }

  /* Ensure background images are visible but subtle on mobile */
  .challenges-container .animate-float-left,
  .challenges-container .animate-float-right {
    opacity: 0.3;
  }

  /* Mobile card spacing */
  .challenges-container .space-y-3 > * + * {
    margin-top: 0.75rem;
  }

  /* Mobile text improvements */
  .challenges-container .text-xs {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }

  .challenges-container .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  /* Ensure mobile layout is visible */
  .challenges-container .block {
    display: block !important;
  }

  /* Mobile container adjustments */
  .challenges-container .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Mobile text visibility */
  .challenges-container .text-white {
    color: white !important;
  }

  .challenges-container .text-brand-blue {
    color: #7286ff !important;
  }

  .challenges-container .text-brand-purple-light {
    color: #929bff !important;
  }

  /* Mobile background */
  .challenges-container .bg-neutral-900 {
    background-color: #171717 !important;
  }
}

/* Desktop-specific styles */
@media (min-width: 1024px) {
  .challenges-container {
    min-height: 1000px;
  }

  .challenges-container .hidden.lg\:block {
    display: block;
  }

  .challenges-container .block.lg\:hidden {
    display: none;
  }
}

/* Extra large desktop screens */
@media (min-width: 1280px) {
  .challenges-container {
    min-height: 1100px;
  }
}

/* Ultra large desktop screens */
@media (min-width: 1920px) {
  .challenges-container {
    min-height: 1200px;
  }
}
</style>
