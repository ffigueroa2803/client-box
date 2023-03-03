import { useState, useEffect } from 'react'

export const useDarkSide = () => {
  const [theme, setTheme] = useState('light')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      root.classList.remove(colorTheme)
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, colorTheme])

  return { colorTheme, setTheme }
}
