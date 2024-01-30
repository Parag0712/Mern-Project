import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
}

// AuthSlice
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.status = true;
      state.userData = actions.payload.userData
    },
    logout: (state, actions) => {
      state.status = false;
      state.userData = null
    }
  }
})


// Export Action 
export const { login, logout } = authSlice.actions;
// Export Reduce
export default authSlice.reducer;
