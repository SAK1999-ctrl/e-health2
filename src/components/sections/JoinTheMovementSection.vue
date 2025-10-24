<template>
  <div class="main-container w-full min-h-screen relative mx-auto my-0">
    <!-- Background gradient -->
    <div class="w-full h-full absolute top-0 left-0" 
         style="background: linear-gradient(to bottom, #e84192, #E44748);">
      <!-- Starry details -->
      <div class="absolute inset-0 opacity-70">
        <div class="absolute top-5 left-4 sm:top-8 sm:left-8 md:top-12 md:left-12 lg:top-16 lg:left-16 xl:top-20 xl:left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div class="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 lg:top-20 lg:right-20 xl:top-32 xl:right-32 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-12 left-1/3 sm:top-16 sm:left-1/3 md:top-20 md:left-1/3 lg:top-24 lg:left-1/3 xl:top-48 xl:left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-16 right-1/4 sm:top-20 sm:right-1/4 md:top-24 md:right-1/4 lg:top-28 lg:right-1/4 xl:top-64 xl:right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
        <div class="absolute top-20 left-1/2 sm:top-24 sm:left-1/2 md:top-28 md:left-1/2 lg:top-32 lg:left-1/2 xl:top-80 xl:left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute top-24 right-1/3 sm:top-28 sm:right-1/3 md:top-32 md:right-1/3 lg:top-36 lg:right-1/3 xl:top-96 xl:right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 2.5s;"></div>
        <div class="absolute top-28 left-1/4 sm:top-32 sm:left-1/4 md:top-36 md:left-1/4 lg:top-40 lg:left-1/4 xl:top-112 xl:left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 3s;"></div>
        <div class="absolute top-32 right-1/2 sm:top-36 sm:right-1/2 md:top-40 md:right-1/2 lg:top-44 lg:right-1/2 xl:top-128 xl:right-1/2 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 3.5s;"></div>
        <div class="absolute top-36 left-2/3 sm:top-40 sm:left-2/3 md:top-44 md:left-2/3 lg:top-48 lg:left-2/3 xl:top-144 xl:left-2/3 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 4s;"></div>
        <div class="absolute top-40 right-1/5 sm:top-44 sm:right-1/5 md:top-48 md:right-1/5 lg:top-52 lg:right-1/5 xl:top-160 xl:right-1/5 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 4.5s;"></div>
      </div>
    </div>
         <!-- Glowing border container -->
         <div class="glowing-border-container relative mx-auto my-2 sm:my-4 md:my-6 lg:my-8 xl:my-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex justify-center items-center">
          
           <!-- Content overlay with decorative background -->
           <div class="w-full h-full bg-cover bg-no-repeat relative z-10"
                style="background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-01/EvzuWiP13B.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
             
             <!-- Content wrapper for better positioning -->
             <div class="flex flex-col items-center justify-center w-full px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
          <!-- Subtitle -->
          <div class="w-full text-center font-['Raleway'] text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-5 sm:leading-6 md:leading-7 lg:leading-8 text-[#7286ff] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] uppercase z-[6] mb-4 sm:mb-5 md:mb-6 px-4 sm:px-5 md:px-6 lg:px-8">
            Ready to Transform Your Healthcare Journey?
          </div>
          
          <!-- Main heading -->
          <div class="w-full text-center font-['Raleway'] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 text-[#f6f6f7] tracking-[-0.5px] sm:tracking-[-0.7px] md:tracking-[-0.9px] lg:tracking-[-1.1px] z-[4] mb-6 sm:mb-7 md:mb-8 px-4 sm:px-5 md:px-6 lg:px-8">
            Join the Movement for a Healthier Africa
          </div>
          
          <!-- Description -->
          <div class="w-full text-center font-['Manrope'] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-[#8f9bb7] z-[5] mb-8 sm:mb-9 md:mb-10 px-4 sm:px-5 md:px-6 lg:px-8">
            The future of healthcare in Africa is here, and it's powered by iSenseHUB. Let's build a more efficient, accessible, and effective healthcare system together.
          </div>
          
           <!-- CTA Button -->
           <div class="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] flex justify-center items-center relative z-[9] mt-4 sm:mt-5 md:mt-6">
             <button 
               @click="handleDemoRequest"
               class="w-full h-10 sm:h-11 md:h-12 lg:h-13 xl:h-14 rounded-full border-none cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-r from-[#7286ff] to-[#E44748] hover:from-[#5a6fd8] hover:to-[#d63e3f] hover:shadow-lg hover:shadow-[#7286ff]/30 hover:scale-105 active:scale-95"
             >
               <span class="flex w-full h-full justify-center items-center font-['Raleway'] text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white relative text-center">
                 Request a Free Demo
               </span>
             </button>
           </div>
           </div>
         </div>
       </div>
  </div>
</template>

<script setup lang="ts">
const handleDemoRequest = () => {
  console.log('Demo request clicked');
  // Here you would typically redirect to a demo request page or open a modal
  alert('Thank you for your interest! We will contact you soon to schedule your free demo.');
};
</script>

<style scoped>
/* Main container */
.main-container {
  overflow: hidden;
  min-height: 100vh;
}

.main-container,
.main-container * {
  box-sizing: border-box;
}

input,
select,
textarea,
button {
  outline: 0;
}

/* Font families */
.font-raleway {
  font-family: 'Raleway', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.font-manrope {
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* Custom colors matching the design */
.text-whitesmoke {
  color: #f6f6f7;
}

.text-lightslategray {
  color: #8f9bb7;
}

.text-royalblue {
  color: #7286ff;
}

.text-white {
  color: #fff;
}

/* Button hover effects */
.hover\:opacity-90:hover {
  opacity: 0.9;
}

/* CTA Button gradient hover effects */
.cta-button {
  background: linear-gradient(135deg, #7286ff 0%, #E44748 100%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #d63e3f 100%);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(114, 134, 255, 0.3);
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 5px 15px rgba(114, 134, 255, 0.2);
}

/* Transition effects */
.transition-opacity {
  transition: opacity 0.3s ease;
}

.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive design for mobile devices */
@media (max-width: 640px) {
  .main-container {
    min-height: 100vh;
    padding: 0 1rem;
  }
  
  /* Adjust starry details for mobile */
  .main-container .absolute {
    display: none; /* Hide some stars on very small screens for performance */
  }
  
  .main-container .absolute:nth-child(odd) {
    display: block; /* Show only every other star */
  }
  
  /* Ensure text is readable on mobile */
  .main-container .text-center {
    line-height: 1.4;
    word-spacing: 0.1em;
  }
  
  /* Mobile button adjustments */
  .cta-button {
    height: 2rem;
    font-size: 0.75rem;
  }
  
  /* Mobile content spacing */
  .main-container .flex.flex-col {
    gap: 0.02rem;
  }
  
  /* Mobile glowing border adjustments */
  .glowing-border-container {
    border-radius: 16px;
    padding: 0.5px;
    margin: 0.5rem auto;
    max-width: 85%;
    width: fit-content;
  }
  
  .glowing-border-container::before {
    border-radius: 13px;
    top: -0.5px;
    left: -0.5px;
    right: -0.5px;
    bottom: -0.5px;
  }
  
  .glowing-border-container::after {
    border-radius: 11px;
  }
  
  /* Mobile text padding adjustments */
  .glowing-border-container .px-3 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

/* Tablet adjustments */
@media (min-width: 641px) and (max-width: 1024px) {
  .main-container {
    min-height: 110vh;
  }
  
  /* Tablet button adjustments */
  .cta-button {
    height: 2.5rem;
    font-size: 0.875rem;
  }
  
  /* Tablet content spacing */
  .main-container .flex.flex-col {
    gap: 0.02rem;
  }
  
  /* Tablet glowing border adjustments */
  .glowing-border-container {
    border-radius: 18px;
    padding: 0.75px;
    margin: 0.75rem auto;
    max-width: 80%;
    width: fit-content;
  }
  
  .glowing-border-container::before {
    border-radius: 15px;
    top: -0.75px;
    left: -0.75px;
    right: -0.75px;
    bottom: -0.75px;
  }
  
  .glowing-border-container::after {
    border-radius: 13px;
  }
  
  /* Tablet text padding adjustments */
  .glowing-border-container .px-4 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

/* Desktop adjustments */
@media (min-width: 1025px) {
  .main-container {
    min-height: 125vh;
  }
  }
  
  /* Desktop button adjustments */
  .cta-button {
    height: 3rem;
    font-size: 1rem;
  }
  
  /* Desktop content spacing */
  .main-container .flex.flex-col {
    gap: 0.01rem;
  }
  /* Desktop glowing border adjustments */
  .glowing-border-container {
    border-radius: 20px;
    padding: 1px;
    margin: 1rem auto;
    max-width: 85%;
    width: fit-content;
  }
  
  .glowing-border-container::before {
    border-radius: 17px;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
  }
  
  .glowing-border-container::after {
    border-radius: 15px;
  }
  
  /* Desktop text padding adjustments */
  .glowing-border-container .px-10 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .glowing-border-container .px-6 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

/* Ultra-wide screen adjustments */
@media (min-width: 1920px) {
  .main-container {
    max-width: 1920px;
  }
}

/* Glowing border container */
.glowing-border-container {
  position: relative;
  background: #16141E;
  border-radius: 20px;
  padding: 1px;
  box-shadow: 
    0 0 15px rgba(114, 134, 255, 0.2),
    0 0 30px rgba(114, 134, 255, 0.15),
    0 0 45px rgba(114, 134, 255, 0.1),
    inset 0 0 15px rgba(114, 134, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 0.5px solid rgba(114, 134, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
}

.glowing-border-container:hover {
  transform: translateY(-3px) scale(1.01);
  box-shadow: 
    0 8px 32px rgba(114, 134, 255, 0.4),
    0 16px 64px rgba(114, 134, 255, 0.3),
    0 24px 96px rgba(114, 134, 255, 0.2),
    inset 0 0 24px rgba(114, 134, 255, 0.2);
  border: 1px solid rgba(114, 134, 255, 0.7);
  backdrop-filter: blur(12px);
  animation: elegantHover 2s ease-in-out infinite alternate;
}

.glowing-border-container::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, 
    rgba(114, 134, 255, 0.6) 0%, 
    rgba(228, 71, 72, 0.4) 25%, 
    rgba(114, 134, 255, 0.6) 50%, 
    rgba(228, 71, 72, 0.4) 75%, 
    rgba(114, 134, 255, 0.6) 100%);
  border-radius: 21px;
  z-index: -1;
  animation: borderGlow 3s ease-in-out infinite alternate;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glowing-border-container:hover::before {
  background: rgba(114, 134, 255, 0.9);
  animation-duration: 2s;
  box-shadow: 
    0 0 20px rgba(114, 134, 255, 0.5),
    0 0 40px rgba(114, 134, 255, 0.3);
}

.glowing-border-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(22, 20, 30, 0.6);
  border-radius: 19px;
  z-index: -1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glowing-border-container:hover::after {
  background: rgba(10, 8, 15, 0.9);
  backdrop-filter: blur(8px);
}

@keyframes borderGlow {
  0% {
    box-shadow: 
      0 0 15px rgba(114, 134, 255, 0.3),
      0 0 30px rgba(114, 134, 255, 0.2),
      0 0 45px rgba(114, 134, 255, 0.1);
  }
  100% {
    box-shadow: 
      0 0 25px rgba(114, 134, 255, 0.5),
      0 0 40px rgba(114, 134, 255, 0.3),
      0 0 60px rgba(114, 134, 255, 0.2);
  }
}

@keyframes elegantHover {
  0% {
    box-shadow: 
      0 8px 32px rgba(114, 134, 255, 0.4),
      0 16px 64px rgba(114, 134, 255, 0.3),
      0 24px 96px rgba(114, 134, 255, 0.2),
      inset 0 0 24px rgba(114, 134, 255, 0.2);
  }
  100% {
    box-shadow: 
      0 12px 48px rgba(114, 134, 255, 0.5),
      0 20px 80px rgba(114, 134, 255, 0.4),
      0 28px 112px rgba(114, 134, 255, 0.3),
      inset 0 0 32px rgba(114, 134, 255, 0.25);
  }
}

/* Ensure proper z-index stacking */
.z-\[2\] { z-index: 2; }
.z-\[4\] { z-index: 4; }
.z-\[5\] { z-index: 5; }
.z-\[6\] { z-index: 6; }
.z-\[9\] { z-index: 9; }
.z-\[10\] { z-index: 10; }

/* Background image responsiveness */
@media (max-width: 640px) {
  .main-container div[style*="background-image"] {
    background-size: cover !important;
    background-position: center !important;
    min-height: 200px;
  }
  
  /* Mobile decorative background adjustments */
  .glowing-border-container div[style*="EvzuWiP13B.png"] {
    background-size: cover !important;
    background-position: center !important;
    min-height: 250px;
    border-radius: 12px;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .main-container div[style*="background-image"] {
    background-size: cover !important;
    background-position: center !important;
    min-height: 300px;
  }
  
  /* Small tablet decorative background adjustments */
  .glowing-border-container div[style*="EvzuWiP13B.png"] {
    background-size: cover !important;
    background-position: center !important;
    min-height: 350px;
    border-radius: 14px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .main-container div[style*="background-image"] {
    background-size: cover !important;
    background-position: center !important;
    min-height: 450px;
  }
  
  /* Tablet decorative background adjustments */
  .glowing-border-container div[style*="EvzuWiP13B.png"] {
    background-size: cover !important;
    background-position: center !important;
    min-height: 500px;
    border-radius: 16px;
  }
}

@media (min-width: 1025px) {
  .main-container div[style*="background-image"] {
    background-size: cover !important;
    background-position: center !important;
    min-height: 800px;
  }
  
  /* Desktop decorative background adjustments */
  .glowing-border-container div[style*="EvzuWiP13B.png"] {
    background-size: cover !important;
    background-position: center !important;
    min-height: 505px;
  }
}

/* Text wrapping for very small screens */
@media (max-width: 480px) {
  .main-container .text-center {
    word-wrap: break-word;
    hyphens: auto;
  }
}

/* High DPI display adjustments */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .main-container div[style*="background-image"] {
    background-size: cover !important;
  }
}

/* Print styles */
@media print {
  .main-container {
    background: white !important;
    color: black !important;
  }
  
  .main-container div[style*="background-image"] {
    background: none !important;
  }
}
</style>
