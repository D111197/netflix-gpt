import React, { useEffect } from "react";
import Header from "./Header";
import useNowplayingMovies from "../Hooks/useNowPlayingMovies";
import Mainsection from "./Mainsection";
import Secondarysection from "./Secondarysection";

const Browse = () => {
  useNowplayingMovies();
  return (
    <div>
      <Header />
      <Mainsection />
      <Secondarysection />
    </div>
  );
};

export default Browse;
