import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSearchMovie from "../hooks/useSearchMovie";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");

  const isLoading = useSelector((store) => store.app.isLoading); // changed from store.app.isLoading
  const { movieName, searchedMovie } = useSelector(
    (store) => store.searchMovie
  );
  const submitHandler = useSearchMovie({
    searchMovie,
    setSearchMovie,
    dispatch,
  });

  return (
    <>
      <div className="flex justify-center pt-6 sm:pt-[8%] w-full px-4">
        <form onSubmit={submitHandler} className="w-full max-w-2xl">
          <div className="flex justify-between shadow-lg border-2 border-[#e50914] bg-[#181818] p-1.5 sm:p-2 rounded-lg w-full">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="w-full outline-none rounded-md text-sm sm:text-lg bg-transparent text-white placeholder:text-gray-400 px-2 sm:px-3 font-sans"
              type="text"
              placeholder="Search Movies..."
              autoFocus
            />
            <button className="bg-[#e50914] hover:bg-[#b0060f] text-white rounded-md px-4 sm:px-6 py-1.5 sm:py-2 font-semibold shadow transition-colors duration-200 ml-2 text-sm sm:text-base">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      {searchedMovie ? (
        <MovieList
          title={movieName}
          searchMovie={true}
          movies={searchedMovie}
        />
      ) : (
        <h1 className="text-center text-2xl text-white mt-8 font-bebas tracking-wider">Movie Not Found!!</h1>
      )}
    </>
  );
};

export default SearchMovie;
