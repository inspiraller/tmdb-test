import { PropsImgConfig, PropsMovie, PropsMovieLight } from 'src/types';
import getCustomFullPosterPath from './getCustomFullPosterPath';

type TreduceToMoviesLight = (movies: PropsMovie[], img_config: PropsImgConfig) => PropsMovieLight[];

const reduceToMoviesLight: TreduceToMoviesLight = (movies, img_config) =>
  movies.map((item) => ({
    id: item.id,
    title: item.title,
    popularity: item.popularity,
    vote_average: item.vote_average,
    custom_full_poster_path: getCustomFullPosterPath(item.poster_path as string, img_config),
    genre_ids: item.genre_ids,
    overview: item.overview,
    release_date: item.release_date
  }));

export default reduceToMoviesLight;
