import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../store/store'

const Hero = () => {
  const ref = useRef(null)
  const setActiveSection = useStore((state) => state.setActiveSection)

  return (
    <section id="hero" ref={ref} className="portfolio-section relative h-full overflow-y-auto pt-4">
      <div className="absolute inset-0 editorial-grid opacity-40" />
      <motion.div className="relative z-10 mx-auto flex min-h-[82svh] max-w-[1480px] flex-col justify-between px-5 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between pt-4">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--lime)] shadow-[0_0_18px_var(--lime)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em]">Available for work</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} className="hidden text-right text-[11px] font-semibold uppercase leading-relaxed tracking-[0.18em] sm:block">
            Full-stack developer<br />India / Remote
          </motion.div>
        </div>

        <div className="py-10 lg:py-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .7 }} className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--violet)]">
            Digital designer & developer
          </motion.p>
          <h1 className="display-font text-[clamp(4.1rem,11.2vw,10.8rem)] font-black leading-[0.76]">
            <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }} className="block">JAGRITI</motion.span>
            <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .12, duration: .9, ease: [0.16, 1, 0.3, 1] }} className="block text-right outline-text">KUSHWAHA</motion.span>
          </h1>
        </div>

        <div className="grid items-end gap-8 border-t border-[var(--line)] pb-8 pt-6 md:grid-cols-[1fr_auto]">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="max-w-xl text-lg leading-relaxed sm:text-xl">
            I craft expressive digital products where <strong>strategy, motion and engineering</strong> become one seamless experience.
          </motion.p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setActiveSection('projects')} className="rounded-full bg-[var(--ink)] px-7 py-4 text-sm font-bold text-[var(--paper)] transition-transform hover:-translate-y-1">Explore work <span className="ml-3 text-[var(--lime)]">↘</span></button>
            <button onClick={() => setActiveSection('contact')} className="pill px-7 py-4 text-sm font-bold transition-transform hover:-translate-y-1">Let&apos;s talk</button>
            <a href="/Jagriti-Kushwaha-Resume.pdf" target="_blank" rel="noopener noreferrer" className="pill px-7 py-4 text-sm font-bold transition-transform hover:-translate-y-1">View resume ↗</a>
          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
