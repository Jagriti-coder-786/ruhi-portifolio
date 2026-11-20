import { useEffect, useRef } from 'react'

const PremiumCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let frameId = 0

    const render = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ring) ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`

      if (Math.abs(mouseX - ringX) + Math.abs(mouseY - ringY) > 0.25) {
        frameId = requestAnimationFrame(render)
      } else {
        frameId = 0
      }
    }

    const move = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      if (dot) dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`
      if (!frameId) frameId = requestAnimationFrame(render)
    }

    const enter = () => {
      if (ring) {
        ring.style.width = '58px'
        ring.style.height = '58px'
      }
    }
    const leave = () => {
      if (ring) {
        ring.style.width = '36px'
        ring.style.height = '36px'
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    const interactives = document.querySelectorAll('a, button, input, textarea')
    interactives.forEach((item) => {
      item.addEventListener('mouseenter', enter)
      item.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      if (frameId) cancelAnimationFrame(frameId)
      interactives.forEach((item) => {
        item.removeEventListener('mouseenter', enter)
        item.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return <><div ref={dotRef} className="cursor-dot" /><div ref={ringRef} className="cursor-ring" /></>
}

export default PremiumCursor
