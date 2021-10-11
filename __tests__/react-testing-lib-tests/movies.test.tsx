import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import WrapProvider from '__tests__/__utils__/WrapProvider';

import PageMovies from 'src/pages/movies/index';
import { dataTestid as dataTestIdMoviesCount } from 'src/components/Specific/Movies/MoviesCount';
import { dataTestid as dataTestidDropdown } from 'src/components/Specific/Movies/SearchMovies/DropdownMovieGenres';

describe('<PageMovies>', () => {
  beforeAll(async () => {
    render(
      <WrapProvider>
        <PageMovies />
      </WrapProvider>
    );
    await waitFor(
      () => screen.getByTestId(dataTestIdMoviesCount) && screen.getByTestId(dataTestidDropdown)
    );
  });
  describe('onload', () => {
    it('Should have search results', () => {
      expect(screen.getByTestId(dataTestIdMoviesCount)).toHaveTextContent(/ [1-9]/);
    });
  });
  describe('dropdown and search', () => {
    it('Should select dropdown and ...', () => {
      const $dropdown = screen.getByTestId(dataTestidDropdown);
      userEvent.selectOptions(screen.getByTestId(dataTestidDropdown), '28');
      expect((screen.getByLabelText('Action') as HTMLOptionElement).selected).toBeTruthy();
    });
  });
});
