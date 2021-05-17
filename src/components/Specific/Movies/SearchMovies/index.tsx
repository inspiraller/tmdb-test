import React, { FC, useCallback, useContext, useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import { PropsImgConfig, PropsMovie, PropsMovieLight } from 'src/types';
import { Button, Form, Input, InputOnChangeData } from 'semantic-ui-react';

import { ThandleDropdownChange } from 'src/components/Common/Dropdown';
import text from 'src/util/text';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/store/config/rootReducer';
import DropdownMovieGenres from './DropdownMovieGenres';
import { ContextMovies } from '../_ContextMovies';

/* eslint-disable prefer-destructuring */
const api_key = process.env.api_key;

type ThandleInputChange = (_: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;

type TaxSearchMovies = (props?: {
  genres?: string;
  voteAvg?: string;
}) => Promise<AxiosResponse<{ page: number; results: PropsMovie[] }>>;

const axSearchMovies: TaxSearchMovies = (props) => {
  const { genres, voteAvg } = props || {};
  const with_genres = genres ? `&with_genres=${genres}` : '';
  let vote_average = '';
  if (voteAvg) {
    const intVoteAvg = parseInt(voteAvg, 10);
    if (intVoteAvg) {
      vote_average = `&vote_average.gte=${intVoteAvg}`;
    }
  }
  return axios({
    // all movies
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}${with_genres}${vote_average}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=10`,
    // movies now playing...
    // url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=10`,
    method: 'GET'
  });
};

const ButtonSearchMovies: FC = () => {
  const { setMovies } = useContext(ContextMovies);
  const [genres, setGenres] = useState<string[]>([]);
  const [voteAvg, setVoteAvg] = useState<string>('');

  const img_config = useSelector((state: ApplicationState) => state.movies?.img_config);
  const getCustomFullPosterPath = (poster_path: string) => {
    const { base_url, poster_sizes } = img_config as PropsImgConfig;
    const posterSizeSmall = poster_sizes[0];
    const custom_full_poster_path = `${base_url}/${posterSizeSmall}${poster_path}`;
    return custom_full_poster_path;
  };

  const handleSearchMovies = useCallback(() => {
    axSearchMovies({ genres: genres.join(','), voteAvg }).then((res) => {
      const { results } = res.data;
      const reduced: PropsMovieLight[] = results.map((item) => ({
        id: item.id,
        title: item.title,
        popularity: item.popularity,
        vote_average: item.vote_average,
        custom_full_poster_path: getCustomFullPosterPath(item.poster_path)
      }));
      setMovies(reduced);
    });
  }, [genres, voteAvg]);

  const handleDropdownChange: ThandleDropdownChange = (_, data) => {
    setGenres(data.value as string[]);
  };
  const handleVoteChange: ThandleInputChange = (_, data) => {
    setVoteAvg(data.value);
  };
  return (
    <Form>
      <Form.Group>
        <DropdownMovieGenres
          {...{ handleChange: handleDropdownChange }}
          style={{ width: '400px' }}
        />
        <Input
          label={{ basic: true, content: text('vote avg') }}
          labelPosition="right"
          placeholder={text('avg')}
          style={{ width: '54px' }}
          onChange={handleVoteChange}
        />
        <Button style={{ marginLeft: '80px' }} primary onClick={handleSearchMovies}>
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ButtonSearchMovies;
