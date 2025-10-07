import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";


const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies || !Array.isArray(movies) || movies.length < 5) return null;

  const { overview, id, title } = movies[3];
  return (
    <div className="relative w-full h-[60vw] min-h-[340px] max-h-[700px] flex items-center justify-start overflow-hidden rounded-lg shadow-lg">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <VideoBackground movieId={id} />
        {/* Overlay for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      {/* Title and overview - vertically centered, left aligned */}
  <div className="relative z-10 p-6 sm:p-12 max-w-2xl flex flex-col justify-start h-full -mt-8 sm:mt-4">
        <VideoTitle title={title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
