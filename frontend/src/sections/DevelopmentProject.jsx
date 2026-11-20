import { motion } from 'framer-motion'
import { useStore } from '../store/store'
import { projects } from '../data/projects'

const DevelopmentProject = () => {
  const { developmentProjectId, setActiveSection, selectedProjectId } = useStore()
  const project = projects.find((item) => item.id === developmentProjectId) || projects[1]

  const goBack = () => {
    setActiveSection(selectedProjectId ? 'caseStudy' : 'projects')
  }

  return (
    <section className="relative h-full overflow-hidden bg-[#0d0e0c] text-[#f4f1e8]" aria-label={`${project.title} development preview`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#c8ff3d]/30"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [.35, .7, .35] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-12rem] left-[-8rem] h-96 w-96 rounded-full bg-[#7467f0]/30 blur-[80px]"
      />

      <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <button onClick={goBack} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em]">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20">←</span>
          <span className="hidden sm:inline">Back</span>
        </button>
        <span className="text-[9px] font-bold uppercase tracking-[.16em] text-white/50">Project in development</span>
      </header>

      <main className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .15 }}
          className="mb-7 flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em]"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#c8ff3d] shadow-[0_0_15px_#c8ff3d]" />
          {project.category}
        </motion.div>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .25, duration: .7 }}
          className="display-font max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-black leading-[.84]"
        >
          SOMETHING<br />
          <span className="text-transparent [-webkit-text-stroke:1px_#f4f1e8]">GREAT</span> IS<br />
          COMING.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base"
        >
          {project.title} is currently being refined. Its live experience will be available soon with more polished features and interactions.
        </motion.p>
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .75 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <button onClick={goBack} className="rounded-full bg-[#c8ff3d] px-7 py-4 text-sm font-bold text-black">Back to portfolio</button>
        </motion.div>
      </main>
    </section>
  )
}

export default DevelopmentProject
