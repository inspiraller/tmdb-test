import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'src/store/config/rootReducer';
import { PropsMovieLight } from 'src/types';
import at from './actionTypes';

const useMovieList = () => {
  const dispatch = useDispatch();
  const acPopulateMoviesShowing = (movie_list: PropsMovieLight[]) => {
    dispatch({
      type: at.POPULATE_TOTAL_MOVIES_SHOWING,
      movie_list
    });
  };
  return {
    movie_list: useSelector((state: ApplicationState) => state.movies?.movie_list),
    acPopulateMoviesShowing
  };
};

export default useMovieList;
