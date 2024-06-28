import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slices/userSlice";
import counterSlice from "../slices/counterSlice";
// import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    usersInfo: userReducer,
    counter: counterSlice,
  },
});

export default store;
