import React from "react";
import Videotitle from "./Videotitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const Mainsection = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainmovie = movies[0];

  const { original_title, overview, id } = mainmovie;
  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default Mainsection;
