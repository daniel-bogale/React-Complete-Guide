import { useReducer } from "react";

import CartContext from "./cart_context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};
const cartReducer = (preState, action) => {
  if (action.type === "ADD") {
    const updatedItems = preState.items.concat(action.item);
    const updatedTotalAmount =
      preState.totalAmount + action.item.price * action.item.amount;
    return {
      updatedItems: updatedItems,
      updatedTotalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
  }
  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
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
