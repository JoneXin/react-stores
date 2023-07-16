import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 写异步的方式
export const addCountAsync = createAsyncThunk(
  "count",
  async (count: number) => {
    return await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(count);
      }, 2000);
    });
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incremented: (state, { payload }) => {
      state.count += payload.count;
    },
    decremented: (state, { payload }) => {
      state.count -= payload.count;
    },
  },
  // 异步结束
  extraReducers: (builder) => {
    builder.addCase(addCountAsync.fulfilled, (state, { payload }) => {
      if (payload !== undefined) {
        state.count += payload;
      }
    });
  },
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;
