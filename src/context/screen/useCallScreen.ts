import { CallScreenContext } from './ScreenContext'

export const useCallScreen = () => {
  const { state, dispatch } = CallScreenContext()
  const ChangeShowSidebar = (value: boolean) =>
    dispatch({ type: 'ChangeShowSidebar', payload: value })

  const ChangeLanguaje = (value: string) =>
    dispatch({ type: 'ChangeLanguaje', payload: value })

  const ChangeIsDark = (value: boolean) =>
    dispatch({ type: 'ChangeIsDark', payload: value })

  return {
    state,
    ChangeIsDark,
    ChangeShowSidebar,
    ChangeLanguaje,
  }
}
