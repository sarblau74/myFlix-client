import React from 'react';

{movies.map(movie => (
  <MovieCard key={movie._id} movie={movie} />
))}
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    // Add other required movie props as needed
  }).isRequired,
};

export default MovieCard;
