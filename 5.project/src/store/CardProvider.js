import { useReducer } from "react";

import CartContext from "./cart_context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  return defaultCartState;
};

const CardProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromHandler = (id) => {};
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CardProvider;
