<template>
  <footer class="footer-container">
    <!-- Background -->
    <div class="footer-bg" />
    
    <!-- Main content container -->
    <div class="footer-content">
      <!-- Logo and Description -->
      <div class="footer-brand">
        <div class="footer-logo">
          <img 
            src="/images/eLearn white trans bg logo (1) 1-1.png" 
            alt="eHealth iSenseHUB Logo" 
            class="w-full h-full object-contain"
          />
        </div>
        <div class="footer-description">
          Transforming healthcare through innovative management solutions.
        </div>
      </div>
      
      <!-- Quick Links Section -->
      <div class="footer-section footer-links">
        <b class="footer-section-title">Quick Links</b>
        <div class="footer-links-list">
          <div class="footer-link">Home</div>
          <div class="footer-link">Features</div>
          <div class="footer-link">Use Cases</div>
          <div class="footer-link">About Us</div>
          <div class="footer-link">Contact Us</div>
        </div>
      </div>
      
      <!-- Languages Section -->
      <div class="footer-section footer-languages">
        <b class="footer-section-title">Languages</b>
        <div class="footer-links-list">
          <div class="footer-link">English</div>
          <div class="footer-link">French</div>
          <div class="footer-link">Portuguese</div>
          <div class="footer-link">Spanish</div>
          <div class="footer-link">Arabic</div>
        </div>
      </div>
      
      <!-- Newsletter Section -->
      <div class="footer-section footer-newsletter">
        <b class="footer-section-title">Newsletter</b>
        <div class="footer-newsletter-description">
          Subscribe to our newsletter for updates
        </div>
        
        <!-- Email Input -->
        <div class="footer-email-container">
          <div class="footer-email-input-bg" />
          <input 
            type="email" 
            v-model="newsletterEmail"
            placeholder="Enter Email"
            class="footer-email-input"
          />
        </div>
        
        <!-- Subscribe Button -->
        <div class="footer-subscribe-container">
          <button 
            @click="handleNewsletterSubmit"
            class="footer-subscribe-button"
          >
            <div class="footer-subscribe-text">Subscribe</div>
          </button>
        </div>
      </div>
      
      <!-- Social Media Icons -->
      <div class="footer-social">
        <!-- Facebook -->
        <a href="#" class="footer-social-icon">
          <img src="../../assets/icons/Link → SVG-5.svg" alt="TikTok" class="w-full h-full" />
        </a>
        <!-- X (Twitter) -->
        <a href="#" class="footer-social-icon">
          <img src="../../assets/icons/Link → SVG-4.svg" alt="X (Twitter)" class="w-full h-full" />
        </a>
        <!-- YouTube -->
        <a href="#" class="footer-social-icon">
          <img src="../../assets/icons/Link → SVG-6.svg" alt="YouTube" class="w-full h-full" />
        </a>
        <!-- Instagram -->
        <a href="#" class="footer-social-icon">
          <img src="../../assets/icons/Link → SVG-2.svg" alt="Instagram" class="w-full h-full" />
        </a>
        <!-- TikTok -->
        <a href="#" class="footer-social-icon">
          <img src="../../assets/icons/Link → SVG.svg" alt="Facebook" class="w-full h-full" />
        </a>
        <!-- LinkedIn -->
        <a href="#" class="footer-social-icon">
          <img src="../../assets/icons/Link → SVG-1.svg" alt="LinkedIn" class="w-full h-full" />
        </a>
        <!-- Pinterest -->
        <a href="#" class="footer-social-icon">
          <img src="../../assets/icons/Link → SVG-3.svg" alt="Pinterest" class="w-full h-full" />
        </a>
      </div>
      
      <!-- Copyright -->
      <div class="footer-copyright">
        © 2025 iSenseHUB Health Management System. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newsletterEmail = ref('');

const handleNewsletterSubmit = () => {
  console.log('Newsletter subscription:', newsletterEmail.value);
  // Here you would typically send the email to an API
  alert('Thank you for subscribing to our newsletter!');
  newsletterEmail.value = '';
};
</script>

<style scoped>
/* Custom styles for exact pixel-perfect implementation */
.font-raleway {
  font-family: 'Raleway', sans-serif;
}

.font-manrope {
  font-family: 'Manrope', sans-serif;
}

/* Custom colors matching the design */
.text-num-15 {
  font-size: 15px;
}

.text-whitesmoke {
  color: rgba(239, 239, 239, 0.93);
}

.bg-gray-200 {
  background-color: #171717;
}

.text-gray-100 {
  color: #7a7a7a;
}

.leading-num-32 {
  line-height: 32px;
}

.h-num-50 {
  height: 50px;
}

.w-num-24_5 {
  width: 24.5px;
}

.h-num-24_5 {
  height: 24.5px;
}

/* Custom gradient for subscribe button */
[background\:linear-gradient\(90deg\,_\#3d1687\,_\#7b58be\)] {
  background: linear-gradient(90deg, #3d1687, #7b58be);
}

/* Hover effects */
.hover\:text-brand-purple:hover {
  color: #9265FF;
}

.hover\:opacity-70:hover {
  opacity: 0.7;
}

.hover\:opacity-90:hover {
  opacity: 0.9;
}

/* Transition effects */
.transition-colors {
  transition: color 0.3s ease;
}

.transition-opacity {
  transition: opacity 0.3s ease;
}

/* Input styling */
input::placeholder {
  color: #9ca3af;
}

input:focus {
  outline: none;
}

/* Footer Responsive Styles */
.footer-container {
  @apply w-full relative text-left text-num-15 text-whitesmoke font-manrope;
  height: 446px;
}

.footer-bg {
  @apply absolute inset-0 bg-gray-200;
}

.footer-content {
  @apply relative z-10;
  width: 1212px;
  height: 326px;
  margin: 60px auto 0;
  padding: 0 114px;
}

/* Mobile and tablet adjustments */
@media (max-width: 1440px) {
  .footer-content {
    width: 100%;
    max-width: 1212px;
    padding: 0 4rem;
    margin: 60px auto 0;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
    margin: 40px auto 0;
    height: auto;
    min-height: 326px;
  }
  
  .footer-container {
    height: auto;
    min-height: 446px;
  }
}

/* Desktop Layout (1024px and up) */
@media (min-width: 1024px) {
  .footer-content {
    display: grid;
    grid-template-columns: 295px 200px 200px 1fr;
    grid-template-rows: auto auto auto 1fr;
    gap: 0;
    grid-template-areas: 
      "brand links languages newsletter"
      "brand links languages newsletter"
      "brand links languages newsletter"
      "copyright copyright social social";
    align-items: start;
  }
  
  .footer-brand {
    grid-area: brand;
    position: relative;
  }
  
  .footer-links {
    grid-area: links;
    position: relative;
    margin-left: 40px;
  }
  
  .footer-languages {
    grid-area: languages;
    position: relative;
    margin-left: 40px;
  }
  
  .footer-newsletter {
    grid-area: newsletter;
    position: relative;
    margin-left: 40px;
  }
  
  .footer-copyright {
    grid-area: copyright;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  
  .footer-social {
    grid-area: social;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}


/* Brand Section */
.footer-brand {
  @apply flex flex-col;
  width: 295px;
}

.footer-logo {
  width: 295px;
  height: 90px;
}

.footer-description {
  @apply text-[18px] leading-[27px] font-raleway text-white;
  width: 286px;
  margin-top: 16px;
  margin-left: 24px;
}

/* Section Styling */
.footer-section {
  @apply flex flex-col;
  width: 200px;
}

.footer-section-title {
  @apply text-[20px] leading-num-32 font-raleway text-white;
  margin-bottom: 16px;
}

.footer-links-list {
  @apply flex flex-col;
}

.footer-link {
  @apply leading-num-32 font-medium cursor-pointer hover:text-brand-purple transition-colors;
  margin-bottom: 0;
  height: 32px;
  display: flex;
  align-items: center;
}

/* Newsletter Section */
.footer-newsletter {
  width: 281px;
}

.footer-newsletter-description {
  @apply leading-5 text-white;
  width: 281px;
  height: 38px;
  margin-bottom: 16px;
}

.footer-email-container {
  @apply relative;
  width: 253px;
  height: 50px;
  margin-bottom: 16px;
}

.footer-email-input-bg {
  @apply absolute inset-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[40px] bg-white;
}

.footer-email-input {
  @apply absolute top-[10px] left-[50%] transform -translate-x-1/2 w-[147px] bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 leading-[31px];
}

.footer-subscribe-container {
  width: 190px;
  height: 50px;
}

.footer-subscribe-button {
  @apply w-full h-num-50 rounded-[50px] [background:linear-gradient(90deg,_#3d1687,_#7b58be)] border-none cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center;
}

.footer-subscribe-text {
  @apply leading-[31.2px] font-semibold text-white;
}

/* Social Media Icons */
.footer-social {
  @apply flex;
  width: 282px;
  height: 24.5px;
  gap: 18.41px;
}

.footer-social-icon {
  @apply w-num-24_5 h-num-24_5 cursor-pointer hover:opacity-70 transition-opacity;
}

/* Copyright */
.footer-copyright {
  @apply text-[16px] leading-num-32 font-semibold text-white opacity-50;
  width: 709px;
}

/* Mobile responsive adjustments */
@media (max-width: 1023px) {
  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 1212px;
    padding: 0 1rem;
    margin: 40px auto 0;
    height: auto;
    min-height: 326px;
  }
  
  .footer-brand {
    width: 100%;
    text-align: center;
  }
  
  .footer-logo {
    width: 100%;
    max-width: 295px;
    height: 90px;
    margin: 0 auto;
  }
  
  .footer-description {
    width: 100%;
    max-width: 400px;
    margin: 16px auto 0;
    text-align: center;
  }
  
  .footer-section {
    width: 100%;
    text-align: center;
  }
  
  .footer-newsletter {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .footer-newsletter-description {
    width: 100%;
    text-align: center;
  }
  
  .footer-email-container {
    width: 100%;
    max-width: 300px;
    margin: 0 auto 16px;
  }
  
  .footer-subscribe-container {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
  
  .footer-social {
    width: 100%;
    justify-content: center;
    margin: 2rem auto 0;
  }
  
  .footer-copyright {
    width: 100%;
    text-align: center;
    margin: 2rem auto 0;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 0 0.5rem;
  }
  
  .footer-logo {
    max-width: 250px;
    height: 70px;
  }
  
  .footer-description {
    font-size: 16px;
  }
  
  .footer-section-title {
    font-size: 18px;
  }
  
  .footer-email-container {
    max-width: 250px;
  }
  
  .footer-subscribe-container {
    max-width: 180px;
  }
}
</style>