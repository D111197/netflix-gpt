import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailorVideo: null,
    popularMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpdateMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addtrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
  },
});

export const {
  addnowPlayingMovies,
  addtrailorVideo,
  addPopularMovies,
  addUpdateMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
