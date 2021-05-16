import { combineReducers } from 'redux';

import movies from 'src/store/data/movies/reducer';

export interface ApplicationState {
  movies?: ReturnType<typeof movies>;
}

export const rootReducer = {
  movies
};

const createRootReducer = () =>
  combineReducers<ApplicationState>({
    ...rootReducer
  });

export default createRootReducer;
