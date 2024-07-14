import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loginStatus: "inactive",
  user: [],
  token: [],
  cartItems: [],
  wishlistItems: [],
  userDetails: {},
  cartTotal: 0,
  wishlistTotal: 0,
};

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_ACCESS_KEY;
const REGISTER_END_POINT = "/api/auth/local/register";
const LOGIN_END_POINT = "/api/auth/local";
const FETCH_USER = "/api/users/";
const UPLOAD_IMG = "/api/upload";

// function for registering users

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${REGISTER_END_POINT}`,
        userData
      );
      sessionStorage.setItem("session", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      throw new error();
    }
  }
);

// function for logging in users

export const loginUser = createAsyncThunk("loginUser", async (loginData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${LOGIN_END_POINT}`,
      loginData
    );
    sessionStorage.setItem("session", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw new error();
  }
});

// function for fetching user details

export const fetchUser = createAsyncThunk("fetchUser", async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${FETCH_USER}${id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new error();
  }
});

// functions for uploading user avatar


export const uploadAvatarAsync = createAsyncThunk(
  "uploadAvatarAsync",
  async ({formData,userId}) => {
    try {
      const response = await axios.post(`${BASE_URL}${UPLOAD_IMG}`, formData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log("Avatar uploaded successfully:", response.data);
      if (response.data) {
        const avatarId = response.data[0]?.id;
        const data = {
          avatar: avatarId,
        };
        try {
          const response = await axios.put(
            `${BASE_URL}${FETCH_USER}${userId}`,
            data,
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            }
          );
          console.log("Avatar uploaded successfully:", response.data);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      }
      return response.data;
    } catch (error) {
      console.error("Error uploading avatar:", error);
      throw error;
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.loginStatus = "inactive";
      state.user = [];
      state.token = [];
      sessionStorage.removeItem("session");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loginStatus = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loginStatus = "active";
      state.user = action.payload;
      state.token = action.payload.jwt;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loginStatus = "inactive";
      console.error(action.error);
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loginStatus = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginStatus = "active";
      state.user = action.payload.user;
      state.token = action.payload.jwt;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginStatus = "inactive";
      console.error(action.error);
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// Exporting the actions and reducer for userSlice

export const { actions } = userSlice;
export default userSlice.reducer;
export const { setLoginStatus, setToken, logout } = userSlice.actions;
