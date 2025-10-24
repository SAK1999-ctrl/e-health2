<template>
  <div
    class="w-full relative bg-services-bg min-h-[700px] sm:min-h-[750px] overflow-hidden text-left text-[28px] text-white font-raleway py-8 sm:py-16"
  >
    <!-- Container with max-width for centering -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Header -->
      <div class="flex justify-between items-center mb-12 sm:mb-20">
        <h2
          class="text-2xl sm:text-3xl lg:text-5xl leading-tight font-semibold z-10"
        >
          <span class="text-cornflowerblue">HealthCare</span>
          <span class="text-white"> Services</span>
        </h2>

        <!-- See More Button -->
        <button
          class="rounded-[30px] sm:rounded-[35px] md:rounded-[40px] border-white border-solid border-[1px] overflow-hidden flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg lg:text-xl font-noto-sans cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-purple hover:border-transparent hover:shadow-lg hover:scale-105"
        >
          <span class="relative tracking-[0.02em] sm:tracking-[0.025em] md:tracking-[0.03em] capitalize font-medium">
            See More
          </span>
        </button>
      </div>

      <!-- Cards Container - Using Grid for proper centering -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <!-- Card 1: Make Appointment -->
        <div
          class="rounded-num-24 bg-whitesmoke w-full h-[400px] sm:h-[450px] overflow-hidden flex flex-col items-center justify-center p-6 box-border gap-6 text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-brand-blue hover:after:to-brand-purple hover:after:rounded-b-num-24 relative"
        >
          <div
            class="self-stretch flex flex-col items-start justify-center gap-4"
          >
            <div
              class="w-full relative tracking-[0.01em] leading-[32px] sm:leading-[38px] font-semibold inline-block text-xl sm:text-2xl"
            >
              Make Appointment
            </div>
            <div
              class="self-stretch relative text-sm sm:text-base leading-[22px] sm:leading-[25px] font-manrope text-dimgray"
            >
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie,
            </div>
          </div>
          <div
            class="self-stretch flex-1 relative rounded-num-24 bg-gray-100 overflow-hidden"
          >
            <img
              class="w-full h-full object-cover object-center"
              src="/images/image 13.png"
              alt="Make Appointment"
            />
          </div>
        </div>

        <!-- Card 2: Online Pharmacy (Featured) -->
        <div
          class="rounded-num-24 shadow-[9px_15px_10px_-2px_rgba(59,_136,_244,_0.15)] bg-[#5D27BC] w-full h-[400px] sm:h-[450px] overflow-hidden flex flex-col items-center justify-center p-6 box-border gap-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-brand-blue hover:after:to-brand-purple hover:after:rounded-b-num-24 relative lg:-translate-y-4"
        >
          <div
            class="self-stretch flex flex-col items-start justify-center gap-4"
          >
            <div
              class="w-full relative tracking-[0.01em] leading-[32px] sm:leading-[38px] font-semibold inline-block text-xl sm:text-2xl"
            >
              Online Pharmacy
            </div>
            <div
              class="self-stretch relative text-sm sm:text-base leading-[22px] sm:leading-[25px] font-manrope"
            >
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie,
            </div>
          </div>
          <img
            class="self-stretch relative rounded-[14px] max-w-full overflow-hidden max-h-full object-cover"
            src="/images/image 12.png"
            alt="Online Pharmacy"
          />
        </div>

        <!-- Card 3: Virtual Consultation -->
        <div
          class="rounded-num-24 bg-whitesmoke w-full h-[400px] sm:h-[450px] overflow-hidden flex flex-col items-center justify-center p-6 box-border gap-6 text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-brand-blue hover:after:to-brand-purple hover:after:rounded-b-num-24 relative"
        >
          <div
            class="self-stretch flex flex-col items-start justify-center gap-4"
          >
            <div
              class="w-full sm:w-[195px] relative tracking-[0.01em] leading-[32px] sm:leading-[38px] font-semibold inline-block text-xl sm:text-2xl"
            >
              Virtual Consultation
            </div>
            <div
              class="self-stretch relative text-sm sm:text-base leading-[22px] sm:leading-[25px] font-manrope text-dimgray"
            >
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie,
            </div>
          </div>
          <div
            class="self-stretch flex-1 relative rounded-num-24 bg-gray-100 overflow-hidden"
          >
            <img
              class="w-full h-full object-cover object-center"
              src="/images/image14.png"
              alt="Virtual Consultation"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
