import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'src/store/config/rootReducer';
import { PropsImgConfig } from 'src/types';
import at from './actionTypes';

const useImgConfig = () => {
  const dispatch = useDispatch();
  const acGetImgConfig = (img_config: PropsImgConfig) =>
    dispatch({
      type: at.GET_MOVIE_IMG_CONFIG,
      img_config
    });
  return {
    img_config: useSelector((state: ApplicationState) => state.movies?.img_config),
    acGetImgConfig
  };
};
export default useImgConfig;
