import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  singleProduct: [],
  url: "",
  loading: "idle",
  error: null,
};

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_ACCESS_KEY;


export const getProductsByCategory = createAsyncThunk(
  "getProductsByCategory",
  async (categoryName) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/categories?filters[name][$eq]=${categoryName}&populate[image]=*&populate[products][populate]=*`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      localStorage.setItem("products", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    priceCalculator: (state, action) => {
      let price = action.payload.price;
      let offer = action.payload.offer;
      let finalPrice = price - (price * offer) / 100;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
      localStorage.setItem("url", JSON.stringify(state.url));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.loading = "idle";
        state.products = action.payload?.data?.[0]?.attributes?.products;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

export const { setProducts, priceCalculator, setUrl } = productSlice.actions;
