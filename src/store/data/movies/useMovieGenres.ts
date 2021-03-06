import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'src/store/config/rootReducer';
import { PropsMovieGenre } from 'src/types';
import at from './actionTypes';

const useMovieGenres = () => {
  const dispatch = useDispatch();
  const acGetGenres = (genres: PropsMovieGenre[]) => {
    dispatch({
      type: at.GET_MOVIE_GENRES,
      genres
    });
  };
  return { genres: useSelector((state: ApplicationState) => state?.movies?.genres), acGetGenres };
};

export default useMovieGenres;
