import React, { forwardRef } from 'react';
import "./cssfiles/videocard.css";
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const VideoCard = forwardRef(({ movie, setSelectedMovie }, ref) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/"
  return (
    <div ref={ref} className="videocard" onClick={() => setSelectedMovie(movie)}>
      <img src={imageBaseUrl + movie.backdrop_path || movie.poster_path} alt="video " />

      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h3>{movie.title}</h3>
      <div className="movie_stats">
        <p>{movie.release_date || movie.first_air_date}</p>
        <p> {movie.vote_count}. <ThumbUpIcon /> </p>
      </div>

    </div>
  );
});

export default VideoCard;
