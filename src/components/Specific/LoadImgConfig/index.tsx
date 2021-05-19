import React, { FC, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import useImgConfig from 'src/store/data/movies/useImgConfig';
import { ENDPOINT_GET_IMG_CONFIG } from 'src/endpoints/imgConfig';

/* eslint-disable prefer-destructuring */
const api_key = process.env.api_key;

export type PropsAxiosGetImgConfig = AxiosResponse<{
  images: { base_url: string; poster_sizes: string[] };
}>;

type TaxGetImgConfig = () => Promise<PropsAxiosGetImgConfig>;

const axGetImgConfig: TaxGetImgConfig = () => {
  return axios({
    url: `${ENDPOINT_GET_IMG_CONFIG}?api_key=${api_key}`,
    method: 'GET'
  });
};

const LoadImgConfig: FC = ({ children }) => {
  const { img_config, acGetImgConfig } = useImgConfig();
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
