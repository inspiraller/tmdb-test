import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';

import axios, { AxiosResponse } from 'axios';
import { getEndpointMovieCredits } from 'src/endpoints/movie_credits';
import { PropsImgConfig } from 'src/types';
import { getImageWidth } from 'src/util/getCustomFullPosterPath';

/* eslint-disable prefer-destructuring */
const api_key = process.env.api_key;

type Tcast = Array<{
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}>;

export interface PropsMovieCredit {
  id: number;
  cast: Tcast;
  crew: Array<{
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    department: string;
    job: string;
  }>;
  castPopular?: Tcast; // reduced based on main actors
}

export type PropsAxiosGetMovieCredits = AxiosResponse<PropsMovieCredit>;

type TaxGetMovieCredits = (id: number) => Promise<PropsAxiosGetMovieCredits>;
export const axGetMovieCredits: TaxGetMovieCredits = (id) => {
  return axios({
    url: `${getEndpointMovieCredits(id)}?api_key=${api_key}&language=en-US`,
    method: 'GET'
  });
};

const movieCreditsStyles = {
  margin: '10px 0 0',
  padding: '10px 0',
  borderTop: '1px dashed black'
};

const castPopularity = 5;

export const reduceCastByPopularity = (cast: PropsMovieCredit['cast']) =>
  cast.reduce((accum, cur) => {
    if (cur.popularity > castPopularity) {
      accum.push(cur);
    }
    return accum;
  }, [] as PropsMovieCredit['cast']);

export interface PropsPerson {
  id: number;
  name: string;
  popularity: number;
  file_path?: string;
  src?: string;
}

export type Tpersons = { [key: string]: PropsPerson };

export const MovieCredits: FC<{
  movieCredit: PropsMovieCredit;
  persons: Tpersons;
  img_config?: PropsImgConfig;
  maxWidth: string;
}> = ({ movieCredit: { id, cast }, persons, img_config, maxWidth }) => {
  const castPopular = reduceCastByPopularity(cast);
  const imgWidth = getImageWidth(img_config as PropsImgConfig);
  return (
    <div style={movieCreditsStyles}>
      <Header as="h5">Cast - popularity above ({castPopularity})</Header>
      <ul
        style={{
          display: 'flex',
          listStyleType: 'none',
          width: maxWidth,
          flexWrap: 'wrap'
        }}
      >
        {castPopular.map((item) => (
          <li
            key={`${id}-item-${item.name}`}
            style={{ width: `${imgWidth + 60}px`, margin: '10px' }}
          >
            {persons[item.id]?.src && (
              <img
                src={persons[item.id].src}
                alt={item.name}
                style={{ width: `${imgWidth}px`, display: 'block' }}
              />
            )}
            <strong>{item.character}</strong><br />({item.name})
          </li>
        ))}
      </ul>
      <p>Total cast count: {cast.length}</p>
    </div>
  );
};
