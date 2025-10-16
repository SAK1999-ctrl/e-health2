<template>
  <div>
    <!-- Navigation -->
    <nav class="relative z-20 px-4 sm:px-6 lg:px-8 py-4">
      <TheNavbar />
    </nav>

    <div>
      <!-- Hero Section for Features Page -->
      <section class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden perspective-1000 flex items-center">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-features-pattern bg-cover bg-center hero-float"></div>
      
      <!-- Subtle Wave Layers -->
      <div class="absolute inset-0 features-wave-layer-1"></div>
      <div class="absolute inset-0 features-wave-layer-2"></div>
      
      <!-- 3D Floating Particles -->
      <div class="absolute inset-0 particle-container">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-5"></div>
        <div class="particle particle-6"></div>
      </div>
      
      <!-- 3D Rotating Geometric Shapes -->
      <div class="absolute inset-0 geometric-shapes">
        <div class="geometric-shape shape-1"></div>
        <div class="geometric-shape shape-2"></div>
        <div class="geometric-shape shape-3"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-20 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div class="max-w-7xl mx-auto text-center">
          <!-- Main Title -->
          <h1 class="text-white font-raleway font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
            iSenseHUB Features
          </h1>

          <!-- Gradient Subtitle -->
          <h2 class="text-gradient font-raleway font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight mb-6 lg:mb-8 max-w-5xl mx-auto">
            Empowering Every Pillar of African Healthcare
          </h2>

          <!-- Description -->
          <p class="text-white font-raleway text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto">
            iSenseHUB is a comprehensive, integrated platform designed to address the core challenges of healthcare management in Africa. Each feature is meticulously crafted to enhance efficiency, improve patient outcomes, and empower your staff. Discover how our innovative solutions transform daily operations for patients, clinicians, and administrators alike.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <RouterLink 
              to="/services" 
              class="bg-purple-gradient text-white font-raleway font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <span class="relative z-10">Explore All Features</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </RouterLink>
            
            <RouterLink 
              to="/contact" 
              class="bg-purple-gradient text-white font-raleway font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <span class="relative z-10">Download Our Full Brochure</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

      <!-- Other sections -->
      <TestimonialsSection />
      <FAQSection />
      <JoinTheMovementSection />
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TheNavbar from '../components/layout/TheNavbar.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import FAQSection from '../components/sections/FAQSection.vue'
import JoinTheMovementSection from '../components/sections/JoinTheMovementSection.vue'
import TheFooter from '../components/layout/TheFooter.vue'
</script>

<style scoped>
/* 3D Perspective and Base Styles */
.perspective-1000 {
  perspective: 1000px;
}

.text-gradient {
  background: linear-gradient(90deg, #7186FF 11%, #FE7587 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Background Images with Rotation Animation */
.bg-rotation {
  animation: backgroundRotate 40s linear infinite;
}

.overlay-rotation {
  animation: overlayRotate 35s linear infinite reverse;
}

@keyframes backgroundRotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(2deg) scale(1.02);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}

@keyframes overlayRotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(-1.5deg) scale(1.01);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}

/* Enhanced Waving Background with Visible Movement */
.features-wave-layer-1 {
  background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2));
  animation: waveRotation1 20s ease-in-out infinite;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  opacity: 0.8;
}

.features-wave-layer-2 {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15));
  animation: waveRotation2 25s ease-in-out infinite reverse;
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 80%);
  opacity: 0.7;
}

@keyframes waveRotation1 {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateX(25px) translateY(-15px) rotate(3deg) scale(1.02);
  }
  50% {
    transform: translateX(15px) translateY(-30px) rotate(0deg) scale(1.05);
  }
  75% {
    transform: translateX(-20px) translateY(-10px) rotate(-2deg) scale(1.01);
  }
}

@keyframes waveRotation2 {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateX(-25px) translateY(20px) rotate(-3deg) scale(1.03);
  }
  50% {
    transform: translateX(-40px) translateY(10px) rotate(0deg) scale(1.06);
  }
  75% {
    transform: translateX(-15px) translateY(25px) rotate(2deg) scale(1.02);
  }
}

/* 3D Floating Particles */
.particle-container {
  pointer-events: none;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(113, 134, 255, 0.6), rgba(254, 117, 135, 0.6));
  animation: particleFloat 20s linear infinite;
}

.particle-1 {
  width: 4px;
  height: 4px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 15s;
}

.particle-2 {
  width: 6px;
  height: 6px;
  top: 40%;
  left: 80%;
  animation-delay: -3s;
  animation-duration: 18s;
}

.particle-3 {
  width: 3px;
  height: 3px;
  top: 60%;
  left: 20%;
  animation-delay: -6s;
  animation-duration: 22s;
}

.particle-4 {
  width: 5px;
  height: 5px;
  top: 80%;
  left: 70%;
  animation-delay: -9s;
  animation-duration: 16s;
}

.particle-5 {
  width: 4px;
  height: 4px;
  top: 30%;
  left: 50%;
  animation-delay: -12s;
  animation-duration: 20s;
}

.particle-6 {
  width: 7px;
  height: 7px;
  top: 70%;
  left: 90%;
  animation-delay: -15s;
  animation-duration: 25s;
}

@keyframes particleFloat {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(1);
    opacity: 0.8;
  }
  25% {
    transform: translateY(-50px) translateX(30px) rotate(90deg) scale(1.2);
    opacity: 1;
  }
  50% {
    transform: translateY(-100px) translateX(-20px) rotate(180deg) scale(0.8);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-150px) translateX(40px) rotate(270deg) scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: translateY(-200px) translateX(0) rotate(360deg) scale(1);
    opacity: 0;
  }
}

/* 3D Rotating Geometric Shapes */
.geometric-shapes {
  pointer-events: none;
}

.geometric-shape {
  position: absolute;
  border: 2px solid rgba(113, 134, 255, 0.3);
  animation: geometricRotate 30s linear infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: 15%;
  left: 15%;
  border-radius: 50%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.shape-2 {
  width: 40px;
  height: 40px;
  top: 60%;
  right: 20%;
  transform: rotate(45deg);
  animation-delay: -10s;
  animation-duration: 35s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 70%;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  animation-delay: -20s;
  animation-duration: 40s;
}

@keyframes geometricRotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0);
  }
  25% {
    transform: rotateX(90deg) rotateY(90deg) rotateZ(90deg) translateZ(50px);
  }
  50% {
    transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg) translateZ(100px);
  }
  75% {
    transform: rotateX(270deg) rotateY(270deg) rotateZ(270deg) translateZ(50px);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) translateZ(0);
  }
}

/* Animated floating pattern background */
.hero-float {
  animation: heroPatternFloat 18s ease-in-out infinite;
  background-size: cover;
  opacity: 1; /* subtle effect */
}

@keyframes heroPatternFloat {
  0%, 100% {
    background-position: center top;
  }
  50% {
    background-position: center bottom;
  }
}

/* Responsive Effects */
@media (max-width: 768px) {
  .particle {
    animation-duration: 12s;
  }
  
  .geometric-shape {
    animation-duration: 20s;
  }
  
  .features-wave-layer-1,
  .features-wave-layer-2 {
    animation-duration: 20s;
  }
}

/* Performance Optimizations */
.particle,
.geometric-shape,
.bg-rotation,
.overlay-rotation {
  will-change: transform;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .particle,
  .geometric-shape,
  .features-wave-layer-1,
  .features-wave-layer-2,
  .bg-rotation,
  .overlay-rotation {
    animation: none;
  }
}
</style>