import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(preState, action) {
      const addedItem = action.payload;

      const existingItem = preState.items.find((item) => {
        return item.itemId === addedItem.itemId;
      });
      if (!existingItem) {
        preState.items.push({
          title: addedItem.title,
          itemId: addedItem.itemId,
          price: addedItem.price,
          quantity: 1,
          totalPrice: addedItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      }
      preState.totalQuantity += 1;
    },
    removeItemFromCart(preState, action) {
      const itemId = action.payload;

      const existingItem = preState.items.find(
        (item) => item.itemId === itemId
      );

      if (existingItem.quantity === 1) {
        preState.items = preState.items.filter(
          (item) => item.itemId !== itemId
        );
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
      preState.totalQuantity -= 1;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
