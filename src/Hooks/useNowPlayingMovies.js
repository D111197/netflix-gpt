import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../Utiles/MovieSlice";
import { API_OPTIONS } from "../Utiles/constants";
import { useEffect } from "react";

const useNowplayingMovies = () => {
  // Fatching data and update store
  const dispatch = useDispatch();
  const getmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    getmovies();
  }, []);
};

export default useNowplayingMovies;
