export type TAt = {
  [key: string]: string;
};

export const at: TAt = {
  GET_MOVIE_GENRES: '@movies/GET_GENRES',
  GET_MOVIE_IMG_CONFIG: '@movies/GET_IMG_CONFIG',
  POPULATE_TOTAL_MOVIES_SHOWING: '@movies/POPULATE_TOTAL_MOVIES_SHOWING'
};

export default at;
