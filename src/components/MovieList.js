import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, searchMovie = false }) => {
  if (!movies || !Array.isArray(movies) || movies.length === 0) return null;
  return (
    <div className="px-2 sm:px-8 mb-6">
      <h1 className={`${searchMovie ? "text-black" : "text-white font-bebas tracking-wider"} text-2xl sm:text-4xl py-2 sm:py-3 drop-shadow-lg select-none`}>{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer py-1 sm:py-2">
        <div className="flex items-center gap-1 sm:gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
