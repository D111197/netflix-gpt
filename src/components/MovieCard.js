import React from "react";
import { IMGCDN } from "../Utiles/constants";

const MovieCard = ({ posterpath }) => {
  return (
    <div className=" w-32 pr-4">
      <img src={IMGCDN + posterpath} alt="moviecard" />
    </div>
  );
};

export default MovieCard;
