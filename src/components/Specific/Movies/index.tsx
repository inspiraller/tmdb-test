import React, { FC } from 'react';
import { ProviderMovies } from './_ContextMovies';
import MoviesCount from './MoviesCount';
import MoviesTable from './MoviesTable';
import MoviesPagination from './MoviesPagination';

import SearchMovies from './SearchMovies';

const Movies: FC = () => {
  return (
    <main style={{ marginBottom: '100px' }}>
      <ProviderMovies>
        <SearchMovies />
        <MoviesCount />
        <MoviesTable />
        <MoviesPagination />
      </ProviderMovies>
    </main>
  );
};

export default Movies;
