import { AnimatePresence, motion } from 'framer-motion'

const DevelopmentOverlay = ({ project, open, onClose, onBack }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] overflow-hidden bg-[#0d0e0c] text-[#f4f1e8]"
      >
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#c8ff3d]/30" />
        <motion.div animate={{ scale: [1, 1.12, 1], opacity: [.35, .7, .35] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[-12rem] left-[-8rem] h-96 w-96 rounded-full bg-[#7467f0]/30 blur-[80px]" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .15 }} className="mb-8 flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em]"><span className="h-2 w-2 animate-pulse rounded-full bg-[#c8ff3d] shadow-[0_0_15px_#c8ff3d]" />Project in development</motion.div>
          <motion.h2 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .25, duration: .7 }} className="display-font max-w-4xl text-[clamp(3.5rem,9vw,8rem)] font-black leading-[.84]">SOMETHING<br /><span className="text-transparent [-webkit-text-stroke:1px_#f4f1e8]">GREAT</span> IS<br />COMING.</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">{project?.title} is currently being refined. Its live experience will be available soon—new features and interactions are actively being crafted.</motion.p>
          <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .75 }} className="mt-9 flex flex-wrap justify-center gap-3"><button onClick={onBack} className="rounded-full bg-[#c8ff3d] px-7 py-4 text-sm font-bold text-black">Back to portfolio</button><button onClick={onClose} className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold">Close project</button></motion.div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[.24em] text-white/30">Building · Testing · Refining</div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default DevelopmentOverlay
