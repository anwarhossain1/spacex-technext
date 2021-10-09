import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/dataSlice";

const store = configureStore({
  reducer: {
    spacexData: dataSlice,
  },
});

export default store;
