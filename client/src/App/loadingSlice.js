import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: true,
}

const loadingSlice = createSlice({
    name: "loadingSlice",
    initialState,
    reducers: {
        loadingStart: (state, action) => {
            state.loading = true
        },
        loadingStop: (state, action) => {
            state.loading = false
        }
    }
})

export const { loadingStart, loadingStop } = loadingSlice.actions
export default loadingSlice.reducer;