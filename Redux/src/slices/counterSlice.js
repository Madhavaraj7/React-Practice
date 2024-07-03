// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    direction: 'increment', // 'increment' or 'decrement'
  },
  reducers: {
    increment: (state) => {
      if (state.value < 10) {
        state.value += 1;
        if (state.value === 10) {
          state.direction = 'decrement';
        }
      }
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
        if (state.value === 0) {
          state.direction = 'increment';
        }
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
