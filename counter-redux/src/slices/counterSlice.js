import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the counter
const initialState = {
  count: 0,
};

// Use createSlice to automatically generate action creators and action types
const counterSlice = createSlice({
  name: 'counter', // A name, used in action types
  initialState,
  reducers: {
    // The keys will be used to generate actions
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

// Destructure and export the action creators
export const { increment, decrement } = counterSlice.actions;

// Export the reducer, to be used in the store configuration
export default counterSlice.reducer;
