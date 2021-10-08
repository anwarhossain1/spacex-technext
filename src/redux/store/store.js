import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    spacexData: {},
  },
});

export default store;
