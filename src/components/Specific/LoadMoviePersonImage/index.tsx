import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';

import axios, { AxiosResponse } from 'axios';
import { getEndpointMoviePersonImg } from 'src/endpoints/movie_person_image';

/* eslint-disable prefer-destructuring */
const api_key = process.env.api_key;

export interface PropsMoviePersonImg {
  id: number;
  profiles: Array<{
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: null;
    vote_average: number;
    vote_count: number;
    width: number;
  }>;
}

export type PropsAxiosGetMoviePersonImg = AxiosResponse<PropsMoviePersonImg>;

type TaxGetMoviePersonImg = (id: number) => Promise<PropsAxiosGetMoviePersonImg>;
export const axGetMoviePersonImg: TaxGetMoviePersonImg = (person_id) => {
  return axios({
    url: `${getEndpointMoviePersonImg(person_id)}?api_key=${api_key}&language=en-US`,
    method: 'GET'
  });
};

// export const PersonImage: FC<{ data: PropsMoviePersonImg; name: string }> = ({
//   data: { id, profiles },
//   name
// }) => {
//   const { file_path } = profiles[0];
//   return <img data-id={id} src={file_path} alt={name} style={{ width: '200px' }} />;
// };
