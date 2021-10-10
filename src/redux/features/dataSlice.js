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
    datas: [],
    search: "",
    filter: "",
  },
  reducers: {
    search: (state, action) => {
      console.log(action.payload);
      state.search = action.payload;
    },
    filter: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [dataFetch.pending]: (state, action) => {
      state.loading = true;
    },
    [dataFetch.fulfilled]: (state, action) => {
      state.datas = action.payload;
      state.loading = false;
    },
    [dataFetch.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { search, filter } = dataSlice.actions;

export default dataSlice.reducer;
