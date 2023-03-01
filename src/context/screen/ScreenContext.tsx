/* eslint-disable react-hooks/rules-of-hooks */
import { LANGUAJES } from '@Utils/etc'
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react'
import { ActionReducer, ScreenReducer } from './ScreenReducer'

export interface ScreenType {
  isDark: boolean
  languaje: string
  showSidebar: boolean
}

export const InitialStateScreen: ScreenType = {
  isDark: false,
  languaje: LANGUAJES.SPANISH,
  showSidebar: false,
}

interface Iprops {
  children: ReactNode
}

export interface IContext {
  state: ScreenType
  dispatch: (payload: ActionReducer) => void
}

export const ScreenContext = createContext<IContext | {}>({
  state: InitialStateScreen,
  dispatch: ScreenReducer,
})

export const ScreenProvider = ({ children }: Iprops) => {
  const [State, Dispatch] = useReducer(ScreenReducer, InitialStateScreen)
  return (
    <ScreenContext.Provider value={{ dispatch: Dispatch, state: State }}>
      {children}
    </ScreenContext.Provider>
  )
}

export const CallScreenContext = () => useContext(ScreenContext) as IContext
