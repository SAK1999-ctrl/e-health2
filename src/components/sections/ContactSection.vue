<template>
  <div class="contact-section w-full min-h-screen relative overflow-hidden">
    
    <!-- Background with gradient and decorative elements -->
    <div class="absolute inset-0 bg-gradient-to-b from-pink-400 via-pink-400 to-pink-500"></div>
    
    <!-- Decorative floating balls -->
    <!-- Large ball - top left -->
    <div class="absolute top-[16%] left-[0%] w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] 2xl:w-[220px] 2xl:h-[220px] rounded-full animate-float-slow z-[2] ball-gradient-1"></div>
    
    <!-- Medium ball - top right -->
    <div class="absolute top-[20%] right-[-1%] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px] 2xl:w-[170px] 2xl:h-[170px] rounded-full animate-float-medium z-[2] ball-gradient-2"></div>
    
    <!-- Small ball - bottom right -->
    <div class="absolute bottom-[0%] right-[1%] w-[50px] h-[50px] sm:w-[95px] sm:h-[95px] md:w-[100px] md:h-[100px] lg:w-[165px] lg:h-[165px] xl:w-[175px] xl:h-[175px] 2xl:w-[195px] 2xl:h-[195px] rounded-full animate-float-fast z-[2] ball-gradient-3"></div>
    
    <!-- Medium ball - b-l -->
    <div class="absolute bottom-[3%] left-[1%] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[115px] lg:h-[115px] xl:w-[130px] xl:h-[130px] 2xl:w-[145px] 2xl:h-[145px] rounded-full animate-float-slow z-[2] ball-gradient-4"></div>
    
    <!-- Large ball - middle -->
    <div class="absolute bottom-[35%] left-[35%] w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] 2xl:w-[200px] 2xl:h-[200px] rounded-full animate-float-medium z-[2] ball-gradient-5"></div>
    
    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28 4xl:py-32">
      <!-- Subtitle -->
      <div class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-[2px] sm:tracking-[3px] md:tracking-[4px] leading-6 uppercase font-semibold font-raleway text-indigo text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        Get in touch
      </div>
      
      <!-- Main title -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-[-0.5px] sm:tracking-[-0.75px] md:tracking-[-1px] font-semibold font-raleway text-white text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
        Contact Us
      </h2>
      
      <!-- Contact Card -->
      <div class="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div class="rounded-2xl sm:rounded-3xl lg:rounded-4xl xl:rounded-5xl border border-white/30 p-5 sm:p-8 lg:p-10 xl:p-20 2xl:p-24 min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] glass-effect">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            
            <!-- Contact Information Section -->
            <div class="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-14">
              <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold font-raleway text-white mb-6 sm:mb-8">
                Contact Information
              </h3>
              
              <!-- Phone -->
              <div class="flex items-center space-x-4 lg:space-x-6">
                <div class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex-shrink-0">
                  <img src="/images/phone.png" alt="Phone" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white">
                  +165156131
                </span>
              </div>
              
              <!-- Email -->
              <div class="flex items-center space-x-4 lg:space-x-6">
                <div class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex-shrink-0">
                  <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span class="text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white break-all">
                  info@ehealth.isensehub.ai
                </span>
              </div>
              
              <!-- Address -->
              <div class="flex items-start space-x-4 lg:space-x-6">
                <div class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex-shrink-0 mt-1">
                  <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span class="text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white">
                  Address: Sheridan, Wyoming, USA
                </span>
              </div>
              
              <!-- Social Media Icons -->
              <div class="flex space-x-4 lg:space-x-6 pt-6 lg:pt-8">
                <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </div>
                <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Contact Form Section -->
            <div class="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-14">
              <form class="space-y-4 sm:space-y-6 lg:space-y-8">
                <!-- First Row: First Name & Organization -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div>
                    <label class="block text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white mb-2">
                      First Name
                    </label>
                    <input type="text" class="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 text-sm sm:text-base lg:text-lg font-raleway" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label class="block text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white mb-2">
                      Organization Name
                    </label>
                    <input type="text" class="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 text-sm sm:text-base lg:text-lg font-raleway" placeholder="Enter organization name" />
                  </div>
                </div>
                
                <!-- Second Row: Role & Email -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div>
                    <label class="block text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white mb-2">
                      Role
                    </label>
                    <input type="text" class="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 text-sm sm:text-base lg:text-lg font-raleway" placeholder="Enter your role" />
                  </div>
                  <div>
                    <label class="block text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white mb-2">
                      Email Address
                    </label>
                    <input type="email" class="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 text-sm sm:text-base lg:text-lg font-raleway" placeholder="Enter your email" />
                  </div>
                </div>
                
                <!-- Third Row: Phone & Country -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div>
                    <label class="block text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white mb-2">
                      Phone Number
                    </label>
                    <input type="tel" class="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 text-sm sm:text-base lg:text-lg font-raleway" placeholder="Enter your phone" />
                  </div>
                  <div>
                    <label class="block text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white mb-2">
                      Country
                    </label>
                    <input type="text" class="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 text-sm sm:text-base lg:text-lg font-raleway" placeholder="Enter your country" />
                  </div>
                </div>
                
                <!-- Language Selection -->
                <div>
                  <label class="block text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white mb-2">
                    Preferred Language for Demo
                  </label>
                  <div class="relative">
                    <select class="w-full bg-transparent border-b border-white/30 text-white focus:border-white focus:outline-none py-2 text-sm sm:text-base lg:text-lg font-raleway appearance-none">
                      <option value="" class="bg-gray-800 text-white font-raleway">Select language</option>
                      <option value="en" class="bg-gray-800 text-white font-raleway">English</option>
                      <option value="fr" class="bg-gray-800 text-white font-raleway">French</option>
                      <option value="es" class="bg-gray-800 text-white font-raleway">Spanish</option>
                      <option value="ar" class="bg-gray-800 text-white font-raleway">Arabic</option>
                    </select>
                    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <!-- Message -->
                <div>
                  <label class="block text-sm sm:text-base lg:text-lg font-semibold font-raleway text-white mb-2">
                    Message
                  </label>
                  <textarea class="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-2 resize-none text-sm sm:text-base lg:text-lg font-raleway" rows="3" placeholder="Write your message..."></textarea>
                </div>
                
                <!-- Send Button -->
                <div class="pt-4 lg:pt-6">
                  <button type="submit" class="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold font-raleway py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg">
                    <span>Send Message</span>
                    <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Contact section is now static as per design
</script>

<style scoped>
/* Contact section */
.contact-section {
  overflow: hidden;
}

.contact-section,
.contact-section * {
  box-sizing: border-box;
}

/* Font families */
.font-raleway {
  font-family: 'Raleway', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* Custom colors */
.text-indigo {
  color: #3d1687;
}

.text-white {
  color: #fff;
}

/* Custom tracking */
.tracking-\[2px\] {
  letter-spacing: 2px;
}

.tracking-\[4px\] {
  letter-spacing: 4px;
}

.tracking-\[-0\.5px\] {
  letter-spacing: -0.5px;
}

.tracking-\[-1px\] {
  letter-spacing: -1px;
}

/* Font weight */
.font-semibold {
  font-weight: 600;
}

.font-bold {
  font-weight: 700;
}

/* Uppercase */
.uppercase {
  text-transform: uppercase;
}

/* Text alignment */
.text-center {
  text-align: center;
}

/* Line height */
.leading-6 {
  line-height: 1.5rem;
}

/* Responsive design */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1025px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Large desktop screens (1280px and up) */
@media (min-width: 1280px) {
  .contact-section .container {
    max-width: 1280px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* Extra large desktop screens (1536px and up) */
@media (min-width: 1536px) {
  .contact-section .container {
    max-width: 1536px;
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

/* Ultra large desktop screens (1920px and up) */
@media (min-width: 1920px) {
  .contact-section .container {
    max-width: 1920px;
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

/* Ultra-wide screens (2560px and up) */
@media (min-width: 2560px) {
  .contact-section .container {
    max-width: 2560px;
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

/* Form focus states */
input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.8);
}

/* Button hover effects */
button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Social media hover effects */
.social-icon:hover {
  transform: scale(1.1);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Backdrop blur support */
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 4px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Glassmorphism effect for contact card */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.glass-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
}

.glass-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  bottom: 0;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

/* Ball gradient colors matching reference image */
.ball-gradient-1 {
  background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%);
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
}

.ball-gradient-2 {
  background: linear-gradient(135deg, #EC4899 0%, #F472B6 50%, #F9A8D4 100%);
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.3);
}

.ball-gradient-3 {
  background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.ball-gradient-4 {
  background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #DDD6FE 100%);
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.25);
}

.ball-gradient-5 {
  background: linear-gradient(135deg, #EC4899 0%, #F472B6 50%, #FCE7F3 100%);
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.25);
}

/* Floating ball animations */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(90deg);
  }
  50% {
    transform: translateY(-10px) translateX(-5px) rotate(180deg);
  }
  75% {
    transform: translateY(-15px) translateX(8px) rotate(270deg);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) translateX(-8px) rotate(120deg);
  }
  66% {
    transform: translateY(-8px) translateX(12px) rotate(240deg);
  }
}

@keyframes float-fast {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) translateX(6px) rotate(180deg);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

/* Responsive glass effect adjustments */
@media (max-width: 640px) {
  .glass-effect {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    background: rgba(255, 255, 255, 0.08);
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .glass-effect {
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    background: rgba(255, 255, 255, 0.09);
  }
}

@media (min-width: 1025px) {
  .glass-effect {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.1);
  }
}

/* Responsive adjustments for floating balls */
@media (max-width: 640px) {
  .animate-float-slow,
  .animate-float-medium,
  .animate-float-fast {
    animation-duration: 6s;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .animate-float-slow {
    animation-duration: 7s;
  }
  .animate-float-medium {
    animation-duration: 5s;
  }
  .animate-float-fast {
    animation-duration: 3.5s;
  }
}

@media (min-width: 1025px) {
  .animate-float-slow {
    animation-duration: 8s;
  }
  .animate-float-medium {
    animation-duration: 6s;
  }
  .animate-float-fast {
    animation-duration: 4s;
  }
}
</style>

