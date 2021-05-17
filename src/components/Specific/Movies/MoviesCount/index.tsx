import React, { FC } from 'react';
import { ContextMovies } from '../_ContextMovies';

const MoviesCount: FC = () => {
  const { movies } = React.useContext(ContextMovies);
  return movies.length ? <p>Search results: {movies.length}</p> : null;
};

export default MoviesCount;
