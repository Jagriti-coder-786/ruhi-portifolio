import { motion } from 'framer-motion'
import { useStore } from '../store/store'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-40 glass rounded-full p-3 backdrop-blur-lg hover:shadow-neon-cyan transition-smooth"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {theme === 'dark' ? '☀️' : '🌙'}
      </div>
    </motion.button>
  )
}

export default ThemeToggle
