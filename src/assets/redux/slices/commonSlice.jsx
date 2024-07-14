import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "idle",
  bannerData: [],
  category: [],
  error: null,
};

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_ACCESS_KEY;

export const fetchBannerData = createAsyncThunk("fetchBannerData", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/banners?populate=*`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});
export const fetchCategoryData = createAsyncThunk(
  "fetchCategoryData",
  async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/categories?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchBannerData.fulfilled, (state, action) => {
        state.loading = "idle";
        state.bannerData = action.payload;
      })
      .addCase(fetchBannerData.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchCategoryData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.loading = "idle";
        state.category = action.payload;
      })
      .addCase(fetchCategoryData.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
  },
});

export default commonSlice.reducer;
