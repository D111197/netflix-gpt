import { useEffect } from "react";
import { API_OPTIONS } from "../Utiles/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utiles/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    console.log(json);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
