import { AnyAction } from 'redux';
import initialState, { PropsInitial } from './_initialState';
import at from './actionTypes';

const reducer = (state: PropsInitial = initialState, action: AnyAction): PropsInitial => {
  switch (action.type) {
    case at.GET_MOVIE_GENRES:
      return {
        ...state,
        genres: action.genres
      };
    case at.GET_MOVIE_IMG_CONFIG:
      return {
        ...state,
        img_config: action.img_config
      };
    case at.POPULATE_TOTAL_MOVIES_SHOWING:
      return {
        ...state,
        movie_list: action.movie_list
      };
    default:
      return state;
  }
};

export default reducer;
