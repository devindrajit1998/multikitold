import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "../redux/rootReducer/RootReducer";

const store = configureStore({
  reducer: rootreducer,
});

export default store;
