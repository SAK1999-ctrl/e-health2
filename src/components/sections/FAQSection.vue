<template>
  <div class="w-full relative min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-center text-white font-raleway overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-500 via-purple-400 to-pink-500"></div>
    
    <!-- Blurred orbs for depth -->
    <div class="absolute top-0 left-0 w-full h-full">
      <!-- Left orb -->
      <div class="absolute top-10 sm:top-20 left-[-50px] sm:left-[-100px] w-40 h-40 sm:w-80 sm:h-80 bg-pink-400 rounded-full opacity-60 blur-3xl"></div>
      <!-- Right orb -->
      <div class="absolute top-20 sm:top-40 right-[-75px] sm:right-[-150px] w-48 h-48 sm:w-96 sm:h-96 bg-purple-400 rounded-full opacity-50 blur-3xl"></div>
      <!-- Center orb -->
      <div class="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-36 h-36 sm:w-72 sm:h-72 bg-pink-300 rounded-full opacity-40 blur-2xl"></div>
    </div>
    
    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10">
      <!-- Subtitle -->
      <div class="text-sm tracking-[4px] leading-6 uppercase font-semibold text-indigo mb-5">
        Unravel Your Queries
      </div>
      
      <!-- Main title -->
      <h2 class="text-[48px] tracking-[-1px] font-semibold mb-[58px]">
        Frequently Asked Questions
      </h2>
      
      <!-- FAQ Container -->
      <div class="max-w-[700px] mx-auto">
        <div class="space-y-2">
        
          <!-- FAQ Item 1 - Administrative Module -->
          <div 
            class="w-full relative rounded-[4px] bg-gray-100 overflow-hidden text-[15px] text-whitesmoke-300 font-manrope transition-all duration-300 ease-in-out cursor-pointer"
            :class="faqs[0].isExpanded ? 'h-auto min-h-[201.6px]' : 'h-[84.8px]'"
            @click="toggleFAQ(0)"
          >
            <div class="absolute inset-0 rounded-[4px] border-gray-200 border border-solid mix-blend-normal transition-all duration-300" />
            
            <!-- Header area -->
            <div class="absolute top-[24px] left-[24px] right-[24px] h-[36.8px] text-white font-raleway flex items-center justify-between">
              <div class="flex items-center space-x-[14.29px] flex-1">
                <!-- Star icon -->
                <div class="text-base text-whitesmoke-100 font-zapf-dingbats flex-shrink-0">
                  ✦
                </div>
                <!-- Title -->
                <div class="text-lg font-semibold leading-[130%]">
                  {{ faqs[0].title }}
                </div>
              </div>
              
              <!-- Icon - Cross when expanded, Plus when collapsed -->
              <div class="w-4 h-4 flex-shrink-0 flex items-center justify-center transition-all duration-300">
                <img 
                  :src="faqs[0].isExpanded ? '/images/crosss.png' : '/images/pluss.png'" 
                  :alt="faqs[0].isExpanded ? 'Close' : 'Expand'" 
                  class="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
            
            <!-- Content area - only show when expanded -->
            <div 
              v-if="faqs[0].isExpanded"
              class="mt-[76px] px-[24px] pb-[24px] opacity-90 transition-all duration-300 ease-in-out"
            >
              <div class="text-[15px] leading-[130%]">
                {{ faqs[0].content }}
              </div>
            </div>
          </div>
        
          <!-- FAQ Item 2 - Doctor Module -->
          <div 
            class="w-full relative rounded-[4px] bg-gray-100 overflow-hidden text-[15px] text-whitesmoke-300 font-manrope transition-all duration-300 ease-in-out cursor-pointer"
            :class="faqs[1].isExpanded ? 'h-auto min-h-[201.6px]' : 'h-[84.8px]'"
            @click="toggleFAQ(1)"
          >
            <div class="absolute inset-0 rounded-[4px] border-gray-200 border border-solid mix-blend-normal transition-all duration-300" />
            
            <!-- Header area -->
            <div class="absolute top-[24px] left-[24px] right-[24px] h-[36.8px] text-white font-raleway flex items-center justify-between">
              <div class="flex items-center space-x-[14.29px] flex-1">
                <!-- Star icon -->
                <div class="text-base text-whitesmoke-100 font-zapf-dingbats flex-shrink-0">
                  ✦
                </div>
                <!-- Title -->
                <div class="text-lg font-semibold leading-[130%]">
                  {{ faqs[1].title }}
                </div>
              </div>
              
              <!-- Icon - Cross when expanded, Plus when collapsed -->
              <div class="w-3 h-3 flex-shrink-0 flex items-center justify-center transition-all duration-300">
                <img 
                  :src="faqs[1].isExpanded ? '/images/crosss.png' : '/images/pluss.png'" 
                  :alt="faqs[1].isExpanded ? 'Close' : 'Expand'" 
                  class="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
            
            <!-- Content area - only show when expanded -->
            <div 
              v-if="faqs[1].isExpanded"
              class="mt-[76px] px-[24px] pb-[24px] opacity-90 transition-all duration-300 ease-in-out"
            >
              <div class="text-[15px] leading-[130%]">
                {{ faqs[1].content }}
              </div>
            </div>
          </div>
        
          <!-- FAQ Item 3 - Accountants Module -->
          <div 
            class="w-full relative rounded-[4px] bg-gray-100 overflow-hidden text-[15px] text-whitesmoke-300 font-manrope transition-all duration-300 ease-in-out cursor-pointer"
            :class="faqs[2].isExpanded ? 'h-auto min-h-[201.6px]' : 'h-[84.8px]'"
            @click="toggleFAQ(2)"
          >
            <div class="absolute inset-0 rounded-[4px] border-gray-200 border border-solid mix-blend-normal transition-all duration-300" />
            
            <!-- Header area -->
            <div class="absolute top-[24px] left-[24px] right-[24px] h-[36.8px] text-white font-raleway flex items-center justify-between">
              <div class="flex items-center space-x-[14.29px] flex-1">
                <!-- Star icon -->
                <div class="text-base text-whitesmoke-100 font-zapf-dingbats flex-shrink-0">
                  ✦
                </div>
                <!-- Title -->
                <div class="text-lg font-semibold leading-[130%]">
                  {{ faqs[2].title }}
                </div>
              </div>
              
              <!-- Icon - Cross when expanded, Plus when collapsed -->
              <div class="w-3 h-3 flex-shrink-0 flex items-center justify-center transition-all duration-300">
                <img 
                  :src="faqs[2].isExpanded ? '/images/crosss.png' : '/images/pluss.png'" 
                  :alt="faqs[2].isExpanded ? 'Close' : 'Expand'" 
                  class="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
            
            <!-- Content area - only show when expanded -->
            <div 
              v-if="faqs[2].isExpanded"
              class="mt-[76px] px-[24px] pb-[24px] opacity-90 transition-all duration-300 ease-in-out"
            >
              <div class="text-[15px] leading-[130%]">
                {{ faqs[2].content }}
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

// FAQ state management
const activeFAQ = ref(0) // 0 = Administrative (expanded), 1 = Doctor, 2 = Accountants

// FAQ data
const faqs = ref([
  {
    id: 0,
    title: "Administrative Module",
    content: "We have designed the administrative module for a hospital owner or the person who is accountable to operate the entire hospital smoothly. Using this module, you can manage the entire system easily and efficiently. Because this module includes every important feature like doctors portal, patient portal, appointment scheduling, prescription management, human resource management, bed management, employee, accounts, software settings, role assigning, etc.",
    isExpanded: true
  },
  {
    id: 1,
    title: "Doctor Module",
    content: "The Doctor Module is designed specifically for healthcare professionals to manage their daily operations efficiently. It includes features like patient records management, appointment scheduling, prescription writing, medical history tracking, diagnostic tools integration, and real-time communication with other healthcare staff.",
    isExpanded: false
  },
  {
    id: 2,
    title: "Accountants Module",
    content: "The Accountants Module provides comprehensive financial management tools for healthcare facilities. It includes billing management, insurance claim processing, payment tracking, financial reporting, budget planning, expense management, and integration with accounting software for seamless financial operations.",
    isExpanded: false
  }
])

// Toggle FAQ function
const toggleFAQ = (index: number) => {
  if (activeFAQ.value === index) {
    // If clicking the same FAQ, close it
    activeFAQ.value = -1
    faqs.value[index].isExpanded = false
  } else {
    // Close all FAQs first
    faqs.value.forEach((faq, i) => {
      faq.isExpanded = i === index
    })
    // Open the clicked FAQ
    activeFAQ.value = index
  }
}
</script>

<style scoped>
/* Custom fonts */
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

.font-manrope {
  font-family: 'Manrope', sans-serif;
}

.font-zapf-dingbats {
  font-family: 'Zapf Dingbats', serif;
}

/* Custom colors matching the design */
.text-indigo {
  color: #3d1687;
}

.bg-gray-100 {
  background-color: #0f1012;
}

.border-gray-200 {
  border-color: rgba(255, 255, 255, 0.05);
}

.text-whitesmoke-100 {
  color: #efefeb;
}

.text-whitesmoke-300 {
  color: rgba(239, 239, 235, 0.92);
}

/* Custom spacing for exact design match */
.mb-9 {
  margin-bottom: 2.25rem; /* 36px */
}

.mb-\[68px\] {
  margin-bottom: 68px;
}

.space-x-\[14\.29px\] > * + * {
  margin-left: 14.29px;
}

/* Custom font sizes */
.text-\[60px\] {
  font-size: 60px;
}

.text-\[15px\] {
  font-size: 15px;
}

/* Custom line heights */
.leading-\[130%\] {
  line-height: 130%;
}

/* Custom heights */
.h-\[36\.8px\] {
  height: 36.8px;
}

.h-\[84\.8px\] {
  height: 84.8px;
}

.h-\[201\.6px\] {
  height: 201.6px;
}

/* Custom border radius */
.rounded-\[4px\] {
  border-radius: 4px;
}

/* Mix blend mode */
.mix-blend-normal {
  mix-blend-mode: normal;
}

/* Responsive FAQ animations */
.faq-item {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-content {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects for better UX */
.faq-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Focus states for accessibility */
.faq-item:focus {
  outline: 2px solid #3d1687;
  outline-offset: 2px;
}

/* Smooth scrolling for expanded content */
.faq-content {
  scroll-behavior: smooth;
}

/* Mobile-specific adjustments */
@media (max-width: 640px) {
  .faq-item {
    margin-bottom: 0.5rem;
  }
  
  .faq-content {
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  /* Ensure content has proper spacing on mobile */
  .text-\[15px\] {
    font-size: 14px;
  }
  
  .leading-\[130%\] {
    line-height: 140%;
  }
}

/* Tablet adjustments */
@media (min-width: 641px) and (max-width: 1024px) {
  .faq-item {
    margin-bottom: 0.75rem;
  }
}

/* Desktop adjustments */
@media (min-width: 1025px) {
  .faq-item {
    margin-bottom: 1rem;
  }
  
  .faq-content {
    font-size: 1rem;
    line-height: 1.6;
  }
}

/* Large desktop adjustments */
@media (min-width: 1440px) {
  .faq-content {
    font-size: 1.125rem;
    line-height: 1.7;
  }
}
</style>