import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import WrapProvider from '__tests__/__utils__/WrapProvider';

import PageMovies from 'src/pages/movies/index';
import { dataTestid as dataTestIdMoviesCount } from 'src/components/Specific/Movies/MoviesCount';

test('<PageMoves>', async () => {
  render(
    <WrapProvider>
      <PageMovies />
    </WrapProvider>
  );
  await waitFor(() => screen.getByTestId(dataTestIdMoviesCount));
  expect(screen.getByTestId(dataTestIdMoviesCount)).toHaveTextContent(/[0-9]/);
});
