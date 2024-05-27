import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSice";
import movieReducer from "./MovieSlice";
const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appstore;
