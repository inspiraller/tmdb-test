import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';

import axios, { AxiosResponse } from 'axios';
import { ENDPOINT_MOVIE_DETAIL } from 'src/endpoints/movie_detail';
import { PropsMovieGenre } from 'src/types';

/* eslint-disable prefer-destructuring */
const api_key = process.env.api_key;

export interface PropsMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: boolean;
  budget: number;
  genres: PropsMovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type PropsAxiosGetMovieDetail = AxiosResponse<PropsMovieDetail>;

type TaxGetMovieDetail = (id: number) => Promise<PropsAxiosGetMovieDetail>;
export const axGetMovieDetail: TaxGetMovieDetail = (id) => {
  return axios({
    url: `${ENDPOINT_MOVIE_DETAIL}${id}?api_key=${api_key}&language=en-US`,
    method: 'GET'
  });
};

const movieDetailStyles = {
  margin: '10px 0 0',
  padding: '10px 0',
  borderTop: '1px dashed black'
};

export const MovieDetail: FC<{ movieDetail: PropsMovieDetail }> = ({
  movieDetail: { id, production_companies, spoken_languages }
}) => {
  return (
    <div style={movieDetailStyles}>
      <Header as="h5">Production companies</Header>
      <ul>
        {production_companies.map((item) => (
          <li key={`${id}-item-${item.name}`}>{item.name}</li>
        ))}
      </ul>
      <Header as="h5">Spoken languages</Header>
      <ul>
        {spoken_languages.map((item) => (
          <li key={`${id}-item-${item.name}`}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
