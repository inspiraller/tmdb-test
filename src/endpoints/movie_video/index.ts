export const ENDPOINT_MOVIE_VIDEO = `https://api.themoviedb.org/3/movie/`;

export const getEndpointMovieVideo = (id: number) => `${ENDPOINT_MOVIE_VIDEO}/${id}/videos`;
