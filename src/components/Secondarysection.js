import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarysection = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative pl-12 z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.popularMovies} />
        <MovieList title={"UpComing"} movies={movies.upcomingMovies} />
        <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default Secondarysection;
