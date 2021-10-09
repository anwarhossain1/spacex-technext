import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataFetch = createAsyncThunk("data/dataFetch", async (payload) => {
  try {
    const { data } = await axios.get("https://api.spacexdata.com/v3/launches");
    return data;
  } catch (error) {
    return error?.response;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  extraReducers: {
    [dataFetch.pending]: (state, action) => {
      state.loading = true;
    },
    [dataFetch.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [dataFetch.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default dataSlice.reducer;
