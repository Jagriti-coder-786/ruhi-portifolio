import { Suspense, lazy, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from './store/store'
import Hero from './sections/Hero'
import Navigation from './components/Navigation'
const Skills = lazy(() => import('./sections/Skills'))
const Education = lazy(() => import('./sections/Education'))
const Experience = lazy(() => import('./sections/Experience'))
const Projects = lazy(() => import('./sections/Projects'))
const Contact = lazy(() => import('./sections/Contact'))
const About = lazy(() => import('./sections/About'))
const CaseStudy = lazy(() => import('./sections/CaseStudy'))
const DevelopmentProject = lazy(() => import('./sections/DevelopmentProject'))
import PremiumCursor from './components/PremiumCursor'

function App() {
  const { theme, activeSection } = useStore()

  useEffect(() => {
    // Apply theme to HTML element
    const html = document.documentElement
    if (theme === 'dark') {
      html.classList.remove('light')
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }
  }, [theme])

  const sections = { hero: <Hero />, about: <About />, skills: <Skills />, education: <Education />, experience: <Experience />, projects: <Projects />, contact: <Contact />, caseStudy: <CaseStudy />, developmentProject: <DevelopmentProject /> }

  return (
    <div className="h-[100svh] overflow-hidden transition-colors duration-300">
      <PremiumCursor />
      <div className="premium-noise" />
      <Navigation />

      <main className="h-[100svh] pt-[76px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="h-full overflow-hidden"
          >
            <Suspense fallback={<div className="h-full" />}>
              {sections[activeSection]}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
