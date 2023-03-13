import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LANGUAJES } from '@Utils/etc'
import { HYDRATE } from 'next-redux-wrapper'
import { LanguajeOptions } from './entity'

export interface ScreenType {
  // Dark: boolean
  languaje: string
  Sidebar: boolean
}

const InitialState: ScreenType = {
  // Dark: false,
  languaje: LANGUAJES.ENGLISH,
  Sidebar: false,
}

export const ScreenSlice = createSlice({
  name: 'Screen',
  initialState: InitialState,
  reducers: {
    SetLanguaje: (
      state: ScreenType,
      { payload }: PayloadAction<LanguajeOptions>,
    ) => ({ ...state, languaje: payload }),
    SetSidebar: (state: ScreenType, { payload }: PayloadAction<boolean>) => ({
      ...state,
      Sidebar: payload,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<any>) => {
      console.log(action)
      return { ...state, ...action }
    },
  },
})

/* Funciones para usar y actualizar el state */
export const { SetLanguaje, SetSidebar } = ScreenSlice.actions

export const ScreenReducer = ScreenSlice.reducer
// export const SelectScreenState=(state:)=>
