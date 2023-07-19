import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isConnected: false,
    user: null
  },
  reducers: {
    setUser(state, action){
      state.isConnected = true
      state.user = action.payload
    },
    removeUser(state){
      state.isConnected = false;
      state.user = null
    },
  }
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;