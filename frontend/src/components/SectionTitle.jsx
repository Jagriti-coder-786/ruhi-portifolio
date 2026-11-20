import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionTitle = ({ children, subtitle }) => {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      className="mb-16"
    >
      <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-cyan-700/60 dark:text-cyan-300/60">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
