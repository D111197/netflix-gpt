import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSice";
const appstore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appstore;
