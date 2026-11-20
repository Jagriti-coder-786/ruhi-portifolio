import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '../store/store'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme, activeSection, setActiveSection } = useStore()
  const navItems = [
    ['Home', 'hero'], ['About', 'about'], ['Skills', 'skills'],
    ['Education', 'education'], ['Experience', 'experience'],
    ['Projects', 'projects'], ['Contact', 'contact'],
  ]

  const goTo = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
  }

  if (activeSection === 'caseStudy') return null

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-3 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-[1480px] items-center justify-between rounded-full border border-[var(--line)] bg-[var(--paper)]/85 px-3 py-2 backdrop-blur-xl sm:px-4">
        <button onClick={() => goTo('hero')} className="flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] text-sm font-black text-[var(--paper)]">JK</span>
          <span className="hidden text-xs font-bold uppercase tracking-[0.16em] xl:block">Jagriti / Student Developer</span>
        </button>

        <div className="hidden items-center gap-5 text-[10px] font-bold uppercase tracking-[0.12em] lg:flex xl:gap-7">
          {navItems.map(([label, id]) => (
            <button key={`${label}-${id}`} onClick={() => goTo(id)} className={`relative py-2 transition-opacity ${activeSection === id ? 'opacity-100' : 'text-[var(--ink)] opacity-70 hover:opacity-100'}`}>
              {label}
              {activeSection === id && <motion.span layoutId="nav-dot" className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--lime)]" />}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="/Jagriti-Kushwaha-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden rounded-full border border-[var(--line)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] sm:block">Resume ↗</a>
          <button onClick={toggleTheme} className="pill grid h-9 w-9 place-items-center text-xs" aria-label="Toggle color theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button onClick={() => setMenuOpen((open) => !open)} className="pill h-9 px-4 text-[10px] font-bold uppercase tracking-[0.12em] lg:hidden" aria-expanded={menuOpen}>
            Menu
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 grid max-w-[1480px] grid-cols-2 gap-2 rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-3 shadow-2xl lg:hidden">
            {navItems.map(([label, id]) => (
              <button key={`menu-${label}-${id}`} onClick={() => goTo(id)} className={`rounded-full px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.1em] ${activeSection === id ? 'bg-[var(--ink)] text-[var(--paper)]' : 'border border-[var(--line)]'}`}>
                {label}
              </button>
            ))}
            <a href="/Jagriti-Kushwaha-Resume.pdf" target="_blank" rel="noopener noreferrer" className="col-span-2 rounded-full border border-[var(--line)] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.1em]">View resume ↗</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation
