import { configureStore } from "@reduxjs/toolkit";
import navReducer from '../Nav/NavSlice'

export default configureStore({
  reducer: {
    nav: navReducer
  },
});
