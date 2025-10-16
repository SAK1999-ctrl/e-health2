<template>
  <div class="w-full max-w-7xl mx-auto navbar-container relative">
    <div class="flex items-center justify-between h-16">
      <!-- Desktop menu button -->
      <button
        @click="toggleDesktopMenu"
        class="hidden lg:flex items-center justify-center focus:outline-none focus:ring-white/50 bg-transparent z-20 p-0"
      >
        <!-- Menu Icon SVG -->
        <svg
          width="40"
          height="37"
          viewBox="0 0 40 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="36"
            rx="4.5"
            stroke="white"
          />
          <rect x="10" y="11" width="19" height="1" fill="white" />
          <rect x="10" y="18" width="19" height="1" fill="white" />
          <rect x="10" y="26" width="19" height="1" fill="white" />
        </svg>
      </button>

      <!-- Mobile menu button -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden flex items-center justify-center focus:outline-none focus:ring-white/50 bg-transparent z-20 p-2"
      >
        <!-- Menu Icon SVG - Larger size for mobile -->
        <svg
          width="36"
          height="34"
          viewBox="0 0 40 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="36"
            rx="4.5"
            stroke="white"
            stroke-width="1.5"
          />
          <rect x="10" y="11" width="19" height="1.5" fill="white" />
          <rect x="10" y="18" width="19" height="1.5" fill="white" />
          <rect x="10" y="26" width="19" height="1.5" fill="white" />
        </svg>
      </button>

      <!-- Logo -->
      <div class="flex-shrink-0 ml-4 lg:ml-0">
        <img
          src="/images/eLearnwhite.png"
          alt="eHealth iSenseHUB Logo"
          class="h-12 w-auto"
        />
      </div>

      <!-- Desktop Navigation - Centered -->
      <div class="hidden lg:flex items-center justify-center flex-1">
        <div
          class="flex items-center space-x-0 bg-bg-grey rounded-full px-8 py-4"
        >
          <RouterLink
            to="/"
            class="text-heading-dark font-raleway font-medium px-6 py-2 hover:text-primary-purple transition-colors"
            >Home</RouterLink
          >
          <RouterLink
            to="/features"
            class="text-heading-dark font-raleway font-medium px-6 py-2 hover:text-primary-purple transition-colors"
            >Features</RouterLink
          >
          <RouterLink
            to="/who-we-serve"
            class="text-heading-dark font-raleway font-medium px-6 py-2 hover:text-primary-purple transition-colors"
            >Who We Serve</RouterLink
          >
          <RouterLink
            to="/about"
            class="text-heading-dark font-raleway font-medium px-6 py-2 hover:text-primary-purple transition-colors"
            >About Us</RouterLink
          >
          <RouterLink
            to="/pricing"
            class="text-heading-dark font-raleway font-medium px-6 py-2 hover:text-primary-purple transition-colors"
            >Pricing</RouterLink
          >
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="hidden sm:flex items-center space-x-4">
        <!-- Contact Us Button -->
        <div class="relative">
          <div class="p-1 bg-opacity-28">
            <RouterLink
              to="/contact"
              class="bg-orange-gradient text-white font-raleway font-bold text-lg px-5 py-2.5 rounded-full hover:shadow-lg transition-shadow inline-block"
              style="
                position: relative;
                overflow: hidden;
                transition: all 0.4s ease;
                z-index: 1;
              "
              @mouseover="handleButtonHover"
              @mouseout="handleButtonOut"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>

        <!-- Request Demo Button -->
        <div class="relative">
          <div class="p-1 bg-opacity-28">
            <button
              class="bg-purple-gradient text-white font-raleway font-bold text-lg px-8 py-4 rounded-full hover:shadow-xl transition-shadow"
              style="
                position: relative;
                overflow: hidden;
                transition: all 0.4s ease;
                z-index: 1;
              "
              @click="scrollToContact"
              @mouseover="handleButtonHover"
              @mouseout="handleButtonOut"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile CTA -->
      <div class="sm:hidden">
        <RouterLink
          to="/contact"
          class="bg-purple-gradient text-white font-raleway font-bold text-sm px-4 py-2 rounded-full inline-block"
        >
          Demo
        </RouterLink>
      </div>
    </div>

    <!-- (Overlay moved below menus to avoid covering dropdown) -->

    <!-- Mobile Menu Backdrop Overlay -->
    <div
      v-if="isMobileMenuOpen"
      @click="closeMenus"
      class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
    ></div>

    <!-- Desktop Navigation Menu (narrow) -->
    <div
      v-if="isDesktopMenuOpen"
      class="hidden lg:block fixed top-24 left-6 w-56 bg-purple-800 bg-opacity-90 backdrop-blur-sm rounded-xl p-4 z-[9999] shadow-lg desktop-menu"
    >
      <div class="flex flex-col space-y-3">
        <RouterLink
          to="/"
          @click="closeMenus"
          class="text-white font-raleway font-medium py-2 hover:text-purple-300 transition-colors cursor-pointer"
          >Home</RouterLink
        >
        <RouterLink
          to="/features"
          @click="closeMenus"
          class="text-white font-raleway font-medium py-2 hover:text-purple-300 transition-colors cursor-pointer"
          >Features</RouterLink
        >
        <RouterLink
          to="/who-we-serve"
          @click="closeMenus"
          class="text-white font-raleway font-medium py-2 hover:text-purple-300 transition-colors cursor-pointer"
          >Who We Serve</RouterLink
        >
        <RouterLink
          to="/about"
          @click="closeMenus"
          class="text-white font-raleway font-medium py-2 hover:text-purple-300 transition-colors cursor-pointer"
          >About Us</RouterLink
        >
        <RouterLink
          to="/pricing"
          @click="closeMenus"
          class="text-white font-raleway font-medium py-2 hover:text-purple-300 transition-colors cursor-pointer"
          >Pricing</RouterLink
        >
        <div class="pt-3 border-t border-purple-600"></div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-6 mobile-menu z-[9999] shadow-2xl"
    >
      <div class="flex flex-col space-y-4">
        <RouterLink
          to="/"
          @click="closeMenus"
          class="text-heading-dark font-raleway font-medium py-2 hover:text-primary-purple transition-colors cursor-pointer"
          >Home</RouterLink
        >
        <RouterLink
          to="/features"
          @click="closeMenus"
          class="text-heading-dark font-raleway font-medium py-2 hover:text-primary-purple transition-colors cursor-pointer"
          >Features</RouterLink
        >
        <RouterLink
          to="/who-we-serve"
          @click="closeMenus"
          class="text-heading-dark font-raleway font-medium py-2 hover:text-primary-purple transition-colors cursor-pointer"
          >Who We Serve</RouterLink
        >
        <RouterLink
          to="/about"
          @click="closeMenus"
          class="text-heading-dark font-raleway font-medium py-2 hover:text-primary-purple transition-colors cursor-pointer"
          >About Us</RouterLink
        >
        <RouterLink
          to="/pricing"
          @click="closeMenus"
          class="text-heading-dark font-raleway font-medium py-2 hover:text-primary-purple transition-colors cursor-pointer"
          >Pricing</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
const isMobileMenuOpen = ref(false);
const isDesktopMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Close desktop menu when opening mobile menu
  if (isMobileMenuOpen.value) {
    isDesktopMenuOpen.value = false;
  }
};

const toggleDesktopMenu = () => {
  isDesktopMenuOpen.value = !isDesktopMenuOpen.value;
  // Close mobile menu when opening desktop menu
  if (isDesktopMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};

// Close menus when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (
    !target.closest(".navbar-container") &&
    !target.closest(".desktop-menu") &&
    !target.closest(".mobile-menu")
  ) {
    isDesktopMenuOpen.value = false;
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  // Temporarily disabled for debugging
  // document.addEventListener('click', handleClickOutside)
});

onUnmounted(() => {
  // document.removeEventListener('click', handleClickOutside)
});

// Close menu when navigating
const closeMenus = () => {
  isDesktopMenuOpen.value = false;
  isMobileMenuOpen.value = false;
};

const scrollToContact = () => {
  // If we're on the home page, scroll to contact section
  if (router.currentRoute.value.path === "/") {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Otherwise navigate to contact page
    router.push("/contact");
  }
};

const handleButtonHover = (event: Event) => {
  const target = event.target as HTMLElement;
  target.style.transform = "translateY(-4px) scale(1.05)";
  if (target.classList.contains("bg-orange-gradient")) {
    target.style.boxShadow =
      "0 0 25px rgba(251,146,60,0.6), 0 0 50px rgba(251,191,36,0.3)";
  } else if (target.classList.contains("bg-purple-gradient")) {
    target.style.boxShadow =
      "0 0 25px rgba(147,51,234,0.6), 0 0 50px rgba(236,72,153,0.3)";
  }
};

const handleButtonOut = (event: Event) => {
  const target = event.target as HTMLElement;
  target.style.transform = "none";
  target.style.boxShadow = "none";
};
</script>

<style>
/* Prevent text selection on menu items */
.desktop-menu a,
.mobile-menu a {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Ensure proper clickability */
.desktop-menu a,
.mobile-menu a {
  cursor: pointer;
  display: block;
  width: 100%;
}

/* Glowing orange/gold shimmer effect */
button.bg-orange-gradient:hover::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(45deg, #f97316, #f59e0b, #fbbf24, #fb923c);
  background-size: 400%;
  filter: blur(8px);
  opacity: 0.9;
  z-index: -1;
  animation: glowMoveOrange 2s linear infinite;
}

@keyframes glowMoveOrange {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Button Alt: Glowing Gradient Effect */
.btn-demo-alt:hover::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(45deg, #a855f7, #ec4899, #6366f1, #d946ef);
  background-size: 400%;
  filter: blur(8px);
  opacity: 0.9;
  z-index: -1;
  animation: btnAltGlow 2s linear infinite;
}

@keyframes btnAltGlow {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}
</style>
