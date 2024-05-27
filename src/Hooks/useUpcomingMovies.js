import { useEffect } from "react";
import { API_OPTIONS } from "../Utiles/constants";
import { useDispatch } from "react-redux";
import { addUpdateMovies } from "../Utiles/MovieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpdateMovies(json.results));
    console.log(json);
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
