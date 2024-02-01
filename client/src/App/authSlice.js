import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  avatarUrl:""
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
    },
    updateAvatar:(state,actions)=>{
      state.avatarUrl =  actions.payload.avatarUrl
    }
  }
})


// Export Action 
export const { login, logout,updateAvatar } = authSlice.actions;
// Export Reduce
export default authSlice.reducer;
