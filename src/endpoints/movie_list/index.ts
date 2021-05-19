export const ENDPOINT_GET_MOVIES_SHOWING = `https://api.themoviedb.org/3/movie/now_playing`;

/* eslint-disable prefer-destructuring */
const api_key = process.env.api_key;
export const ENDPOINT_QS = `?language=en-US&api_key=${api_key}`;
