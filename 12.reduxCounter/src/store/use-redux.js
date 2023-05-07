import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (prevState = defaultState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: prevState.counter + action.value,
//       showCounter: prevState.showCounter,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       counter: prevState.counter - action.value,
//       showCounter: prevState.showCounter,
//     };
//   }

//   if (action.type === " toggle") {
//     return { counter: prevState.counter, showCounter: !prevState.showCounter };
//   }
//   return prevState;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
