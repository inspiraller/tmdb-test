// Using browserify in order to use webpack 5, because webpack preprocessor 4 and 5 break with cucumber.
// So can't use relative imports. eg: src/
// Troubleshoot > paths - ensure none of these pages imports using src/

import { ENDPOINT_GET_MOVIES_SHOWING, ENDPOINT_QS } from '../../../../src/endpoints/movie_list';
import { ENDPOINT_GET_IMG_CONFIG, mockImgConfig } from '../../../../src/endpoints/imgConfig';
import { ENDPOINT_GET_GENRES, mockGenres } from '../../../../src/endpoints/genres';

import mockMoviesShowingPg1 from '../../../../src/endpoints/movie_list/mockMoviesShowingPg1';
import mockMoviesShowingPg2 from '../../../../src/endpoints/movie_list/mockMoviesShowingPg2';

import qsToJson from '../util/qsToJson';

const api_key = Cypress.env('api_key'); // overide because process.env.api_key is not recognised.

export const interceptGenres = () => {
  const label = 'getGenres';
  cy.intercept(
    {
      url: ENDPOINT_GET_GENRES,
      query: {
        api_key
      }
    },
    () => ({
      genres: mockGenres
    })
  ).as(label);
  return `@${label}`;
};

export const interceptLoadImgConfig = () => {
  const label = 'getImgConfig';
  cy.intercept(
    {
      url: ENDPOINT_GET_IMG_CONFIG,
      query: {
        api_key
      }
    },
    () => ({
      images: mockImgConfig
    })
  ).as(label);
  return `@${label}`;
};

export const interceptLoadMovies = (page: string) => {
  const label = `getMovieList${page}`;
  const query = {
    ...qsToJson(ENDPOINT_QS),
    api_key,
    page
  };
  cy.task('log', `label=${label}`);
  cy.task('log', `################## query="${JSON.stringify(query)}"`);
  cy.intercept(
    {
      url: ENDPOINT_GET_MOVIES_SHOWING,
      query
    },
    () => ({
      results: page === '1' ? mockMoviesShowingPg1 : mockMoviesShowingPg2,
      total_pages: 2
    })
  ).as(label);
  return `@${label}`;
};
