import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_ACCESS_KEY;
// search api functions

export const dataSearch = createAsyncThunk("dataSearch", async (query) => {
  console.log("query=========>", query.query);
  try {
    const response = await axios.get(
      `${BASE_URL}/api/products?filters[$or][0][category][name][$eqi]=${query.query}&filters[$or][1][name][$containsi]=${query.query}&filters[$or][1][description][$containsi]=${query.query}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  searchQuery: [],
  searchResults: [],
  isLoading: "idle",
  error: null,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    searchResults: (state, action) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataSearch.pending, (state) => {
        state.isLoading = "loading";
        state.error = null;
      })
      .addCase(dataSearch.fulfilled, (state, action) => {
        state.isLoading = "idle";
        state.searchResults = action.payload;
      })
      .addCase(dataSearch.rejected, (state, action) => {
        state.isLoading = "idle";
        state.error = action.error.message;
      });
  },
});

export const { searchResults } = searchSlice.actions;

export default searchSlice.reducer;
