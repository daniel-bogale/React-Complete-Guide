import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
// const cartReducer = (prevState, action) => {
// defaultState:{displayCart:true}
// };

// const cartSlice = createSlice(cartReducer);

// const cartSlice = createSlice({
//   name: "cartReducer",
//   initialState: { displayCart: false },
//   reducers: {
//     toggle(preState) {
//       return { displayCart: !preState.displayCart };
//     },
//   },
// });

// const initialCartItemDetail = [
//   {
//     title: "Test Item",
//     quantity: 0,
//     total: 0,
//     description: "This is a first product - amazing!",
//     price: 6,
//     id: "p1",
//   },
//   {
//     title: "Test Item 2",
//     quantity: 0,
//     description: "This is a first product - amazing!",
//     total: 0,
//     price: 8,
//     id: "p2",
//   },
// ];

// const cartItemDetailSlice = createSlice({
//   name: "cartItemDetail",
//   initialState: initialCartItemDetail,
//   reducers: {
//     add(preState, action) {
//       let newState = JSON.parse(JSON.stringify(preState));
//       const itemId = newState.findIndex((elem) => {
//         return elem.id === action.payload;
//       });

//       const item = newState[itemId];
//       item.quantity += 1;
//       item.total += item.price;
//       return newState;
//     },

//     sub(preState, action) {
//       let newState = JSON.parse(JSON.stringify(preState));
//       const itemId = newState.findIndex((elem) => {
//         return elem.id === action.payload;
//       });

//       const item = newState[itemId];
//       item.quantity -= 1;
//       item.total -= item.price;
//       return newState;
//     },
//   },
// });

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
