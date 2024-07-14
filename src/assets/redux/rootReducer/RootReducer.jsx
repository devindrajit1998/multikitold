import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slices/UserSlice";
import commonSlice from "../slices/commonSlice";
import productSlice from "../slices/ProductSlice";
import searchSlice  from "../slices/SearchSlice";

const rootreducer = combineReducers({
  userSlice: userSlice,
  commonSlice: commonSlice,
  productSlice: productSlice,
  searchSlice: searchSlice,
});

export default rootreducer;
