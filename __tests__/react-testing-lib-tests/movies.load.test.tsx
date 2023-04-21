import React from 'react';
import { render, fireEvent, waitFor, screen, within, configure } from '@testing-library/react';

// import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

import WrapProvider from '__tests__/__utils__/WrapProvider';

import PageMovies from 'src/pages/movies/index';
// import { dataTestid as dataTestIdMoviesCount } from 'src/components/Specific/Movies/MoviesCount';
// import {
//   dataTestid as dataTestidDropdown,
//   dataTestLabel as dataTestLabelDropdown
// } from 'src/components/Specific/Movies/SearchMovies/DropdownMovieGenres';

import { mswServerAll } from 'msw_mock_ajax/index';

const server = mswServerAll();

const renderWait = async () => {
  const result = render(
    <WrapProvider>
      <PageMovies />
    </WrapProvider>
  );

  await waitFor(
    () => screen.getByText(/search results: 40/i) // screen.getByTestId(dataTestIdMoviesCount) && screen.getByTestId(dataTestidDropdown)
  );
  return result;
};

describe('<PageMovies>', () => {
  beforeAll(async () => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });
  beforeEach(() => {
    // https://timdeschryver.dev/blog/making-sure-youre-using-the-correct-query#tips-to-find-the-correct-query
    configure({
      throwSuggestions: true
    });
  });
  describe('onload', () => {
    it('Should have search results', async () => {
      await renderWait();
      expect(screen.getByText(/search results: 40/i));
    });
  });
  // awaitings - answer for https://stackoverflow.com/questions/69527128/how-to-test-parent-child-relationship-in-react-testing-library
});
