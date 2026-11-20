import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../store/store'
import { projects } from '../data/projects'

const CaseStudy = () => {
  const { selectedProjectId, setActiveSection, theme, toggleTheme } = useStore()
  const openDevelopmentProject = useStore((state) => state.openDevelopmentProject)
  const project = projects.find((item) => item.id === selectedProjectId) || projects[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project.id])

  return (
    <section className="portfolio-section h-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[var(--paper)] text-[var(--ink)]" aria-label={`${project.title} full case study`}>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--line)] bg-[var(--paper)]/95 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
        <button onClick={() => setActiveSection('projects')} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em]">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)]">←</span>
          <span className="hidden sm:inline">Back to projects</span>
        </button>
        <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--ink)] opacity-70">Case study / 0{project.id}</span>
        <button onClick={toggleTheme} className="pill grid h-9 w-9 place-items-center text-xs" aria-label="Toggle color theme">{theme === 'dark' ? '☀' : '☾'}</button>
      </header>

      <main className="mx-auto max-w-[1480px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
          <p className="section-kicker mb-5">{project.category}</p>
          <h1 className="display-font text-[clamp(3.2rem,8vw,8rem)] font-black leading-[.82]">{project.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--ink)] opacity-85 sm:text-xl">{project.description}</p>
        </motion.div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] bg-[var(--line)] md:grid-cols-3">
          {[['Challenge', project.challenge], ['Approach', project.approach], ['Outcome', project.outcome]].map(([title, copy]) => (
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} key={title} className="bg-[var(--paper)] p-6 lg:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--violet)]">{title}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--ink)] opacity-85 sm:text-base">{copy}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_.75fr]">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.16em]">Key capabilities</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <div key={feature} className="flex gap-4 rounded-2xl border border-[var(--line)] p-5">
                  <span className="text-[10px] font-bold text-[var(--ink)] opacity-70">0{index + 1}</span>
                  <span className="text-sm leading-6 text-[var(--ink)] opacity-90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <h2 className="text-xs font-bold uppercase tracking-[.16em]">Technology</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => <span key={tech} className="pill px-4 py-2 text-xs font-bold">{tech}</span>)}
            </div>
            {project.liveStatus === 'live' ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-8 flex w-full items-center justify-between rounded-full bg-[var(--lime)] px-6 py-4 text-sm font-bold text-black shadow-[0_10px_30px_rgba(200,255,61,.16)]"><span>View live project</span><span>↗</span></a>
            ) : (
              <button onClick={() => openDevelopmentProject(project.id)} className="mt-8 flex w-full items-center justify-between rounded-full bg-[var(--lime)] px-6 py-4 text-sm font-bold text-black shadow-[0_10px_30px_rgba(200,255,61,.16)]"><span>Live preview</span><span>↗</span></button>
            )}
            <a href="/Jagriti-Kushwaha-Resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-between rounded-full border border-[var(--line)] px-6 py-4 text-sm font-bold"><span>View résumé</span><span>↗</span></a>
          </aside>
        </div>
      </main>
    </section>
  )
}

export default CaseStudy
