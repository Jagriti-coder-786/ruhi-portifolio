import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Experience = () => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-100px' })
  const items = [
    ['June 2026 — July 2026', 'Cloud Computing Intern', 'BIT Mesra · ISVE', 'Built a secure MERN cloud file-storage platform using AWS S3 and MongoDB Atlas, with JWT authentication, RBAC, protected APIs, storage quotas and secure sharing.'],
  ]

  return (
    <section id="experience" ref={ref} className="portfolio-section h-full overflow-y-auto px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <p className="section-kicker mb-8">Experience</p>
        <h2 className="display-font mb-16 text-[clamp(3.2rem,7vw,7rem)] font-black leading-[.9]">Selected path.</h2>
        <div className="border-t border-[var(--line)]">
          {items.map(([period, role, company, description], index) => (
            <motion.article key={role} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * .1 }} className="hover-lift grid gap-5 border-b border-[var(--line)] py-9 md:grid-cols-[180px_1fr_1fr] md:items-start lg:py-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] opacity-70">{period}</span>
              <div><h3 className="text-2xl font-bold tracking-tight lg:text-4xl">{role}</h3><p className="mt-2 text-sm font-bold text-[var(--violet)]">{company}</p></div>
              <p className="max-w-md text-sm leading-7 text-[var(--ink)] opacity-90 lg:justify-self-end">{description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[['01', 'Security first', 'Authentication, RBAC, validation and secure sharing'], ['02', 'Cloud minded', 'AWS S3 architecture, metadata separation and storage analytics'], ['03', 'Product driven', 'Responsive React interface and operational dashboards']].map(([number, title, copy]) => (
            <div key={number} className="rounded-2xl border border-[var(--line)] p-5"><span className="text-[10px] font-bold text-[var(--ink)] opacity-80">/{number}</span><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--ink)] opacity-90">{copy}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
