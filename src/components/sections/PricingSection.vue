<template>
  <div class="pricing-section w-full min-h-screen relative overflow-hidden">
    <!-- Background with gradient and decorative elements -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-darkorchid via-purple-600 to-purple-700"
    >
      <!-- Background gradient images - Responsive positioning -->
      <img
        class="absolute top-[200px] left-[1000px] w-[367.4px] h-[367.4px] object-cover opacity-90 hidden xl:block"
        src="/images/Untitled design 1.png"
        alt="Background gradient 1"
        style="
          filter: sepia(0.8) saturate(1.2) hue-rotate(320deg) brightness(1.3)
            opacity(0.9);
        "
      />
      <img
        class="absolute top-[400px] left-[0px] w-[367.4px] h-[367.4px] object-cover opacity-90 hidden xl:block"
        src="/images/Untitled design (11) 1.png"
        alt="Background gradient 2"
        style="
          filter: sepia(0.8) saturate(1.1) hue-rotate(320deg) brightness(1.3)
            opacity(0.9);
        "
      />

      <!-- Mobile/Tablet background images -->
      <img
        class="absolute top-[100px] right-[20px] w-[200px] h-[200px] object-cover opacity-60 block xl:hidden"
        src="/images/Untitled design 1.png"
        alt="Background gradient mobile 1"
      />
      <img
        class="absolute bottom-[100px] left-[20px] w-[180px] h-[180px] object-cover opacity-60 block xl:hidden"
        src="/images/Untitled design (11) 1.png"
        alt="Background gradient mobile 2"
      />

      <!-- Dot pattern overlay -->
      <div class="absolute inset-0">
        <DotPattern :use-tailwind="false" color="#929BFF" :opacity="0.3" />
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 px-4 py-8 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16 relative">
        <!-- Currency Selector -->
        <div
          class="absolute top-30 sm:top-8 lg:top-10 left-10 transform -translate-x-1/2 sm:left-8 sm:transform-none flex items-center gap-2"
        >
          <select
            v-model="selectedCurrency"
            class="bg-transparent text-white text-sm border-none outline-none cursor-pointer"
          >
            <option value="USD" class="bg-purple-600 text-white">USD</option>
            <option value="EUR" class="bg-purple-600 text-white">EUR</option>
            <option value="GBP" class="bg-purple-600 text-white">GBP</option>
            <option value="NGN" class="bg-purple-600 text-white">NGN</option>
          </select>
        </div>

        <h1
          class="text-cornflowerblue text-lg sm:text-2xl md:text-4xl lg:text-6xl mb-2 font-raleway"
        >
          Pricing
        </h1>
        <h1
          class="text-white text-2xl sm:text-4xl md:text-6xl lg:text-4xl xl:text-5xl mb-2 sm:mb-6 font-raleway"
        >
          License & Pricing
        </h1>

        <!-- Toggle switch -->
        <div class="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <div
            class="flex items-center bg-white rounded-full px-4 py-2"
            :class="{ 'bg-white': !isYearly, 'bg-transparent': isYearly }"
          >
            <span
              class="text-sm sm:text-base font-raleway"
              :class="{
                'text-black font-bold': !isYearly,
                'text-white': isYearly,
              }"
              >Monthly</span
            >
          </div>
          <div class="relative">
            <input
              type="checkbox"
              id="pricing-toggle"
              class="sr-only"
              v-model="isYearly"
            />
            <div
              class="w-12 h-6 bg-gray-600 rounded-full cursor-pointer"
              @click="togglePricing"
            >
              <div
                class="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 mt-0.5 ml-0.5"
                :class="{ 'translate-x-6': isYearly }"
              ></div>
            </div>
          </div>
          <div
            class="flex items-center rounded-full px-4 py-2"
            :class="{ 'bg-white': isYearly, 'bg-transparent': !isYearly }"
          >
            <span
              class="text-sm sm:text-base font-raleway"
              :class="{
                'text-black font-bold': isYearly,
                'text-white': !isYearly,
              }"
              >Yearly</span
            >
          </div>
        </div>
      </div>

      <!-- Pricing cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
      >
        <!-- Premium Plan -->
        <div
          class="w-full h-auto min-h-[320px] sm:min-h-[350px] md:min-h-[420px] lg:h-[500px] relative rounded-[15px] bg-white p-4 sm:p-4 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div class="text-center mb-4 sm:mb-6 flex-shrink-0">
            <h3
              class="text-base sm:text-lg lg:text-xl font-semibold text-midnightblue mb-2 font-raleway"
            >
              Premium
            </h3>
            <div class="mb-4">
              <div
                class="w-[99px] h-[26px] relative text-midnightblue text-left inline-block opacity-[0.96] text-xl sm:text-2xl lg:text-3xl font-inter"
              >
                <span>$</span>
                <b class="text-[20px] sm:text-[22px] lg:text-[25px]"> 10,000</b>
              </div>
              <span
                class="text-gray-500 text-xs sm:text-sm ml-1 font-raleway"
                >{{ isYearly ? "/year" : "/month" }}</span
              >
            </div>
            <button
              class="w-full bg-purple-600 text-white py-2 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors text-sm sm:text-base"
            >
              Buy License
            </button>
          </div>

          <ul
            class="space-y-2 sm:space-y-3 text-xs sm:text-sm flex-1 overflow-y-auto pr-2"
          >
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Accountant
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Appointment
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Lab
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Bed
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Department
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Donor
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Finance
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Pharmacy
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Laboratogist
              </div>
            </li>
          </ul>
        </div>

        <!-- Standard Plan -->
        <div
          class="w-full h-auto min-h-[320px] sm:min-h-[350px] md:min-h-[420px] lg:h-[500px] relative rounded-[15px] bg-white p-4 sm:p-4 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div class="text-center mb-4 sm:mb-6 flex-shrink-0">
            <h3
              class="text-base sm:text-lg lg:text-xl font-semibold text-midnightblue mb-2 font-raleway"
            >
              Standard
            </h3>
            <div class="mb-4">
              <div
                class="w-[99px] h-[26px] relative text-midnightblue text-left inline-block opacity-[0.96] text-xl sm:text-2xl lg:text-3xl font-inter"
              >
                <span>$</span>
                <b class="text-[20px] sm:text-[22px] lg:text-[25px]"> 5,000</b>
              </div>
              <span
                class="text-gray-500 text-xs sm:text-sm ml-1 font-raleway"
                >{{ isYearly ? "/year" : "/month" }}</span
              >
            </div>
            <button
              class="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Choose
            </button>
          </div>

          <ul
            class="space-y-2 sm:space-y-3 text-xs sm:text-sm flex-1 overflow-y-auto pr-2"
          >
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Accountant
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Appointment
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Lab
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Bed
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Department
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Donor
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Finance
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Pharmacy
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Laboratogist
              </div>
            </li>
          </ul>
        </div>

        <!-- Starter Plan -->
        <div
          class="w-full h-auto min-h-[320px] sm:min-h-[350px] md:min-h-[420px] lg:h-[500px] relative rounded-[15px] bg-white p-4 sm:p-4 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 xl:col-span-1 flex flex-col"
        >
          <div class="text-center mb-4 sm:mb-6 flex-shrink-0">
            <h3
              class="text-base sm:text-lg lg:text-xl font-semibold text-midnightblue mb-2 font-raleway"
            >
              Starter
            </h3>
            <div class="mb-4">
              <div
                class="w-[99px] h-[26px] relative text-midnightblue text-left inline-block opacity-[0.96] text-xl sm:text-2xl lg:text-3xl font-inter"
              >
                <span>$</span>
                <b class="text-[20px] sm:text-[22px] lg:text-[25px]"> 3,000</b>
              </div>
              <span
                class="text-gray-500 text-xs sm:text-sm ml-1 font-raleway"
                >{{ isYearly ? "/year" : "/month" }}</span
              >
            </div>
            <button
              class="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Choose
            </button>
          </div>

          <ul
            class="space-y-2 sm:space-y-3 text-xs sm:text-sm flex-1 overflow-y-auto pr-2"
          >
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Accountant
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Appointment
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Lab
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Bed
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Department
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Donor
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Finance
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Pharmacy
              </div>
            </li>
            <li class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                class="w-full sm:w-[186.9px] h-3 sm:h-4 relative text-xs sm:text-base font-inter text-slategray text-left flex items-center"
              >
                Laboratogist
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DotPattern from "../common/DotPattern.vue";

const isYearly = ref(false);
const selectedCurrency = ref("USD");

const togglePricing = () => {
  isYearly.value = !isYearly.value;
};
</script>

<style scoped>
/* Main container */
.pricing-section {
  overflow: hidden;
}

.pricing-section,
.pricing-section * {
  box-sizing: border-box;
}

input,
select,
textarea,
button {
  outline: 0;
}

/* Custom scrollbar for feature lists */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #9ca3af;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Ensure cards maintain proper height on mobile */
@media (max-width: 767px) {
  .pricing-section .grid > div {
    min-height: 320px !important;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .pricing-section .grid > div {
    min-height: 420px !important;
  }
}

/* Animation for toggle switch */
.transition-transform {
  transition: transform 0.2s ease-in-out;
}

/* Hover effects */
.hover\:bg-purple-700:hover {
  background-color: #7c3aed;
}

.hover\:bg-gray-800:hover {
  background-color: #1f2937;
}

/* Transition effects */
.transition-colors {
  transition: background-color 0.2s ease-in-out;
}

.transition-shadow {
  transition: box-shadow 0.3s ease-in-out;
}

/* Responsive Design */

/* Extra Small Devices (phones, 320px and up) */
@media (min-width: 320px) {
  .pricing-section {
    min-height: 100vh;
  }

  .pricing-section .text-lg {
    font-size: 1rem;
  }

  .pricing-section .text-xl {
    font-size: 1.125rem;
  }

  .pricing-section .text-2xl {
    font-size: 1.25rem;
  }

  .pricing-section .text-3xl {
    font-size: 1.5rem;
  }

  .pricing-section .text-4xl {
    font-size: 1.875rem;
  }

  .pricing-section .text-5xl {
    font-size: 2.25rem;
  }
}

/* Small Devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .pricing-section .text-lg {
    font-size: 1.125rem;
  }

  .pricing-section .text-xl {
    font-size: 1.25rem;
  }

  .pricing-section .text-2xl {
    font-size: 1.5rem;
  }

  .pricing-section .text-3xl {
    font-size: 1.875rem;
  }

  .pricing-section .text-4xl {
    font-size: 2.25rem;
  }

  .pricing-section .text-5xl {
    font-size: 3rem;
  }
}

/* Medium Devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .pricing-section {
    min-height: 100vh;
  }

  .pricing-section .text-lg {
    font-size: 1.125rem;
  }

  .pricing-section .text-xl {
    font-size: 1.25rem;
  }

  .pricing-section .text-2xl {
    font-size: 1.5rem;
  }

  .pricing-section .text-3xl {
    font-size: 1.875rem;
  }

  .pricing-section .text-4xl {
    font-size: 2.25rem;
  }

  .pricing-section .text-5xl {
    font-size: 3rem;
  }
}

/* Large Devices (desktops, 1024px and up) */
@media (min-width: 1024px) {
  .pricing-section {
    min-height: 100vh;
  }

  .pricing-section .text-lg {
    font-size: 1.125rem;
  }

  .pricing-section .text-xl {
    font-size: 1.25rem;
  }

  .pricing-section .text-2xl {
    font-size: 1.5rem;
  }

  .pricing-section .text-3xl {
    font-size: 1.875rem;
  }

  .pricing-section .text-4xl {
    font-size: 2.25rem;
  }

  .pricing-section .text-5xl {
    font-size: 3rem;
  }
}

/* Extra Large Devices (large desktops, 1280px and up) */
@media (min-width: 1280px) {
  .pricing-section {
    min-height: 100vh;
  }

  .pricing-section .text-lg {
    font-size: 1.125rem;
  }

  .pricing-section .text-xl {
    font-size: 1.25rem;
  }

  .pricing-section .text-2xl {
    font-size: 1.5rem;
  }

  .pricing-section .text-3xl {
    font-size: 1.875rem;
  }

  .pricing-section .text-4xl {
    font-size: 2.25rem;
  }

  .pricing-section .text-5xl {
    font-size: 3rem;
  }
}

/* 2XL Devices (extra large desktops, 1536px and up) */
@media (min-width: 1536px) {
  .pricing-section {
    min-height: 100vh;
  }

  .pricing-section .text-lg {
    font-size: 1.125rem;
  }

  .pricing-section .text-xl {
    font-size: 1.25rem;
  }

  .pricing-section .text-2xl {
    font-size: 1.5rem;
  }

  .pricing-section .text-3xl {
    font-size: 1.875rem;
  }

  .pricing-section .text-4xl {
    font-size: 2.25rem;
  }

  .pricing-section .text-5xl {
    font-size: 3rem;
  }
}

/* 3XL Devices (ultra large desktops, 1920px and up) */
@media (min-width: 1920px) {
  .pricing-section {
    min-height: 100vh;
  }

  .pricing-section .text-lg {
    font-size: 1.125rem;
  }

  .pricing-section .text-xl {
    font-size: 1.25rem;
  }

  .pricing-section .text-2xl {
    font-size: 1.5rem;
  }

  .pricing-section .text-3xl {
    font-size: 1.875rem;
  }

  .pricing-section .text-4xl {
    font-size: 2.25rem;
  }

  .pricing-section .text-5xl {
    font-size: 3rem;
  }
}

/* Mobile-specific adjustments */
@media (max-width: 767px) {
  .pricing-section {
    padding: 1rem 0;
  }

  .pricing-section .grid {
    gap: 1rem;
  }

  .pricing-section .p-4 {
    padding: 1rem;
  }

  .pricing-section .mb-4 {
    margin-bottom: 1rem;
  }

  .pricing-section .mb-6 {
    margin-bottom: 1.5rem;
  }

  .pricing-section .mb-8 {
    margin-bottom: 2rem;
  }

  .pricing-section .space-y-2 > * + * {
    margin-top: 0.5rem;
  }

  .pricing-section .space-y-3 > * + * {
    margin-top: 0.75rem;
  }
}

/* Tablet-specific adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .pricing-section {
    padding: 2rem 0;
  }

  .pricing-section .grid {
    gap: 1.5rem;
  }

  .pricing-section .p-6 {
    padding: 1.5rem;
  }

  .pricing-section .mb-6 {
    margin-bottom: 1.5rem;
  }

  .pricing-section .mb-8 {
    margin-bottom: 2rem;
  }

  .pricing-section .space-y-3 > * + * {
    margin-top: 0.75rem;
  }
}

/* Desktop-specific adjustments */
@media (min-width: 1024px) {
  .pricing-section {
    padding: 3rem 0;
  }

  .pricing-section .grid {
    gap: 2rem;
  }

  .pricing-section .p-8 {
    padding: 2rem;
  }

  .pricing-section .mb-8 {
    margin-bottom: 2rem;
  }

  .pricing-section .space-y-3 > * + * {
    margin-top: 0.75rem;
  }
}

/* Ultra-wide screen adjustments */
@media (min-width: 2560px) {
  .pricing-section {
    max-width: 2560px;
    margin: 0 auto;
  }

  .pricing-section .max-w-7xl {
    max-width: 80rem;
  }
}

/* Print styles */
@media print {
  .pricing-section {
    background: white !important;
    color: black !important;
  }

  .pricing-section .bg-gradient-to-br {
    background: white !important;
  }

  .pricing-section .text-white {
    color: black !important;
  }

  .pricing-section .bg-white {
    background: white !important;
    border: 1px solid #ccc !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .pricing-section .bg-white {
    border: 2px solid #000;
  }

  .pricing-section .text-midnightblue {
    color: #000 !important;
  }

  .pricing-section .text-slategray {
    color: #000 !important;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .pricing-section .transition-colors,
  .pricing-section .transition-shadow,
  .pricing-section .transition-transform {
    transition: none !important;
  }

  .pricing-section .hover\:bg-purple-700:hover,
  .pricing-section .hover\:bg-gray-800:hover {
    background-color: inherit !important;
  }

  .pricing-section .hover\:shadow-xl:hover {
    box-shadow: inherit !important;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .pricing-section .bg-white {
    background-color: #1f2937 !important;
    color: #f9fafb !important;
  }

  .pricing-section .text-midnightblue {
    color: #f9fafb !important;
  }

  .pricing-section .text-slategray {
    color: #d1d5db !important;
  }

  .pricing-section .text-gray-500 {
    color: #9ca3af !important;
  }
}
</style>
