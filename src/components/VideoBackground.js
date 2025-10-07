import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);
  useMovieById(movieId);

  if (!trailerMovie?.key) return null;

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className={`${bool ? "w-full h-auto" : "w-full aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground
