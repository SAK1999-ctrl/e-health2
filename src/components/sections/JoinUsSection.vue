<template>
  <div class="join-us-section w-full min-h-screen relative text-left text-white font-raleway overflow-hidden">
    <!-- Main background with seamless gradient transition -->
    <div class="absolute inset-0 bg-gradient-to-b from-purple-600 to-purple-500">
      <!-- Background blur effect -->
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1340px] h-[963px] [filter:blur(50px)] rounded-[60%] bg-gray-400 opacity-90"></div>
      
      <!-- Background images with proper responsive positioning and color adjustments -->
      <!-- Large decorative image on the right -->
      <img 
        class="absolute top-[240px] right-[-100px] w-[500px] h-[500px] object-contain opacity-60 hidden lg:block" 
        src="/images/Untitled design (9) 1.png" 
        alt="Background decorative large" 
        style="filter: sepia(1.2) saturate(1.6) hue-rotate(270deg) contrast(1.6) brightness(1.8) opacity(1);"
      />
      
      <!-- Heart image on the left -->
      <img 
        class="absolute top-[200px] left-[-80px] w-[400px] h-[400px] object-contain opacity-70 hidden lg:block" 
        src="/images/Untitled design (15) 1.png" 
        alt="Heart decorative" 
        style="filter: sepia(1.2) saturate(1.6) hue-rotate(270deg) contrast(1.6) brightness(1.8) opacity(1);"
      />
      
      <!-- Mobile/Tablet background images -->
      <img 
        class="absolute top-[50px] right-[-30px] w-[200px] h-[200px] object-contain opacity-50 block lg:hidden" 
        src="/images/Untitled design (9) 1.png" 
        alt="Background decorative mobile" 
        style="filter: sepia(1.4) saturate(1.1) hue-rotate(270deg) contrast(1.6) brightness(1.2) opacity(1);"
      />
      <img 
        class="absolute bottom-[50px] left-[-30px] w-[150px] h-[150px] object-contain opacity-50 block lg:hidden" 
        src="/images/Untitled design (15) 1.png" 
        alt="Heart decorative mobile" 
        style="filter: sepia(1.6) saturate(1.1) hue-rotate(270deg) contrast(1.6) brightness(1.1) opacity(1);"
      />
      
      <!-- Dot pattern overlay -->
      <div class="absolute top-60 right-5 dot-vertical">
        <DotPattern :use-tailwind="false" color="#929BFF" :opacity="1"/>
      </div>
    </div>

      <!-- Dot pattern overlay for form area -->
      <div class="absolute top-4 left-0">
        <DotPattern :use-tailwind="false" color="#929BFF" :opacity="1" />
      </div>    
    <!-- Main content container -->
    <div class="relative z-10 container mx-auto px-4 py-8 lg:py-16 xl:py-16">
      <div class="max-w-5xl mx-auto">
        <!-- Main card container -->
        <div class="relative bg-gray-300/5 shadow-[0px_0px_49px_-2px_rgba(0,_0,_0,_0.19)] [backdrop-filter:blur(27.18px)] rounded-[30px] lg:rounded-[60px] overflow-hidden">
          <div class="grid lg:grid-cols-2">
            <!-- Left panel with gradient background - Hidden on mobile, visible on desktop -->
            <div class="hidden lg:flex relative p-8 lg:p-12 xl:p-16 flex-col justify-center min-h-[717px]">
              <!-- Gradient background -->
              <div class="absolute inset-0 [background:linear-gradient(147.05deg,_#5a2faa,_#c560ff_36.06%,_#3d1687)]"></div>
              
              <!-- Decorative images in left panel -->
              <div class="absolute inset-0 overflow-hidden">
                <!-- Jbg.png image above join us text -->
                <img 
                  class="absolute -top-10 w-130 h-160 lg:w-130 lg:h-160 xl:w-135 xl:h-165 object-contain opacity-90" 
                  src="/images/Jbg.png" 
                  alt="Decorative background" 
                />
              </div>
              
              <!-- Arrow decoration -->
              <img 
                class="absolute bottom-5 right-5 w-130 h-130 lg:w-1500 lg:h-150 xl:w-170 xl:h-170 object-contain opacity-60" 
                src="/images/Shape.png" 
                alt="Arrow" 
                style="filter: sepia(0.8) saturate(1.2) hue-rotate(320deg) brightness(1.0) opacity(0.6);"
              />
              
              <!-- Gradient ball decoration -->
              <div class="gradient-ball absolute bottom-5 left-2 w-800 h-800 lg:w-1500 lg:h-1500 xl:w-2500 xl:h-2500 rounded-full opacity-75 animate-pulse"></div>
              
              <!-- Text content -->
              <div class="relative z-10 text-white">
                <div class="text-sm lg:text-base xl:text-lg font-raleway opacity-80 mb-0 leading-none">join us</div>
                <h2 class="text-6xl lg:text-7xl xl:text-8xl font-bold font-raleway mb-0 leading-none -mt-1">
                  Subscribe
                </h2>
                <h3 class="text-6xl lg:text-7xl xl:text-8xl font-bold font-raleway mb-0 leading-2 -mt-2">
                  your hospital
                </h3>
              </div>
            </div>
            
            <!-- Right panel with form -->
            <div class="p-4 sm:p-6 lg:p-8 xl:p-12 backdrop-blur-sm relative" style="background-color: rgba(66, 39, 84, 0.2);">
              <div class="max-w-lg mx-auto relative z-10">
                <!-- Form title -->
                <div class="text-center mb-4 lg:mb-6">
                  <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold font-raleway text-white mb-2">Subscribe</h3>
                  <div class="flex items-center justify-center space-x-2 sm:space-x-4">
                    <div class="h-px bg-white/30 flex-1"></div>
                    <span class="text-white/70 text-xs sm:text-sm px-2 sm:px-4 font-raleway">Or login with email</span>
                    <div class="h-px bg-white/30 flex-1"></div>
                  </div>
                </div>
                
                <!-- Form -->
                <form @submit.prevent="handleSubmit" class="space-y-3 lg:space-y-4">
                  <!-- Row 1 -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div class="form-group">
                      <input 
                        v-model="form.hospitalName"
                        type="text" 
                        placeholder="Hospital Name*" 
                        class="form-input"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input 
                        v-model="form.hospitalAddress"
                        type="text" 
                        placeholder="Hospital Address*" 
                        class="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <!-- Row 2 -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div class="form-group">
                      <input 
                        v-model="form.hospitalEmail"
                        type="email" 
                        placeholder="Hospital Email*" 
                        class="form-input"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input 
                        v-model="form.hospitalPhone"
                        type="tel" 
                        placeholder="Hospital Phone*" 
                        class="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <!-- Row 3 -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 form-row-gray">
                    <div class="form-group">
                      <select v-model="form.package" class="form-input" required>
                        <option value="">Select Package*</option>
                        <option value="basic">Basic</option>
                        <option value="professional">Professional</option>
                        <option value="enterprise">Enterprise</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select v-model="form.billingCycle" class="form-input" required>
                        <option value="">Billing Cycle*</option>
                        <option value="monthly">Monthly</option>
                        <option value="annually">Annually</option>
                      </select>
                    </div>
                  </div>
                  
                  <!-- Row 4 -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 form-row-gray">
                    <div class="form-group">
                      <select v-model="form.language" class="form-input" required>
                        <option value="">Select Language*</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                        <option value="pt">Portuguese</option>
                        <option value="sw">Swahili</option>
                        <option value="ar">Arabic</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input 
                        v-model="form.price"
                        type="text" 
                        placeholder="Price*" 
                        class="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <!-- Row 5 -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 form-row-gray">
                    <div class="form-group">
                      <input 
                        v-model="form.website"
                        type="url" 
                        placeholder="Frontend Website Link*" 
                        class="form-input"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <select v-model="form.country" class="form-input" required>
                        <option value="">Country*</option>
                        <option value="ng">Nigeria</option>
                        <option value="ke">Kenya</option>
                        <option value="gh">Ghana</option>
                        <option value="za">South Africa</option>
                        <option value="eg">Egypt</option>
                        <option value="ma">Morocco</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <!-- Remarks field -->
                  <div class="form-group form-group-gray">
                    <textarea 
                      v-model="form.remarks"
                      placeholder="Remarks*" 
                      class="form-input h-20 resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <!-- Card Number field -->
                  <div class="form-group">
                    <input 
                      v-model="form.cardNumber"
                      type="text" 
                      placeholder="Card Number*" 
                      class="form-input"
                      required
                    />
                  </div>
                  
                  <!-- Row 6 -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div class="form-group">
                      <input 
                        v-model="form.expireDate"
                        type="text" 
                        placeholder="Expire Date (MM/YY)" 
                        class="form-input"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input 
                        v-model="form.cw"
                        type="text" 
                        placeholder="CW (CVV)" 
                        class="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <!-- Checkbox -->
                  <div class="flex items-center space-x-3">
                    <input 
                      id="trial"
                      v-model="form.wantTrial"
                      type="checkbox" 
                      class="h-4 w-4 rounded border-white/30 bg-transparent text-indigo focus:ring-indigo focus:ring-2"
                    />
                    <label for="trial" class="text-white text-sm font-montserrat">
                      Do you want Trial version?
                    </label>
                  </div>
                  
                  <!-- Submit button -->
                  <button 
                    type="submit"
                    class="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 mx-auto bg-[#492291] text-white font-semibold py-2.5 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-full hover:bg-gradient-to-r hover:from-[#492291] hover:to-white hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg font-raleway"
                    style="background: linear-gradient(135deg, #492291 0%, #492291 70%, rgba(255,255,255,0.1) 100%);"
                  >
                    Register Hospital
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DotPattern from '../common/DotPattern.vue'

// Form data
const form = ref({
  hospitalName: '',
  hospitalAddress: '',
  hospitalEmail: '',
  hospitalPhone: '',
  package: '',
  billingCycle: '',
  language: '',
  price: '',
  website: '',
  country: '',
  remarks: '',
  cardNumber: '',
  expireDate: '',
  cw: '',
  wantTrial: false
})

// Form submission handler
const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
  alert('Registration submitted successfully!')
}
</script>

<style scoped>
/* Main container */
.join-us-section {
  overflow: hidden;
}

.join-us-section,
.join-us-section * {
  box-sizing: border-box;
}

/* Custom colors */
.bg-gray-100 {
  background-color: rgba(0, 0, 0, 0.16);
}

.bg-gray-200 {
  background-color: rgba(255, 255, 255, 0.54);
}

.bg-gray-300 {
  background-color: rgba(23, 23, 23, 0.46);
}

.bg-gray-400 {
  background-color: rgba(23, 23, 23, 0.41);
}

.text-gray-200 {
  color: rgba(255, 255, 255, 0.54);
}

.border-indigo {
  border-color: #3d1687;
}

.bg-indigo {
  background-color: #3d1687;
}

/* Form styling */
.form-group {
  @apply relative;
}

.form-group input::placeholder,
.form-group textarea::placeholder,
.form-group select::placeholder {
  @apply text-gray-400;
}

/* Gray form rows and groups */
.form-row-gray .form-input,
.form-group-gray .form-input {
  @apply text-gray-500;
}

.form-row-gray .form-input:focus,
.form-group-gray .form-input:focus {
  @apply bg-white text-gray-500;
}

.form-row-gray .form-input select option,
.form-group-gray .form-input select option {
  @apply bg-white text-gray-500;
}

.form-input {
  @apply w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-100 border border-indigo rounded-lg text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm;
}

.form-input:focus {
  @apply bg-gray-100;
}

/* Custom select styling */
.form-input select {
  @apply appearance-none bg-transparent;
}

.form-input select option {
  @apply bg-gray-100 text-gray-500;
}

/* Responsive Design */

/* Extra Small Devices (phones, 320px and up) */
@media (min-width: 320px) {
  .join-us-section {
    min-height: 100vh;
  }
  
  .join-us-section .text-4xl {
    font-size: 2rem;
  }
  
  .join-us-section .text-2xl {
    font-size: 1.5rem;
  }
  
  .join-us-section .text-xl {
    font-size: 1.25rem;
  }
  
  .join-us-section .text-lg {
    font-size: 1.125rem;
  }
  
  .join-us-section .text-base {
    font-size: 1rem;
  }
  
  .join-us-section .text-sm {
    font-size: 0.875rem;
  }
}

/* Small Devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .join-us-section {
    min-height: 100vh;
  }
  
  .join-us-section .text-4xl {
    font-size: 2.5rem;
  }
  
  .join-us-section .text-2xl {
    font-size: 1.75rem;
  }
  
  .join-us-section .text-xl {
    font-size: 1.5rem;
  }
  
  .join-us-section .text-lg {
    font-size: 1.25rem;
  }
  
  .join-us-section .text-base {
    font-size: 1.125rem;
  }
  
  .join-us-section .text-sm {
    font-size: 1rem;
  }
}

/* Medium Devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .join-us-section {
    min-height: 100vh;
  }
  
  .join-us-section .text-4xl {
    font-size: 3rem;
  }
  
  .join-us-section .text-2xl {
    font-size: 2rem;
  }
  
  .join-us-section .text-xl {
    font-size: 1.75rem;
  }
  
  .join-us-section .text-lg {
    font-size: 1.5rem;
  }
  
  .join-us-section .text-base {
    font-size: 1.25rem;
  }
  
  .join-us-section .text-sm {
    font-size: 1.125rem;
  }
}

/* Large Devices (desktops, 1024px and up) */
@media (min-width: 1024px) {
  .join-us-section {
    min-height: 100vh;
  }
  
  .join-us-section .text-5xl {
    font-size: 3rem;
  }
  
  .join-us-section .text-3xl {
    font-size: 1.875rem;
  }
  
  .join-us-section .text-2xl {
    font-size: 1.5rem;
  }
  
  .join-us-section .text-xl {
    font-size: 1.25rem;
  }
  
  .join-us-section .text-lg {
    font-size: 1.125rem;
  }
  
  .join-us-section .text-base {
    font-size: 1rem;
  }
  
  .join-us-section .text-sm {
    font-size: 0.875rem;
  }
}

/* Extra Large Devices (large desktops, 1280px and up) */
@media (min-width: 1280px) {
  .join-us-section {
    min-height: 100vh;
  }
  
  .join-us-section .text-6xl {
    font-size: 3.75rem;
  }
  
  .join-us-section .text-4xl {
    font-size: 2.25rem;
  }
  
  .join-us-section .text-3xl {
    font-size: 1.875rem;
  }
  
  .join-us-section .text-2xl {
    font-size: 1.5rem;
  }
  
  .join-us-section .text-xl {
    font-size: 1.25rem;
  }
  
  .join-us-section .text-lg {
    font-size: 1.125rem;
  }
  
  .join-us-section .text-base {
    font-size: 1rem;
  }
  
  .join-us-section .text-sm {
    font-size: 0.875rem;
  }
}

/* 2XL Devices (extra large desktops, 1536px and up) */
@media (min-width: 1536px) {
  .join-us-section {
    min-height: 100vh;
  }
  
  .join-us-section .text-6xl {
    font-size: 3.75rem;
  }
  
  .join-us-section .text-4xl {
    font-size: 2.25rem;
  }
  
  .join-us-section .text-3xl {
    font-size: 1.875rem;
  }
  
  .join-us-section .text-2xl {
    font-size: 1.5rem;
  }
  
  .join-us-section .text-xl {
    font-size: 1.25rem;
  }
  
  .join-us-section .text-lg {
    font-size: 1.125rem;
  }
  
  .join-us-section .text-base {
    font-size: 1rem;
  }
  
  .join-us-section .text-sm {
    font-size: 0.875rem;
  }
}

/* 3XL Devices (ultra large desktops, 1920px and up) */
@media (min-width: 1920px) {
  .join-us-section {
    min-height: 100vh;
    max-width: 1920px;
    margin: 0 auto;
  }
  
  .join-us-section .text-6xl {
    font-size: 3.75rem;
  }
  
  .join-us-section .text-4xl {
    font-size: 2.25rem;
  }
  
  .join-us-section .text-3xl {
    font-size: 1.875rem;
  }
  
  .join-us-section .text-2xl {
    font-size: 1.5rem;
  }
  
  .join-us-section .text-xl {
    font-size: 1.25rem;
  }
  
  .join-us-section .text-lg {
    font-size: 1.125rem;
  }
  
  .join-us-section .text-base {
    font-size: 1rem;
  }
  
  .join-us-section .text-sm {
    font-size: 0.875rem;
  }
}

/* Mobile-specific adjustments */
@media (max-width: 767px) {
  .join-us-section {
    padding: 1rem 0;
  }
  
  .join-us-section .container {
    padding: 0 1rem;
  }
  
  .join-us-section .grid {
    grid-template-columns: 1fr;
  }
  
  .join-us-section .p-8 {
    padding: 1rem;
  }
  
  .join-us-section .space-y-6 {
    gap: 0.75rem;
  }
  
  .join-us-section .space-y-4 {
    gap: 0.5rem;
  }
  
  .join-us-section .space-y-3 {
    gap: 0.5rem;
  }
}

/* Tablet-specific adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .join-us-section {
    padding: 2rem 0;
  }
  
  .join-us-section .container {
    padding: 0 2rem;
  }
  
  .join-us-section .grid {
    grid-template-columns: 1fr;
  }
  
  .join-us-section .min-h-[600px] {
    min-height: 600px;
  }
  
  .join-us-section .p-8 {
    padding: 2rem;
  }
  
  .join-us-section .space-y-6 {
    gap: 1.5rem;
  }
  
  .join-us-section .space-y-4 {
    gap: 1rem;
  }
}

/* Desktop-specific adjustments */
@media (min-width: 1024px) {
  .join-us-section {
    padding: 3rem 0;
  }
  
  .join-us-section .container {
    padding: 0 3rem;
  }
  
  .join-us-section .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .join-us-section .min-h-[717px] {
    min-height: 717px;
  }
  
  .join-us-section .p-12 {
    padding: 3rem;
  }
  
  .join-us-section .space-y-6 {
    gap: 2rem;
  }
  
  .join-us-section .space-y-4 {
    gap: 1.5rem;
  }
}

/* Ultra-wide screen adjustments */
@media (min-width: 2560px) {
  .join-us-section {
    max-width: 2560px;
    margin: 0 auto;
  }
  
  .join-us-section .max-w-7xl {
    max-width: 80rem;
  }
}

/* Print styles */
@media print {
  .join-us-section {
    background: white !important;
    color: black !important;
  }
  
  .join-us-section .bg-indigo {
    background: white !important;
  }
  
  .join-us-section .text-white {
    color: black !important;
  }
  
  .join-us-section .bg-gray-100 {
    background: white !important;
    border: 1px solid #ccc !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .join-us-section .bg-gray-100 {
    border: 2px solid #000;
  }
  
  .join-us-section .text-white {
    color: #000 !important;
  }
  
  .join-us-section .text-gray-200 {
    color: #000 !important;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .join-us-section * {
    animation: none !important;
    transition: none !important;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .join-us-section .bg-gray-100 {
    background-color: #1f2937 !important;
    color: #f9fafb !important;
  }
  
  .join-us-section .text-white {
    color: #f9fafb !important;
  }
  
  .join-us-section .text-gray-200 {
    color: #d1d5db !important;
  }
}
/* Make DotPattern vertical for this section */
.dot-vertical {
  transform: rotate(90deg) translateY(-8px);
  transform-origin: top right;
  /* Reduce the visual size slightly to fit the header */
  scale: 0.9;
}

/* Better control on smaller screens */
@media (max-width: 1024px) {
  .dot-vertical {
    right: 12px !important;
    top: 8px !important;
    transform: rotate(90deg) translateY(-6px) scale(0.75);
  }
}

/* Gradient ball styling */
.gradient-ball {
  background: linear-gradient(135deg, 
    #E84192 5%, 
    #E44748 5%, 
    #8B5CF6 25%, 
    #A855F7 40%, 
    #C084FC 55%, 
    #F0ABFC 70%, 
    #F8BBD9 85%, 
    #E84192 100%);
  box-shadow: 
    0 0 40px rgba(232, 65, 146, 0.4),
    0 0 80px rgba(139, 92, 246, 0.3),
    0 0 120px rgba(240, 171, 252, 0.2),
    inset 0 0 30px rgba(255, 255, 255, 0.2);
  animation: gradientPulse 4s ease-in-out infinite alternate;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: blur(20px);
  z-index: 1;
}

.gradient-ball:hover {
  transform: scale(1.05);
  filter: blur(12px);
  box-shadow: 
    0 0 60px rgba(232, 65, 146, 0.6),
    0 0 120px rgba(139, 92, 246, 0.4),
    0 0 180px rgba(240, 171, 252, 0.3),
    inset 0 0 40px rgba(255, 255, 255, 0.3);
  animation-duration: 2s;
}

@keyframes gradientPulse {
  0% {
    box-shadow: 
      0 0 40px rgba(232, 65, 146, 0.4),
      0 0 80px rgba(139, 92, 246, 0.3),
      0 0 120px rgba(240, 171, 252, 0.2),
      inset 0 0 30px rgba(255, 255, 255, 0.2);
    transform: scale(1);
    filter: blur(8px);
  }
  100% {
    box-shadow: 
      0 0 60px rgba(232, 65, 146, 0.6),
      0 0 120px rgba(139, 92, 246, 0.4),
      0 0 180px rgba(240, 171, 252, 0.3),
      inset 0 0 40px rgba(255, 255, 255, 0.3);
    transform: scale(1.02);
    filter: blur(10px);
  }
}

/* Responsive gradient ball adjustments */
@media (max-width: 640px) {
  .gradient-ball {
    width: 200px;
    height: 200px;
    bottom: 1.25rem;
    right: 1.25rem;
    filter: blur(6px);
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .gradient-ball {
    width: 130px;
    height: 130px;
    bottom: 1.25rem;
    right: 1.25rem;
    filter: blur(7px);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .gradient-ball {
    width: 250px;
    height: 250px;
    bottom: 1.25rem;
    right: 1.25rem;
    filter: blur(10px);
  }
}

@media (min-width: 1025px) {
  .gradient-ball {
    width: 200px;
    height: 200px;
    bottom: 4rem;
    right: 1.25rem;
    filter: blur(10px);
  }
}

@media (min-width: 1280px) {
  .gradient-ball {
    width: 200px;
    height: 200px;
    bottom: 4rem;
    right: 1.25rem;
    filter: blur(10px);
  }
}

</style>