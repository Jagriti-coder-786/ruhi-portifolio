import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const GlowParticles = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating particles
    const particleCount = 15
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 rounded-full bg-cyan-400/50 blur-sm'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      fragment.appendChild(particle)

      // Animate each particle
      gsap.to(particle, {
        duration: gsap.utils.random(3, 8),
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-50, 50),
        opacity: gsap.utils.random(0.2, 0.8),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }

    container.appendChild(fragment)

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  )
}

export default GlowParticles
