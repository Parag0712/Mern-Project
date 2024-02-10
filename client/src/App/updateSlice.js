import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    serviceStatus:false
}

// AuthSlice
const updateSlice = createSlice({
    name: "update",
    initialState,
    reducers: {
        updateUser: (state, actions) => {
            state.status = true
        },
        updatedUser: (state, actions) => {
            state.status = false
        },
        updateService: (state, actions) => {
            state.serviceStatus = true
        },
        updatedService: (state, actions) => {
            state.serviceStatus = false
        },
        
    }
});

// Export Action 
export const { updateUser,updatedUser,updatedService,updateService } = updateSlice.actions;
// Export Reduce
export default updateSlice.reducer;
