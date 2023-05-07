const { createStore } = require("redux");

const counterReducer = (prevState = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: prevState.counter + 1 };
  } else if (action.type === "decrement") {
    return { counter: prevState.counter - 1 };
  }
  return prevState;
};

const store = createStore(counterReducer);

export default store;
