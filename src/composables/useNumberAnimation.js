import { ref, onMounted, onUnmounted } from 'vue'

export function useNumberAnimation() {
  const animatedValue = ref(0)
  const isAnimating = ref(false)
  let animationId = null

  const animateNumber = (targetValue, duration = 2000, startValue = 0) => {
    if (isAnimating.value) {
      cancelAnimationFrame(animationId)
    }

    isAnimating.value = true
    const startTime = performance.now()
    const difference = targetValue - startValue

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Apply easing function for smooth deceleration
      const easedProgress = easeOutCubic(progress)
      
      animatedValue.value = Math.floor(startValue + (difference * easedProgress))
      
      if (progress < 1) {
        animationId = requestAnimationFrame(updateNumber)
      } else {
        animatedValue.value = targetValue
        isAnimating.value = false
      }
    }

    animationId = requestAnimationFrame(updateNumber)
  }

  const resetAnimation = () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    isAnimating.value = false
    animatedValue.value = 0
  }

  onUnmounted(() => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })

  return {
    animatedValue,
    isAnimating,
    animateNumber,
    resetAnimation
  }
}
