import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  totalAmount: 0,
  totalQuantity: 0,
  loading: "idle",
  error: null,
};

export const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cartData = action.payload;
      state.totalQuantity = state.cartData?.length;
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartData?.find(
        (currentItem) => currentItem.id === item.id
      );

      if (!existingItem) {
        state.cartData?.push({ ...item, inCart: 1 });
      } else {
        state.cartData = state.cartData?.map((currentItem) =>
          currentItem.id === item.id
            ? { ...currentItem, inCart: currentItem.inCart + 1 }
            : currentItem
        );
      }
      state.totalQuantity = state.cartData?.length;
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    removeSingleItem: (state, action) => {
      const itemId = action.payload;
      const filterCart = state.cartData?.filter((items) => items.id !== itemId);
      state.cartData = filterCart;
      state.totalQuantity = state.cartData?.length;
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
  },
  extraReducers: (builder) => {},
});

export default CartSlice.reducer;

export const { addToCart, updateCart, removeSingleItem } = CartSlice.actions;
