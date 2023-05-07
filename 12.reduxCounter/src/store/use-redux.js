import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

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
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
