import { rest } from 'msw';
import { ENDPOINT_GET_MOVIES_SHOWING } from 'src/components/Specific/LoadAllMoviesShowing';
import { ENDPOINT_GET_IMG_CONFIG } from 'src/components/Specific/LoadImgConfig';
import { ENDPOINT_GET_GENRES } from 'src/components/Specific/LoadMovieGenres';

import mockGenres from './_mockGenres';
import mockImgConfig from './_mockImgConfig';
import mockMoviesShowing from './_mockMoviesShowing';

const sRegAnyQs = '(\\?[\\w\\W]*)?';

export const mswImgConfig = rest.get(
  RegExp(`${ENDPOINT_GET_IMG_CONFIG}${sRegAnyQs}`),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ images: mockImgConfig }));
  }
);

export const mswGenres = rest.get(RegExp(`${ENDPOINT_GET_GENRES}${sRegAnyQs}`), (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ genres: mockGenres }));
});

export const mswMoviesShowing = rest.get(
  RegExp(`${ENDPOINT_GET_MOVIES_SHOWING}${sRegAnyQs}`),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ total_pages: 1, results: mockMoviesShowing }));
  }
);
