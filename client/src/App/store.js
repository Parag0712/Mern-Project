import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import loadingSlice from './loadingSlice'
import updateSlice from './updateSlice'

export const store = configureStore({
    reducer: {
        auth:authSlice,
        loading:loadingSlice,
        update:updateSlice
    },
})

export default store