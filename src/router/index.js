
import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const AboutPage = () => import('../views/AboutPage.vue')
const ContactPage = () => import('../views/ContactPage.vue')
const PricingPage = () => import('../views/PricingPage.vue')

// Optional: if present in your repo
// const FigmaHome = () => import('../views/FigmaHome.vue')
const UseCasePage = () => import('../views/UseCase.vue')
const WhoWeServePage = () => import('../views/WhoWeServe.vue')
const FeaturePage = () => import('../views/FeaturePage.vue')

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/pricing', name: 'pricing', component: PricingPage },
  // { path: '/figma', name: 'figma', component: FigmaHome },
  { path: '/use-case', name: 'use-case', component: UseCasePage },
  { path: '/who-we-serve', name: 'who-we-serve', component: WhoWeServePage },
  { path: '/features', name: 'features', component: FeaturePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router