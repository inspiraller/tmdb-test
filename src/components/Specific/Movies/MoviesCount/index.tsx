import React, { FC } from 'react';
import { ContextMovies } from '../_ContextMovies';

export const dataTestid = 'movies-count';

const MoviesCount: FC = () => {
  const { movies } = React.useContext(ContextMovies);
  return movies.length ? <p data-testid={dataTestid}>Search results: {movies.length}</p> : null;
};

export default MoviesCount;
