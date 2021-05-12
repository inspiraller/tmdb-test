import initialState, { PropsInitial } from "./_initialState";
import at from "./actionTypes";
import { AnyAction } from "redux";

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
    default:
      return state;
  }
};

export default reducer;
