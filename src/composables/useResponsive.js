import { ref, onMounted, onUnmounted } from 'vue'

export function useResponsive() {
  const width = ref(window.innerWidth)
  const isMobile = ref(width.value < 768)

  function onResize() {
    width.value = window.innerWidth
    isMobile.value = width.value < 768
  }

  onMounted(() => window.addEventListener('resize', onResize))
  onUnmounted(() => window.removeEventListener('resize', onResize))

  return { width, isMobile }
}