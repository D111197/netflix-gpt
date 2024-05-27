import React, { useEffect } from "react";
import Header from "./Header";
import useNowplayingMovies from "../Hooks/useNowPlayingMovies";
import Mainsection from "./Mainsection";
import Secondarysection from "./Secondarysection";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

const Browse = () => {
  useNowplayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <Mainsection />
      <Secondarysection />
    </div>
  );
};

export default Browse;
