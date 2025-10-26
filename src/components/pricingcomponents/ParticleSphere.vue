<template>
  <canvas
    ref="canvasRef"
    class="absolute inset-0 w-full h-full"
    :style="{ opacity: 0.9 }"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  z: number
  theta: number
  phi: number
  latIndex: number
  lonIndex: number
}

interface ProjectedParticle {
  x: number
  y: number
  z: number
  scale: number
  latIndex: number
  lonIndex: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number | null = null
let needsResize = false
let currentDPR = 1
let currentRadius = 200
let currentWidth = 0
let currentHeight = 0

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  let ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  let particles: Particle[] = []
  let latitudeLines = 24
  let particlesPerLine = 40

  // Function to determine particle density based on screen size
  const getParticleDensity = () => {
    // Use actual canvas dimensions for better accuracy
    const effectiveWidth = currentWidth || window.innerWidth
    const effectiveHeight = currentHeight || window.innerHeight
    const effectiveMin = Math.min(effectiveWidth, effectiveHeight)
    
    if (effectiveMin < 375) {
      // Very small phones - minimal for performance
      latitudeLines = 10
      particlesPerLine = 16
    } else if (effectiveMin < 480) {
      // Small mobile phones
      latitudeLines = 12
      particlesPerLine = 18
    } else if (effectiveMin < 768) {
      // Large phones / small tablets
      latitudeLines = 16
      particlesPerLine = 24
    } else if (effectiveMin < 1024) {
      // Tablets
      latitudeLines = 20
      particlesPerLine = 32
    } else if (effectiveMin < 1440) {
      // Standard desktop
      latitudeLines = 24
      particlesPerLine = 40
    } else if (effectiveMin < 2560) {
      // Large screens / 4K
      latitudeLines = 28
      particlesPerLine = 48
    } else {
      // Ultra-large screens
      latitudeLines = 32
      particlesPerLine = 56
    }
  }

  // Function to calculate responsive radius
  const updateRadius = () => {
    // Use canvas dimensions for accurate radius calculation
    const effectiveWidth = currentWidth || window.innerWidth
    const effectiveHeight = currentHeight || window.innerHeight
    const effectiveMin = Math.min(effectiveWidth, effectiveHeight)
    
    // Make radius much more conservative to ensure it fits within viewport and is centered
    if (effectiveMin < 375) {
      // Very small screens - very tight radius
      currentRadius = effectiveMin * 0.24
    } else if (effectiveMin < 480) {
      // Small mobile - tight radius
      currentRadius = effectiveMin * 0.28
    } else if (effectiveMin < 768) {
      // Large phones / tablets
      currentRadius = effectiveMin * 0.32
    } else if (effectiveMin < 1024) {
      // Tablets
      currentRadius = effectiveMin * 0.30
    } else if (effectiveMin < 1440) {
      // Standard desktop
      currentRadius = effectiveMin * 0.28
    } else if (effectiveMin < 2560) {
      // Large screens / 4K
      currentRadius = effectiveMin * 0.26
    } else {
      // Ultra-large screens - keep it reasonable
      currentRadius = effectiveMin * 0.24
    }
    
    // Ensure radius never exceeds 32% of smallest dimension for safety
    currentRadius = Math.min(currentRadius, effectiveMin * 0.32)
  }

  // Function to create/regenerate particles
  const createParticles = () => {
    particles = []
    getParticleDensity()
    
    for (let i = 0; i < latitudeLines; i++) {
      const phi = (Math.PI / (latitudeLines - 1)) * i

      for (let j = 0; j < particlesPerLine; j++) {
        const theta = (Math.PI * 2 / particlesPerLine) * j

        const x = currentRadius * Math.sin(phi) * Math.cos(theta)
        const y = currentRadius * Math.sin(phi) * Math.sin(theta)
        const z = currentRadius * Math.cos(phi)

        particles.push({ x, y, z, theta, phi, latIndex: i, lonIndex: j })
      }
    }
  }

  // Function to properly set canvas size with high DPI support
  const setCanvasSize = () => {
    if (!canvas) return
    
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    
    // Use viewport dimensions as fallback for mobile
    let width = rect.width || window.innerWidth
    let height = rect.height || window.innerHeight
    
    // Fallback to parent dimensions if still invalid
    if (width === 0 || height === 0) {
      const parent = canvas.parentElement
      if (parent) {
        const parentRect = parent.getBoundingClientRect()
        width = width || parentRect.width || window.innerWidth
        height = height || parentRect.height || window.innerHeight
      }
    }
    
    // Only resize if dimensions actually changed significantly
    if (Math.abs(width - currentWidth) > 1 || Math.abs(height - currentHeight) > 1 || dpr !== currentDPR) {
      currentWidth = width
      currentHeight = height
      currentDPR = dpr

      canvas.width = width * dpr
      canvas.height = height * dpr

      // Reset context after resizing canvas
      ctx = canvas.getContext('2d', { alpha: true })
      if (ctx) {
        ctx.scale(dpr, dpr)
      }

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      updateRadius()
      createParticles()
    }
  }

  // Initial setup with multiple retries for mobile devices
  const initializeCanvas = () => {
    setCanvasSize()
    
    // Retry if dimensions are still 0 (common on mobile)
    if (currentWidth === 0 || currentHeight === 0) {
      setTimeout(() => {
        if (canvas) {
          setCanvasSize()
          
          // One more retry if still 0
          if (currentWidth === 0 || currentHeight === 0) {
            setTimeout(() => {
              if (canvas) {
                setCanvasSize()
              }
            }, 100)
          }
        }
      }, 50)
    }
  }

  // Initialize canvas
  initializeCanvas()

  // Resize handler with debouncing
  let resizeTimeout: ReturnType<typeof setTimeout>
  const resizeHandler = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      needsResize = true
    }, 150)
  }

  window.addEventListener('resize', resizeHandler)
  
  // Handle orientation changes
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      needsResize = true
    }, 200)
  })
  
  // Use ResizeObserver for more reliable size detection on mobile
  let resizeObserver: ResizeObserver | null = null
  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => {
      needsResize = true
    })
    resizeObserver.observe(canvas)
  }

  let rotation = 0
  let pulse = 0

  const animate = () => {
    // Check if resize is needed
    if (needsResize) {
      setCanvasSize()
      needsResize = false
    }

    if (!ctx || !canvas) return
    
    // Ensure we have valid dimensions before rendering
    if (currentWidth === 0 || currentHeight === 0) {
      animationId = requestAnimationFrame(animate)
      return
    }

    // Skip rendering if no particles yet (optimization)
    if (particles.length === 0) {
      animationId = requestAnimationFrame(animate)
      return
    }

    ctx.clearRect(0, 0, currentWidth, currentHeight)

    // Adaptive rotation speed based on screen size for better performance
    const rotationSpeed = currentWidth < 768 ? 0.003 : 0.004
    rotation += rotationSpeed
    pulse += 0.02

    const centerX = currentWidth / 2
    const centerY = currentHeight / 2

    const projectedParticles: ProjectedParticle[] = particles.map(particle => {
      const tiltAngle = Math.PI / 2
      const tiltedY = particle.y * Math.cos(tiltAngle) - particle.z * Math.sin(tiltAngle)
      const tiltedZ = particle.y * Math.sin(tiltAngle) + particle.z * Math.cos(tiltAngle)

      const rotatedX = particle.x * Math.cos(rotation) - tiltedZ * Math.sin(rotation)
      const rotatedZ = particle.x * Math.sin(rotation) + tiltedZ * Math.cos(rotation)

      const perspective = 800
      const scale = perspective / (perspective + rotatedZ)
      const x2d = rotatedX * scale + centerX
      const y2d = tiltedY * scale + centerY

      return {
        x: x2d,
        y: y2d,
        z: rotatedZ,
        scale,
        latIndex: particle.latIndex,
        lonIndex: particle.lonIndex
      }
    })

    const sortedParticles = [...projectedParticles].sort((a, b) => a.z - b.z)

    ctx.lineWidth = 0.8
    ctx.lineCap = 'round'

    const getParticle = (lat: number, lon: number): ProjectedParticle | undefined => {
      const index = lat * particlesPerLine + (lon % particlesPerLine)
      return projectedParticles[index]
    }

    for (let i = 0; i < latitudeLines; i++) {
      for (let j = 0; j < particlesPerLine; j++) {
        const current = getParticle(i, j)
        if (!current) continue

        const nextLon = getParticle(i, j + 1)
        if (nextLon) {
          const avgZ = (current.z + nextLon.z) / 2
          const depth = (avgZ + currentRadius) / (currentRadius * 2)
          const opacity = Math.max(0.2, Math.min(0.6, depth))

          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
          ctx.beginPath()
          ctx.moveTo(current.x, current.y)
          ctx.lineTo(nextLon.x, nextLon.y)
          ctx.stroke()
        }

        if (i < latitudeLines - 1) {
          const nextLat = getParticle(i + 1, j)
          if (nextLat) {
            const avgZ = (current.z + nextLat.z) / 2
            const depth = (avgZ + currentRadius) / (currentRadius * 2)
            const opacity = Math.max(0.2, Math.min(0.6, depth))

            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(current.x, current.y)
            ctx.lineTo(nextLat.x, nextLat.y)
            ctx.stroke()
          }
        }
      }
    }

    const pulseFactor = 1 + Math.sin(pulse) * 0.08
    const baseParticleSize = currentRadius * 0.015

    sortedParticles.forEach(particle => {
      const particleSize = baseParticleSize * particle.scale * pulseFactor
      const depth = (particle.z + currentRadius) / (currentRadius * 2)
      const depthOpacity = Math.max(0.4, Math.min(1, depth))

      const coreGradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particleSize
      )

      coreGradient.addColorStop(0, `rgba(240, 230, 255, ${depthOpacity})`)
      coreGradient.addColorStop(0.5, `rgba(196, 181, 253, ${depthOpacity * 0.85})`)
      coreGradient.addColorStop(1, `rgba(139, 92, 246, 0)`)

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2)
      ctx.fillStyle = coreGradient
      ctx.fill()

      const glowGradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particleSize * 2.2
      )

      glowGradient.addColorStop(0, `rgba(196, 181, 253, ${depthOpacity * 0.4})`)
      glowGradient.addColorStop(0.6, `rgba(139, 92, 246, ${depthOpacity * 0.2})`)
      glowGradient.addColorStop(1, 'rgba(109, 40, 217, 0)')

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particleSize * 2.2, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()
    })

    animationId = requestAnimationFrame(animate)
  }

  // Start animation immediately
  requestAnimationFrame(animate)

  onUnmounted(() => {
    clearTimeout(resizeTimeout)
    window.removeEventListener('resize', resizeHandler)
    window.removeEventListener('orientationchange', resizeHandler)
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    if (animationId !== null) {
      cancelAnimationFrame(animationId)
    }
  })
})
</script>

<style scoped>
canvas {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  pointer-events: none;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
