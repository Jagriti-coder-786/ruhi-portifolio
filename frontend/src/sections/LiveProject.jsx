import { motion } from 'framer-motion'
import { useStore } from '../store/store'

const LiveProject = () => {
  const {
    liveProjectUrl,
    liveProjectTitle,
    setActiveSection,
    selectedProjectId,
  } = useStore()

  const goBack = () => {
    setActiveSection(selectedProjectId ? 'caseStudy' : 'projects')
  }

  return (
    <section className="h-full bg-[var(--paper)] text-[var(--ink)]" aria-label={`${liveProjectTitle || 'Live project'} preview`}>
      <header className="flex h-[76px] items-center justify-between border-b border-[var(--line)] bg-[var(--paper)] px-4 sm:px-8 lg:px-12">
        <button
          onClick={goBack}
          className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)]">←</span>
          <span className="hidden sm:inline">Back</span>
        </button>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-[9px] font-bold uppercase tracking-[.16em] opacity-60">Live project</p>
          <h1 className="mt-1 text-sm font-bold sm:text-base">{liveProjectTitle || 'Cloud File Storage'}</h1>
        </motion.div>
        {liveProjectUrl ? (
          <a
            href={liveProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 place-items-center rounded-full bg-[var(--lime)] px-4 text-[10px] font-bold uppercase tracking-[.1em] text-black"
          >
            Open ↗
          </a>
        ) : <span className="w-[58px]" />}
      </header>

      <motion.div
        initial={{ opacity: 0, scale: .995 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .45 }}
        className="h-[calc(100%-76px)] w-full bg-white"
      >
        {liveProjectUrl ? (
          <iframe
            title={`${liveProjectTitle || 'Live project'} website`}
            src={liveProjectUrl}
            className="h-full w-full border-0"
            allow="fullscreen"
          />
        ) : (
          <div className="grid h-full place-items-center px-6 text-center">
            <p className="text-sm opacity-70">This live project URL is unavailable.</p>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default LiveProject
