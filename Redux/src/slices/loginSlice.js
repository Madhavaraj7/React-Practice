import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLogedIn = true;
    },
    logout: (state) => {
      state.isLogedIn = false;
    },
    
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
