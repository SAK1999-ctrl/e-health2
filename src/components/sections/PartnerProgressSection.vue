<template>
  <div
    class="relative min-h-screen overflow-hidden text-white"
    style="
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0),
          rgba(44, 40, 61, 0.2)
        ),
        linear-gradient(
          177.59deg,
          #2c283c,
          #5c41a0 27.88%,
          #8556f5 46.63%,
          #bf5fff 73.08%,
          #c560ff
        );
    "
  >
    <div
      class="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28"
    >
      <!-- Header section -->
      <header class="text-center motion-safe:animate-fade-up">
        <p
          class="mb-6 font-raleway text-xs font-semibold uppercase tracking-[0.4em] text-brand-blue sm:text-sm"
        >
          iSenseHUB
          <br />
          Your Partner in Progress – Smart Solutions, Real Impact
        </p>
        <h1
          class="mx-auto mb-6 max-w-4xl font-raleway text-[2.6rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3rem]"
        >
          <span class="block text-brand-purple-light">
            Unlocking Africa's Healthcare Potential
          </span>
          <span class="mt-2 block text-white">The iSenseHUB Difference</span>
        </h1>
        <p
          class="mx-auto max-w-3xl font-manrope text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl"
        >
          iSenseHUB is more than just software; it's a commitment to a
          healthier, more efficient Africa. We bring you a platform that acts as
          your Resource Multiplier and Operational Lifeline, delivering
          immediate, tangible value.
        </p>
      </header>
      <!-- Background decorative images -->
      <!-- DNA structure - positioned behind mobile and features section -->
      <img
        src="/images/Untitled design (2) 1.png"
        alt="DNA structure background"
        class="absolute left-[-30px] sm:left-[-10px] md:left-[-40px] lg:left-[-60px] 2xl:left-[-240px] bottom-32 sm:bottom-90 w-[60vw] sm:w-[50vw] md:w-[45vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw] max-w-[600px] min-w-[200px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] object-contain opacity-85 z-0 pointer-events-none animate-dna-subtle-rotate"
        loading="lazy"
        decoding="async"
      />
      <!-- Capsules - positioned on the right side -->
      <img
        src="/images/Untitled design (3) 1.png"
        alt="Capsules background"
        class="absolute top-[30px] sm:top-[20px] md:top-[40px] lg:top-[120px] right-[-10px] sm:right-[-10px] md:right-[-10px] xl:right-[-110px] 2xl:right-[-260px] w-[150px] h-[200px] sm:w-[200px] sm:h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[350px] xl:w-[350px] xl:h-[400px] 2xl:w-[350px] 2xl:h-[400px] object-contain opacity-60 sm:opacity-60 md:opacity-60 lg:opacity-90 z-[-1] pointer-events-none animate-capsules-float"
      />
      <!-- Features section -->
      <section class="mt-16 lg:mt-20 relative z-20">
        <!-- Mobile/Tablet Layout -->
        <div class="block lg:hidden px-4">
          <div class="space-y-6">
            <!-- Feature 1 -->
            <div class="bg-neutral-900 rounded-xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-neutral-800 hover:border hover:border-mediumslateblue/30">
              <div
                class="rounded-full bg-mediumslateblue w-20 h-20 flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-mediumslateblue/50"
              >
                <img
                  src="/src/assets/icons/Group-1.png"
                  alt="Amplify icon"
                  class="w-12 h-12 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-mediumslateblue font-bold text-lg mb-3 transition-colors duration-300 hover:text-mediumslateblue/80">
                  Amplify Your Experts by 3X
                </h3>
                <p class="text-white/85 text-sm leading-relaxed font-manrope transition-colors duration-300 hover:text-white/95">
                  Our cutting-edge AI isn't here to replace, but to empower.
                  Imagine doctors and clinicians freed from administrative
                  burdens, able to focus 3 times more on patient care. That's
                  the iSenseHUB promise – a direct, measurable Return on
                  Investment for your institution.
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="bg-neutral-900 rounded-xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-neutral-800 hover:border hover:border-darkorchid/30">
              <div
                class="rounded-full bg-darkorchid w-20 h-20 flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-darkorchid/50"
              >
                <img
                  src="/src/assets/icons/Group-2.png"
                  alt="Language icon"
                  class="w-12 h-12 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-darkorchid font-bold text-lg mb-3 transition-colors duration-300 hover:text-darkorchid/80">
                  Speak Every Language, Serve Every Community
                </h3>
                <p class="text-white/85 text-sm leading-relaxed font-manrope transition-colors duration-300 hover:text-white/95">
                  Africa is rich in languages, and so is iSenseHUB. With support
                  for English, French, Portuguese, Spanish, and a total of 9
                  languages at the click of a button, we ensure seamless
                  communication and accessibility for every patient and
                  provider, no matter where they are.
                </p>
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="bg-neutral-900 rounded-xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-neutral-800 hover:border hover:border-deeppink/30">
              <div
                class="rounded-full bg-deeppink w-20 h-20 flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-deeppink/50"
              >
                <img
                  src="/src/assets/icons/Group-3.png"
                  alt="Unified system icon"
                  class="w-12 h-12 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-deeppink font-bold text-lg mb-3 transition-colors duration-300 hover:text-deeppink/80">
                  A Unified System, Tailored for You
                </h3>
                <p class="text-white/85 text-sm leading-relaxed font-manrope transition-colors duration-300 hover:text-white/95">
                  Whether you manage a single clinic, a bustling hospital, or a
                  network of healthcare facilities, iSenseHUB adapts. Our
                  comprehensive system seamlessly integrates patient management,
                  clinical operations, financial oversight, and resource
                  allocation, all in one intuitive platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Layout -->
        <div
          class="hidden lg:block relative mx-auto w-full max-w-[500px] h-[661px] z-20"
        >
          <!-- Mobile phone image on the left -->
          <img
            ref="mobileImage"
            src="/images/Blue Vacation Calling Phone Screen Instagram Post (1) 1.png"
            alt="Mobile phone interface"
            class="absolute top-[7px] left-[10px] w-[366px] h-[714px] object-cover z-30 mobile-image"
          />

          <!-- Features card background -->
          <div
            ref="cardBackground"
            class="absolute top-0 left-0 rounded-[40px] bg-neutral-900 w-[820px] h-[661px] z-10 card-slide-in"
          >
            <!-- Feature 1 -->
            <div
              class="feature-hover-wrapper feature-1-wrapper absolute top-[50px] w-[750px] h-[160px] rounded-xl border-1 border-transparent transition-all duration-300 ease-in-out cursor-pointer z-20"
            >
              <div
                class="absolute top-[19px] left-[23px] rounded-[50%] bg-mediumslateblue w-[115px] h-[115px] z-20"
              ></div>
              <img
                src="/src/assets/icons/Group-1.png"
                alt="Amplify icon"
                class="absolute top-[37px] left-[40px] w-20 h-20 object-cover z-20"
              />
              <b
                class="absolute top-[19px] left-[181px] inline-block text-mediumslateblue w-[338px] h-[22px] z-20"
                style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                >Amplify Your Experts by 3X</b
              >
              <div
                class="absolute top-[51px] left-[181px] text-base leading-5 font-manrope inline-block w-[523px] h-[77px] text-white/85 z-20"
              >
                Our cutting-edge AI isn't here to replace, but to empower.
                Imagine doctors and clinicians freed from administrative
                burdens, able to focus 3 times more on patient care. That's the
                iSenseHUB promise – a direct, measurable Return on Investment
                for your institution.
              </div>
            </div>

            <!-- Feature 2 -->
            <div
              class="feature-hover-wrapper feature-2-wrapper absolute top-[100px] w-[750px] h-[160px] rounded-xl border-1 border-transparent transition-all duration-300 ease-in-out cursor-pointer z-20"
            >
              <div
                class="absolute top-[19px] left-[23px] rounded-[50%] bg-darkorchid w-[115px] h-[115px] z-20"
              ></div>
              <img
                src="/src/assets/icons/Group-2.png"
                alt="Language icon"
                class="absolute top-[37px] left-[40px] w-20 h-20 object-cover z-20"
              />
              <div
                class="absolute top-[21px] left-[181px] font-medium text-darkorchid inline-block w-[516px] h-[22px] z-20"
              >
                Speak Every Language, Serve Every Community
              </div>
              <div
                class="absolute top-[53px] left-[181px] text-base leading-5 font-manrope inline-block w-[523px] h-[95px] text-white/85 z-20"
              >
                Africa is rich in languages, and so is iSenseHUB. With support
                for English, French, Portuguese, Spanish, and a total of 9
                languages at the click of a button, we ensure seamless
                communication and accessibility for every patient and provider,
                no matter where they are.
              </div>
            </div>

            <!-- Feature 3 -->
            <div
              class="feature-hover-wrapper feature-3-wrapper absolute top-[150px] w-[750px] h-[160px] rounded-xl border-1 border-transparent transition-all duration-300 ease-in-out cursor-pointer z-20"
            >
              <div
                class="absolute top-[19px] left-[23px] rounded-[50%] bg-deeppink w-[115px] h-[115px] z-20"
              ></div>
              <img
                src="/src/assets/icons/Group-3.png"
                alt="Unified system icon"
                class="absolute top-[37px] left-[40px] w-20 h-20 object-cover z-20"
              />
              <div
                class="absolute top-[23px] left-[185px] font-medium text-deeppink inline-block w-[442px] h-[22px] z-20"
              >
                A Unified System, Tailored for You
              </div>
              <div
                class="absolute top-[55px] left-[181px] text-base leading-5 font-manrope inline-block w-[523px] h-[97px] text-white/85 z-20"
              >
                Whether you manage a single clinic, a bustling hospital, or a
                network of healthcare facilities, iSenseHUB adapts. Our
                comprehensive system seamlessly integrates patient management,
                clinical operations, financial oversight, and resource
                allocation, all in one intuitive platform.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Statistics section -->
      <section class="stats-section mt-20 motion-safe:animate-fade-up lg:mt-24">
        <div
          class="mx-auto w-full max-w-[960px] rounded-3xl bg-gradient-to-r from-[#6A3BD2] via-[#8B3FF6] to-[#E749A8] px-6 py-12 shadow-[0_30px_100px_rgba(80,19,140,0.45)] sm:px-10 lg:px-16 lg:py-16"
        >
          <div
            class="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4"
          >
            <!-- Travel Time -->
            <div class="space-y-3">
              <div
                class="font-raleway text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              >
                {{ animatedStats.travelTime }}%
              </div>
              <div class="font-manrope text-sm text-white/90 sm:text-base">
                <span class="block">Less Travel &</span>
                <span class="block">Waiting Time</span>
              </div>
            </div>

            <!-- Patient Care -->
            <div class="space-y-3">
              <div
                class="font-raleway text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              >
                {{ animatedStats.patientCare }}x
              </div>
              <div class="font-manrope text-sm text-white/90 sm:text-base">
                <span class="block">More Time for</span>
                <span class="block">Patient Care</span>
              </div>
            </div>

            <!-- Cash Flow -->
            <div class="space-y-3">
              <div
                class="font-raleway text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              >
                {{ animatedStats.cashFlow }}%
              </div>
              <div class="font-manrope text-sm text-white/90 sm:text-base">
                <span class="block">Improvement in</span>
                <span class="block">Hospital Cash Flow</span>
              </div>
            </div>

            <!-- Satisfaction -->
            <div class="space-y-3">
              <div
                class="font-raleway text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              >
                {{ animatedStats.satisfaction }}%
              </div>
              <div class="font-manrope text-sm text-white/90 sm:text-base">
                <span class="block">Patient</span>
                <span class="block">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const mobileImage = ref<HTMLImageElement | null>(null);
const cardBackground = ref<HTMLDivElement | null>(null);
const isAnimated = ref(false);
const cardAnimated = ref(false);
const statsAnimated = ref(false);
const animatedStats = ref({
  travelTime: 0,
  patientCare: 0,
  cashFlow: 0,
  satisfaction: 0,
});

const handleScroll = () => {
  if (mobileImage.value && !isAnimated.value) {
    const rect = mobileImage.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Trigger animation when the element is 60% visible
    if (rect.top < windowHeight * 0.6 && rect.bottom > 0) {
      isAnimated.value = true;
      mobileImage.value.classList.add("animate-mobile-slide-in");
    }
  }

  // Check for card background animation
  if (cardBackground.value && !cardAnimated.value) {
    const rect = cardBackground.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Trigger animation when the element is 50% visible
    if (rect.top < windowHeight * 0.5 && rect.bottom > 0) {
      cardAnimated.value = true;
      cardBackground.value.classList.add("animate-card-slide-in");
    }
  }

  // Check for statistics section animation
  const statsSection = document.querySelector(".stats-section");
  if (statsSection && !statsAnimated.value) {
    const rect = statsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Trigger animation when the element is 70% visible
    if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
      statsAnimated.value = true;
      animateStats();
    }
  }
};

const animateStats = () => {
  const duration = 2000; // 2 seconds
  const steps = 60; // 60 steps for smooth animation
  const stepDuration = duration / steps;

  const targetValues = {
    travelTime: 70,
    patientCare: 3,
    cashFlow: 40,
    satisfaction: 98,
  };

  let currentStep = 0;

  const animate = () => {
    if (currentStep <= steps) {
      const progress = currentStep / steps;
      const easeOutCubic = 1 - Math.pow(1 - progress, 3); // Easing function

      animatedStats.value.travelTime = Math.round(
        targetValues.travelTime * easeOutCubic
      );
      animatedStats.value.patientCare = Math.round(
        targetValues.patientCare * easeOutCubic
      );
      animatedStats.value.cashFlow = Math.round(
        targetValues.cashFlow * easeOutCubic
      );
      animatedStats.value.satisfaction = Math.round(
        targetValues.satisfaction * easeOutCubic
      );

      currentStep++;
      setTimeout(animate, stepDuration);
    }
  };

  animate();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  // Check initial position
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const features = [
  {
    title: "Amplify Your Experts by 3X",
    description:
      "Our cutting-edge AI isn't here to replace, but to empower. Imagine doctors and clinicians freed from administrative burdens, able to focus 3 times more on patient care. That's the HubHubsen promise – a direct, measurable Return on Investment for your institution.",
    accentClass: "from-brand-purple to-brand-purple/70",
    textClass: "text-brand-purple",
    icon: "/src/assets/icons/Group-1.svg",
  },
  {
    title: "Speak Every Language, Serve Every Community",
    description:
      "Africa is rich in languages, and so is HubHubsen. With support for English, French, Portuguese, Spanish, and a total of 9 languages at the click of a button, we ensure seamless communication and accessibility for every patient and provider, no matter where they are.",
    accentClass: "from-brand-magenta to-brand-magenta/70",
    textClass: "text-brand-magenta",
    icon: "/src/assets/icons/Group-2.svg",
  },
  {
    title: "A Unified System, Tailored for You",
    description:
      "Whether you manage a single clinic, a bustling hospital, or a network of healthcare facilities, HubHubsen adapts. Our comprehensive system seamlessly integrates patient management, clinical operations, financial oversight, and resource allocation, all in one intuitive platform.",
    accentClass: "from-brand-pink to-brand-pink/70",
    textClass: "text-brand-pink",
    icon: "/src/assets/icons/Group-3.svg",
  },
];

const stats = [
  {
    value: "70%",
    lines: ["Less Travel &", "Waiting Time"],
  },
  {
    value: "3x",
    lines: ["More Time for", "Patient Care"],
  },
  {
    value: "40%",
    lines: ["Improvement in", "Hospital Cash Flow"],
  },
  {
    value: "98%",
    lines: ["Patient", "Satisfaction"],
  },
];
</script>

<style scoped>
/* Custom colors matching the design */
.bg-mediumslateblue {
  background-color: #9265ff;
}

.bg-darkorchid {
  background-color: #c560ff;
}

.bg-deeppink {
  background-color: #ff409e;
}

.text-mediumslateblue {
  color: #9265ff;
}

.text-darkorchid {
  color: #c560ff;
}

.text-deeppink {
  color: #ff409e;
}

/* Motion safe animation */
@media (prefers-reduced-motion: no-preference) {
  .motion-safe\:animate-fade-up {
    animation: fade-up 0.8s ease-out forwards;
  }
}

@media (prefers-reduced-motion: reduce) {
  .motion-safe\:animate-fade-up {
    animation: none;
  }
}

/* DNA Subtle Rotation Animation - More noticeable movements */
@keyframes dna-subtle-rotate {
  0% {
    transform: rotateZ(0deg) translateY(0px) scale(1);
    filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.3));
  }
  20% {
    transform: rotateZ(4deg) translateY(-5px) scale(1.02);
    filter: drop-shadow(0 0 25px rgba(138, 43, 226, 0.4));
  }
  40% {
    transform: rotateZ(2deg) translateY(-8px) scale(1.03);
    filter: drop-shadow(0 0 30px rgba(138, 43, 226, 0.5));
  }
  60% {
    transform: rotateZ(-2deg) translateY(5px) scale(1.02);
    filter: drop-shadow(0 0 25px rgba(138, 43, 226, 0.4));
  }
  80% {
    transform: rotateZ(-4deg) translateY(3px) scale(1.01);
    filter: drop-shadow(0 0 22px rgba(138, 43, 226, 0.35));
  }
  100% {
    transform: rotateZ(0deg) translateY(0px) scale(1);
    filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.3));
  }
}

.animate-dna-subtle-rotate {
  animation: dna-subtle-rotate 4s ease-in-out infinite;
  transform-origin: center center;
  will-change: transform, filter;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

/* Performance optimizations for different screen sizes */
@media (max-width: 768px) {
  .animate-dna-subtle-rotate {
    animation-duration: 6s; /* Faster but still smooth on mobile */
    filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.25)); /* Slightly reduced shadow on mobile */
  }
}

@media (max-width: 480px) {
  .animate-dna-subtle-rotate {
    animation-duration: 8s; /* A bit slower on very small screens */
    filter: drop-shadow(0 0 12px rgba(138, 43, 226, 0.2));
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-dna-subtle-rotate {
    animation: none;
    transform: none;
  }
}

/* High DPI displays optimization */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .animate-dna-subtle-rotate {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Capsules Floating Animation with Shine Effect */
@keyframes capsules-float {
  0% {
    transform: translateY(0px) translateX(0px) rotateZ(0deg) scale(1);
    filter: drop-shadow(0 0 15px rgba(197, 96, 255, 0.3)) brightness(1);
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotateZ(5deg) scale(1.02);
    filter: drop-shadow(0 0 20px rgba(197, 96, 255, 0.4)) brightness(1.1);
  }
  50% {
    transform: translateY(-10px) translateX(-5px) rotateZ(-3deg) scale(1.05);
    filter: drop-shadow(0 0 25px rgba(197, 96, 255, 0.5)) brightness(1.2);
  }
  75% {
    transform: translateY(-25px) translateX(8px) rotateZ(3deg) scale(1.02);
    filter: drop-shadow(0 0 20px rgba(197, 96, 255, 0.4)) brightness(1.1);
  }
  100% {
    transform: translateY(0px) translateX(0px) rotateZ(0deg) scale(1);
    filter: drop-shadow(0 0 15px rgba(197, 96, 255, 0.3)) brightness(1);
  }
}

.animate-capsules-float {
  animation: capsules-float 8s ease-in-out infinite;
  transform-style: preserve-3d;
}

/* Additional shine effect for capsules */
.animate-capsules-float::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shine 3s infinite;
  pointer-events: none;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Pause animations on hover for better UX */
.animate-dna-subtle-rotate:hover,
.animate-capsules-float:hover {
  animation-play-state: paused;
}

/* Feature hover effects */
.feature-hover-wrapper {
  position: relative;
  overflow: hidden;
}

.feature-hover-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border-radius: 0 5rem 5rem 0; /* No rounding on left side, very rounded on right side */
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

.feature-hover-wrapper:hover::before {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

/* Feature 1 hover effect - Medium Slate Blue */
.feature-1-wrapper:hover {
  border-color: #9265ff;
  border-radius: 0 5rem 5rem 0; /* No rounding on left side, very rounded on right side */
  box-shadow: 0 0 20px rgba(146, 101, 255, 0.3),
    0 0 40px rgba(146, 101, 255, 0.1);
  transform: translateY(-2px);
}

.feature-1-wrapper:hover .text-mediumslateblue {
  color: #a67cff;
  text-shadow: 0 0 10px rgba(146, 101, 255, 0.5);
}

/* Feature 2 hover effect - Dark Orchid */
.feature-2-wrapper:hover {
  border-color: #c560ff;
  border-radius: 0 5rem 5rem 0; /* No rounding on left side, very rounded on right side */
  box-shadow: 0 0 20px rgba(197, 96, 255, 0.3), 0 0 40px rgba(197, 96, 255, 0.1);
  transform: translateY(-2px);
}

.feature-2-wrapper:hover .text-darkorchid {
  color: #d173ff;
  text-shadow: 0 0 10px rgba(197, 96, 255, 0.5);
}

/* Feature 3 hover effect - Deep Pink */
.feature-3-wrapper:hover {
  border-color: #ff409e;
  border-radius: 0 5rem 5rem 0; /* No rounding on left side, very rounded on right side */
  box-shadow: 0 0 20px rgba(255, 64, 158, 0.3), 0 0 40px rgba(255, 64, 158, 0.1);
  transform: translateY(-2px);
}

.feature-3-wrapper:hover .text-deeppink {
  color: #ff5bb3;
  text-shadow: 0 0 10px rgba(255, 64, 158, 0.5);
}

/* Icon circle hover effects */
.feature-hover-wrapper .rounded-\[50\%\] {
  transition: all 0.3s ease-in-out;
}

/* Feature 1 circle glow - Medium Slate Blue */
.feature-1-wrapper:hover .rounded-\[50\%\] {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(146, 101, 255, 0.6),
    0 0 40px rgba(146, 101, 255, 0.3);
}

/* Feature 2 circle glow - Dark Orchid */
.feature-2-wrapper:hover .rounded-\[50\%\] {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(197, 96, 255, 0.6), 0 0 40px rgba(197, 96, 255, 0.3);
}

/* Feature 3 circle glow - Deep Pink */
.feature-3-wrapper:hover .rounded-\[50\%\] {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 64, 158, 0.6), 0 0 40px rgba(255, 64, 158, 0.3);
}

/* Keep icons static */
.feature-hover-wrapper img {
  transition: none;
}

/* Text hover effects */
.feature-hover-wrapper:hover .text-white\/85 {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
}

/* Smooth transitions for all elements */
.feature-hover-wrapper * {
  transition: all 0.3s ease-in-out;
}

/* Mobile image animation */
.mobile-image {
  transform: translateX(-100vw) rotateY(-15deg) scale(0.8);
  opacity: 0;
  filter: blur(8px);
  transition: none;
}

/* Card slide-in animation */
.card-slide-in {
  transform: translateX(100vw) scale(0.9);
  opacity: 0;
  transition: none;
}

.animate-card-slide-in {
  animation: card-slide-in 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Statistics animation */
.stats-section .font-raleway {
  transition: transform 0.3s ease-out;
}

.stats-section .font-raleway:hover {
  transform: scale(1.05);
}

.animate-mobile-slide-in {
  animation: mobile-slide-in 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes mobile-slide-in {
  0% {
    transform: translateX(-100vw) rotateY(-15deg) scale(0.8);
    opacity: 0;
    filter: blur(8px);
  }
  15% {
    transform: translateX(-80vw) rotateY(-12deg) scale(0.82);
    opacity: 0.1;
    filter: blur(6px);
  }
  30% {
    transform: translateX(-60vw) rotateY(-8deg) scale(0.85);
    opacity: 0.2;
    filter: blur(4px);
  }
  45% {
    transform: translateX(-40vw) rotateY(-5deg) scale(0.88);
    opacity: 0.4;
    filter: blur(3px);
  }
  60% {
    transform: translateX(-20vw) rotateY(-3deg) scale(0.92);
    opacity: 0.6;
    filter: blur(2px);
  }
  75% {
    transform: translateX(-500px) rotateY(-1deg) scale(0.96);
    opacity: 0.8;
    filter: blur(1px);
  }
  90% {
    transform: translateX(-350px) rotateY(-0.5deg) scale(0.98);
    opacity: 0.9;
    filter: blur(0.5px);
  }
  100% {
    transform: translateX(-329px) rotateY(0deg) scale(1);
    opacity: 1;
    filter: blur(0px);
  }
}

@keyframes card-slide-in {
  0% {
    transform: translateX(100vw) scale(0.9);
    opacity: 0;
  }
  20% {
    transform: translateX(80vw) scale(0.92);
    opacity: 0.3;
  }
  40% {
    transform: translateX(60vw) scale(0.94);
    opacity: 0.5;
  }
  60% {
    transform: translateX(40vw) scale(0.96);
    opacity: 0.7;
  }
  80% {
    transform: translateX(20vw) scale(0.98);
    opacity: 0.85;
  }
  90% {
    transform: translateX(100px) scale(0.99);
    opacity: 0.95;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}
</style>
