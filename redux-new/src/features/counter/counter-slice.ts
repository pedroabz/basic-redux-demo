
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // we can "modify" the state directly. The immutability is handled under the hood
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;