import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
};
const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const { login, logout } = authslice.actions;
export default authslice.reducer;
