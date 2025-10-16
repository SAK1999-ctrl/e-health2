<template>
  <section
    class="relative w-full min-h-[600px] md:min-h-[800px] lg:h-[980px] text-left text-xl text-white font-raleway overflow-hidden py-12 md:py-16 lg:py-0"
  >
    <!-- Background gradient -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-600 via-purple-500 to-pink-500"
    ></div>

    <!-- Background Images -->
    <div class="absolute top-0 left-0 w-full h-full">
      <!-- Bottom-left background image -->
      <img
        class="background-image-left absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[416px] object-cover z-0 opacity-60 lg:opacity-100"
        src="/images/Untitled design (14) 1.png"
        alt="Background decoration"
      />
      <!-- Top-right background image -->
      <img
        class="background-image-right absolute top-0 right-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] object-cover z-0 opacity-60 lg:opacity-100"
        src="/images/Untitled design (13) 1.png"
        alt="Background decoration"
      />
    </div>

    <!-- Main container -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <!-- Section Header -->
      <div class="text-center pt-8 lg:pt-12 mb-8 lg:mb-12">
        <p
          class="text-xs sm:text-sm tracking-[2px] sm:tracking-[4px] leading-6 uppercase font-semibold text-indigo mb-4"
        >
          Hear From Our Community
        </p>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl tracking-[-1px] font-semibold text-center max-w-3xl mx-auto"
        >
          <p class="m-0">Voices of Change</p>
          <p class="m-0">What Our Partners Are Saying</p>
        </h2>
      </div>

      <!-- Testimonial Carousel Container -->
      <div
        class="relative w-full max-w-4xl mx-auto overflow-hidden px-4 sm:px-0"
      >
        <!-- Testimonial Cards Container -->
        <div
          class="testimonial-cards-container flex transition-transform duration-500 ease-in-out"
          :style="{
            transform: isMobile
              ? `translateX(-${currentSlide * 100}%)`
              : `translateX(-${currentSlide * 100}%)`,
          }"
        >
          <!-- Testimonial Card 1 -->
          <div
            class="testimonial-card flex-shrink-0 w-full rounded-[20px] bg-gray/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16"
          >
            <div class="flex flex-col md:flex-row gap-6 lg:gap-8">
              <!-- Doctor's Image -->
              <div class="flex-shrink-0 mx-auto md:mx-0">
                <div
                  class="relative w-40 h-48 sm:w-48 sm:h-56 lg:w-[222px] lg:h-[263px]"
                >
                  <img
                    class="absolute top-0 left-0 rounded-[30px] lg:rounded-[50px] w-full h-full object-cover"
                    src="/images/Rect10.png"
                    alt="Dr. Ama Mensah"
                  />
                  <div
                    class="absolute top-0 left-0 [filter:drop-shadow(20px_30px_30px_rgba(0,_0,_0,_0.25))] rounded-[30px] lg:rounded-[50px] border-mediumslateblue border-solid border-[3px] box-border w-full h-full"
                  ></div>
                </div>
              </div>

              <!-- Content -->
              <div
                class="flex-1 flex flex-col justify-center text-center md:text-left"
              >
                <!-- Testimonial Text -->
                <p
                  class="text-sm sm:text-base lg:text-lg leading-relaxed font-manrope text-white mb-6"
                >
                  "Before iSenseHUB, our patient registration was a daily
                  headache. Now, it's smooth, fast, and our staff can dedicate
                  more time to actual care. This platform is a game-changer for
                  efficiency!"
                </p>

                <!-- Author Info -->
                <div>
                  <h3
                    class="text-lg sm:text-xl lg:text-[25px] font-raleway font-semibold text-white mb-1"
                  >
                    Dr. Ama Mensah
                  </h3>
                  <p
                    class="text-base sm:text-lg lg:text-xl font-raleway text-white/90"
                  >
                    Hospital Administrator, Accra
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 2 -->
          <div
            class="testimonial-card flex-shrink-0 w-full rounded-[20px] bg-gray/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16"
          >
            <div class="flex flex-col md:flex-row gap-6 lg:gap-8">
              <!-- Doctor's Image -->
              <div class="flex-shrink-0 mx-auto md:mx-0">
                <div
                  class="relative w-40 h-48 sm:w-48 sm:h-56 lg:w-[222px] lg:h-[263px]"
                >
                  <img
                    class="absolute top-0 left-0 rounded-[30px] lg:rounded-[50px] w-full h-full object-cover"
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=220&h=260&fit=crop"
                    alt="Dr. Sarah Johnson"
                  />
                  <div
                    class="absolute top-0 left-0 [filter:drop-shadow(20px_30px_30px_rgba(0,_0,_0,_0.25))] rounded-[30px] lg:rounded-[50px] border-mediumslateblue border-solid border-[3px] box-border w-full h-full"
                  ></div>
                </div>
              </div>

              <!-- Content -->
              <div
                class="flex-1 flex flex-col justify-center text-center md:text-left"
              >
                <!-- Testimonial Text -->
                <p
                  class="text-sm sm:text-base lg:text-lg leading-relaxed font-manrope text-white mb-6"
                >
                  "iSenseHUB has revolutionized our patient management system.
                  The interface is intuitive, and our team productivity has
                  increased by 40%. It's exactly what we needed for modern
                  healthcare."
                </p>

                <!-- Author Info -->
                <div>
                  <h3
                    class="text-lg sm:text-xl lg:text-[25px] font-raleway font-semibold text-white mb-1"
                  >
                    Dr. Sarah Johnson
                  </h3>
                  <p
                    class="text-base sm:text-lg lg:text-xl font-raleway text-white/90"
                  >
                    Chief Medical Officer, Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial Card 3 -->
          <div
            class="testimonial-card flex-shrink-0 w-full rounded-[20px] bg-gray/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16"
          >
            <div class="flex flex-col md:flex-row gap-6 lg:gap-8">
              <!-- Doctor's Image -->
              <div class="flex-shrink-0 mx-auto md:mx-0">
                <div
                  class="relative w-40 h-48 sm:w-48 sm:h-56 lg:w-[222px] lg:h-[263px]"
                >
                  <img
                    class="absolute top-0 left-0 rounded-[30px] lg:rounded-[50px] w-full h-full object-cover"
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=220&h=260&fit=crop"
                    alt="Dr. Michael Chen"
                  />
                  <div
                    class="absolute top-0 left-0 [filter:drop-shadow(20px_30px_30px_rgba(0,_0,_0,_0.25))] rounded-[30px] lg:rounded-[50px] border-mediumslateblue border-solid border-[3px] box-border w-full h-full"
                  ></div>
                </div>
              </div>

              <!-- Content -->
              <div
                class="flex-1 flex flex-col justify-center text-center md:text-left"
              >
                <!-- Testimonial Text -->
                <p
                  class="text-sm sm:text-base lg:text-lg leading-relaxed font-manrope text-white mb-6"
                >
                  "The data analytics features in iSenseHUB are outstanding. We
                  can now track patient outcomes and make data-driven decisions
                  that improve our care quality significantly."
                </p>

                <!-- Author Info -->
                <div>
                  <h3
                    class="text-lg sm:text-xl lg:text-[25px] font-raleway font-semibold text-white mb-1"
                  >
                    Dr. Michael Chen
                  </h3>
                  <p
                    class="text-base sm:text-lg lg:text-xl font-raleway text-white/90"
                  >
                    Data Analytics Director, Nairobi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Controls -->
        <div
          class="navigation-controls mt-8 lg:mt-12 flex items-center justify-center space-x-4"
        >
          <!-- Left Arrow -->
          <button
            @click="previousSlide"
            class="w-8 h-8 flex items-center justify-center bg-transparent rounded-lg border border-mediumslateblue hover:bg-white/10 transition-colors"
          >
            <img src="/images/VectorArr.png" alt="Previous" class="w-4 h-4" />
          </button>

          <!-- Dots -->
          <div class="flex space-x-2">
            <button
              v-for="(testimonial, index) in testimonials"
              :key="index"
              @click="goToSlide(index)"
              :class="[
                'w-2 h-2 rounded-full transition-colors',
                currentSlide === index ? 'bg-white' : 'bg-white/30',
              ]"
            ></button>
          </div>

          <!-- Right Arrow -->
          <button
            @click="nextSlide"
            class="w-8 h-8 flex items-center justify-center bg-transparent rounded-lg border border-mediumslateblue hover:bg-white/10 transition-colors"
          >
            <img
              src="/images/VectorArr.png"
              alt="Next"
              class="w-4 h-4 transform rotate-180"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Responsive check
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// Testimonial data
const testimonials = ref([
  {
    id: 1,
    name: "Dr. Ama Mensah",
    title: "Hospital Administrator, Accra",
    image: "/images/Rect10.png",
    quote:
      "Before iSenseHUB, our patient registration was a daily headache. Now, it's smooth, fast, and our staff can dedicate more time to actual care. This platform is a game-changer for efficiency!",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    title: "Chief Medical Officer, Lagos",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=220&h=260&fit=crop",
    quote:
      "iSenseHUB has revolutionized our patient management system. The interface is intuitive, and our team productivity has increased by 40%. It's exactly what we needed for modern healthcare.",
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    title: "Data Analytics Director, Nairobi",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=220&h=260&fit=crop",
    quote:
      "The data analytics features in iSenseHUB are outstanding. We can now track patient outcomes and make data-driven decisions that improve our care quality significantly.",
  },
]);

// Carousel state
const currentSlide = ref(0);
const autoPlayInterval = ref(null);

// Navigation functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.value.length;
};

const previousSlide = () => {
  currentSlide.value =
    currentSlide.value === 0
      ? testimonials.value.length - 1
      : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Auto-play functionality
const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
    autoPlayInterval.value = null;
  }
};

// Lifecycle hooks
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
  startAutoPlay();
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
  stopAutoPlay();
});
</script>

<style scoped>
/* Custom colors matching the design */
.text-indigo {
  color: #3d1687;
}

.bg-gray {
  background-color: #171717;
}

.border-mediumslateblue {
  border-color: #9863fd;
}

/* Ensure proper z-index layering */
.testimonials-container {
  z-index: 10;
}

.testimonial-card {
  z-index: 20;
}

.background-image-left,
.background-image-right {
  z-index: 1;
  opacity: 0.9;
  mix-blend-mode: overlay;
}

.background-image-right {
  opacity: 1;
}

.background-image-left {
  transform: translateX(-50px);
}

.background-image-right {
  transform: translateX(50px);
}

/* Carousel animations */
.testimonial-cards-container {
  transition: transform 0.5s ease-in-out;
}

.testimonial-card {
  transition: all 0.3s ease-in-out;
}

/* Hover effects for navigation */
.navigation-controls button:hover {
  transform: scale(1.1);
}

.navigation-controls button:active {
  transform: scale(0.95);
}

/* Responsive adjustments */
@media (max-width: 1673px) {
  .testimonials-container {
    width: 100%;
    max-width: 1673px;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 1440px) {
  .testimonials-container {
    width: 100%;
    padding: 0 2rem;
  }

  .testimonial-card {
    width: 100%;
    max-width: 1240px;
    left: 50%;
    transform: translateX(-50%);
  }

  .background-image-left {
    display: block;
    left: -100px;
  }

  .background-image-right {
    display: block;
    left: calc(100% - 400px);
  }
}

@media (max-width: 1024px) {
  .testimonials-container {
    padding: 0 1rem;
  }

  .testimonial-card {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: auto;
    min-height: 513px;
    padding: 2rem;
  }

  .doctor-image {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto 2rem;
  }

  .testimonial-text {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 1rem;
  }

  .author-name {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .author-title {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 2rem;
  }

  .navigation-controls {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    max-width: 100%;
    padding: 1.5rem;
  }

  .doctor-image {
    width: 200px;
    height: 250px;
  }

  .doctor-image img {
    width: 190px;
    height: 240px;
  }

  .testimonial-text {
    font-size: 1.125rem;
    line-height: 1.75;
  }

  .author-name {
    font-size: 1.25rem;
  }

  .author-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    padding: 1rem;
  }

  .doctor-image {
    width: 150px;
    height: 200px;
  }

  .doctor-image img {
    width: 140px;
    height: 190px;
  }

  .testimonial-text {
    font-size: 1rem;
    line-height: 1.6;
  }

  .author-name {
    font-size: 1.125rem;
  }

  .author-title {
    font-size: 0.875rem;
  }
}
</style>
