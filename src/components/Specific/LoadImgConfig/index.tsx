import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from 'src/store/config/rootReducer';
import at from 'src/store/data/movies/actionTypes';
import axios, { AxiosResponse } from 'axios';
import { PropsImgConfig } from 'src/types';

const { api_key } = process.env;

type TaxGetImgConfig = () => Promise<
  AxiosResponse<{ images: { base_url: string; poster_sizes: string[] } }>
>;
const axGetImgConfig: TaxGetImgConfig = () => {
  return axios({
    url: `https://api.themoviedb.org/3/configuration?api_key=${api_key}`,
    method: 'GET'
  });
};

const useMovieImgConfig = () => {
  const img_config = useSelector((state: ApplicationState) => state.movies?.img_config);
  const dispatch = useDispatch();
  const acGetImgConfig = (payload: PropsImgConfig) =>
    dispatch({
      type: at.GET_MOVIE_IMG_CONFIG,
      img_config: payload
    });

  return { img_config, acGetImgConfig };
};

const LoadImgConfig: FC = ({ children }) => {
  const { img_config, acGetImgConfig } = useMovieImgConfig();
  useEffect(() => {
    if (!img_config) {
      axGetImgConfig().then((res) => {
        const { poster_sizes, base_url } = res.data.images;
        acGetImgConfig({
          poster_sizes,
          base_url
        });
      });
    }
  }, [img_config]);

  return <>{children}</>;
};

export default LoadImgConfig;
