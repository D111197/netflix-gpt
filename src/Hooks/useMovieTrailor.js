import { useDispatch } from "react-redux";
import { addtrailorVideo } from "../Utiles/MovieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utiles/constants";
// Fetch MOVIETrailor and updatestore
const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();

  const getmovievideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addtrailorVideo(trailer));
  };

  useEffect(() => {
    getmovievideo();
  }, []);
};

export default useMovieTrailor;
