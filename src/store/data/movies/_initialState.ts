import { PropsImgConfig, PropsMovieGenre, PropsMovieLight } from 'src/types';

export interface PropsInitial {
  genres?: PropsMovieGenre[];
  img_config?: PropsImgConfig;
  movie_list?: PropsMovieLight[];
}

const initialState: PropsInitial = {};

export default initialState;
