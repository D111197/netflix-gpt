import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className=" p-2 py-2 flex-wrap">
        <h1 className="text-3xl text-white">{title}</h1>
        <div className=" flex overflow-x-scroll py-6">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
