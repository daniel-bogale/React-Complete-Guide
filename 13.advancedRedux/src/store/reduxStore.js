import { configureStore, createSlice } from "@reduxjs/toolkit";

// const cartReducer = (prevState, action) => {
// defaultState:{displayCart:true}
// };

// const cartSlice = createSlice(cartReducer);

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: { displayCart: false },
  reducers: {
    toggle(preState) {
      return { displayCart: !preState.displayCart };
    },
  },
});

const initialCartItemDetail = {
  title: "Test Item",
  quantity: 3,
  total: 18,
  price: 6,
};
const cartItemDetailSlice = createSlice({
  name: "cartItemDetail",
  initialState: initialCartItemDetail,
  reducers: {
    add(preState) {
      return {
        title: preState.title,
        quantity: preState.quantity + 1,
        total: preState.total + preState.price,
        price: preState.price,
      };
    },

    sub(preState) {
      return {
        title: preState.title,
        quantity: preState.quantity - 1,
        total: preState.total - preState.price,
        price: preState.price,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    cartDisplay: cartSlice.reducer,
    cartItemDetail: cartItemDetailSlice.reducer,
  },
});

export const cartDisplayDispatchAction = cartSlice.actions;
export const cartItemDispatchAction = cartItemDetailSlice.actions;

export default store;
