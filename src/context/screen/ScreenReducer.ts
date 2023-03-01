import { ScreenType } from './ScreenContext'
export type ActionReducer =
  | { type: 'ChangeIsDark'; payload: boolean }
  | { type: 'ChangeLanguaje'; payload: string }
  | { type: 'ChangeShowSidebar'; payload: boolean }

export const ScreenReducer = (
  state: ScreenType,
  { payload, type }: ActionReducer,
) => {
  switch (type) {
    case 'ChangeIsDark':
      return { ...state, isDark: payload }
      break
    case 'ChangeLanguaje':
      return { ...state, languaje: payload }
      break
    case 'ChangeShowSidebar':
      return { ...state, showSidebar: payload }
    default:
      return state
  }
}
