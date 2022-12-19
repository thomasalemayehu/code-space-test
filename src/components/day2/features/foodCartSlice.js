import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "../menuItems";
const foodCartSlice = createSlice({
  name: "foodCart",
  initialState: {
    items: menuItems,
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      const count = state.cart.filter(
        (item) => item.id === action.payload.id
      ).length;

      if (count > 0) {
        const countedItems = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        state.cart = countedItems;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },

    removeFromCart(state, action) {
      const filtered = state.cart.filter(
        (item) => item.id === action.payload.id
      );

      if (filtered.length && filtered[0].count > 1) {
        const countedItems = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        });

        state.cart = countedItems;
      } else {
        const filteredItems = state.cart.filter(
          (item) => item.id !== action.payload.id
        );

        state.cart = filteredItems;
      }
    },
  },
});

const { actions, reducer } = foodCartSlice;
export const { addToCart, removeFromCart } = actions;
export default reducer;
