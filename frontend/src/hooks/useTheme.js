import { useState } from 'react'

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem('theme') || 'dark'
    document.documentElement.classList.toggle('dark', theme === 'dark')
    return theme === 'dark'
  })


  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', !isDark)
  }

  return { isDark, toggleTheme }
}
