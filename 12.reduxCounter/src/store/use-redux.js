const { createStore } = require("redux");

const defaultState = { counter: 0, showCounter: true };

const counterReducer = (prevState = defaultState, action) => {
  if (action.type === "increment") {
    return {
      counter: prevState.counter + action.value,
      showCounter: prevState.showCounter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: prevState.counter - action.value,
      showCounter: prevState.showCounter,
    };
  }

  if (action.type === "toggle") {
    return { counter: prevState.counter, showCounter: !prevState.showCounter };
  }
  return prevState;
};

const store = createStore(counterReducer);

export default store;
