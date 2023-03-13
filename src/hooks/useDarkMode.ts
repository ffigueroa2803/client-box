import { getThemeFromLocalStorage, useTheme } from '@Store/Theme'
import { useEffect } from 'react'
export const useLoadTheme = () => {
  useEffect(() => {
    const theme = getThemeFromLocalStorage()
    if (theme) {
      useTheme.setState({ theme })
      document.body.className = theme
    }
  }, [])

  useEffect(() => {
    const removeSusc = useTheme.subscribe(({ theme }) => {
      if (theme) document.body.className = theme
    })

    return () => {
      removeSusc()
    }
  }, [])
}
