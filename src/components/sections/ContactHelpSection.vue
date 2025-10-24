<template>
  <div class="w-full py-16 lg:py-24 bg-black relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 [background:linear-gradient(180deg,_#c3429a_4.81%,_#e23169_32.49%,_#e85b2c_60.58%,_#e8902c_98.19%)] opacity-20" />
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl lg:text-5xl font-raleway font-semibold text-white mb-4">
          <span class="text-cornflowerblue">How Can We</span>
          <span> Help You?</span>
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <!-- Card 1: Request a Personalized Demo -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div class="relative bg-gray-800 border border-gray-700 rounded-lg p-6 h-full flex flex-col hover:bg-gray-750 transition-colors duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-darkslateblue rounded-lg flex items-center justify-center">
                <img src="/images/pluss.png" alt="Plus icon" class="w-6 h-6" />
              </div>
              <h3 class="text-lg font-raleway font-semibold text-white">Request a Personalized Demo</h3>
            </div>
            <p class="text-gray-300 font-manrope leading-relaxed flex-grow">
              See ISenseHUB in action, tailored to your specific needs.
            </p>
          </div>
        </div>

        <!-- Card 2: General Inquiries -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div class="relative bg-gray-800 border border-gray-700 rounded-lg p-6 h-full flex flex-col hover:bg-gray-750 transition-colors duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-mediumvioletred rounded-lg flex items-center justify-center">
                <img src="/images/letter_send 1.png" alt="Letter icon" class="w-6 h-6" />
              </div>
              <h3 class="text-lg font-raleway font-semibold text-white">General Inquiries</h3>
            </div>
            <p class="text-gray-300 font-manrope leading-relaxed flex-grow">
              Have questions about our platform, pricing, or implementation?
            </p>
          </div>
        </div>

        <!-- Card 3: Partnership Opportunities -->
        <div class="relative group md:col-span-2 lg:col-span-1">
          <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div class="relative bg-gray-800 border border-gray-700 rounded-lg p-6 h-full flex flex-col hover:bg-gray-750 transition-colors duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-crimson rounded-lg flex items-center justify-center">
                <img src="/images/phone.png" alt="Phone icon" class="w-6 h-6" />
              </div>
              <h3 class="text-lg font-raleway font-semibold text-white">Partnership Opportunities</h3>
            </div>
            <p class="text-gray-300 font-manrope leading-relaxed flex-grow">
              Interested in collaborating to expand healthcare access across the continent?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional imports needed for this component
</script>

<style scoped>
/* Custom colors matching the design */
.text-cornflowerblue {
  color: #929bff;
}

.bg-darkslateblue {
  background-color: #513595;
}

.bg-mediumvioletred {
  background-color: #b12168;
}

.bg-crimson {
  background-color: #cb1d53;
}

.hover\:bg-gray-750:hover {
  background-color: #1f2937;
}
</style>
