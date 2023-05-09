import { configureStore, createSlice } from "@reduxjs/toolkit";

// const cartReducer = (prevState, action) => {
// defaultState:{displayCart:true}
// };

// const cartSlice = createSlice(cartReducer);

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: { displayCart: true },
  reducers: {
    toggle(preState) {
      return { displayCart: !preState.displayCart };
    },
  },
});

const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
  },
});

cosnt 

export default store;
