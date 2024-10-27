import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      {/* Display additional movie info if needed */}
    </div>
  );
};

{movies.map(movie => (
  <MovieCard key={movie._id} movie={movie} />
))}
import PropTypes from 'prop-types';

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    // Add other required movie props as needed
  }).isRequired,
};

export default MovieCard;

