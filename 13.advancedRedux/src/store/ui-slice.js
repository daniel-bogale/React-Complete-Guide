import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(preState) {
      preState.cartIsVisible = !preState.cartIsVisible;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
