import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from '@Store/Theme'

export const ToogleDarkMode = () => {
  const { isDark, toggleTheme } = useTheme()
  // const { colorTheme, setTheme } = useDarkSide()
  // const [darkSide, setDarkSide] = useState(
  //   colorTheme === 'light' ? true : false,
  // )

  // const toggleDarkMode = (checked: boolean) => {
  //   setTheme(colorTheme)
  //   setDarkSide(checked)
  // }

  return (
    <DarkModeSwitch
      className="w-4 h-4"
      checked={isDark()}
      onChange={() => {
        toggleTheme()
      }}
      size={30}
    />
  )
}
