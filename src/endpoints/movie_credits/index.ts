import { ENDPOINT_MOVIE_DETAIL } from '../movie_detail';

export const getEndpointMovieCredits = (id: number) => `${ENDPOINT_MOVIE_DETAIL}${id}/credits`;

export const mockMovieCredits = {
  hello: true
};
