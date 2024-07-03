import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slices/userSlice";
import counterSlice from "../slices/counterSlice";
import loginSlice from "../slices/loginSlice";

const store = configureStore({
  reducer: {
    usersInfo: userReducer,
    counter: counterSlice,
    login:loginSlice,

  },
});

export default store;
