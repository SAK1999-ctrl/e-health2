<template>
  <div class="min-h-screen bg-black relative overflow-hidden perspective-1000">
    <!-- Background Images -->
    <div
      class="absolute inset-0 bg-hero-bg bg-cover bg-center hero-float"
    ></div>
    <div class="absolute inset-0 bg-hero-overlay bg-cover bg-center"></div>

    <!-- Subtle Wave Layers -->
    <div class="absolute inset-0 wave-layer-1"></div>
    <div class="absolute inset-0 wave-layer-2"></div>

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

    <!-- Floating Healthcare Icons -->
    <div class="absolute inset-0 healthcare-icons">


      <!-- Stethoscope Image Icon -->
      <div class="health-icon icon-stethoscope">
        <img src="/images/stethoscope.png" alt="Stethoscope" class="floating-image" />
      </div>


      <!-- Telemedical Image Icon -->
      <div class="health-icon icon-telemedical">
        <img src="/images/telemedical.png" alt="Telemedicine" class="floating-image" />
      </div>

      <!-- Time Pill Image Icon -->
      <div class="health-icon icon-time-pill">
        <img src="/images/timee.png" alt="Medication Time" class="floating-image" />
      </div>
    </div>

    <!-- Navigation -->
    <nav class="relative z-50 px-4 sm:px-6 lg:px-8 py-4">
      <TheNavbar />
    </nav>

    <!-- Hero Section - Static Content -->
    <section class="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div class="max-w-7xl mx-auto text-center">
        <!-- Main Title -->
        <h1
          class="text-white font-raleway font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6"
        >
          iSenseHUB
        </h1>

        <!-- Gradient Subtitle -->
        <h2
          class="text-gradient font-raleway font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight mb-6 lg:mb-8 max-w-5xl mx-auto"
        >
          Transforming Healthcare Across Africa.<br />
          For Our People, By Our Innovation.
        </h2>

        <!-- Description -->
        <p
          class="text-white font-raleway text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto"
        >
          Experience a new era of healthcare efficiency, availability, and
          effectiveness. iSenseHUB empowers hospitals, clinicians, and patients
          with AI-driven solutions, designed for the unique pulse of our
          continent.
        </p>

        <!-- CTA Button with Enhanced Hover Effects -->
        <div class="flex justify-center">
          <button
            class="bg-purple-secondary text-white font-raleway font-bold text-lg px-8 py-4 rounded-full border border-white hover:shadow-2xl hover:scale-110 hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
          >
            <span class="relative z-10">Request a Free Demo</span>
            <!-- Hover Glow Effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            ></div>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "../layout/TheNavbar.vue";
import CTAButton from "../common/CTAButton.vue";
</script>

<style scoped>
/* 3D Perspective and Base Styles */
.perspective-1000 {
  perspective: 1000px;
}

.text-gradient {
  background: linear-gradient(90deg, #7186ff 11%, #fe7587 100%);
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
.wave-layer-1 {
  background: linear-gradient(
    45deg,
    rgba(113, 134, 255, 0.15),
    rgba(254, 117, 135, 0.15)
  );
  animation: waveRotation1 20s ease-in-out infinite;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  opacity: 0.8;
}

.wave-layer-2 {
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.12),
    rgba(236, 72, 153, 0.12)
  );
  animation: waveRotation2 25s ease-in-out infinite reverse;
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 80%);
  opacity: 0.7;
}

@keyframes waveRotation1 {
  0%,
  100% {
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
  0%,
  100% {
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
  background: linear-gradient(
    45deg,
    rgba(113, 134, 255, 0.6),
    rgba(254, 117, 135, 0.6)
  );
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

/* Healthcare Icons Container */
.healthcare-icons {
  pointer-events: none;
  overflow: hidden;
}

.health-icon {
  position: absolute;
  opacity: 0.9;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  animation: iconFloat 15s ease-in-out infinite;
  /* 3D Transform Effects */
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.3s ease;
}

/* 3D Hover Effects */
.health-icon:hover {
  transform: translateZ(20px) scale(1.1);
}

/* Add depth with multiple shadows */
.health-icon svg {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))
          drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))
          drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3));
}

/* Image Icons */
.icon-stethoscope {
  top: 77%;
  right: 30%;
  animation-duration: 21s;
  animation-delay: -2.5s;
  transform: rotateY(-6deg) rotateX(-3deg);
}

.icon-telemedical {
  top: 38%;
  right: 2%;
  animation-duration: 15s;
  animation-delay: -1.5s;
  transform: rotateY(-18deg) rotateX(8deg);
}

.icon-time-pill {
  top: 60%;
  left: 5%;
  animation-duration: 17s;
  animation-delay: -3s;
  transform: rotateY(12deg) rotateX(-6deg);
}

.floating-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  opacity: 0.95;
  transition: opacity 0.3s ease;
}

/* Base sizes (1537px - 1920px) */
.icon-stethoscope .floating-image {
  max-width: 200px;
  max-height: 200px;
  filter: drop-shadow(0 6px 12px rgba(59, 130, 246, 0.4));
}

.icon-telemedical .floating-image {
  max-width: 240px;
  max-height: 240px;
  filter: drop-shadow(0 8px 16px rgba(113, 134, 255, 0.4));
}

.icon-time-pill .floating-image {
  max-width: 120px;
  max-height: 120px;
  filter: drop-shadow(0 6px 12px rgba(236, 72, 153, 0.4));
}

/* Icon Floating Animation with 3D Effects */
@keyframes iconFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
  }
  25% {
    transform: translate3d(20px, -30px, 15px);
    opacity: 1;
  }
  50% {
    transform: translate3d(-15px, -20px, -10px);
    opacity: 0.9;
  }
  75% {
    transform: translate3d(10px, -40px, 20px);
    opacity: 0.85;
  }
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

/* Add glowing shimmer behind button */
button:hover::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(45deg, #d946ef, #8b5cf6, #6366f1, #ec4899);
  background-size: 400%;
  filter: blur(8px);
  opacity: 0.9;
  z-index: -1;
  animation: glowMove 2s linear infinite;
}

@keyframes glowMove {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Animated floating pattern background */
.hero-float {
  animation: heroPatternFloat 18s ease-in-out infinite;
  background-size: cover;
  opacity: 1; /* subtle effect */
}

@keyframes heroPatternFloat {
  0%,
  100% {
    background-position: center top;
  }
  50% {
    background-position: center bottom;
  }
}

/* Responsive Effects - Image Icons */

/* Ultra Large Desktop (4K: > 2560px) */
@media (min-width: 2561px) {
  .icon-stethoscope .floating-image {
    max-width: 280px;
    max-height: 280px;
  }

  .icon-telemedical .floating-image {
    max-width: 340px;
    max-height: 340px;
  }

  .icon-time-pill .floating-image {
    max-width: 170px;
    max-height: 170px;
  }

  .icon-stethoscope {
    top: 77%;
    right: 30%;
  }

  .icon-telemedical {
    top: 38%;
    right: 2%;
  }

  .icon-time-pill {
    top: 60%;
    left: 5%;
  }
}

/* Very Large Desktop (1920px - 2560px) */
@media (min-width: 1920px) and (max-width: 2560px) {
  .icon-stethoscope .floating-image {
    max-width: 240px;
    max-height: 240px;
  }

  .icon-telemedical .floating-image {
    max-width: 290px;
    max-height: 290px;
  }

  .icon-time-pill .floating-image {
    max-width: 145px;
    max-height: 145px;
  }

  .icon-stethoscope {
    top: 60%;
    right: 30%;
  }

  .icon-telemedical {
    top: 34%;
    right: 5%;
  }

  .icon-time-pill {
    top: 50%;
    left: 12%;
  }
}

/* Standard Large Desktop (1537px - 1919px) - Override to ensure base styles apply */
@media (min-width: 1537px) and (max-width: 1919px) {
  .icon-stethoscope .floating-image {
    max-width: 200px;
    max-height: 200px;
  }

  .icon-telemedical .floating-image {
    max-width: 240px;
    max-height: 240px;
  }

  .icon-time-pill .floating-image {
    max-width: 120px;
    max-height: 120px;
  }

  .icon-stethoscope {
    top: 67%;
    right: 30%;
  }

  .icon-telemedical {
    top: 38%;
    right: 4%;
  }

  .icon-time-pill {
    top: 50%;
    left: 7%;
  }
}

/* Large Desktop (1281px - 1536px) */
@media (min-width: 1281px) and (max-width: 1536px) {
  .icon-stethoscope .floating-image {
    max-width: 170px;
    max-height: 170px;
  }

  .icon-telemedical .floating-image {
    max-width: 200px;
    max-height: 200px;
  }

  .icon-time-pill .floating-image {
    max-width: 100px;
    max-height: 100px;
  }

  .icon-stethoscope {
    top: 78%;
    right: 28%;
  }

  .icon-telemedical {
    top: 35%;
    right: 3%;
  }

  .icon-time-pill {
    top: 50%;
    left: 7%;
  } 
}

/* Desktop (1024px - 1280px) */
@media (max-width: 1280px) {
  .icon-stethoscope .floating-image {
    max-width: 150px;
    max-height: 150px;
  }

  .icon-telemedical .floating-image {
    max-width: 180px;
    max-height: 180px;
  }

  .icon-time-pill .floating-image {
    max-width: 90px;
    max-height: 90px;
  }

  .icon-stethoscope {
    top: 80%;
    right: 24%;
  }

  .icon-telemedical {
    top: 40%;
    right: 2%;
  }

  .icon-time-pill {
    top: 50%;
    left: 4%;
  }
}

/* Tablet Large (768px - 1024px) */
@media (max-width: 1024px) {
  .particle {
    animation-duration: 12s;
  }

  .geometric-shape {
    animation-duration: 20s;
  }

  .wave-layer-1,
  .wave-layer-2 {
    animation-duration: 20s;
  }

  .icon-stethoscope .floating-image {
    max-width: 130px;
    max-height: 130px;
  }

  .icon-telemedical .floating-image {
    max-width: 160px;
    max-height: 160px;
  }

  .icon-time-pill .floating-image {
    max-width: 80px;
    max-height: 80px;
  }

  .icon-stethoscope {
    top: 80%;
    right: 22%;
  }

  .icon-telemedical {
    top: 32%;
    right: 2%;
  }

  .icon-time-pill {
    top: 45%;
    left: 7%;
  }

  /* Smaller icons on tablet */
  .health-icon svg {
    width: 24px;
    height: 24px;
  }
}

/* Tablet (640px - 768px) */
@media (max-width: 768px) {
  .icon-stethoscope .floating-image {
    max-width: 130px;
    max-height: 130px;
  }

  .icon-telemedical .floating-image {
    max-width: 140px;
    max-height: 140px;
  }

  .icon-time-pill .floating-image {
    max-width: 70px;
    max-height: 70px;
  }

  .icon-stethoscope {
    top: 80%;
    right: 15%;
  }

  .icon-telemedical {
    top: 21%;
    right: 4%;
  }

  .icon-time-pill {
    top: 52%;
    left: 4%;
  }

}

/* Mobile Large (480px - 640px) */
@media (max-width: 640px) {
  .icon-stethoscope .floating-image {
    max-width: 110px;
    max-height: 110px;
  }

  .icon-telemedical .floating-image {
    max-width: 120px;
    max-height: 120px;
  }

  .icon-time-pill .floating-image {
    max-width: 65px;
    max-height: 65px;
  }

  .icon-stethoscope {
    top: 78%;
    right: 8%;
  }

  .icon-telemedical {
    top: 22%;
    right: 6%;
  }

  .icon-time-pill {
    top: 48%;
    left: 2%;
  }
}

/* Mobile Small (< 480px) */
@media (max-width: 480px) {
  /* Even smaller on very small screens */
  .health-icon {
    opacity: 0.7;
  }

  .icon-stethoscope .floating-image {
    max-width: 90px;
    max-height: 90px;
  }

  .icon-telemedical .floating-image {
    max-width: 90px;
    max-height: 90px;
  }

  .icon-time-pill .floating-image {
    max-width: 55px;
    max-height: 55px;
  }

  .icon-stethoscope {
    top: 80%;
    right: 6%;
  }

  .icon-telemedical {
    top: 18%;
    right: 5%;
  }

  .icon-time-pill {
    top: 48%;
    left: 5%;
  }

  .icon-telemedical {
    opacity: 0.6;
  }
}

/* Extra Small Mobile (< 375px) */
@media (max-width: 375px) {
  .icon-stethoscope .floating-image {
    max-width: 80px;
    max-height: 80px;
  }

  .icon-telemedical .floating-image {
    max-width: 75px;
    max-height: 75px;
  }

  .icon-time-pill .floating-image {
    max-width: 50px;
    max-height: 50px;
  }

  .icon-stethoscope {
    top: 80%;
    right: 5%;
  }

  .icon-telemedical {
    top: 15%;
    right: 3%;
  }

  .icon-time-pill {
    top: 45%;
    left: 3%;
  }

  .health-icon {
    opacity: 0.5;
  }
}

/* Performance Optimizations */
.particle,
.geometric-shape,
.bg-rotation,
.overlay-rotation,
.health-icon {
  will-change: transform;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .particle,
  .geometric-shape,
  .wave-layer-1,
  .wave-layer-2,
  .bg-rotation,
  .overlay-rotation,
  .health-icon {
    animation: none;
  }
}
</style>
