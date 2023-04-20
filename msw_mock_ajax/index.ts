import { rest } from 'msw';
import { Server } from 'http';
import { setupServer, SetupServerApi } from 'msw/node';
import { PropsMovie } from '../src/types';

import { ENDPOINT_GET_GENRES, mockGenres } from '../src/endpoints/genres';
import { ENDPOINT_GET_IMG_CONFIG, mockImgConfig } from '../src/endpoints/imgConfig';

import { ENDPOINT_GET_MOVIES_SHOWING } from '../src/endpoints/movie_list';
import mockMoviesShowingPg1 from '../src/endpoints/movie_list/mockMoviesShowingPg1';
import mockMoviesShowingPg2 from '../src/endpoints/movie_list/mockMoviesShowingPg2';

export const mswImgConfig = rest.get(ENDPOINT_GET_IMG_CONFIG, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ images: mockImgConfig }));
});

export const mswGenres = rest.get(ENDPOINT_GET_GENRES, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ genres: mockGenres }));
});

const total_pages = 2;

export const mswMoviesShowing = rest.get(`${ENDPOINT_GET_MOVIES_SHOWING}`, (req, res, ctx) => {
  const page = req.url.searchParams.get('page');
  let results: PropsMovie[] | never[] = [];
  if (page === '1') {
    results = mockMoviesShowingPg1;
  } else if (page === '2') {
    results = mockMoviesShowingPg2;
  }
  console.log('mswMoviesShowing...', {page, count:  results.length})
  return res(ctx.status(200), ctx.json({ total_pages, results }));
});

export const mswAllHandlers = () => [mswGenres, mswImgConfig, mswMoviesShowing];

export const mswServerAll = () => {
  // const server = setupServer(mswGenres, mswImgConfig, mswMoviesShowing);
  const server: SetupServerApi = setupServer.apply(this, mswAllHandlers());
  return server;
};
