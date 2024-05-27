import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailorVideo: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addtrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
  },
});

export const { addnowPlayingMovies, addtrailorVideo } = movieSlice.actions;

export default movieSlice.reducer;
