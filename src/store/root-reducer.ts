import { combineReducers } from '@reduxjs/toolkit'
import { ScreenReducer } from '@Store/screen/ScreenSlicer'
import { AuthReducer } from '@Store/auth/AuthSlice'
export const RootReducer = combineReducers({
  Screen: ScreenReducer,
  Auth: AuthReducer
})
