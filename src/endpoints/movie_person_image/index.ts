export const ENDPOINT_MOVIE_PERSON = `https://api.themoviedb.org/3/person`;

export const getEndpointMoviePersonImg = (id: number) => `${ENDPOINT_MOVIE_PERSON}/${id}/images`;

// example: black widow  - 497698

export const mockPersonImg = {
  hello: true
};
