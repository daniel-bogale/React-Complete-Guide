import { createSlice } from "@reduxjs/toolkit";

let initialToken = localStorage.getItem("token") || "";
let initialIsLoggedIn = !!localStorage.getItem("token") || false;

const initialState = {
  token: initialToken,
  isLoggedIn: initialIsLoggedIn,
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authslice.actions;
export default authslice.reducer;
