import React from "react";
import { TMDB_Poster } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setOpen,getId } from "../redux/movieSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };
  if (!posterPath) {
    return null;
  }
  return (
    <div
      className="w-32 sm:w-48 pr-1 sm:pr-2 cursor-pointer transition-transform duration-200 hover:scale-105 hover:z-10 relative group"
      onClick={handleOpen}
    >
      <img
        src={`${TMDB_Poster}/${posterPath}`}
        alt="movie poster"
        className="rounded-lg shadow-netflix group-hover:shadow-2xl group-hover:brightness-110 group-hover:contrast-125 object-cover aspect-[2/3] w-full"
        draggable="false"
      />
    </div>
  );
};

export default MovieCard;
