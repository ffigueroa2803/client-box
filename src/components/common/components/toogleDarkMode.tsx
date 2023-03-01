import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useDarkSide } from '@Hooks/useDarkMode'

export const ToogleDarkMode = () => {
  const { colorTheme, setTheme } = useDarkSide()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false,
  )

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <DarkModeSwitch
      className="w-4 h-4"
      checked={darkSide}
      onChange={toggleDarkMode}
      size={30}
    />
  )
}
