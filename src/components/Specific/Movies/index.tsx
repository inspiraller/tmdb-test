import React, { FC } from 'react';
import { ProviderMovies } from './_ContextMovies';
import MoviesTable from './MoviesTable';
import SearchMovies from './SearchMovies';

const Movies: FC = () => {
  return (
    <ProviderMovies>
      <SearchMovies />
      <MoviesTable />
    </ProviderMovies>
  );
};

export default Movies;
