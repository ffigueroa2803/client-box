import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
export interface AuthType {
    user: any,
    token: string | null,
}
const InitialState: AuthType = {
    user: {},
    token: null

}
export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: InitialState,
    reducers: {
        SetUser: (state: AuthType, { payload }: PayloadAction<any>) => ({
            ...state,
            user: payload
        }),
        SetToken: (state: AuthType, { payload }: PayloadAction<string | null>) => ({
            ...state, token: payload
        })
    },
    extraReducers: {
        [HYDRATE]: (state: any, action: PayloadAction<any>) => {
            console.log(action)
            return { ...state, ...action }
        }
    }
})

/** Funciones para usar y actualizar el store del auth */
export const { SetToken, SetUser } = AuthSlice.actions

/** Reducer para agregar al store general */
export const AuthReducer = AuthSlice.reducer