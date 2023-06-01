import { createSlice } from "@reduxjs/toolkit";

export const initializeToken = () => {
  let initialToken = localStorage.getItem("token") || "";
  let initialIsLoggedIn = !!localStorage.getItem("token") || false;

  let initialExpirationTime = localStorage.getItem("expirationTime");
  let remainingTime = initialExpirationTime
    ? calculateRemainingTime(initialExpirationTime)
    : 0;

  if (remainingTime < 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    initialToken = "";
    initialIsLoggedIn = false;
  }

  return { initialToken, initialIsLoggedIn, remainingTime };
};

const { initialToken, initialIsLoggedIn } = initializeToken();

const initialState = {
  token: initialToken,
  isLoggedIn: initialIsLoggedIn,
};

export const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
    },
    login(state, action) {
      const { token, expirationTime } = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", token);
      localStorage.setItem("expirationTime", expirationTime);
    },
  },
});

export const { login, logout } = authslice.actions;
export default authslice.reducer;
