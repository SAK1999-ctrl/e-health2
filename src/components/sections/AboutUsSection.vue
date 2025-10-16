<template>
  <div
    ref="sectionRef"
    class="w-full relative bg-aboutus-bg overflow-hidden text-left text-num-16 text-white font-raleway py-12 sm:py-16"
  >
    <!-- Centered container with max-width -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main container background with content inside -->
      <div
        class="rounded-[50px] bg-darkslategray w-full h-auto p-8 sm:p-12 lg:p-16"
      >
        <!-- Main title -->
        <div class="text-center mb-8 sm:mb-12">
          <h2
            class="text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[57px] font-semibold max-w-[880px] mx-auto"
          >
            <p class="m-0">One Platform.</p>
            <p class="m-0 text-cornflowerblue">Total Healthcare Control.</p>
          </h2>
        </div>

        <!-- Two-column layout for content and video -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          <!-- Left Column: Tabs and Content -->
          <div class="flex flex-col space-y-6 sm:space-y-8">
            <!-- Tab navigation -->
            <div
              class="rounded-[80px] bg-gray-400 overflow-hidden flex items-center justify-center p-1 sm:p-2 gap-1 sm:gap-2 w-full sm:w-fit"
            >
              <div
                @click="setActiveTab('control')"
                :class="[
                  'rounded-[80px] overflow-hidden flex flex-col items-center justify-center py-1.5 px-2 sm:py-2 sm:px-4 md:px-6 cursor-pointer transition-all duration-300 flex-1 sm:flex-initial',
                  activeTab === 'control'
                    ? '[background:linear-gradient(90deg,_#3d1687,_#7c48b9)]'
                    : 'hover:bg-gray-300',
                ]"
              >
                <div
                  class="relative leading-6 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Control
                </div>
              </div>
              <div
                @click="setActiveTab('treatment')"
                :class="[
                  'rounded-[80px] overflow-hidden flex flex-col items-center justify-center py-1.5 px-2 sm:py-2 sm:px-4 md:px-6 cursor-pointer transition-all duration-300 flex-1 sm:flex-initial',
                  activeTab === 'treatment'
                    ? '[background:linear-gradient(90deg,_#3d1687,_#7c48b9)]'
                    : 'hover:bg-gray-300',
                ]"
              >
                <div
                  class="relative leading-6 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Treatment
                </div>
              </div>
              <div
                @click="setActiveTab('administration')"
                :class="[
                  'rounded-[80px] overflow-hidden flex flex-col items-center justify-center py-1.5 px-2 sm:py-2 sm:px-4 md:px-6 cursor-pointer transition-all duration-300 flex-1 sm:flex-initial',
                  activeTab === 'administration'
                    ? '[background:linear-gradient(90deg,_#3d1687,_#7c48b9)]'
                    : 'hover:bg-gray-300',
                ]"
              >
                <div
                  class="relative leading-6 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Administration
                </div>
              </div>
            </div>

            <!-- Dynamic content based on active tab -->
            <div
              class="leading-[25px] font-manrope transition-all duration-500 text-sm sm:text-base"
            >
              <!-- Control Tab Content -->
              <div v-if="activeTab === 'control'" class="animate-fade-up">
                <p class="m-0">
                  Take full control of your healthcare operations with
                  iSenseHUB. From seamless patient registration to smart
                  scheduling and secure record management, our platform empowers
                  hospitals and clinics to deliver faster, safer, and more
                  reliable care.
                </p>
                <p class="m-0">&nbsp;</p>
                <p class="m-0">
                  Our AI-powered tools assist clinicians at every step of the
                  patient journey — from diagnosis support to telemedicine
                  consultations — ensuring accuracy, speed, and better health
                  outcomes for every community.
                </p>
              </div>

              <!-- Treatment Tab Content -->
              <div v-if="activeTab === 'treatment'" class="animate-fade-up">
                <p class="m-0">
                  Revolutionize patient treatment with our advanced medical
                  protocols and AI-driven diagnostic tools. Our platform
                  provides real-time treatment recommendations, drug interaction
                  alerts, and personalized care plans tailored to each patient's
                  unique medical history.
                </p>
                <p class="m-0">&nbsp;</p>
                <p class="m-0">
                  Integrated telemedicine capabilities enable remote
                  consultations, while our treatment tracking system ensures
                  optimal patient outcomes through continuous monitoring and
                  adaptive care strategies.
                </p>
              </div>

              <!-- Administration Tab Content -->
              <div
                v-if="activeTab === 'administration'"
                class="animate-fade-up"
              >
                <p class="m-0">
                  Streamline healthcare administration with our comprehensive
                  management suite. Handle billing, insurance verification,
                  appointment scheduling, and staff management all from one
                  centralized platform designed to reduce administrative burden.
                </p>
                <p class="m-0">&nbsp;</p>
                <p class="m-0">
                  Our automated workflows and compliance tracking ensure your
                  facility meets all regulatory requirements while maintaining
                  the highest standards of patient care and operational
                  efficiency.
                </p>
              </div>
            </div>

            <!-- Statistics with animated numbers -->
            <div
              class="flex flex-wrap gap-4 sm:gap-6 text-2xl sm:text-[38px] font-dm-sans"
            >
              <div
                class="flex-1 min-w-[120px] sm:min-w-[150px] flex flex-col items-start"
              >
                <b
                  class="relative tracking-[-0.03em] leading-tight sm:leading-[48px]"
                  >{{ animatedPatients }}+</b
                >
                <b
                  class="relative text-base sm:text-[21px] leading-6 sm:leading-8 font-semibold"
                  >Patient Healed</b
                >
              </div>
              <div
                class="flex-1 min-w-[120px] sm:min-w-[150px] flex flex-col items-start"
              >
                <b
                  class="relative tracking-[-0.03em] leading-tight sm:leading-[48px]"
                  >{{ animatedTools }}+</b
                >
                <b
                  class="relative text-base sm:text-[21px] leading-6 sm:leading-8 font-semibold"
                  >Advanced Tools</b
                >
              </div>
              <div
                class="flex-1 min-w-[120px] sm:min-w-[150px] flex flex-col items-start"
              >
                <b
                  class="relative tracking-[-0.03em] leading-tight sm:leading-[48px]"
                  >{{ animatedDoctors }}+</b
                >
                <b
                  class="relative text-base sm:text-[21px] leading-6 sm:leading-8 font-semibold"
                  >Expert Doctor</b
                >
              </div>
            </div>
          </div>

          <!-- Right Column: Video/Media -->
          <div class="flex items-center justify-center lg:justify-end">
            <div
              class="rounded-3xl bg-gray-200 w-full max-w-[520px] aspect-[520/420] overflow-hidden text-center font-dm-sans relative"
            >
              <img
                class="absolute w-full h-full object-cover"
                alt=""
                src="/images/Doctor Consulting Patient.png"
              />
              <img
                class="absolute top-[24px] right-[24px] rounded-lg w-8 h-8 sm:w-10 sm:h-10 z-10"
                alt=""
                src="/images/Doctor Consulting Patient.png"
              />
              <div
                class="absolute bottom-[35px] left-[24px] leading-6 font-medium text-sm z-10"
              >
                05.59
              </div>
              <div
                class="absolute bottom-[27px] left-[77px] right-[24px] h-2 z-10"
              >
                <div
                  class="absolute top-[2px] left-[0px] rounded-[40px] bg-gray-100 w-full h-1 opacity-[0.5]"
                />
                <div
                  class="absolute top-[2px] left-[0px] rounded-[40px] bg-royalblue w-[77%] h-1"
                />
                <div
                  class="absolute top-[0px] left-[75%] rounded-[50%] bg-royalblue w-2 h-2"
                />
              </div>
              <div
                class="absolute top-[calc(50%_-_44px)] left-[calc(50%_-_44px)] w-[88px] h-[88px] z-10 flex items-center justify-center"
              >
                <!-- Play button placeholder -->
                <div
                  class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <div
                    class="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Debug: Manual trigger button (remove in production) -->
    <!-- <button 
      @click="startAnimations"
      class="absolute top-[50px] right-[50px] bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors z-10"
      v-if="!hasAnimated"
    >
      Start Animation
    </button> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useNumberAnimation } from "../../composables/useNumberAnimation.js";

// Reactive state for active tab
const activeTab = ref("control");
const sectionRef = ref<HTMLElement | null>(null);

// Number animation composables
const { animatedValue: animatedPatients, animateNumber: animatePatients } =
  useNumberAnimation();
const { animatedValue: animatedTools, animateNumber: animateTools } =
  useNumberAnimation();
const { animatedValue: animatedDoctors, animateNumber: animateDoctors } =
  useNumberAnimation();

// Method to set active tab
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};

// Animation state
let hasAnimated = false;

// Intersection Observer for triggering animations
let observer: IntersectionObserver | null = null;

const startAnimations = () => {
  if (hasAnimated) return; // Prevent multiple triggers

  hasAnimated = true;
  console.log("Starting number animations..."); // Debug log

  // Start animations with different durations for variety
  animatePatients(200, 2500); // 2.5 seconds
  animateTools(550, 3000); // 3 seconds
  animateDoctors(70, 2000); // 2 seconds
};

// Scroll-based trigger as backup
const handleScroll = () => {
  if (hasAnimated || !sectionRef.value) return;

  const rect = sectionRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Trigger when section is 50% visible
  if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
    startAnimations();
  }
};

onMounted(() => {
  if (sectionRef.value) {
    // Primary: Intersection Observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            console.log("Intersection Observer triggered animation"); // Debug log
            startAnimations();
            // Disconnect observer after first trigger
            if (observer) {
              observer.disconnect();
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Start animation when section is closer to viewport
      }
    );

    observer.observe(sectionRef.value);

    // Backup: Scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  window.removeEventListener("scroll", handleScroll);
});
</script>
