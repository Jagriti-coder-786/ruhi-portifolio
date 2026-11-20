import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-120px' })
  const groups = [
    ['01', 'Languages', 'JavaScript, TypeScript, Python, Java, C, C++, SQL, HTML, CSS'],
    ['02', 'Interface', 'React, Next.js, Vite, Tailwind CSS, Framer Motion, GSAP'],
    ['03', 'Engineering', 'Node.js, Express.js, Socket.io, Prisma, MongoDB Atlas, PostgreSQL'],
    ['04', 'Cloud & Tools', 'Git, GitHub, Docker, AWS S3, Mongoose, Axios, Recharts, PDF.js'],
  ]

  return (
    <section id="skills" ref={ref} className="portfolio-section relative h-full overflow-y-auto px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px] pb-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}}>
          <p className="section-kicker mb-4 lg:mb-6">Capabilities</p>
          <h2 className="display-font text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[.88]">Built for<br /><span className="outline-text">what&apos;s next.</span></h2>
        </motion.div>

        <div className="mt-8 border-t border-[var(--line)] lg:mt-12">
          {groups.map(([number, title, items], index) => (
            <motion.div key={title} initial={{ opacity: 0, x: -25 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ delay: index * .08 }} className="group grid gap-5 border-b border-[var(--line)] py-8 md:grid-cols-[80px_260px_1fr] md:items-center lg:py-10">
              <span className="text-xs font-bold text-[var(--ink)] opacity-80">/{number}</span>
              <h3 className="text-3xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-3 lg:text-5xl">{title}</h3>
              <p className="max-w-xl text-base leading-relaxed text-[var(--ink)] opacity-90 lg:justify-self-end">{items}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[['AI / APIs', 'Google Gemini, Groq, Puter.js, OpenRouter, Pollinations.ai, Wandbox'], ['Databases', 'MongoDB Atlas, PostgreSQL, pgvector, Prisma, Mongoose'], ['Delivery', 'Git, GitHub, Docker, Vercel, Render, VS Code']].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-[var(--line)] p-5"><h3 className="text-sm font-bold uppercase tracking-[.12em] text-[var(--violet)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--ink)] opacity-90">{copy}</p></div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-[var(--line)] md:grid-cols-4">
          {[['3', 'Core Projects'], ['2026', 'Latest Work'], ['7.2', 'CGPA'], ['Cyber', 'Specialization']].map(([value, label]) => (
            <div key={label} className="bg-[var(--paper)] px-5 py-8 text-center"><strong className="display-font block text-4xl lg:text-6xl">{value}</strong><span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink)] opacity-70">{label}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
