import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "nav",
  initialState: {
    value: false,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    burgerNavActive: (state) => {
      state.value = true;
    },
    burgerNavInactive: (state) => {
      state.value = false;
    },
    weatherNavActive: (state) => {
      state.value = "weatherActive";
    },
    weatherNavInactive: (state) => {
      state.value = "weatherHidden";
    },
  },
});

export const {
  burgerNavActive,
  burgerNavInactive,
  weatherNavActive,
  weatherNavInactive,
} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default slice.reducer;
