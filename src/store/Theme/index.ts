import { create } from 'zustand'
export const isServer = () => typeof window === 'undefined'
import { mountStoreDevtool } from 'simple-zustand-devtools'
type Theme = 'light' | 'dark' | null

interface StoreTheme {
  theme: Theme
  isDark: () => boolean
  isLight: () => boolean
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const storeName = 'theme'

export const useTheme = create<StoreTheme>((set, get) => ({
  theme: null,
  isDark: () => get().theme === 'dark',
  isLight: () => get().theme === 'light',
  setTheme: (theme: Theme) => {
    set({ theme })
    setThemeOnLocalStorage(theme)
  },
  toggleTheme: () => {
    const theme = get().theme
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    set({ theme: newTheme })
    setThemeOnLocalStorage(newTheme)
  },
}))

export const setThemeOnLocalStorage = (theme: Theme) => {
  if (theme) localStorage.setItem(storeName, theme)
}

export const getThemeFromLocalStorage = (): Theme | null => {
  if (isServer()) return null
  return (localStorage.getItem(storeName) as Theme) ?? null
}

// if (process.env.NEXT_PUBLIC_MODE !== 'production') {
mountStoreDevtool('useTheme', useTheme)
// }
