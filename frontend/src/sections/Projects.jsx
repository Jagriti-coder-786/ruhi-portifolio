import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useStore } from '../store/store'
import { projects } from '../data/projects'

const Projects = () => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-100px' })
  const openCaseStudy = useStore((state) => state.openCaseStudy)
  const openDevelopmentProject = useStore((state) => state.openDevelopmentProject)

  return (
    <section id="projects" ref={ref} className="portfolio-section h-full overflow-y-auto px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-8 flex items-end justify-between border-b border-[var(--line)] pb-5">
          <div><p className="section-kicker mb-7">Selected work</p><h2 className="display-font text-[clamp(3.2rem,8vw,7.5rem)] font-black leading-[.88]">Case studies<span className="text-[var(--lime)]">.</span></h2></div>
          <span className="hidden text-xs font-bold uppercase tracking-[.16em] text-[var(--ink)] opacity-80 md:block">2026</span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 40, scale: .97 }} animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ delay: index * .1, duration: .65, ease: [0.22,1,0.36,1] }} className="group hover-lift border border-[var(--line)] bg-[var(--paper)] p-3 rounded-[1.5rem] hover:border-[var(--violet)]">
              <div className="relative isolate flex aspect-[16/7] items-center justify-center overflow-hidden rounded-[1rem] bg-[#11120f] [filter:none]">
                <div className="absolute inset-0 opacity-20 editorial-grid" />
                <span className="relative block font-mono text-[clamp(1.8rem,4vw,3.5rem)] font-black tracking-[.08em] text-[#c8ff3d] [filter:none] [text-rendering:geometricPrecision] transition-transform duration-500 group-hover:scale-[1.03]">{project.thumbnail}</span>
                <span className="absolute right-5 top-5 rounded-full bg-[var(--lime)] px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-black">{project.category}</span>
              </div>
              <div className="px-3 pb-4 pt-6">
                <h3 className="mb-4 text-2xl font-bold tracking-tight lg:text-3xl">{project.title}</h3>
                <p className="mb-5 max-w-md text-sm leading-6 text-[var(--ink)] opacity-85">{project.description}</p>
                <button onClick={(event) => { event.stopPropagation(); openCaseStudy(project.id) }} className="mb-4 flex items-center gap-3 text-xs font-bold text-[var(--violet)] transition-transform hover:translate-x-1"><span className="border-b border-[var(--violet)] pb-1">Open full case study</span><span className="text-base">↗</span></button>
                <div className="mb-4 flex flex-wrap gap-2">{project.techStack.slice(0, 3).map((tech) => <span key={tech} className="pill px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.08em]">{tech}</span>)}</div>
                {project.liveStatus === 'live' ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-full bg-[var(--lime)] px-4 py-2.5 text-xs font-bold text-black shadow-[0_8px_24px_rgba(200,255,61,.12)] transition-transform hover:-translate-y-0.5"><span>View live project</span><span>↗</span></a>
                ) : (
                  <button onClick={(event) => { event.stopPropagation(); openDevelopmentProject(project.id) }} className="inline-flex items-center gap-2 rounded-full bg-[var(--lime)] px-4 py-2.5 text-xs font-bold text-black shadow-[0_8px_24px_rgba(200,255,61,.12)] transition-transform hover:-translate-y-0.5"><span>Live preview</span><span>↗</span></button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
